import { Component, OnInit } from '@angular/core';
import DocumentEntityDto from 'src/app/core/models/digital documents/document-entity-dto';
import DriverLicenceDto from 'src/app/core/models/digital documents/driver-licence-dto';
import { DocumentType } from 'src/app/core/models/digital documents/enums/document-type';
import IdentityCardDto from 'src/app/core/models/digital documents/identity-card-dto';
import PassportDto from 'src/app/core/models/digital documents/passport-dto';
import { DigitalDocumentService } from 'src/app/core/services/digital-document.service';

@Component({
  selector: 'app-digital-document-panel',
  templateUrl: './digital-document-panel.component.html',
  styleUrls: ['./digital-document-panel.component.scss'],
})
export class DigitalDocumentPanelComponent implements OnInit {
  identityCards: DocumentEntityDto[] = [];
  passports: DocumentEntityDto[] = [];
  drivingLicences: DocumentEntityDto[] = [];

  constructor(private documentService: DigitalDocumentService) {}

  ngOnInit(): void {
    this.documentService
      .getUnverifiedDocuments()
      .subscribe((data: DocumentEntityDto[]) => {
        data.forEach((d) => {
          console.log(d.documentType);
          switch (d.documentType) {
            case DocumentType[DocumentType.IDENTITY_CARD] as unknown as DocumentType:
              console.log('a');
              this.identityCards.push(d);
              break;
            case DocumentType[DocumentType.IDENTITY_CARD] as unknown as DocumentType:
              console.log('b');
              this.passports.push(d);
              break;
            case DocumentType[DocumentType.IDENTITY_CARD] as unknown as DocumentType:
              console.log('c');
              this.drivingLicences.push(d);
              break;
          }
        });
      });
  }
}
