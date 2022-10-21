import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormArray, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import UserDto from 'src/app/core/models/common/user-dto';
import CreateDriverLicenceDto from 'src/app/core/models/digital documents/create-driver-licence-dto';
import CreateIdentityCardDto from 'src/app/core/models/digital documents/create-identity-card-dto';
import { DriverLicenceType } from 'src/app/core/models/digital documents/enums/driver-licence-type';
import { Sex } from 'src/app/core/models/digital documents/enums/sex';
import PermissionDto from 'src/app/core/models/digital documents/permission-dto';
import WalletDto from 'src/app/core/models/digital documents/wallet-dto';
import { AuthService } from 'src/app/core/services/auth.service';
import { DigitalDocumentService } from 'src/app/core/services/digital-document.service';

@Component({
  selector: 'app-add-driver-licence-form',
  templateUrl: './add-driver-licence-form.component.html',
  styleUrls: ['./add-driver-licence-form.component.scss'],
})
export class AddDriverLicenceFormComponent implements OnInit {
  userData: UserDto | null = null;
  wallet: WalletDto | null = null;
  driverLicenceTypes = [
    'AM',
    'A1',
    'A2',
    'A',
    'B1',
    'B',
    'BE',
    'C',
    'C1',
    'C1E',
    'CE',
    'D',
    'D1',
    'D1E',
    'DE',
    'T',
    'TRAM',
  ];
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
    permissions: this.fb.array([]),
  });

  constructor(
    private digitalDocumentService: DigitalDocumentService,
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.authService.getUserData().subscribe((data) => {
      this.userData = data;
    });
  }

  ngOnInit(): void {
    this.digitalDocumentService
      .getWallet()
      .subscribe((data) => (this.wallet = data));
  }

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
      permissions: [],
    };

    this.permissions.controls.forEach((group) => {
      const permission: PermissionDto = {
        driverLicenceType: group.value.type,
        dateOfIssue: group.value.issueDate,
      };
      data.permissions.push(permission);
    });

    this.addDriverLicenceWithWalletCheck(data);
  }
  get permissions(): FormArray<FormGroup> {
    return this.addDriverLicenceForm.controls['permissions'] as FormArray;
  }

  addPermission() {
    this.permissions.push(
      this.fb.group({
        type: this.fb.control('', Validators.required),
        issueDate: this.fb.control(new Date(Date.now()), Validators.required),
      })
    );
  }

  deletePermission(index: number) {
    this.permissions.controls.splice(index, 1);
  }

  dummySubmit() {
    const data: CreateDriverLicenceDto = {
      picture:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Prezydent_Rzeczypospolitej_Polskiej_Andrzej_Duda.jpg/220px-Prezydent_Rzeczypospolitej_Polskiej_Andrzej_Duda.jpg',
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
      permissions: [
        {
          driverLicenceType: DriverLicenceType.A,
          dateOfIssue: new Date(Date.now()),
        },
        {
          driverLicenceType: DriverLicenceType.B,
          dateOfIssue: new Date(Date.now()),
        },
      ],
    };
    this.digitalDocumentService.addDriverLicence(data).subscribe();
  }

  addDriverLicenceWithWalletCheck(data: CreateDriverLicenceDto) {
    if (this.wallet != null) {
      this.digitalDocumentService.addDriverLicence(data).subscribe(() => {
        this.router.navigate(['/wallet/showWallet']);
      });
    } else {
      this.digitalDocumentService.createWallet().subscribe(() => {
        this.digitalDocumentService.addDriverLicence(data).subscribe(() => {
          this.router.navigate(['/civicProject/show']);
        });
      });
    }
  }
}
