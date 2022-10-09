import UserDto from "./user-dto";

export default interface LoginResponse{
    access_token:string;
    refresh_token:string;
    user:UserDto
}