import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzTableModule } from 'ng-zorro-antd/table';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzFormModule } from 'ng-zorro-antd/form';
import { ReactiveFormsModule } from '@angular/forms';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzInputModule } from 'ng-zorro-antd/input';

const routes: Routes = [
  {
    path: '',
    component: EmployeeComponent,
    title: 'employee',
  },
  {
    path: 'employee-detail/:id',
    component: EmployeeDetailComponent,
    title: 'employee',
  },
];

@NgModule({
  declarations: [
    EmployeeComponent,
    EmployeeDetailComponent,
    CreateEmployeeComponent,
    EditEmployeeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NzTableModule,
    NzButtonModule,
    NzModalModule,
    NzFormModule,
    ReactiveFormsModule,
    NzNotificationModule,
    NzInputModule,
    
  ],
})
export class EmployeesModule {}
