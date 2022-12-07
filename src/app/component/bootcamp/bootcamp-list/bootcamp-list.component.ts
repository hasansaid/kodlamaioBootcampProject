import { ActivatedRoute } from '@angular/router';
import { IGetAllBootcampResponse } from './../../../models/response/bootcamp/getAllBootcampResponse';
import { BootcampService } from './../../../services/bootcamp/bootcamp.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bootcamp-list',
  templateUrl: './bootcamp-list.component.html',
  styleUrls: ['./bootcamp-list.component.css'],
})
export class BootcampListComponent implements OnInit {
  bootcamps: IGetAllBootcampResponse[] = [];

  constructor(
    private bootcampService: BootcampService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => this.getAllBootcamp());
  }

  getAllBootcamp() {
    this.bootcampService
      .getAllBootcamp()
      .subscribe((data) => (this.bootcamps = data));
  }
  // deleteBootcamp(bootcamp: IGetAllBootcampResponse) {
  //   this.bootcamps = this.bootcamps.filter((a) => a !== bootcamp);
  //   this.bootcampService.deleteBootcamp(bootcamp).subscribe();
  //   this.toastrService.success('Bootcamp Sil Başarılıı');
  // }
  deleteBootcamp(id: number) {
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
          this.bootcampService.deletebootcamp(id).subscribe(() => {
            swalWithBootstrapButtons.fire(
              'Silindi',
              'İstediğiniz veri silme işlemi tamamlandı.',
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
