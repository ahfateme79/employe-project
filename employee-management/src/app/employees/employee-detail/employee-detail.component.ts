import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css'],
})
export class EmployeeDetailComponent implements OnInit {
  data: any;
  employeeId!: number;
  constructor(
    private employeeService: EmployeeService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      const id = paramMap.get('id');
      if (id) {
        this.employeeId = +id;
        this.getEmployeesById(this.employeeId);
      } else {
        console.error('ID parameter not found');
      }
    });
  }

  getEmployeesById(id: number) {
    this.employeeService.getEmployeeById(id).subscribe((res) => {
      this.data = res.data;
    });
  }
}
