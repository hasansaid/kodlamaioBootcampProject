import { IUpdateBlackListRequest } from './../../../models/request/blackList/updateBlackListRequest';
import { BlacklistService } from './../../../services/blacklist/blacklist.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-blacklist-update',
  templateUrl: './blacklist-update.component.html',
  styleUrls: ['./blacklist-update.component.css'],
})
export class BlacklistUpdateComponent implements OnInit {
  blackListUpdateForm: FormGroup;
  blacklist: IUpdateBlackListRequest;
  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private blacklistService: BlacklistService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.getByIdBlackList();
  }

  createBlackListUpdateForm() {
    this.blackListUpdateForm = this.formBuilder.group({
      id: [this.blacklist.id, Validators.required],
      applicantId: [this.blacklist.applicantId, Validators.required],
      date: [this.blacklist.date, Validators.required],
      reason: [this.blacklist.reason, Validators.required],
    });
  }

  getBlackList(id: number) {
    this.blacklistService.getBlackList(id).subscribe((data) => {
      this.blacklist = data;
      this.createBlackListUpdateForm();
    });
  }
  getByIdBlackList() {
    this.activatedRoute.params.subscribe((params) => {
      this.getBlackList(params['id']);
    });
  }

  updateBlackList() {
    this.blacklistService
      .updateBlackList(
        this.activatedRoute.snapshot.params['id'],
        this.blackListUpdateForm.value
      )
      .subscribe();
      this.toastrService.success('Güncellemeniz Gerçekleşmiştir');
  }
}
