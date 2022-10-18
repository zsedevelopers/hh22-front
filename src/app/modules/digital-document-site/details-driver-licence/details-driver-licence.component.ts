import { Component, OnInit } from '@angular/core';
import DriverLicenceDto from 'src/app/core/models/digital documents/driver-licence-dto';
import WalletDto from 'src/app/core/models/digital documents/wallet-dto';
import { DigitalDocumentService } from 'src/app/core/services/digital-document.service';

@Component({
  selector: 'app-details-driver-licence',
  templateUrl: './details-driver-licence.component.html',
  styleUrls: ['./details-driver-licence.component.scss'],
})
export class DetailsDriverLicenceComponent implements OnInit {
  driverLicence: DriverLicenceDto | null = null;
  wallet: WalletDto | null = null;

  constructor(private documentService: DigitalDocumentService) {}

  ngOnInit(): void {
    this.documentService.getWallet().subscribe((data) => {
      this.wallet = data;
      if (this.wallet != null) {
        this.driverLicence = this.wallet?.driverLicence;
        this.driverLicence.birthDate = new Date(this.driverLicence.birthDate);
        this.driverLicence.dateOfIssue = new Date(
          this.driverLicence.dateOfIssue
        );
      }
    });
  }
  get birthDate() {
    return this.driverLicence?.birthDate.toLocaleString().split(',')[0]!;
  }
  get issueDate() {
    return this.driverLicence?.dateOfIssue.toLocaleString().split(',')[0]!;
  }
}
