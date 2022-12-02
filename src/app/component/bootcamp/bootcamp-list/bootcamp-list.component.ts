import { ActivatedRoute } from '@angular/router';
import { IGetAllBootcampResponse } from './../../../models/response/bootcamp/getAllBootcampResponse';
import { BootcampService } from './../../../services/bootcamp/bootcamp.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bootcamp-list',
  templateUrl: './bootcamp-list.component.html',
  styleUrls: ['./bootcamp-list.component.css'],
})
export class BootcampListComponent implements OnInit {
  bootcamps: IGetAllBootcampResponse[] = [];

  constructor(
    private bootcampService: BootcampService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => this.getAllBootcamp());
  }

  getAllBootcamp() {
    this.bootcampService
      .getAllBootcamp()
      .subscribe((data) => (this.bootcamps = data));
  }
  deleteBootcamp(bootcamp: IGetAllBootcampResponse) {
    this.bootcamps = this.bootcamps.filter((a) => a !== bootcamp);
    this.bootcampService.deleteBootcamp(bootcamp).subscribe();
  }
}
