import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUpdateEmployeeRequest } from 'src/app/models/request/employee/updateEmployeeRequest';
import { EmployeeService } from 'src/app/services/employee/employee.service';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css'],
})
export class EmployeeUpdateComponent implements OnInit {
  employeeUpdateForm: FormGroup;
  employee: IUpdateEmployeeRequest;

  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private employeeService: EmployeeService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.getByIdEmployee();
  }

  createEmployeeUpdateForm() {
    this.employeeUpdateForm = this.formBuilder.group({
      id: [this.employee.id, Validators.required],
      firstName: [this.employee.firstName, Validators.required],
      lastName: [this.employee.lastName, Validators.required],
      email: [this.employee.email, Validators.required],
      password: [this.employee.password, Validators.required],
      nationalIdentity: [this.employee.nationalIdentity, Validators.required],
      dateOfBirth: [this.employee.dateOfBirth, Validators.required],
      position: [this.employee.position, Validators.required],
      image: [this.employee.image, Validators.required],
    });
  }

  getEmployee(id: number) {
    this.employeeService.getEmployee(id).subscribe((data) => {
      this.employee = data;
      this.createEmployeeUpdateForm();
    });
  }

  getByIdEmployee() {
    this.activatedRoute.params.subscribe((params) => {
      this.getEmployee(params['id']);
    });
  }

  updateEmployee() {
    this.employeeService
      .updateEmployee(
        this.activatedRoute.snapshot.params['id'],
        this.employeeUpdateForm.value
      )
      .subscribe();
    this.toastrService.success('Düzenleme Başarılı');
  }
}
