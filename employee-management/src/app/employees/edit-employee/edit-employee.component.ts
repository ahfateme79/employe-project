import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { EmployeeService } from 'src/app/service/employee.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Person } from 'src/app/interface/employee.interface';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css'],
})
export class EditEmployeeComponent {
  @Input() employeeId!: number;
  employee!: Person;

  createForm!: FormGroup;
  constructor(
    private employeeService: EmployeeService,
    private fb: FormBuilder,
    private modalRef: NzModalRef,
    private notification: NzNotificationService
  ) {}

  ngOnInit(): void {
    this.getEmployeesById();
    this.createForm = this.fb.group({
      name: [this.employee?.employee_name, [Validators.required]],
      salary: [this.employee?.employee_salary, [Validators.required]],
      age: [this.employee?.employee_age, [Validators.required]],
    });
  }

  getEmployeesById() {
    const id = this.employeeId;
    this.employeeService.getEmployeeById(id).subscribe((res) => {
      this.employee = res.data;
      this.createForm.patchValue({
        name: this.employee.employee_name,
        salary: this.employee.employee_salary,
        age: this.employee.employee_age,
      });
    });
  }

  onCreateEmployeeSubmit(form: FormGroup): void {
    if (this.createForm.invalid) {
      return;
    }
    const data = {
      employee_name: form.value.name,
      employee_salary: form.value.salary,
      employee_age: form.value.age,
    };

    this.employeeService
      .updateEmployee(this.employeeId, data)
      .subscribe((res) => {
        if (res.status === 'success') {
          this.modalRef.destroy();
          this.notification.success('create successfull', res.message, {
            nzKey: 'key',
          });
        }
      });
  }
}
