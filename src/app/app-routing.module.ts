import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { CategoryComponent } from './views/category/category.component';
import { SubCategoryComponent } from './views/sub-category/sub-category.component';
import { EmployeeComponent } from './views/employee/employee.component';
import { OfficeBoyComponent } from './views/office-boy/office-boy.component';
import { AddUserComponent } from './views/add/add-user/add-user.component';
import { AddCategoryComponent } from './views/add/add-category/add-category.component';
import { AddSubCategoryComponent } from './views/add/add-sub-category/add-sub-category.component';
import { SignInComponent } from './views/sign-in/sign-in.component';
import { RoomComponent } from './views/room/room.component';
import { UpdateCategoryComponent } from './views/update/update-category/update-category.component';
import { UpdateSubCategoryComponent } from './views/update/update-sub-category/update-sub-category.component';
import { UpdateRoomComponent } from './views/update/update-room/update-room.component';
import { UpdateUserComponent } from './views/update/update-user/update-user.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuardService] },
  {
    path: 'category',
    component: CategoryComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'subCategory',
    component: SubCategoryComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'employee',
    component: EmployeeComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'officeBoy',
    component: OfficeBoyComponent,
    canActivate: [AuthGuardService],
  },
  { path: 'room', component: RoomComponent, canActivate: [AuthGuardService] },
  {
    path: 'addUser',
    component: AddUserComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'addCategory',
    component: AddCategoryComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'addSubCategory',
    component: AddSubCategoryComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'updateCategory',
    component: UpdateCategoryComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'updateSubCategory',
    component: UpdateSubCategoryComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'updateRoom',
    component: UpdateRoomComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'updateUser',
    component: UpdateUserComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuardService],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
