import Permission from '../permission';
import { DocumentStatus } from './enums/document-status';
import { DocumentType } from './enums/document-type';
import ImageDto from './image-dto';

export default interface DriverLicenceDto {
  documentType: DocumentType;
  documentStatus: DocumentStatus;
  picture: ImageDto;
  frontOfDocumentImage: ImageDto;
  backOfDocumentImage: ImageDto;
  firstName: string;
  secondName: string;
  surname: string;
  placeOfBirth: string;
  birthDate: Date;
  permittions: Permission[];
  documentNumber: string;
  issuingAuthority: string;
  dateOfIssue: Date;
}
