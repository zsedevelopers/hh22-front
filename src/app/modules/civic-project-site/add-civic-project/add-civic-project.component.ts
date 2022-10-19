import { Component, OnInit } from '@angular/core';
import AddCivilProjectRequest from '../../../core/models/civil projects/add-civil-project-request';
import CreateScheduleDto from '../../../core/models/civil projects/create-schedule-dto';
import { CivilProjectService } from '../../../core/services/civil-project.service';
import { AuthService } from 'src/app/core/services/auth.service';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ProjectCategory } from '../../../core/models/civil projects/project-category';
import AddEstimateDto from '../../../core/models/civil projects/add-estimate-dto';
import UserDto from '../../../core/models/common/user-dto';

@Component({
  selector: 'app-add-civic-project',
  templateUrl: './add-civic-project.component.html',
  styleUrls: ['./add-civic-project.component.scss'],
})
export class AddCivicProjectComponent implements OnInit {
  userCity:string = "";
  userData: UserDto | null = null;

  listOfCategories: ProjectCategory[] = [
    ProjectCategory.SPORT,
    ProjectCategory.EDUCATION,
    ProjectCategory.CULTURE,
    ProjectCategory.HEALTH,
    ProjectCategory.ENVIRONMENT,
    ProjectCategory.INFRASTRUCTURE,
    ProjectCategory.NATURE,
    ProjectCategory.COMMUNITY,
    ProjectCategory.OTHER,
  ];

  addProjectForm = this.fb.group({
    title: this.fb.control('', Validators.required),
    city: [{
      value: this.userCity,
      disabled:true
    }],
    shortDescription: this.fb.control('', Validators.required),
    description: this.fb.control('', Validators.required),
    justification: this.fb.control('', Validators.required),
    estimates: this.fb.array([]),
    schedules: this.fb.array([]),
    category: new FormControl<ProjectCategory>(ProjectCategory.OTHER, {
      nonNullable: true,
    }),
  });

  constructor(
    private civilProjectService: CivilProjectService,
    private authService: AuthService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.authService.getUserData().subscribe((data) => {
      this.userData = data;
      this.addProjectForm.value.city = this.userData.city
      this.userCity = this.userData.city
    });
  }

  get estimates(): FormArray<FormGroup> {
    return this.addProjectForm.controls['estimates'] as FormArray;
  }

  addEstimate() {
    this.estimates.controls;
    const EstimateForm: FormGroup = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      cost: [0, Validators.required],
    });
    this.estimates.push(EstimateForm);
  }

  deleteEstimate(index: number) {
    this.estimates.controls.splice(index, 1);
  }

  get schedules(): FormArray<FormGroup> {
    return this.addProjectForm.controls['schedules'] as FormArray;
  }

  addSchedule() {
    const scheduleForm: FormGroup = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      date: [2000, Validators.required],
    });
    this.schedules.push(scheduleForm);
  }

  deleteSchedule(index: number) {
    this.schedules.controls.splice(index, 1);
  }

  onFormSubmit() {
    console.log(this.userData);
    console.log('form:')
    console.log(this.addProjectForm.value);
    if (!this.authService.isLogged()) {
      console.warn(`you're not logged in`);
      return;
    }

    if (this.addProjectForm.invalid) {
      console.warn('invalid form input');
      return;
    }

    const formData = this.addProjectForm.value;

    // if (formData.city?.toUpperCase() != this.userData?.city.toUpperCase()) {
    //   console.warn(`input city doesn't match user's city`);
    //   return;
    // }

    const data: AddCivilProjectRequest = {
      title: formData.title!,
      city: this.userCity,
      shortDescription: formData.shortDescription!,
      description: formData.description!,
      justification: formData.justification!,
      authors: [this.userData?.pesel!],
      likedBy: [],
      estimates: [],
      schedulesOfActivities: [],
      category: formData.category!,
      images: [],
    };

    this.estimates.controls.forEach((group) => {
      const estimate: AddEstimateDto = {
        title: group.value.title,
        description: group.value.description,
        cost: group.value.cost,
      };
      data.estimates.push(estimate);
    });

    this.schedules.controls.forEach((group) => {
      const schedule: CreateScheduleDto = {
        title: group.value.title,
        description: group.value.description,
        date: group.value.date,
      };
      data.schedulesOfActivities.push(schedule);
    });

    this.civilProjectService.addCivilProject(data).subscribe(() => {});
  }
}
