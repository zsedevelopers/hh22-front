import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import UserDto from 'src/app/core/models/common/user-dto';
import CreateIdentityCardDto from 'src/app/core/models/digital documents/create-identity-card-dto';
import CreatePassportDto from 'src/app/core/models/digital documents/create-passport-dto';
import { Sex } from 'src/app/core/models/digital documents/enums/sex';
import WalletDto from 'src/app/core/models/digital documents/wallet-dto';
import { AuthService } from 'src/app/core/services/auth.service';
import { DigitalDocumentService } from 'src/app/core/services/digital-document.service';

@Component({
  selector: 'app-add-passport-form',
  templateUrl: './add-passport-form.component.html',
  styleUrls: ['./add-passport-form.component.scss'],
})
export class AddPassportFormComponent implements OnInit {
  constructor(
    private digitalDocumentService: DigitalDocumentService,
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  userData: UserDto | null = null;
  wallet: WalletDto | null = null;

  private imageUrlRegex = '(http(s?):)([/|.|w|s|-])*.(?:jpg|png)';
  private peselRegex = '^[d]{11}$';

  addPassportForm = this.fb.group({
    picture: this.fb.control('', [
      Validators.required,
      Validators.pattern(this.imageUrlRegex),
    ]),
    frontImageUrl: this.fb.control('', [
      Validators.required,
      Validators.pattern(this.imageUrlRegex),
    ]),
    backImageUrl: this.fb.control('', [
      Validators.required,
      Validators.pattern(this.imageUrlRegex),
    ]),
    firstName: this.fb.control('', Validators.required),
    secondName: this.fb.control(''),
    surname: this.fb.control('', Validators.required),
    nationality: this.fb.control('', Validators.required),
    sex: this.fb.control('MAN', Validators.required),
    documentNumber: this.fb.control('', Validators.required),
    expirationDate: this.fb.control(new Date(Date.now()), Validators.required),
    dateOfBirth: this.fb.control(new Date(Date.now()), Validators.required),
    placeOfBirth: this.fb.control('', Validators.required),
    pesel: this.fb.control('', [
      Validators.required,
      Validators.pattern(this.peselRegex),
    ]),
    issuingAuthority: this.fb.control('', Validators.required),
    issueDate: this.fb.control(new Date(Date.now()), Validators.required),
  });

  ngOnInit(): void {
    this.authService.getUserData().subscribe((data) => {
      this.userData = data;
    });
    this.digitalDocumentService.getWallet().subscribe((data) => {
      this.wallet = data;
    });
  }

  submitForm() {
    if (!this.authService.isLogged()) {
      console.warn('you have to log in');
      return;
    }
    if (this.addPassportForm.invalid) {
      console.warn('invalid form data');
      return;
    }

    const formData = this.addPassportForm.value;

    const data: CreatePassportDto = {
      picture: formData.picture!,
      frontOfDocumentImage: formData.frontImageUrl!,
      backOfDocumentImage: formData.backImageUrl!,
      firstName: formData.firstName!,
      secondName: formData.secondName!,
      surname: formData.surname!,
      nationality: formData.nationality!,
      documentNumber: formData.documentNumber!,
      expiryDate: formData.expirationDate!,
      birthDate: formData.dateOfBirth!,
      sex: Sex.MAN,
      placeOfBirth: formData.placeOfBirth!,
      pesel: formData.pesel!,
      issuingAuthority: formData.issuingAuthority!,
      dateOfIssue: formData.issueDate!,
    };
    switch (formData.sex) {
      case 'MAN':
        data.sex = Sex.MAN;
        break;
      case 'WOMAN':
        data.sex = Sex.WOMAN;
        break;
    }
    this.addPassportWithWalletCheck(data);
  }

  dummySubmit() {
    if (!this.authService.isLogged()) {
      console.warn('you have to log in');
      return;
    }
    const data: CreatePassportDto = {
      picture:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Prezydent_Rzeczypospolitej_Polskiej_Andrzej_Duda.jpg/220px-Prezydent_Rzeczypospolitej_Polskiej_Andrzej_Duda.jpg',
      frontOfDocumentImage: 'a',
      backOfDocumentImage: 'a',
      firstName: this.userData?.firstName!,
      secondName: 'dobrze',
      surname: this.userData?.surname!,
      nationality: 'arabia saudyjska',
      documentNumber: '123456',
      expiryDate: new Date(Date.now()),
      birthDate: new Date(Date.now()),
      sex: Sex.MAN,
      placeOfBirth: 'mozambik',
      pesel: this.userData?.pesel!,
      issuingAuthority: 'IDzD',
      dateOfIssue: new Date(Date.now()),
    };
    // this.digitalDocumentService.createWallet().subscribe(() => {
    // });
    this.addPassportWithWalletCheck(data);
  }

  private addPassportWithWalletCheck(data: CreatePassportDto) {
    if (this.wallet != null) {
      this.digitalDocumentService.addPassport(data).subscribe(() => {
        this.router.navigate(['/wallet/showWallet']);
      });
    } else {
      this.digitalDocumentService.createWallet().subscribe(() => {
        this.digitalDocumentService.addPassport(data).subscribe(() => {
          this.router.navigate(['/wallet/showWallet']);
        });
      });
    }
  }
}
