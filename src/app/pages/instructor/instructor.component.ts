import { LoginEmployeeService } from './../../services/login-employee/login-employee.service';
import { LoginInstructorService } from './../../services/login-instructor/login-instructor.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instructor',
  templateUrl: './instructor.component.html',
  styleUrls: ['./instructor.component.css']
})
export class InstructorComponent implements OnInit {

  constructor(private loginEmployeeService:LoginEmployeeService,
    private router: Router) { }

  ngOnInit(): void {
  
  }

  logout() {
    this.loginEmployeeService.logout();
    this.router.navigate(['']);
  }

}
