import { Router } from '@angular/router';
import { BootcampService } from 'src/app/services/bootcamp/bootcamp.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-instructor-applicant',
  templateUrl: './instructor-applicant.component.html',
  styleUrls: ['./instructor-applicant.component.css'],
})
export class InstructorApplicantComponent implements OnInit {
  bootcampForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private bootcampService: BootcampService,
    private toastrService: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createBootcampForm();
  }
  createBootcampForm() {
    this.bootcampForm = this.formBuilder.group({
      instructorId: [localStorage.getItem('instructorId')],
      name: ['', Validators.required],
      dateStart: ['', Validators.required],
      dateEnd: ['', Validators.required],
      state: [1],
      instructorName: ['', Validators.required],
      about: ['', Validators.required],
      image: ['', Validators.required],
    });
  }

  add() {
    if (this.bootcampForm.valid) {
      let bootcamp = Object.assign({}, this.bootcampForm.value);
      this.bootcampService.addBootcamp(bootcamp).subscribe((data) => {
        this.toastrService.success('Bootcamp Ekleme Başarılı');
        this.router.navigate(['/instructor/instructor-bootcamp']);
      });
    } else {
      this.toastrService.warning('Form Eksik!!!');
    }
  }
}
