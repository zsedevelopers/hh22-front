import UserDto from '../common/user-dto';
import AddEstimateDto from "./add-estimate-dto";
import CreateScheduleDto from "./create-schedule-dto";
import {ProjectCategory} from "./project-category";
import { CivilProjectStatus } from './civil-project-status';

export default interface CivilProjectDto {
  title: string;
  city: string;
  shortDescription: string;
  description: string;
  justification: string;
  authors: string[];
  likedBy: UserDto[];
  category: ProjectCategory;
  images: { link: string }[];
  estimates: any;
  scheduleOfActivities: any;
  status: CivilProjectStatus;
}
