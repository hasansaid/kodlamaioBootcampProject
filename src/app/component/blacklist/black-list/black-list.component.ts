import Swal from 'sweetalert2';
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
  // deleteBlackList(blackList: IGetAllBlackListResponse) {
  //   this.blacklists = this.blacklists.filter((a) => a !== blackList);
  //   this.blacklistService.deleteBlackList(blackList).subscribe();
  //    this.toastrService.success('Kara Liste Sil Başarılı');
  // }
  deleteBlackList(id: number) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn bg-gradient-info active ms-3',
        cancelButton: 'btn bg-gradient-primary active',
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: 'Emin misiniz ? ',
        text: 'Bu işlem geri alınamaz',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Evet',
        cancelButtonText: 'Hayır',
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          this.blacklistService.deleteBlackList(id).subscribe(() => {
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
            'Veriniz hala Güvende',
            'error'
          );
        }
      });
  }
}
