import PermissionDto from './permission-dto';

export default interface CreateDriverLicenceDto {
  picture: string;
  frontOfDocumentImage: string;
  backOfDocumentImage: string;
  firstName: string;
  secondName: string  | null;
  surname: string;
  placeOfBirth: string;
  birthDate: Date;
  permissions: PermissionDto[];
  documentNumber: string;
  issuingAuthority: string;
  dateOfIssue: Date;
}
