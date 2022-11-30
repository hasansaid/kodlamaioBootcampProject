import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from './../../../services/employee/employee.service';
import { IGetAllEmployeeResponse } from './../../../models/response/employee/getAllEmployeeResponse';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employe-list',
  templateUrl: './employe-list.component.html',
  styleUrls: ['./employe-list.component.css'],
})
export class EmployeListComponent implements OnInit {
  employees: IGetAllEmployeeResponse[] = [];
  constructor(
    private employeeService: EmployeeService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => this.getAllEmployee());
  }

  getAllEmployee() {
    this.employeeService
      .getAllEmployee()
      .subscribe((data) => (this.employees = data));
  }
}
