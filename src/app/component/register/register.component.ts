import { RegisterService } from './../../services/register/register.service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private registerService: RegisterService,
    private toastrService: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createAddUsersForm();
  }

  createAddUsersForm() {
    this.registerForm = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      role: ['roleApplicant'],
      token: ['aa'],
      expiration: ['20.10.2022'],
    });
  }
  add() {
    if (this.registerForm.valid) {
      let userModel = Object.assign({}, this.registerForm.value);
      this.registerService.addUsers(userModel).subscribe((data) => {
        this.toastrService.success('Kayıt Başarılı ');
        this.router.navigate(['']);
      });
    } else {
      this.toastrService.warning('Form Eksik!!!');
    }
  }
}
