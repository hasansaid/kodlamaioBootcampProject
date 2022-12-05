import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { IGetInstructorResponse } from './../../../models/response/instructor/getInstructorResponse';

import { InstructorService } from './../../../services/instructor/instructor.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-instructor-update',
  templateUrl: './instructor-update.component.html',
  styleUrls: ['./instructor-update.component.css'],
})
export class InstructorUpdateComponent implements OnInit {
  intructor: IGetInstructorResponse;
  intructorUpdateForm: FormGroup;
  constructor(
    private activatedRoute: ActivatedRoute,
    private instructorService: InstructorService,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.getByIdIntructor();
  }

  createIntructorUpdateForm() {
    this.intructorUpdateForm = this.formBuilder.group({
      firstName: [this.intructor.firstName, Validators.required],
      lastName: [this.intructor.lastName, Validators.required],
      // dateOfBirth: [this.intructor.dateOfBirth, Validators.required],
      email: [this.intructor.email, Validators.required],
      // password: [this.intructor.password, Validators.required],
      companyName: [this.intructor.companyName, Validators.required],
      // nationalIdentity: [this.intructor.nationalIdentity, Validators.required],
    });
  }

  getIntructor(id: number) {
    this.instructorService.getInstructor(id).subscribe((data) => {
      this.intructor = data;
      this.createIntructorUpdateForm();
    });
  }

  getByIdIntructor() {
    this.activatedRoute.params.subscribe((params) => {
      this.getIntructor(params['id']);
    });
  }

  updateIntructor() {
    this.instructorService
      .updateInstructor(
        this.activatedRoute.snapshot.params['id'],
        this.intructorUpdateForm.value
      )
      .subscribe();
    this.toastrService.success('Düzenleme Başarılı');
  }
}
