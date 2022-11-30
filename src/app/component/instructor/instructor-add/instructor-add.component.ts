import { InstructorService } from './../../../services/instructor/instructor.service';
import { ActivatedRoute } from '@angular/router';
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
    private instructorService: InstructorService
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
    });
  }
  add() {
    if (this.instructorAddForm.valid) {
      let instructorModel = Object.assign({}, this.instructorAddForm.value);
      this.instructorService
        .addInstructor(instructorModel)
        .subscribe((data) => {
          alert('Eğitmen Eklendi');
        });
    } else {
      alert('Eğitmen Eklenemedi Kontrol Et');
    }
  }
}
