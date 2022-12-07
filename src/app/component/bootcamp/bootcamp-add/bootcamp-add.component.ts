import { InstructorService } from './../../../services/instructor/instructor.service';
import { BootcampService } from './../../../services/bootcamp/bootcamp.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { ICreateBootcampRequest } from 'src/app/models/request/bootcamp/createBootcampRequest';
import { IGetAllInstructorResponse } from 'src/app/models/response/instructor/getAllInstructorResponse';

@Component({
  selector: 'app-bootcamp-add',
  templateUrl: './bootcamp-add.component.html',
  styleUrls: ['./bootcamp-add.component.css'],
})
export class BootcampAddComponent implements OnInit {
  bootcampAddForm: FormGroup;
  instructors: IGetAllInstructorResponse[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private bootcampService: BootcampService,
    private toastrService: ToastrService,
    private router: Router,
    private instructorService: InstructorService
  ) {}

  ngOnInit(): void {
    this.getInstructorAll();
  }

  getInstructorAll() {
    this.instructorService
      .getAllInstructor()
      .subscribe((data) => (this.instructors = data));
    this.createAddBootcampForm();
  }

  createAddBootcampForm() {
    this.bootcampAddForm = this.formBuilder.group({
      instructorId: ['', Validators.required],
      name: ['', Validators.required],
      dateStart: ['', Validators.required],
      dateEnd: ['', Validators.required],
      state: ['', Validators.required],
      about: ['', Validators.required],
    });
  }
  add() {
    if (this.bootcampAddForm.valid) {
      let bootcampModel: ICreateBootcampRequest = Object.assign(
        {},
        this.bootcampAddForm.value
      );
      this.instructorService
        .getInstructor(bootcampModel.instructorId)
        .subscribe((data) => {
          bootcampModel.instructorName = data.firstName + ' ' + data.lastName;
          this.bootcampService.addBootcamp(bootcampModel).subscribe((data) => {
            this.toastrService.success('Bootcamp Ekleme Başarılı');
            this.router.navigate(['/admin/admin-bootcamp']);
            console.log(data);
          });
        });
    } else {
      this.toastrService.warning('Form Eksik!!!');
    }
  }
}
