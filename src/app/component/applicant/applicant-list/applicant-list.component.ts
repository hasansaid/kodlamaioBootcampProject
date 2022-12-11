import { LoginEmployeeService } from './../../../services/login-employee/login-employee.service';
import Swal from 'sweetalert2';
import { IGetAllApplicantResponse } from './../../../models/response/applicant/getAllApplicantResponse';
import { ApplicantService } from './../../../services/applicant/applicant.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-applicant-list',
  templateUrl: './applicant-list.component.html',
  styleUrls: ['./applicant-list.component.css'],
})
export class ApplicantListComponent implements OnInit {
  applicants: IGetAllApplicantResponse[] = [];
  filterApplicant: string;

  constructor(
    private applicantService: ApplicantService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAllApplicant();
  }

  getAllApplicant() {
    this.applicantService
      .getAllApplicant()
      .subscribe((data) => (this.applicants = data));
  }
  // deleteApplicant(applicant: IGetAllApplicantResponse) {
  //   this.applicants = this.applicants.filter((a) => a !== applicant);
  //   this.applicantService.deleteApplicant(applicant).subscribe();
  //   this.toastrService.error('Aday Silindi');
  // }

  sendId(id: number) {
    console.log(id, ' GELDİ');
  }
  deleteApplicant(id: number) {
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
        text: 'Bu işlem geri alınamaz!!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Evet',
        cancelButtonText: 'Hayır',
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          this.applicantService.deleteApplicant(id).subscribe(() => {
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
            'İptal edildi',
            'Veriniz hala Güvende',
            'error'
          );
        }
      });
  }
}
