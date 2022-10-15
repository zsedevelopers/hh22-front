import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-documents',
  templateUrl: './show-documents.component.html',
  styleUrls: ['./show-documents.component.scss'],
})
export class ShowDocumentsComponent implements OnInit {
  documents = [
    {
      name: 'cool doc1',
    },
    {
      name: 'cool doc2',
    },
    {
      name: 'cool doc3',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
