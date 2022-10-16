import { DocumentStatus } from './enums/document-status';
import { DocumentType } from './enums/document-type';
import { Sex } from './enums/sex';

export default interface PassportDto {
  documentStatus: DocumentStatus;
  documentType: DocumentType;
  picture: { link: string };
  firstName: string;
  secondName: string;
  surname: string;
  nationality: string;
  documentNumber: string;
  expiryDate: Date;
  birthDate: Date;
  sex: Sex;
  placeOfBirth: string;
  pesel: string;
  issuingAuthority: string;
  dateOfIssue: Date;
}
