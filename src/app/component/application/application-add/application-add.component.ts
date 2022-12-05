import { ApplicationService } from './../../../services/application/application.service';
import { ActivatedRoute, Router } from '@angular/router';
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
    private toastrService: ToastrService,
    private router: Router
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
      this.toastrService.success('Başvuru Eklendi');
      this.router.navigate(['/admin/admin-application']);
    } else {
      this.toastrService.warning('Form Eksik!!');
    }
  }
}
