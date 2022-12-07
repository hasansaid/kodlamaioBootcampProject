import { ApplicantService } from 'src/app/services/applicant/applicant.service';
import Swal from 'sweetalert2';
import { IGetAllBlackListResponse } from './../../../models/response/blackList/getAllBlackListResponse';
import { ActivatedRoute, Router } from '@angular/router';
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
    private toastrService: ToastrService,
    private applicantService: ApplicantService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAllBlackList();
  }

  getAllBlackList() {
    this.blacklistService.getAllBlackList().subscribe((data) => {
      this.blacklists = data;
      console.log(data, ' DATA');
    });
  }

  getAplicantById(id: number) {
    this.applicantService.getApplicant(id).subscribe((data) => {
      console.log(data.firstName);
    });
  }

  removeApplicant(id: number, applicantId: number) {
    this.blacklistService.removeApplicant(id).subscribe((response) => {
      this.toastrService.warning('Aday Silindi');
      this.applicantService.updateApplicantState(applicantId, 1).subscribe();
      this.toastrService.success('Aday Kaldırıldı');
      this.router.navigate(['admin-applicant']);
    });
  }

  // deleteBlackList(blackList: IGetAllBlackListResponse) {
  //   this.blacklists = this.blacklists.filter((a) => a !== blackList);
  //   this.blacklistService.deleteBlackList(blackList).subscribe();
  //    this.toastrService.success('Kara Liste Sil Başarılı');
  // }
  // deleteBlackList(id: number) {
  //   const swalWithBootstrapButtons = Swal.mixin({
  //     customClass: {
  //       confirmButton: 'btn bg-gradient-info active ms-3',
  //       cancelButton: 'btn bg-gradient-primary active',
  //     },
  //     buttonsStyling: false,
  //   });
  //   swalWithBootstrapButtons
  //     .fire({
  //       title: 'Emin misiniz ? ',
  //       text: 'Bu işlem geri alınamaz',
  //       icon: 'warning',
  //       showCancelButton: true,
  //       confirmButtonText: 'Evet',
  //       cancelButtonText: 'Hayır',
  //       reverseButtons: true,
  //     })
  //     .then((result) => {
  //       if (result.isConfirmed) {
  //         this.blacklistService.deleteBlackList(id).subscribe(() => {
  //           swalWithBootstrapButtons.fire(
  //             'Silindi',
  //             'İstediğiniz veri silme işlemi tamamlandı',
  //             'success'
  //           );
  //         }),
  //           setTimeout(() => {
  //             window.location.reload();
  //           }, 1000);
  //       } else if (result.dismiss === Swal.DismissReason.cancel) {
  //         swalWithBootstrapButtons.fire(
  //           'İptal Edildi',
  //           'Veriniz hala Güvende',
  //           'error'
  //         );
  //       }
  //     });
  // }
}
