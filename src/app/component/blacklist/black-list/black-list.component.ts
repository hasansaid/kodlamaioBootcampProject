import { IGetAllBlackListResponse } from './../../../models/response/blackList/getAllBlackListResponse';
import { ActivatedRoute } from '@angular/router';
import { BlacklistService } from './../../../services/blacklist/blacklist.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-black-list',
  templateUrl: './black-list.component.html',
  styleUrls: ['./black-list.component.css'],
})
export class BlackListComponent implements OnInit {
  blacklists: IGetAllBlackListResponse[] = [];

  constructor(
    private blacklistService: BlacklistService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => this.getAllBlackList());
  }

  getAllBlackList() {
    this.blacklistService
      .GetAllBlackList()
      .subscribe((data) => (this.blacklists = data));
  }
}
