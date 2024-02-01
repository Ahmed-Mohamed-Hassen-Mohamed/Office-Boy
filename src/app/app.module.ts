import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './views/home/home.component';
import { HeaderComponent } from './layout/header/header.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { SignUpComponent } from './views/sign-up/sign-up.component';
import { SignInComponent } from './views/sign-in/sign-in.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from './services/auth.service';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { UserService } from './services/user.service';
import { EmployeeComponent } from './views/employee/employee.component';
import { OfficeBoyComponent } from './views/office-boy/office-boy.component';
import { AddUserComponent } from './views/add/add-user/add-user.component';
import { AddCategoryComponent } from './views/add/add-category/add-category.component';
import { AddSubCategoryComponent } from './views/add/add-sub-category/add-sub-category.component';
import { CategoryComponent } from './views/category/category.component';
import { SubCategoryComponent } from './views/sub-category/sub-category.component';
import { AddRoomComponent } from './views/add/add-room/add-room.component';
import { RoomComponent } from './views/room/room.component';
import { UpdateRoomComponent } from './views/update/update-room/update-room.component';
import { UpdateUserComponent } from './views/update/update-user/update-user.component';
import { UpdateCategoryComponent } from './views/update/update-category/update-category.component';
import { UpdateSubCategoryComponent } from './views/update/update-sub-category/update-sub-category.component';
import { DeleteComponent } from './views/delete/delete.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NavbarComponent,
    SignUpComponent,
    SignInComponent,
    EmployeeComponent,
    CategoryComponent,
    SubCategoryComponent,
    OfficeBoyComponent,
    AddUserComponent,
    AddCategoryComponent,
    AddSubCategoryComponent,
    AddRoomComponent,
    RoomComponent,
    UpdateRoomComponent,
    UpdateUserComponent,
    UpdateCategoryComponent,
    UpdateSubCategoryComponent,
    DeleteComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [
    AuthService,
    // UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
