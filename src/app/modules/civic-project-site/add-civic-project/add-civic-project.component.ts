import { Component, OnInit } from '@angular/core';
import AddCivilProjectRequest from '../../../core/models/civil projects/add-civil-project-request';
import UserDto from '../../../core/models/common/user-dto';
import AddEstimateDto from '../../../core/models/civil projects/add-estimate-dto';
import CreateScheduleDto from '../../../core/models/civil projects/create-schedule-dto';
import { CivilProjectService } from '../../../core/services/civil-project.service';
import { AuthService } from 'src/app/core/services/auth.service';
import {
  FormGroup,
  Validators,
  FormArray,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-add-civic-project',
  templateUrl: './add-civic-project.component.html',
  styleUrls: ['./add-civic-project.component.scss'],
})
export class AddCivicProjectComponent implements OnInit {
  userData: UserDto | null = null;


  addProjectForm = this.fb.group({
    title: this.fb.control('', Validators.required),
    city: this.fb.control('', Validators.required),
    description: this.fb.control('', Validators.required),
    justification: this.fb.control('', Validators.required),
    estimateTitle: this.fb.control('', Validators.required),
    estimateDescription: this.fb.control('', Validators.required),
    estimateCost: this.fb.control(0, Validators.required),
    schedules: this.fb.array([]),
  });

  dummyEstimate: AddEstimateDto = {
    title: 'estimatedTytul',
    description: 'estimatedDescription',
    cost: 69,
  };

  dummySchedule: CreateScheduleDto[] = [
    { title: 'scheduleTytul', description: 'scheduleOpis', date: 20 },
  ];

  // // dummyUser: UserDto = {
  // //   name: 'marek',
  // //   surname: 'marucha',
  // //   email: 'milosz@gmail.com',
  // //   phoneNumber: 123123123,
  // //   PESEL: '12345678901',
  // //   city: 'olsztyn',
  // // };

  dummyData: AddCivilProjectRequest = {
    title: 'titel',
    city: 'a',
    description: 'gowno',
    justification: 'chec kupy',
    authors: ['jelitogrube'],
    likedBy: [],
    estimate: this.dummyEstimate,
    schedulesOfActivities: this.dummySchedule,
  };

  addProject() {
    if (!this.authService.isLogged()) {
      console.warn(`you're not logged in`);
      return;
    }

    this.dummyData.city = this.userData?.city!;
    this.dummyData.authors = [this.userData?.pesel!];

    const data: AddCivilProjectRequest = {
      title: this.dummyData.title!,
      city: this.dummyData.city!,
      description: this.dummyData.description!,
      justification: this.dummyData.justification!,
      authors: [this.userData?.pesel!],
      likedBy: [],
      estimate: this.dummyEstimate,
      schedulesOfActivities: this.dummySchedule,
    };

    this.civilProjectService.addCivilProject(data).subscribe(()=>{});
  }

  constructor(
    private civilProjectService: CivilProjectService,
    private authService: AuthService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.authService.getUserData().subscribe((data) => {
      this.userData = data;
    });
  }

  get schedules(): FormArray<FormGroup> {
    return this.addProjectForm.controls['schedules'] as FormArray;
  }

  addSchedule() {
    const scheduleForm: FormGroup = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      year: [2000, Validators.required],
    });
    this.schedules.push(scheduleForm);
  }

  deleteSchedule(index: number) {
    this.schedules.controls.splice(index, 1);
  }

  onFormSubmit() {
    if (!this.authService.isLogged()) {
      console.warn(`you're not logged in`);
      return;
    }

    if (this.addProjectForm.invalid) {
      console.warn('invalid form input');
      return;
    }

    const formData = this.addProjectForm.value;

    if (formData.city != this.userData?.city) {
      console.warn(`input city doesn't match user's city`);
      return;
    }

    const data: AddCivilProjectRequest = {
      title: formData.title!,
      city: formData.city!,
      description: formData.description!,
      justification: formData.justification!,
      authors: [this.userData?.pesel!],
      likedBy: [],
      estimate: {
        title: formData.estimateTitle!,
        description: formData.estimateDescription!,
        cost: formData.estimateCost!,
      },
      schedulesOfActivities: [],
    };

    this.schedules.controls.forEach((group) => {
      const schedule: CreateScheduleDto = {
        title: group.value.title,
        description: group.value.description,
        date: group.value.year,
      };
      data.schedulesOfActivities.push(schedule);
    });

    this.civilProjectService.addCivilProject(data).subscribe(()=>{});
  }
}
