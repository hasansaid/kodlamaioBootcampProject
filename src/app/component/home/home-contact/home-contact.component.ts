import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-contact',
  templateUrl: './home-contact.component.html',
  styleUrls: ['./home-contact.component.css'],
})
export class HomeContactComponent implements OnInit {
  constructor(private toastrService: ToastrService) {}

  ngOnInit(): void {}

  formSend() {
    this.toastrService.success('Mesajınız Başarıyla Gönderilmiştir.');
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }
}
