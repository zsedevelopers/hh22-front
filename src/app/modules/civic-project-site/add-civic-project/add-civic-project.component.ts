import {Component, OnInit} from '@angular/core';
import AddCivilProjectRequest from '../../../core/models/civil projects/add-civil-project-request';
import CreateScheduleDto from '../../../core/models/civil projects/create-schedule-dto';
import {CivilProjectService} from '../../../core/services/civil-project.service';
import {AuthService} from 'src/app/core/services/auth.service';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators,} from '@angular/forms';
import {ProjectCategory} from "../../../core/models/civil projects/project-category";
import AddEstimateDto from "../../../core/models/civil projects/add-estimate-dto";

@Component({
  selector: 'app-add-civic-project',
  templateUrl: './add-civic-project.component.html',
  styleUrls: ['./add-civic-project.component.scss'],
})
export class AddCivicProjectComponent implements OnInit {

  listOfCategories:ProjectCategory[] = [ProjectCategory.SPORT,ProjectCategory.EDUCATION,ProjectCategory.CULTURE,ProjectCategory.HEALTH,ProjectCategory.ENVIRONMENT,ProjectCategory.INFRASTRUCTURE,ProjectCategory.NATURE,ProjectCategory.COMMUNITY,ProjectCategory.OTHER]

  addProjectForm = this.fb.group({
    title: this.fb.control('', Validators.required),
    city: this.fb.control('', Validators.required),
    shortDescription: this.fb.control('', Validators.required),
    description: this.fb.control('', Validators.required),
    justification: this.fb.control('', Validators.required),
    estimates: this.fb.array([]),
    schedules: this.fb.array([]),
    category: new FormControl<ProjectCategory>(ProjectCategory.OTHER, {nonNullable: true})
  });

  // dummyEstimate: AddEstimateDto = {
  //   title: 'estimatedTytul',
  //   description: 'estimatedDescription',
  //   cost: 69,
  // };
  //
  // dummySchedule: CreateScheduleDto[] = [
  //   { title: 'scheduleTytul', description: 'scheduleOpis', date: 20 },
  // ];

  // // dummyUser: UserDto = {
  // //   name: 'marek',
  // //   surname: 'marucha',
  // //   email: 'milosz@gmail.com',
  // //   phoneNumber: 123123123,
  // //   PESEL: '12345678901',
  // //   city: 'olsztyn',
  // // };

  // dummyData: AddCivilProjectRequest = {
  //   title: 'titel',
  //   city: 'a',
  //   description: 'gowno',
  //   justification: 'chec kupy',
  //   authors: ['jelitogrube'],
  //   likedBy: [],
  //   estimate: this.dummyEstimate,
  //   schedulesOfActivities: this.dummySchedule,
  // };

  addProject() {
    if (!this.authService.isLogged()) {
      console.warn(`you're not logged in`);
      return;
    }

    // this.dummyData.city = this.authService.userData?.city!;
    // this.dummyData.authors = [this.authService.userData?.pesel!];

    // const data: AddCivilProjectRequest = {
    //   title: this.dummyData.title!,
    //   city: this.dummyData.city!,
    //   description: this.dummyData.description!,
    //   justification: this.dummyData.justification!,
    //   authors: [this.authService.userData?.pesel!],
    //   likedBy: [],
    //   estimate: this.dummyEstimate,
    //   schedulesOfActivities: this.dummySchedule,
    // };

    //this.civilProjectService.addCivilProject(data).subscribe(()=>{});
  }

  constructor(
    private civilProjectService: CivilProjectService,
    private authService: AuthService,
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {}


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
    this.schedules.controls;
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
    if (!this.authService.isLogged()) {
      console.warn(`you're not logged in`);
      return;
    }

    if (this.addProjectForm.invalid) {
      console.warn('invalid form input');
      return;
    }

    const formData = this.addProjectForm.value;

    if (formData.city?.toUpperCase() != this.authService.userData?.city.toUpperCase()) {
      console.warn(`input city doesn't match user's city`);
      return;
    }

    const data: AddCivilProjectRequest = {
      title: formData.title!,
      city: formData.city!,
      shortDescription: formData.shortDescription!,
      description: formData.description!,
      justification: formData.justification!,
      authors: [this.authService.userData?.pesel!],
      likedBy: [],
      estimates: [],
      //   {
      //   title: formData.estimateTitle!,
      //   description: formData.estimateDescription!,
      //   cost: formData.estimateCost!,
      // },
      schedulesOfActivities: [],
      category:formData.category!,
      images:[]
    };

    this.estimates.controls.forEach((group) => {
      const estimate: AddEstimateDto = {
        title: group.value.title,
        description: group.value.description,
        cost: group.value.cost
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

    this.civilProjectService.addCivilProject(data).subscribe(()=>{});
  }
}
