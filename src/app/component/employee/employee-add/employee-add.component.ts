import { EmployeeService } from './../../../services/employee/employee.service';
import { ActivatedRoute } from '@angular/router';
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
    private employeeService: EmployeeService
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
    });
  }
  add() {
    if (this.employeeAddForm.valid) {
      let employeeModel = Object.assign({}, this.employeeAddForm.value);
      this.employeeService.addEmployee(employeeModel).subscribe((data) => {
        alert(' Çalışan Eklendi');
      });
    } else {
      alert('Çalışan Eklenemedi Kontol Et');
    }
  }
}
