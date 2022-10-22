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
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { PopupDialogComponent } from 'src/app/popup-dialog/popup-dialog.component';

@Component({
  selector: 'app-add-civic-project',
  templateUrl: './add-civic-project.component.html',
  styleUrls: ['./add-civic-project.component.scss'],
})
export class AddCivicProjectComponent implements OnInit {
  userCity: string = '';
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
    city: [
      {
        value: this.userCity,
        disabled: true,
      },
    ],
    shortDescription: this.fb.control('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(255),
    ]),
    description: this.fb.control('', [
      Validators.required,
      Validators.minLength(255),
      Validators.maxLength(4096),
    ]),
    justification: this.fb.control('', [
      Validators.required,
      Validators.minLength(50),
      Validators.maxLength(4096),
    ]),
    estimates: this.fb.array([]),
    schedules: this.fb.array([]),
    category: new FormControl<ProjectCategory>(ProjectCategory.OTHER, {
      nonNullable: true,
    }),
  });

  constructor(
    private civilProjectService: CivilProjectService,
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog
  ) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(PopupDialogComponent, {
      backdropClass: 'dialog-backdrop',
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.router.navigate(['/']);
    });
  }

  ngOnInit(): void {
    this.authService
      .getUserData()
      .pipe(
        catchError((err) => {
          // alert('you have to be logged in to access this feature');
          // this.router.navigate(['/'])
          this.openDialog();
          return throwError(err);
        })
      )
      .subscribe((data) => {
        this.userData = data;
        this.addProjectForm.value.city = this.userData.city;
        this.userCity = this.userData.city;
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
    if (!this.authService.isLogged()) {
      return;
    }

    if (this.addProjectForm.invalid) {
      return;
    }

    const formData = this.addProjectForm.value;

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
    if (this.authService.isLogged()) {
      this.civilProjectService.addCivilProject(data).subscribe(() => {
        this.router.navigate(['/civicProject/show']);
      });
    }
  }
}
