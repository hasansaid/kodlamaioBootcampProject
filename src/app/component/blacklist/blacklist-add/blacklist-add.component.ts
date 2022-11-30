import { BlacklistService } from './../../../services/blacklist/blacklist.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
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
    private blacklistService: BlacklistService
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
        alert('Kara Listeye Eklendi');
      });
    } else {
      alert('Karalisteye Eklenemedi Kontol Et');
    }
  }
}
