import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { RoomService } from 'src/app/services/room.service';

@Component({
  selector: 'app-update-room',
  templateUrl: './update-room.component.html',
  styleUrls: ['./update-room.component.css'],
})
export class UpdateRoomComponent {
  constructor(
    private roomService: RoomService,
    private dailog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public id: any
  ) {}
  ngOnInit(): void {
    this.getRoom();
  }
  room: any;
  getRoom() {
    this.roomService.getRoom(this.id).subscribe({
      next: (room: any) => {
        this.room = room;
      },
    });
  }
  onSubmit(value: any) {
    this.roomService.updateRoom(this.id, value).subscribe({
      next: (res: any) => {},
    });
  }
}
