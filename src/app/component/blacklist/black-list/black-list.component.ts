import { IGetAllBlackListResponse } from './../../../models/response/blackList/getAllBlackListResponse';
import { ActivatedRoute } from '@angular/router';
import { BlacklistService } from './../../../services/blacklist/blacklist.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-black-list',
  templateUrl: './black-list.component.html',
  styleUrls: ['./black-list.component.css'],
})
export class BlackListComponent implements OnInit {
  blacklists: IGetAllBlackListResponse[] = [];

  constructor(
    private blacklistService: BlacklistService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => this.getAllBlackList());
  }

  getAllBlackList() {
    this.blacklistService
      .GetAllBlackList()
      .subscribe((data) => (this.blacklists = data));
  }
  deleteBlackList(blackList: IGetAllBlackListResponse) {
    this.blacklists = this.blacklists.filter((a) => a !== blackList);
    this.blacklistService.deleteBlackList(blackList).subscribe();
     this.toastrService.success('Kara Liste Sil Başarılı');
  }
}
