import { DriverLicenceType } from "./enums/driver-licence-type";

export default interface PermissionDto {
  driverLicenceType: DriverLicenceType;
  dateOfIssue: Date;
}
