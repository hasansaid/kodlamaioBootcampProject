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
  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private bootcampService: BootcampService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.getByIdBootcamp();
  }

  createBootcampUpdateForm() {
    this.bootcampUpdateForm = this.formBuilder.group({
      id: [this.bootcamp.id, Validators.required],
      instructorId: [this.bootcamp.instructorId, Validators.required],
      name: [this.bootcamp.name, Validators.required],
      dateStart: [this.bootcamp.dateStart, Validators.required],
      dateEnd: [this.bootcamp.dateEnd, Validators.required],
      state: [this.bootcamp.state, Validators.required],
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
    this.bootcampService
      .updateBootcamp(
        this.activatedRoute.snapshot.params['id'],
        this.bootcampUpdateForm.value
      )
      .subscribe();
      this.toastrService.success('Bootcamp Güncelleme Başarılı');
  }
}
