import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUpdateEmployeeRequest } from 'src/app/models/request/employee/updateEmployeeRequest';
import { EmployeeService } from 'src/app/services/employee/employee.service';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { ICreateEmployeeRequest } from 'src/app/models/request/employee/createEmployeeRequest';
@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css'],
})
export class EmployeeUpdateComponent implements OnInit {
  employeeUpdateForm: FormGroup;
  employee: IUpdateEmployeeRequest;

  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private employeeService: EmployeeService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.getByIdEmployee();
  }

  createEmployeeUpdateForm() {
    this.employeeUpdateForm = this.formBuilder.group({
      id: [this.employee.id, Validators.required],
      firstName: [this.employee.firstName, Validators.required],
      lastName: [this.employee.lastName, Validators.required],
      email: [this.employee.email, Validators.required],
      password: [this.employee.password, Validators.required],
      nationalIdentity: [this.employee.nationalIdentity, Validators.required],
      dateOfBirth: [this.employee.dateOfBirth, Validators.required],
      position: [this.employee.position, Validators.required],
      image: [this.employee.image, Validators.required],
    });
  }

  getEmployee(id: number) {
    this.employeeService.getEmployee(id).subscribe((data) => {
      this.employee = data;
      this.createEmployeeUpdateForm();
    });
  }

  getByIdEmployee() {
    this.activatedRoute.params.subscribe((params) => {
      this.getEmployee(params['id']);
    });
  }

   updateEmployee() {
    if(this.employeeUpdateForm.valid){
     this.employeeService
      .updateEmployee(
         this.activatedRoute.snapshot.params['id'],
        this.employeeUpdateForm.value
       )
     .subscribe();
     this.toastrService.success('Güncellemeniz Gerçekleşmiştir');
   }else{
    this.toastrService.error('Dikkat Form Eksik!!!');

   }
  }

  
}
  

    
  



//   updateBootcamp() {
//     if (this.employeeUpdateForm.valid) {
//       let bootcamp: ICreateEmployeeRequest = Object.assign(
//         {},
//         this.employeeUpdateForm.value
//       );
//       this.instructorService
//         .getInstructor(bootcamp.instructorId)
//         .subscribe((data) => {
//           bootcamp.instructorName = data.firstName + ' ' + data.lastName;

//           this.bootcampService
//             .updateBootcamp(this.activatedRoute.snapshot.params['id'], bootcamp)
//             .subscribe(() => {
//               this.toastrService.success('Bootcamp Bilgileri Güncellendi');
//             });
//         });
//     } else {
//       this.toastrService.error('Dikkat Form Eksik!!!');
//     }
//   }
// 
