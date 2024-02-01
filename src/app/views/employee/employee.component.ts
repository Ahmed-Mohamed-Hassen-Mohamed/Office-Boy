import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddUserComponent } from '../add/add-user/add-user.component';
import { UserService } from 'src/app/services/user.service';
import { ValueSearchService } from 'src/app/services/value-search.service';
import { UpdateUserComponent } from '../update/update-user/update-user.component';
import { DeleteComponent } from '../delete/delete.component';
import { RoomService } from 'src/app/services/room.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent {
  employees: any[] = [];
  rooms: any[] = [];
  roomName = 'Select All';
  roomId = '';
  searchValue = '';
  constructor(
    private userService: UserService,
    private roomService: RoomService,
    private valueSearchService: ValueSearchService,
    private dailog: MatDialog
  ) {
    this.valueSearchService.value$.subscribe((value) => {
      if (value != 'Initial Value') {
        this.searchValue = value;
      }
    });
  }
  ngOnInit(): void {
    this.getEmployees();
    this.getRooms();
  }
  getRooms() {
    this.roomService.getRooms().subscribe({
      next: (rooms: any) => {
        this.rooms = rooms;
        this.rooms = rooms.filter((elem: any) => !elem.name.startsWith('B'));
      },
    });
  }
  getEmployees() {
    this.userService.getUsers(2).subscribe({
      next: (employees: any) => {
        this.employees = employees;
        // for (let employee of employees) {
        //   this.userService.getUserRoom(employee._id).subscribe({
        //     next: (room: any) => {
        //       employee.room = room;
        //       employee.dateTime = employee.dateTime.split('T')[0];
        //     },
        //   });
        //   this.employees.push(employee);
        // }
      },
    });
  }
  addEmployee() {
    let dailog = this.dailog.open(AddUserComponent, { data: 0 });
    dailog.afterClosed().subscribe((result) => {
      this.employees = [];
      this.getEmployees();
    });
  }
  updateEmployee(id: any) {
    let dailog = this.dailog.open(UpdateUserComponent, {
      data: { i: 0, id: id },
    });
    dailog.afterClosed().subscribe((result) => {
      this.employees = [];
      this.getEmployees();
    });
  }
  deleteEmployee(id: any) {
    let dailog = this.dailog.open(DeleteComponent, { data: { i: 0, id: id } });
    dailog.afterClosed().subscribe((result) => {
      this.employees = [];
      this.getEmployees();
    });
  }
  filter(category: any) {
    if (category == 'room') {
      this.roomName = 'Select All';
      this.roomId = '';
    } else {
      this.roomName = category.name;
      this.roomId = category._id;
    }
  }
}
