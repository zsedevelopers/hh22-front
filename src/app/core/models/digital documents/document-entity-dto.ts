import { DocumentStatus } from './enums/document-status';
import { DocumentType } from './enums/document-type';
import ImageDto from './image-dto';

export default interface DocumentEntityDto {
  id: number;
  documentStatus: DocumentStatus;
  documentType: DocumentType;
  picture: ImageDto;
  firstName: string;
  secondName: string;
  surname: string;
  documentNumber: string;
  frontOfDocumentImage: ImageDto;
  backOfDocumentImage: ImageDto;
  placeOfBirth: string;
  birthDate: Date;
  expiryDate: Date;
  issuingAuthority: string;
  dateOfIssue: Date;
}
