import { ActivatedRoute } from '@angular/router';
import { IGetAllBootcampResponse } from './../../../models/response/bootcamp/getAllBootcampResponse';
import { BootcampService } from './../../../services/bootcamp/bootcamp.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instructor-bootcamp',
  templateUrl: './instructor-bootcamp.component.html',
  styleUrls: ['./instructor-bootcamp.component.css'],
})
export class InstructorBootcampComponent implements OnInit {
  bootcamps: IGetAllBootcampResponse[] = [];
  constructor(
    private bootcampService: BootcampService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getBootcamps(localStorage.getItem('instructorId'));
  }
  getBootcamps(id: string) {
    this.bootcampService
      .getInstructorBootcamp(id)
      .subscribe((data) => (this.bootcamps = data));
  }
}
