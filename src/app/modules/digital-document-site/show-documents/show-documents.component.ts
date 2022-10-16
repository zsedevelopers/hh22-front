import { Component, OnInit } from '@angular/core';
import { DigitalDocumentService } from 'src/app/core/services/digital-document.service';

@Component({
  selector: 'app-show-documents',
  templateUrl: './show-documents.component.html',
  styleUrls: ['./show-documents.component.scss'],
})
export class ShowDocumentsComponent implements OnInit {
  hasWallet:boolean = false

  constructor(private documentService:DigitalDocumentService) {}

  ngOnInit(): void {
    this.documentService.getWallet().subscribe((data) => {
      if(data != null){
        this.hasWallet = true;
        console.log(data)
      }
    })
  }

}
