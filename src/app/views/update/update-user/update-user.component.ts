import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { RoomService } from 'src/app/services/room.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css'],
})
export class UpdateUserComponent {
  hide = true;
  rooms: any[] = [];
  user: any;
  constructor(
    private userService: UserService,
    private roomService: RoomService,
    private dailog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}
  ngOnInit(): void {
    this.getCategories();
    this.getUser();
  }
  getUser() {
    this.userService.getUser(this.data.id).subscribe({
      next: (user: any) => {
        this.user = user;
      },
    });
  }
  getCategories() {
    this.roomService.getRooms().subscribe({
      next: (rooms: any) => {
        this.rooms = rooms;
      },
    });
  }
  onSubmit(value: any) {
    if(value.password == '') {
      delete value['password'];
    }
    this.userService.updateUser(this.data.id, value).subscribe({
      next: (res: any) => {},
    });
  }
}
