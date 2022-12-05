import { IGetApplicationResponse } from './../../../models/response/application/getApplicationResponse';
import { IUpdateApplicationRequest } from './../../../models/request/application/updateApplicationRequest';
import { ApplicationService } from './../../../services/application/application.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-application-update',
  templateUrl: './application-update.component.html',
  styleUrls: ['./application-update.component.css'],
})
export class ApplicationUpdateComponent implements OnInit {
  applicationUpdateForm: FormGroup;
  application: IUpdateApplicationRequest;
  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private applicationService: ApplicationService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    // this.getApplicationDataForm();
    this.getByIdApplication();
  }

  createApplicationUpdateForm() {
    this.applicationUpdateForm = this.formBuilder.group({
      userId: [this.application.userId, Validators.required],
      bootcampId: [this.application.bootcampId, Validators.required],
      state: [this.application.state, Validators.required],
    });
  }

  getApplication(id: number) {
    this.applicationService.getApplication(id).subscribe((data) => {
      this.application = data;
      this.createApplicationUpdateForm();
    });
  }
  getByIdApplication() {
    this.activatedRoute.params.subscribe((params) => {
      this.getApplication(params['id']);
    });
  }
  updateApplication() {
    this.applicationService
      .updateApplication(
        this.activatedRoute.snapshot.params['id'],
        this.applicationUpdateForm.value
      )
      .subscribe();
    this.toastrService.success('Başvuru Düzenlendi');
  }
}
