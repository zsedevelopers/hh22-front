import { Component, OnInit } from '@angular/core';
import DriverLicenceDto from 'src/app/core/models/digital documents/driver-licence-dto';
import IdentityCardDto from 'src/app/core/models/digital documents/identity-card-dto';
import PassportDto from 'src/app/core/models/digital documents/passport-dto';
import { DigitalDocumentService } from 'src/app/core/services/digital-document.service';

@Component({
  selector: 'app-digital-document-panel',
  templateUrl: './digital-document-panel.component.html',
  styleUrls: ['./digital-document-panel.component.scss'],
})
export class DigitalDocumentPanelComponent implements OnInit {
  identityCards: IdentityCardDto[] = [];
  passports: PassportDto[] = [];
  drivingLicences: DriverLicenceDto[] = [];

  constructor(private documentService: DigitalDocumentService) {}

  ngOnInit(): void {}
}
