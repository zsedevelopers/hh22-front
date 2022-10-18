import { Component, OnInit } from '@angular/core';
import PassportDto from 'src/app/core/models/digital documents/passport-dto';
import WalletDto from 'src/app/core/models/digital documents/wallet-dto';
import { DigitalDocumentService } from 'src/app/core/services/digital-document.service';

@Component({
  selector: 'app-details-passport',
  templateUrl: './details-passport.component.html',
  styleUrls: ['./details-passport.component.scss'],
})
export class DetailsPassportComponent implements OnInit {
  passport: PassportDto | null = null;
  wallet: WalletDto | null = null;

  constructor(private documentService: DigitalDocumentService) {}

  ngOnInit(): void {
    this.documentService.getWallet().subscribe((data) => {
      this.wallet = data;
      if (this.wallet != null) {
        this.passport = this.wallet?.identityCard;
      }
    });
  }
}
