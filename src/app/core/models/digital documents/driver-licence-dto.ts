import PermissionDto from './permission-dto';
import { DocumentStatus } from './enums/document-status';
import { DocumentType } from './enums/document-type';
import ImageDto from './image-dto';

export default interface DriverLicenceDto {
  documentStatus: DocumentStatus;
  documentType: DocumentType;
  picture: { link: string };
  frontOfDocumentImage: ImageDto;
  backOfDocumentImage: ImageDto;
  firstName: string;
  secondName: string;
  surname: string;
  placeOfBirth: string;
  birthDate: Date;
  permissions: PermissionDto[];
  documentNumber: string;
  issuingAuthority: string;
  dateOfIssue: Date;
}
