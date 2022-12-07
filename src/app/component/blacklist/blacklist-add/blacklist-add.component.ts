import { ICreateApplicantRequest } from './../../../models/request/applicant/createApplicantRequest';
import { ICreateBlackListRequest } from './../../../models/request/blackList/createBlackListRequest';
import { ApplicantService } from 'src/app/services/applicant/applicant.service';
import { ICreateApplicationRequest } from './../../../models/request/application/createApplicationRequest';
import { BlacklistService } from './../../../services/blacklist/blacklist.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-blacklist-add',
  templateUrl: './blacklist-add.component.html',
  styleUrls: ['./blacklist-add.component.css'],
})
export class BlacklistAddComponent implements OnInit {
  blackListAddForm: FormGroup;
  getApplicant: ICreateApplicantRequest;
  id: number;
  today: Date = new Date();
  date: any =
    this.today.getDate() +
    '/' +
    this.today.getMonth() +
    '/' +
    this.today.getFullYear();

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private blacklistService: BlacklistService,
    private toastrService: ToastrService,
    private router: Router,
    private applicantService: ApplicantService
  ) {}

  ngOnInit(): void {
    this.createAddBlackListForm();
  }
  getAplicantById(id: number) {
    this.applicantService.getApplicant(id).subscribe((data) => {
      this.getApplicant = data;
    });
  }

  createAddBlackListForm() {
    this.blackListAddForm = this.formBuilder.group({
      date: [this.date],
      reason: ['', Validators.required],
    });
  }

  addBlackList() {
    if (this.blackListAddForm.valid) {
      let blackListAddRequest: ICreateBlackListRequest = Object.assign(
        {},
        this.blackListAddForm.value
      );
      this.activatedRoute.params.subscribe((params) => {
        blackListAddRequest.applicantId = params['id'];
        this.id = params['id'];
      });
      this.applicantService
        .getApplicant(blackListAddRequest.applicantId)
        .subscribe((data) => {
          blackListAddRequest.applicantName =
            data.firstName + ' ' + data.lastName;

          this.blacklistService
            .addBlackList(blackListAddRequest)
            .subscribe((data) => {
              this.toastrService.success('Kara Listeye Eklendi', 'Başarılı');
              this.router.navigate(['admin/admin-blacklist']);
            });
        });

      this.updateApplicantState();
    } else {
      this.toastrService.error('Form Eksik', 'Hata');
    }
  }
  updateApplicantState() {
    this.applicantService.updateApplicantState(this.id, 0).subscribe((val) => {
      this.toastrService.success('Aplicant updated');
    });
  }

  add() {
    if (this.blackListAddForm.valid) {
      let blackListModel = Object.assign({}, this.blackListAddForm.value);
      this.blacklistService.addBlackList(blackListModel).subscribe((data) => {
        this.toastrService.success('Kara Liste Ekleme Başarılı');
        this.router.navigate(['/admin/admin-blacklist']);
      });
    } else {
      this.toastrService.warning('Form Eksik!!!');
    }
  }
}
