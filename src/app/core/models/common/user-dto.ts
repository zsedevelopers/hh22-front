import { UserRole } from '../auth/UserRole';

export default interface UserDto {
  firstName: string;
  secondName: string | null;
  surname: string;
  email: string;
  phoneNumber: number;
  pesel: string;
  city: string;
  role: UserRole;
}
