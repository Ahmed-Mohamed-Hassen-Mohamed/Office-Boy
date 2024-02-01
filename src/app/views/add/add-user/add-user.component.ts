import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CategoryService } from 'src/app/services/category.service';
import { RoomService } from 'src/app/services/room.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent {
  hide = true;
  rooms: any[] = [];
  constructor(
    private userService: UserService,
    private roomService: RoomService,
    @Inject(MAT_DIALOG_DATA) public i: any,
  ) {}
  ngOnInit(): void {
    this.getCategories();
  }
  getCategories() {
    this.roomService.getRooms().subscribe({
      next: (rooms: any) => {
        this.rooms = rooms;
      },
    });
  }
  onSubmit(value: any) {
    value.roles = Number(value.roles);
    this.userService.addUser(value).subscribe({
      next: (res: any) => {},
    });
  }
}
