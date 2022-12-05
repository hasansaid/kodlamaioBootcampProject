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

@Component({
  selector: 'app-blacklist-add',
  templateUrl: './blacklist-add.component.html',
  styleUrls: ['./blacklist-add.component.css'],
})
export class BlacklistAddComponent implements OnInit {
  blackListAddForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private blacklistService: BlacklistService,
    private toastrService: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createAddBlackListForm();
  }

  createAddBlackListForm() {
    this.blackListAddForm = this.formBuilder.group({
      applicantId: ['', Validators.required],
      date: ['', Validators.required],
      reason: ['', Validators.required],
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
