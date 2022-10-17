import { Component, OnInit } from '@angular/core';
import { DigitalDocumentService } from 'src/app/core/services/digital-document.service';

@Component({
  selector: 'app-add-document',
  templateUrl: './add-document.component.html',
  styleUrls: ['./add-document.component.scss'],
})
export class AddDocumentComponent implements OnInit {
  hasIdentityCard: boolean = false;
  hasPassport: boolean = false;

  constructor(private documentService: DigitalDocumentService) {}

  ngOnInit(): void {
    this.documentService.getWallet().subscribe((data) => {
      if(data == null){
        return;
      }
      if (data.identityCard != null) {
        this.hasIdentityCard = true;
      }
      if (data.passport != null) {
        this.hasPassport = true;
      }
    });
  }
}
