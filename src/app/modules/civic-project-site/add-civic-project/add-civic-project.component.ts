import { Component, OnInit } from '@angular/core';
import AddCivilProjectRequest from "../../../core/models/civil projects/add-civil-project-request";
import UserDto from "../../../core/models/common/user-dto";
import AddEstimateDto from "../../../core/models/civil projects/add-estimate-dto";
import CreateScheduleDto from "../../../core/models/civil projects/create-schedule-dto";
import {CivilProjectService} from "../../../core/services/civil-project.service";

@Component({
  selector: 'app-add-civic-project',
  templateUrl: './add-civic-project.component.html',
  styleUrls: ['./add-civic-project.component.scss']
})
export class AddCivicProjectComponent implements OnInit {

  dummyEstimate:AddEstimateDto = {title:'estimatedTytul',description:'estimatedDescription',cost:69}

  dummySchedule:CreateScheduleDto[] = [{title:'scheduleTytul',description:'scheduleOpis',date:20}]

  dummyUser:UserDto = {name:'marek',surname:'marucha',email:'milosz@gmail.com',
    phoneNumber:123123123,PESEL:'12345678901',city:'olsztyn'}

  dummyData:AddCivilProjectRequest = {city:'olsztyn',description:'gowno',
    justification:'chec kupy',authors:['jelitogrube'],likedBy:this.dummyUser,estimate:this.dummyEstimate,schedulesOfActivities:this.dummySchedule}


  addProject(){
    this.service.addCivilProject(this.dummyData)
  }

  constructor(private service:CivilProjectService) { }

  ngOnInit(): void {
  }

}
