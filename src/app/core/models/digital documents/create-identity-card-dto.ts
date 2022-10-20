import { Sex } from './enums/sex';

export default interface CreateIdentityCardDto {
  picture: string;
  frontOfDocumentImage: string;
  backOfDocumentImage: string;
  firstName: string;
  secondName: string  | null;
  surname: string;
  nationality: string;
  documentNumber: string;
  expiryDate: Date;
  birthDate: Date;
  sex: Sex;
  CAN: string | null;
  placeOfBirth: string;
  pesel: string;
  familyName: string;
  motherName: string;
  fatherName: string;
  issuingAuthority: string;
  dateOfIssue: Date;
}
