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
        this.identityCard.birthDate = new Date(this.identityCard.birthDate);
        this.identityCard.dateOfIssue = new Date(this.identityCard.dateOfIssue);
      }
    });
  }

  get birthDate() {
    return this.identityCard?.birthDate.toLocaleString().split(',')[0]!;
  }
  get issueDate() {
    return this.identityCard?.dateOfIssue.toLocaleString().split(',')[0]!;
  }
}
