import { Component, OnInit } from '@angular/core';
import { DigitalDocumentService } from 'src/app/core/services/digital-document.service';

@Component({
  selector: 'app-add-document',
  templateUrl: './add-document.component.html',
  styleUrls: ['./add-document.component.scss']
})
export class AddDocumentComponent implements OnInit {

  constructor(private documentService:DigitalDocumentService) { }

  ngOnInit(): void {
  }

  addWallet(){
    this.documentService.createWallet().subscribe()
  }
}
