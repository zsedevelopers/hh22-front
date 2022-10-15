export default interface RegisterRequest {
  firstName: string;
  secondName: string | null;
  surname: string;
  email: string;
  city: string;
  pesel: string;
  phoneNumber: number;
  password: string;
}
