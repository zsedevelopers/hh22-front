import { DriverLicenceType } from "./enums/driver-licence-type";

export default interface PermissionDto {
  type: DriverLicenceType;
  dateOfIssue: Date;
}
