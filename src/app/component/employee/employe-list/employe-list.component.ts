import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from './../../../services/employee/employee.service';
import { IGetAllEmployeeResponse } from './../../../models/response/employee/getAllEmployeeResponse';
import { Component, OnInit } from '@angular/core';
import { TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-employe-list',
  templateUrl: './employe-list.component.html',
  styleUrls: ['./employe-list.component.css'],
})
export class EmployeListComponent implements OnInit {
  modalRef?: BsModalRef;
  employees: IGetAllEmployeeResponse[] = [];
  constructor(
    private employeeService: EmployeeService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => this.getAllEmployee());
  }

  getAllEmployee() {
    this.employeeService
      .getAllEmployee()
      .subscribe((data) => (this.employees = data));
  }
  // deleteEmployee(employee: IGetAllEmployeeResponse) {
  //   this.employees = this.employees.filter((a) => a !== employee);
  //   this.employeeService.deleteEmployee(employee).subscribe();
  //   this.toastrService.error('Çalışan Silme Başarılı');
  //   this.router.navigate(['/admin/admin-employee']);
  // }

  deleteToEmployee(id: number) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn bg-gradient-info active ms-3',
        cancelButton: 'btn bg-gradient-primary active',
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: 'Emin misiniz?',
        text: 'Bu işlem geri alınamaz!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Evet!',
        cancelButtonText: 'Hayır',
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          this.employeeService.deleteEmp(id).subscribe(() => {
            swalWithBootstrapButtons.fire(
              'Silindi!',
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
            'Veriniz hala güvende :)',
            'error'
          );
        }
      });
  }
}
