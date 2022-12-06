import { ToastrService } from 'ngx-toastr';
import { InstructorService } from './../../../services/instructor/instructor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-instructor-add',
  templateUrl: './instructor-add.component.html',
  styleUrls: ['./instructor-add.component.css'],
})
export class InstructorAddComponent implements OnInit {
  instructorAddForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private instructorService: InstructorService,
    private toastrService: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createAddInstructorForm();
  }

  createAddInstructorForm() {
    this.instructorAddForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      companyName: ['', Validators.required],
      nationalIdentity: ['', Validators.required],
      image: ['', Validators.required],
    });
  }
  add() {
    if (this.instructorAddForm.valid) {
      let instructorModel = Object.assign({}, this.instructorAddForm.value);
      this.instructorService
        .addInstructor(instructorModel)
        .subscribe((data) => {
          this.toastrService.success('Eğitmen Ekleme Başarılı');
          this.router.navigate(['/admin/admin-instructor']);
        });
    } else {
      this.toastrService.warning('Form Eksik!!!');
    }
  }
}
