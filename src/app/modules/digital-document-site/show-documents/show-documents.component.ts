import { Component, OnInit } from '@angular/core';
import IdentityCardDto from 'src/app/core/models/digital documents/identity-card-dto';
import WalletDto from 'src/app/core/models/digital documents/wallet-dto';
import { DigitalDocumentService } from 'src/app/core/services/digital-document.service';

@Component({
  selector: 'app-show-documents',
  templateUrl: './show-documents.component.html',
  styleUrls: ['./show-documents.component.scss'],
})
export class ShowDocumentsComponent implements OnInit {
  hasWallet: boolean = false;
  wallet: WalletDto | null = null;

  identityCard:IdentityCardDto|null = null
  constructor(private documentService: DigitalDocumentService) {}

  ngOnInit(): void {
    this.documentService.getWallet().subscribe((data) => {
      if (data != null) {
        this.wallet = data
        this.hasWallet = true;
        console.log(data);
      }
    });
  }
}
