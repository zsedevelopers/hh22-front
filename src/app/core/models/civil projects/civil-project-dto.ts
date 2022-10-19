import UserDto from '../common/user-dto';
import { CivilProjectStatus } from './civil-project-status';

export default interface CivilProjectDto {
  id: number;
  title: string;
  city: string;
  description: string;
  justification: string;
  authors: UserDto[];
  likedBy: UserDto[];
  estimates: any;
  scheduleOfActivities: any;
  status: CivilProjectStatus;
}
