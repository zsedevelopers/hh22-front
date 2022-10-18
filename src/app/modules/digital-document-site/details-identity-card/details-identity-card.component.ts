import { Component, OnInit } from '@angular/core';
import IdentityCardDto from 'src/app/core/models/digital documents/identity-card-dto';
import WalletDto from 'src/app/core/models/digital documents/wallet-dto';
import { DigitalDocumentService } from 'src/app/core/services/digital-document.service';

@Component({
  selector: 'app-details-identity-card',
  templateUrl: './details-identity-card.component.html',
  styleUrls: ['./details-identity-card.component.scss'],
})
export class DetailsIdentityCardComponent implements OnInit {
  identityCard: IdentityCardDto | null = null;
  wallet: WalletDto | null = null;

  constructor(private documentService: DigitalDocumentService) {}

  ngOnInit(): void {
    this.documentService.getWallet().subscribe((data) => {
      this.wallet = data;
      if (this.wallet != null) {
        this.identityCard = this.wallet?.identityCard;
      }
    });
  }
}
