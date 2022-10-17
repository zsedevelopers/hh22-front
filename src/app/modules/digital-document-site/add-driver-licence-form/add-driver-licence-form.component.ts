import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import UserDto from 'src/app/core/models/common/user-dto';
import CreateDriverLicenceDto from 'src/app/core/models/digital documents/create-driver-licence-dto';
import CreateIdentityCardDto from 'src/app/core/models/digital documents/create-identity-card-dto';
import { Sex } from 'src/app/core/models/digital documents/enums/sex';
import { AuthService } from 'src/app/core/services/auth.service';
import { DigitalDocumentService } from 'src/app/core/services/digital-document.service';

@Component({
  selector: 'app-add-driver-licence-form',
  templateUrl: './add-driver-licence-form.component.html',
  styleUrls: ['./add-driver-licence-form.component.scss'],
})
export class AddDriverLicenceFormComponent implements OnInit {
  userData: UserDto | null = null;

  addDriverLicenceForm = this.fb.group({
    pictureUrl: this.fb.control('', Validators.required),
    frontImageUrl: this.fb.control('', Validators.required),
    backImageUrl: this.fb.control('', Validators.required),
    firstName: this.fb.control('', Validators.required),
    secondName: this.fb.control('', Validators.required),
    surname: this.fb.control('', Validators.required),
    documentNumber: this.fb.control('', Validators.required),
    dateOfBirth: this.fb.control(new Date(Date.now()), Validators.required),
    placeOfBirth: this.fb.control('', Validators.required),
    issuingAuthority: this.fb.control('', Validators.required),
    issueDate: this.fb.control(new Date(Date.now()), Validators.required),
    permitions: [],
  });

  constructor(
    private digitalDocumentService: DigitalDocumentService,
    private fb: FormBuilder,
    private authService: AuthService
  ) {
    this.authService.getUserData().subscribe((data) => {
      this.userData = data;
    });
  }

  ngOnInit(): void {}

  submitForm() {
    if (!this.authService.isLogged()) {
      console.warn('you have to log in');
      return;
    }
    if (this.addDriverLicenceForm.invalid) {
      console.warn('invalid form data');
    }

    const formData = this.addDriverLicenceForm.value;

    const data: CreateDriverLicenceDto = {
      picture: formData.pictureUrl!,
      frontOfDocumentImage: formData.frontImageUrl!,
      backOfDocumentImage: formData.backImageUrl!,
      firstName: formData.firstName!,
      secondName: formData.secondName!,
      surname: formData.surname!,
      documentNumber: formData.documentNumber!,
      birthDate: formData.dateOfBirth!,
      placeOfBirth: formData.placeOfBirth!,
      issuingAuthority: formData.issuingAuthority!,
      dateOfIssue: formData.issueDate!,
      permitions: [],
    };

    this.addDriverLicenceWithWalletCheck(data);
  }

  dummySubmit() {
    const data: CreateDriverLicenceDto = {
      picture: 'a',
      frontOfDocumentImage: 'a',
      backOfDocumentImage: 'a',
      firstName: 'a',
      secondName: 'a',
      surname: 'a',
      documentNumber: 'a',
      birthDate: new Date(Date.now()),
      placeOfBirth: 'a',
      issuingAuthority: 'a',
      dateOfIssue: new Date(Date.now()),
      permitions: [],
    };
    this.digitalDocumentService.addDriverLicence(data).subscribe()
  }

  addDriverLicenceWithWalletCheck(data: CreateDriverLicenceDto) {
    if (this.digitalDocumentService.wallet != null) {
      this.digitalDocumentService.addDriverLicence(data).subscribe();
    } else {
      this.digitalDocumentService.createWallet().subscribe(() => {
        this.digitalDocumentService.addDriverLicence(data).subscribe();
      });
    }
  }
}
