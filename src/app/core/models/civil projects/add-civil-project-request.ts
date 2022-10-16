import UserDto from '../common/user-dto';
import AddEstimateDto from './add-estimate-dto';
import CreateScheduleDto from './create-schedule-dto';
import {ProjectCategory} from "./project-category";

export default interface AddCivilProjectRequest {
  title: string;
  city: string;
  shortDescription: string;
  description: string;
  justification: string;
  authors: string[];
  likedBy: UserDto[];
  estimates: AddEstimateDto[];
  schedulesOfActivities: CreateScheduleDto[];
  category:ProjectCategory
}
