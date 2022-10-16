import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import CreateIdentityCardDto from 'src/app/core/models/digital documents/create-identity-card-dto';
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
    private authService:AuthService
  ) {}

  addIdForm = this.fb.group({
    frontImageUrl: this.fb.control('', Validators.required),
    backImageUrl: this.fb.control('', Validators.required),
    firstName: this.fb.control('', Validators.required),
    secondName: this.fb.control('', Validators.required),
    surname: this.fb.control('', Validators.required),
    nationality: this.fb.control('', Validators.required),
    sex: this.fb.control('', Validators.required),
    documentNumber: this.fb.control('', Validators.required),
    expirationDate: this.fb.control('', Validators.required),
    dateOfBirth: this.fb.control('', Validators.required),
    CAN: this.fb.control(''),
    placeOfBirth: this.fb.control('', Validators.required),
    pesel: this.fb.control('', Validators.required),
    familyName: this.fb.control('', Validators.required),
    motherName: this.fb.control('', Validators.required),
    fatherName: this.fb.control('', Validators.required),
    issuingAuthority: this.fb.control('', Validators.required),
    issueDate: this.fb.control('', Validators.required),
  });

  ngOnInit(): void {}

  submitForm() {}

  dummySubmit() {
    if(!this.authService.isLogged()){
      console.warn('you have to log in')
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
      sex: 'man',
      CAN: null,
      placeOfBirth: 'mozambik',
      pesel: this.authService.userData?.pesel!,
      familyName: this.authService.userData?.surname!,
      motherName: 'ewa',
      fatherName: 'adam',
      issuingAuthority: 'IDzD',
      dateOfIssue: new Date(Date.now()),
    };
    // this.digitalDocumentService.createWallet().subscribe(() => {
    // });
    this.digitalDocumentService.addIdentityCard(data).subscribe();

  }
}
