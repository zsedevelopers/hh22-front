import UserDto from '../common/user-dto';
import AddEstimateDto from './add-estimate-dto';
import CreateScheduleDto from './create-schedule-dto';

export default interface AddCivilProjectRequest {
  city: string;
  description: string;
  justification: string;
  authors: string[];
  likedBy: UserDto;
  estimate: AddEstimateDto;
  schedulesOfActivities: CreateScheduleDto[];
}
