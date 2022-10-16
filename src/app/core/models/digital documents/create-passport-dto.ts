export default interface CreatePassportDto {
  picture: string;
  frontOfDocumentImage: string;
  backOfDocumentImage: string;
  firstName: string;
  secondName: string | null;
  surname: string;
  nationality: string;
  documentNumber: string;
  expiryDate: Date;
  birthDate: Date;
  sex: string;
  placeOfBirth: string;
  pesel: string;
  issuingAuthority: string;
  dateOfIssue: Date;
}
