export default interface CreateIdentityCardDto {
  frontOfDocumentImage: string;
  backOfDocumentImage: string;
  firstName: string;
  secondName: string;
  surname: string;
  nationality: string;
  documentNumber: string;
  expiryDate: Date;
  birthDate: Date;
  sex: string;
  CAN: string;
  placeOfBirth: string;
  pesel: string;
  familyName: string;
  motherName: string;
  fatherName: string;
  issuingAuthority: string;
  dateOfIssue: Date;
}
