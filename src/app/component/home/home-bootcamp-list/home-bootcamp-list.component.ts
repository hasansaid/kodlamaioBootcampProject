import { ActivatedRoute } from '@angular/router';
import { BootcampService } from './../../../services/bootcamp/bootcamp.service';
import { IGetAllBootcampResponse } from './../../../models/response/bootcamp/getAllBootcampResponse';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-bootcamp-list',
  templateUrl: './home-bootcamp-list.component.html',
  styleUrls: ['./home-bootcamp-list.component.css'],
})
export class HomeBootcampListComponent implements OnInit {
  bootcamps: IGetAllBootcampResponse[] = [];

  constructor(
    private bootcampService: BootcampService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => this.getAllBootcampList());
  }

  getAllBootcampList() {
    this.bootcampService
      .getAllBootcamp()
      .subscribe((data) => (this.bootcamps = data));
  }
}
