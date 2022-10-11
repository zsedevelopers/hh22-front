import UserDto from '../common/user-dto';

export default interface CivilProjectDto {
  id: number;
  title: string;
  city: string;
  description: string;
  justification: string;
  authors: UserDto[];
  likedBy: UserDto[];
  estimate: any;
  scheduleOfActivities: any;
}
