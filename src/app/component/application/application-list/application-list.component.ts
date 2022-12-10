import Swal from 'sweetalert2';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ApplicationService } from './../../../services/application/application.service';
import { IGetAllApplicationResponse } from './../../../models/response/application/getAllApplicationResponse';
import { Component, OnInit } from '@angular/core';
import { IGetApplicantResponse } from 'src/app/models/response/applicant/getApplicantResponse';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-application-list',
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.css'],
})
export class ApplicationListComponent implements OnInit {
  applications: IGetAllApplicationResponse[] = [];
  filterApplication: string;

  constructor(
    private applicationService: ApplicationService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => this.getAllApplication());
  }

  getAllApplication() {
    this.applicationService
      .getAllApplication()
      .subscribe((data) => (this.applications = data));
  }
  // deleteApplication(applications: IGetAllApplicationResponse) {
  //   this.applications = this.applications.filter((a) => a !== applications);
  //   this.applicationService.deleteApplication(applications).subscribe();
  //   this.toastrService.error('Başvuru Silindi');
  // }
  deleteApplication(id: number) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn bg-gradient-info active ms-3',
        cancelButton: 'btn bg-gradient-primary active',
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: 'Emin misiniz ?',
        text: 'Bu işlem geri alınamaz',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Evet',
        cancelButtonText: 'Hayır',
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          this.applicationService.deleteApplication(id).subscribe(() => {
            swalWithBootstrapButtons.fire(
              'Silindi',
              'İstediğiniz veri silme işlemi tamamlandı',
              'success'
            );
          }),
            setTimeout(() => {
              window.location.reload();
            }, 1000);
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire(
            'İptal Edildi',
            'Veriniz hala Güvendedir',
            'error'
          );
        }
      });
  }
}
