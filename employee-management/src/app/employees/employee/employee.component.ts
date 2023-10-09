import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/service/employee.service';
import { Person } from 'src/app/interface/employee.interface';
import { FormBuilder } from '@angular/forms';
import { NzModalService } from 'ng-zorro-antd/modal';
import { CreateEmployeeComponent } from '../create-employee/create-employee.component';
import { EditEmployeeComponent } from '../edit-employee/edit-employee.component';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  data: Person[] = [];
  constructor(
    private employeeService: EmployeeService,
    private modalService: NzModalService,
  )
  {}

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees() {
    this.employeeService.getAllEmployees().subscribe((res) => {
      this.data = res.data;
    });
  }

  openCreateBlogModal(): void {
    const modal = this.modalService.create({
      nzTitle: 'Create employee',
      nzContent: CreateEmployeeComponent,
      nzWidth: '1000px',
      nzStyle: {
        height: '100%',
      },
      nzFooter: null,
    });

    modal.afterClose.subscribe((res) => {
      this.getEmployees();
    });
  }

  showEditEmployeeModal(employeeId: number) {
    const modal = this.modalService.create({
      nzTitle: 'Edit Blog',
      nzContent: EditEmployeeComponent,
      nzWidth: '1000px',
      nzFooter: null,
      nzComponentParams: {
        employeeId: employeeId,
      },
    });
    modal.afterClose.subscribe(() => {
      this.getEmployees();
    });
  }
  
}