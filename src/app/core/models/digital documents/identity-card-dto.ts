import { DocumentStatus } from './enums/document-status';
import { DocumentType } from './enums/document-type';
import { Sex } from './enums/sex';
export default interface IdentityCardDto {
  documentStatus: DocumentStatus;
  picture: { link: string };
  documentType: DocumentType;
  firstName: string;
  secondName: string;
  surname: string;
  nationality: string;
  documentNumber: string;
  expiryDate: Date;
  birthDate: Date;
  sex: Sex; // enum
  CAN: string;
  placeOfBirth: string;
  pesel: string;
  familyName: string;
  motherName: string;
  fatherName: string;
  issuingAuthority: string;
  dateOfIssue: Date;
}
