import { Component } from '@angular/core';
import { AddUserComponent } from '../add/add-user/add-user.component';
import { UserService } from 'src/app/services/user.service';
import { MatDialog } from '@angular/material/dialog';
import { ValueSearchService } from 'src/app/services/value-search.service';
import { UpdateUserComponent } from '../update/update-user/update-user.component';
import { DeleteComponent } from '../delete/delete.component';

@Component({
  selector: 'app-office-boy',
  templateUrl: './office-boy.component.html',
  styleUrls: ['./office-boy.component.css'],
})
export class OfficeBoyComponent {
  boys: any[] = [];
  searchValue = '';
  constructor(
    private userService: UserService,
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
    this.getBoys();
  }
  getBoys() {
    this.userService.getUsers(3).subscribe({
      next: (boys: any) => {
        this.boys = boys;
        // for (let boy of boys) {
        //   this.userService.getUserRoom(boy._id).subscribe({
        //     next: (room: any) => {
        //       boy.room = room;
        //       boy.dateTime = boy.dateTime.split('T')[0];
        //     },
        //   });
        //   this.boys.push(boy);
        // }
      },
    });
  }
  addBoy() {
    let dailog = this.dailog.open(AddUserComponent, { data: 1});
    dailog.afterClosed().subscribe((result) => {
      this.boys = [];
      this.getBoys();
    });
  }
  updateBoy(id: any) {
    let dailog = this.dailog.open(UpdateUserComponent, { data: { i: 1, id: id } });
    dailog.afterClosed().subscribe((result) => {
      this.boys = [];
      this.getBoys();
    });
  }
  deleteBoy(id: any) {
    let dailog = this.dailog.open(DeleteComponent, { data: { i: 1, id: id } });
    dailog.afterClosed().subscribe((result) => {
      this.boys = [];
      this.getBoys();
    });
  }
}
