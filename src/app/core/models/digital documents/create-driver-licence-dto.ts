import Permission from '../permission';

export default interface CreateDriverLicenceDto {
  picture: string;
  frontOfDocumentImage: string;
  backOfDocumentImage: string;
  firstName: string;
  secondName: string;
  surname: string;
  placeOfBirth: string;
  birthDate: Date;
  permitions: Permission[];
  documentNumber: string;
  issuingAuthority: string;
  dateOfIssue: Date;
}
