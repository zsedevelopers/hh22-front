import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import CreateIdentityCardDto from 'src/app/core/models/digital documents/create-identity-card-dto';
import { Sex } from 'src/app/core/models/digital documents/enums/sex';
import { AuthService } from 'src/app/core/services/auth.service';
import { DigitalDocumentService } from 'src/app/core/services/digital-document.service';

@Component({
  selector: 'app-add-identity-card-form',
  templateUrl: './add-identity-card-form.component.html',
  styleUrls: ['./add-identity-card-form.component.scss'],
})
export class AddIdentityCardFormComponent implements OnInit {
  constructor(
    private digitalDocumentService: DigitalDocumentService,
    private fb: FormBuilder,
    private authService: AuthService
  ) {}

  addIdForm = this.fb.group({
    frontImageUrl: this.fb.control('', Validators.required),
    backImageUrl: this.fb.control('', Validators.required),
    firstName: this.fb.control('', Validators.required),
    secondName: this.fb.control(''),
    surname: this.fb.control('', Validators.required),
    nationality: this.fb.control('', Validators.required),
    sex: this.fb.control('MAN', Validators.required),
    documentNumber: this.fb.control('', Validators.required),
    expirationDate: this.fb.control(new Date(Date.now()), Validators.required),
    dateOfBirth: this.fb.control(new Date(Date.now()), Validators.required),
    CAN: this.fb.control(''),
    placeOfBirth: this.fb.control('', Validators.required),
    pesel: this.fb.control('', Validators.required),
    familyName: this.fb.control('', Validators.required),
    motherName: this.fb.control('', Validators.required),
    fatherName: this.fb.control('', Validators.required),
    issuingAuthority: this.fb.control('', Validators.required),
    issueDate: this.fb.control(new Date(Date.now()), Validators.required),
  });

  ngOnInit(): void {}

  submitForm() {
    if (!this.authService.isLogged()) {
      console.warn('you have to log in');
      return;
    }
    if (this.addIdForm.invalid) {
      console.warn('invalid form data');
    }

    const formData = this.addIdForm.value;

    const data: CreateIdentityCardDto = {
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
      CAN: formData.CAN!,
      placeOfBirth: formData.placeOfBirth!,
      pesel: formData.pesel!,
      familyName: formData.familyName!,
      motherName: formData.motherName!,
      fatherName: formData.fatherName!,
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
    this.addIdWithWalletCheck(data);
  }

  dummySubmit() {
    if (!this.authService.isLogged()) {
      console.warn('you have to log in');
      return;
    }
    const data: CreateIdentityCardDto = {
      frontOfDocumentImage: 'a',
      backOfDocumentImage: 'a',
      firstName: this.authService.userData?.firstName!,
      secondName: 'dobrze',
      surname: this.authService.userData?.surname!,
      nationality: 'arabia saudyjska',
      documentNumber: '123456',
      expiryDate: new Date(Date.now()),
      birthDate: new Date(Date.now()),
      sex: Sex.MAN,
      CAN: null,
      placeOfBirth: 'mozambik',
      pesel: this.authService.userData?.pesel!,
      familyName: this.authService.userData?.surname!,
      motherName: 'ewa',
      fatherName: 'adam',
      issuingAuthority: 'IDzD',
      dateOfIssue: new Date(Date.now()),
    };
    this.addIdWithWalletCheck(data);
  }
  addIdWithWalletCheck(data: CreateIdentityCardDto) {
    if (this.digitalDocumentService.wallet != null) {
      this.digitalDocumentService.addIdentityCard(data).subscribe();
    } else {
      this.digitalDocumentService.createWallet().subscribe(() => {
        this.digitalDocumentService.addIdentityCard(data).subscribe();
      });
    }
  }
}
