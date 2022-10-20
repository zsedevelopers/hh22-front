import { Component, OnInit } from '@angular/core';
import DocumentEntityDto from 'src/app/core/models/digital documents/document-entity-dto';
import DriverLicenceDto from 'src/app/core/models/digital documents/driver-licence-dto';
import { DocumentStatus } from 'src/app/core/models/digital documents/enums/document-status';
import { DocumentType } from 'src/app/core/models/digital documents/enums/document-type';
import IdentityCardDto from 'src/app/core/models/digital documents/identity-card-dto';
import PassportDto from 'src/app/core/models/digital documents/passport-dto';
import VerifyDocumentDto from 'src/app/core/models/digital documents/verifyDocumentDto';
import { DigitalDocumentService } from 'src/app/core/services/digital-document.service';

@Component({
  selector: 'app-digital-document-panel',
  templateUrl: './digital-document-panel.component.html',
  styleUrls: ['./digital-document-panel.component.scss'],
})
export class DigitalDocumentPanelComponent implements OnInit {
  showDrivingLicences: boolean = true;
  showPassports: boolean = true;
  showIdCards: boolean = true;

  showOnlyUnverified: boolean = false;

  documents: DocumentEntityDto[] = [];
  filteredDocuments: DocumentEntityDto[] = [];

  constructor(private documentService: DigitalDocumentService) {}

  ngOnInit(): void {
    this.documents = [];
    this.documentService
      .getUnverifiedDocuments()
      .subscribe((data: DocumentEntityDto[]) => {
        this.documents.push(...data);
        this.filteredDocuments = this.documents;
      });
    this.documentService
      .getVerifiedDocuments()
      .subscribe((data: DocumentEntityDto[]) => {
        this.documents.push(...data);
        this.filteredDocuments = this.documents;
      });
  }
  verifyDocument(document: DocumentEntityDto) {
    const requestData: VerifyDocumentDto = {
      documentType: document.documentType as unknown as string,
      pesel: document.pesel!,
    };
    this.documentService.verifyDocument(requestData).subscribe();
  }

  isDocumentVerified(document: DocumentEntityDto) {
    if (
      document.documentStatus ==
      (DocumentStatus[DocumentStatus.VERIFIED] as unknown as DocumentStatus)
    ) {
      return true;
    } else {
      return false;
    }
  }
  formatStatus(status: DocumentStatus): string {
    if (
      (status as unknown as string) == DocumentStatus[DocumentStatus.VERIFIED]
    ) {
      return 'Zweryfikowany';
    } else {
      return 'Niezweryfikowany';
    }
  }

  get identityCards() {
    return this.filteredDocuments.filter(
      (d) =>
        d.documentType ==
        (DocumentType[DocumentType.IDENTITY_CARD] as unknown as DocumentType)
    );
  }
  get passports() {
    return this.filteredDocuments.filter(
      (d) =>
        d.documentType ==
        (DocumentType[DocumentType.PASSPORT] as unknown as DocumentType)
    );
  }
  get drivingLicences() {
    return this.filteredDocuments.filter(
      (d) =>
        d.documentType ==
        (DocumentType[DocumentType.DRIVING_LICENSE] as unknown as DocumentType)
    );
  }

  filterDocuments() {
    if (this.showOnlyUnverified) {
      this.filteredDocuments = this.documents.filter(
        (d) =>
          d.documentStatus ==
          (DocumentStatus[
            DocumentStatus.UNVERIFIED
          ] as unknown as DocumentStatus)
      );
    } else {
      this.filteredDocuments = this.documents;
    }
  }

  onCheckboxChange() {
    this.filterDocuments();
  }
}
