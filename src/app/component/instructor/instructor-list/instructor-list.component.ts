import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { InstructorService } from './../../../services/instructor/instructor.service';
import { Component, OnInit } from '@angular/core';
import { IGetAllInstructorResponse } from 'src/app/models/response/instructor/getAllInstructorResponse';

@Component({
  selector: 'app-instructor-list',
  templateUrl: './instructor-list.component.html',
  styleUrls: ['./instructor-list.component.css'],
})
export class InstructorListComponent implements OnInit {
  instructors: IGetAllInstructorResponse[] = [];
  constructor(
    private instructorService: InstructorService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => this.getAllInstructor());
  }

  getAllInstructor() {
    this.instructorService
      .getAllInstructor()
      .subscribe((data) => (this.instructors = data));
  }
  deleteInsturctor(employee: IGetAllInstructorResponse) {
    this.instructors = this.instructors.filter((a) => a !== employee);
    this.instructorService.deleteInstructor(employee).subscribe();
    this.toastrService.error('Çalışan Silme Başarılı');
    this.router.navigate(['/admin/admin-instructor']);
  }
}
