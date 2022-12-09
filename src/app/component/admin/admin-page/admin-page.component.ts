import { BlacklistService } from './../../../services/blacklist/blacklist.service';
import { ApplicationService } from './../../../services/application/application.service';
import { ApplicantService } from './../../../services/applicant/applicant.service';
import { InstructorService } from './../../../services/instructor/instructor.service';
import { IGetAllBlackListResponse } from './../../../models/response/blackList/getAllBlackListResponse';
import { IGetAllApplicationResponse } from './../../../models/response/application/getAllApplicationResponse';
import { IGetAllApplicantResponse } from './../../../models/response/applicant/getAllApplicantResponse';
import { IGetAllInstructorResponse } from 'src/app/models/response/instructor/getAllInstructorResponse';
import { IGetAllBootcampResponse } from './../../../models/response/bootcamp/getAllBootcampResponse';
import { BootcampService } from './../../../services/bootcamp/bootcamp.service';
import { IGetAllEmployeeResponse } from './../../../models/response/employee/getAllEmployeeResponse';
import { EmployeeService } from './../../../services/employee/employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css'],
})
export class AdminPageComponent implements OnInit {
  employees: IGetAllEmployeeResponse[] = [];
  instructors: IGetAllInstructorResponse[] = [];
  applicants: IGetAllApplicantResponse[] = [];

  bootcamps: IGetAllBootcampResponse[] = [];
  applications: IGetAllApplicationResponse[] = [];
  blacklists: IGetAllBlackListResponse[] = [];

  constructor(
    private employeeService: EmployeeService,
    private instructorService: InstructorService,
    private applicantService: ApplicantService,
    private bootcampService: BootcampService,
    private applicationService: ApplicationService,
    private blacklistService: BlacklistService
  ) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.getEmployees();
    this.getInstructors();
    this.getApplicants();
    this.getBootcamps();
    this.getApplications();
    this.getBlacklists();
  }
  getEmployees() {
    this.employeeService
      .getAllEmployee()
      .subscribe((data) => (this.employees = data));
  }
  getInstructors() {
    this.instructorService
      .getAllInstructor()
      .subscribe((data) => (this.instructors = data));
  }
  getApplicants() {
    this.applicantService
      .getAllApplicant()
      .subscribe((data) => (this.applicants = data));
  }
  getBootcamps() {
    this.bootcampService
      .getAllBootcamp()
      .subscribe((data) => (this.bootcamps = data));
  }
  getApplications() {
    this.applicationService
      .getAllApplication()
      .subscribe((data) => (this.applications = data));
  }
  getBlacklists() {
    this.blacklistService
      .getAllBlackList()
      .subscribe((data) => (this.blacklists = data));
  }
}
