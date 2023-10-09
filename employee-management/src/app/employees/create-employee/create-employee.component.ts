import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { EmployeeService } from 'src/app/service/employee.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Person } from 'src/app/interface/employee.interface';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent {
  createForm!: FormGroup;
  constructor(
    private employeeService: EmployeeService,
    private fb: FormBuilder,
    private modalRef: NzModalRef,
    private notification: NzNotificationService
  ) {}

  ngOnInit(): void {
    this.createForm = this.fb.group({
      name: ['', [Validators.required]],
      salary: [null, [Validators.required]],
      age: [null, [Validators.required]],
    });
  }


  onCreateEmployeeSubmit(form: FormGroup): void {
    if (this.createForm.invalid) {
      return;
    }

    const data= {
      employee_name: form.value.name,
      employee_salary: form.value.salary,
      employee_age: form.value.age,
    };

    this.employeeService.createEmployee(data).subscribe((res) => {
      if (res.status === 'success') {
        this.modalRef.destroy();
        this.notification.success('create successfull', res.message, {
          nzKey: 'key'
        });
      }
    });
  }
}
