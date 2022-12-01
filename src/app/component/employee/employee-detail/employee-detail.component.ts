import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from './../../../services/employee/employee.service';
import { IGetEmployeeResponse } from './../../../models/response/employee/getEmployeeResponse';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css'],
})
export class EmployeeDetailComponent implements OnInit {
  employee: IGetEmployeeResponse;
  constructor(
    private employeeService: EmployeeService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) =>
      this.getEmployee(params['id'])
    );
  }

  getEmployee(id: number) {
    this.employeeService
      .getEmployee(id)
      .subscribe((data) => (this.employee = data));
  }
}
