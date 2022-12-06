import { ICreateBootcampRequest } from './../../../models/request/bootcamp/createBootcampRequest';
import { InstructorService } from './../../../services/instructor/instructor.service';
import { IGetAllInstructorResponse } from './../../../models/response/instructor/getAllInstructorResponse';
import { BootcampService } from './../../../services/bootcamp/bootcamp.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { IUpdateBootcampRequest } from 'src/app/models/request/bootcamp/updateBootcampRequest';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-bootcamp-update',
  templateUrl: './bootcamp-update.component.html',
  styleUrls: ['./bootcamp-update.component.css'],
})
export class BootcampUpdateComponent implements OnInit {
  bootcampUpdateForm: FormGroup;
  bootcamp: IUpdateBootcampRequest;
  instructors: IGetAllInstructorResponse[] = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private bootcampService: BootcampService,
    private toastrService: ToastrService,
    private instructorService: InstructorService
  ) {}

  ngOnInit(): void {
    this.getInstructorAll();
  }

  getInstructorAll() {
    this.instructorService
      .getAllInstructor()
      .subscribe((data) => (this.instructors = data));
    this.getByIdBootcamp();
  }

  createBootcampUpdateForm() {
    this.bootcampUpdateForm = this.formBuilder.group({
      instructorId: [this.bootcamp.instructorId, Validators.required],
      name: [this.bootcamp.name, Validators.required],
      dateStart: [this.bootcamp.dateStart, Validators.required],
      dateEnd: [this.bootcamp.dateEnd, Validators.required],
      state: [this.bootcamp.state, Validators.required],
      about: [this.bootcamp.about, Validators.required],
      image: [this.bootcamp.image, Validators.required],
    });
  }
  getBootcamp(id: number) {
    this.bootcampService.getBootcamp(id).subscribe((data) => {
      this.bootcamp = data;
      this.createBootcampUpdateForm();
    });
  }
  getByIdBootcamp() {
    this.activatedRoute.params.subscribe((params) => {
      this.getBootcamp(params['id']);
    });
  }

  updateBootcamp() {
    if (this.bootcampUpdateForm.valid) {
      let bootcamp: ICreateBootcampRequest = Object.assign(
        {},
        this.bootcampUpdateForm.value
      );
      this.instructorService
        .getInstructor(bootcamp.instructorId)
        .subscribe((data) => {
          bootcamp.instructorName = data.firstName + ' ' + data.lastName;

          this.bootcampService
            .updateBootcamp(this.activatedRoute.snapshot.params['id'], bootcamp)
            .subscribe(() => {
              this.toastrService.success('Bootcamp Bilgileri Güncellendi');
            });
        });
    } else {
      this.toastrService.error('Dikkat Form Eksik!!!');
    }
  }
}
