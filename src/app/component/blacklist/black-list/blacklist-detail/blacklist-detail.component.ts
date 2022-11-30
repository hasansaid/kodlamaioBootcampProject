import { ActivatedRoute } from '@angular/router';
import { IGetBlackListResponse } from './../../../../models/response/blackList/getBlackListResponse';
import { BlacklistService } from './../../../../services/blacklist/blacklist.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blacklist-detail',
  templateUrl: './blacklist-detail.component.html',
  styleUrls: ['./blacklist-detail.component.css'],
})
export class BlacklistDetailComponent implements OnInit {
  blacklists: IGetBlackListResponse[] = [];
  constructor(
    private blacklistService: BlacklistService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) =>
      this.getBootcamp(params['id'])
    );
  }

  getBootcamp(id: number) {
    this.blacklistService
      .getBlackList(id)
      .subscribe((data) => (this.blacklists = data));
  }
}
