import { ActivatedRoute } from '@angular/router';
import { IGetBootcampResponse } from './../../../models/response/bootcamp/getBootcampResponse';
import { BootcampService } from './../../../services/bootcamp/bootcamp.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bootcamp-detail',
  templateUrl: './bootcamp-detail.component.html',
  styleUrls: ['./bootcamp-detail.component.css'],
})
export class BootcampDetailComponent implements OnInit {
  bootcamps: IGetBootcampResponse[] = [];
  constructor(
    private bootcampService: BootcampService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) =>
      this.getBootcamp(params['id'])
    );
  }

  getBootcamp(id: number) {
    this.bootcampService.getBootcamp(id).subscribe((data) => {
      this.bootcamps = data;
    });
  }
}
