import { ToastrService } from 'ngx-toastr';
import { EmployeeService } from './../../../services/employee/employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css'],
})
export class EmployeeAddComponent implements OnInit {
  employeeAddForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private employeeService: EmployeeService,
    private toastrService: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createAddEmployeeForm();
  }

  createAddEmployeeForm() {
    this.employeeAddForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      nationalIdentity: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      position: ['', Validators.required],
      image: ['', Validators.required],
    });
  }
  // add() {
  //   if (this.employeeAddForm.valid) {
  //     let employeeModel = Object.assign({}, this.employeeAddForm.value);
  //     this.employeeService.addEmployee(employeeModel).subscribe((data) => {
  //       this.toastrService.success('Çalışan Ekleme Başarılı');
  //       this.router.navigate(['/admin/admin-employee']);
  //     });
  //   } else {
  //     this.toastrService.warning('Form Eksik!!!');
  //   }
  // }
}
