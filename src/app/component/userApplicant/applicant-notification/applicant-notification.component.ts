import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IGetAllApplicationResponse } from './../../../models/response/application/getAllApplicationResponse';
import { ApplicationService } from './../../../services/application/application.service';
import { Component, OnInit, ɵɵqueryRefresh } from '@angular/core';
import { IGetApplicationResponse } from 'src/app/models/response/application/getApplicationResponse';

@Component({
  selector: 'app-applicant-notification',
  templateUrl: './applicant-notification.component.html',
  styleUrls: ['./applicant-notification.component.css'],
})
export class ApplicantNotificationComponent implements OnInit {
  applications: IGetAllApplicationResponse[] = [];
  constructor(
    private applicationService: ApplicationService,
    private toastrService: ToastrService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getApplication(localStorage.getItem('userId'));
  }

  getApplication(id: string) {
    this.applicationService
      .getId(id)
      .subscribe((data) => (this.applications = data));
  }
  delete(id: number) {
    this.applicationService.deleteApplication(id).subscribe();
    this.toastrService.error('Başvuru İptal Edildi', 'Dikkat');
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }
}
