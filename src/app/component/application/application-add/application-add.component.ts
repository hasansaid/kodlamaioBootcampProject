import { ApplicationService } from './../../../services/application/application.service';
import { ActivatedRoute } from '@angular/router';
import { ApplicantService } from './../../../services/applicant/applicant.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-application-add',
  templateUrl: './application-add.component.html',
  styleUrls: ['./application-add.component.css'],
})
export class ApplicationAddComponent implements OnInit {
  applicationAddForm: FormGroup;
  constructor(
    private applicationService: ApplicationService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createApplicationAddForm();
  }

  createApplicationAddForm() {
    this.applicationAddForm = this.formBuilder.group({
      applicantId: ['', Validators.required],
      bootcampId: ['', Validators.required],
      state: ['', Validators.required],
    });
  }
  add() {
    if (this.applicationAddForm.valid) {
      let applicationModel = Object.assign({}, this.applicationAddForm.value);
      this.applicationService
        .addApplication(applicationModel)
        .subscribe((data) => {});
    } else {
      this.toastrService.warning('Dikkat');
    }
  }
}
