import { ActivatedRoute } from '@angular/router';
import { InstructorService } from './../../../services/instructor/instructor.service';
import { IGetInstructorResponse } from './../../../models/response/instructor/getInstructorResponse';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instructor-detail',
  templateUrl: './instructor-detail.component.html',
  styleUrls: ['./instructor-detail.component.css'],
})
export class InstructorDetailComponent implements OnInit {
  instructors: IGetInstructorResponse[] = [];
  constructor(
    private instructorService: InstructorService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) =>
      this.getInstructor(params['id'])
    );
  }
  getInstructor(id: number) {
    this.instructorService
      .getInstructor(id)
      .subscribe((data) => (this.instructors = data));
  }
}
