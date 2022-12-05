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

@Component({
  selector: 'app-bootcamp-add',
  templateUrl: './bootcamp-add.component.html',
  styleUrls: ['./bootcamp-add.component.css'],
})
export class BootcampAddComponent implements OnInit {
  bootcampAddForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private bootcampService: BootcampService,
    private toastrService: ToastrService,
    private router: Router
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
        this.toastrService.success('Bootcamp Ekleme Başarılı');
        this.router.navigate(['/admin/admin-bootcamp']);
      });
    } else {
      this.toastrService.warning('Form Eksik!!!');
    }
  }
}
