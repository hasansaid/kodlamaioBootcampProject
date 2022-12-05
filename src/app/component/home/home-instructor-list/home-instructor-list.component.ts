import { ActivatedRoute } from '@angular/router';
import { IGetAllInstructorResponse } from './../../../models/response/instructor/getAllInstructorResponse';
import { InstructorService } from './../../../services/instructor/instructor.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-instructor-list',
  templateUrl: './home-instructor-list.component.html',
  styleUrls: ['./home-instructor-list.component.css'],
})
export class HomeInstructorListComponent implements OnInit {
  instructors: IGetAllInstructorResponse[] = [];
  constructor(
    private instructorService: InstructorService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => this.getInstructors());
  }

  getInstructors() {
    this.instructorService
      .getAllInstructor()
      .subscribe((data) => (this.instructors = data));
  }
}
