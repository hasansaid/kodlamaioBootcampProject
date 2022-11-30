import { BootcampService } from './../../../services/bootcamp/bootcamp.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-bootcamp-add',
  templateUrl: './bootcamp-add.component.html',
  styleUrls: ['./bootcamp-add.component.css'],
})
export class BootcampAddComponent implements OnInit {
  bootcampAddForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private bootcampService: BootcampService
  ) {}

  ngOnInit(): void {
    this.createAddBootcampForm();
  }

  createAddBootcampForm() {
    this.bootcampAddForm = this.formBuilder.group({
      instructorId: ['', Validators.required],
      name: ['', Validators.required],
      dateStart: ['', Validators.required],
      dateEnd: ['', Validators.required],
      state: ['', Validators.required],
    });
  }
  add() {
    if (this.bootcampAddForm.valid) {
      let bootcampModel = Object.assign({}, this.bootcampAddForm.value);
      this.bootcampService.addBootcamp(bootcampModel).subscribe((data) => {
        alert('Bootcamp Eklendi');
      });
    } else {
      alert('Bootcamp Eklenmedi');
    }
  }
}
