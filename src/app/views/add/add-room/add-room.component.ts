import { Component } from '@angular/core';
import { RoomService } from 'src/app/services/room.service';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.css']
})
export class AddRoomComponent {

  constructor(private roomService:RoomService) {}
  onSubmit(value:any) {
    this.roomService.addRoom(value).subscribe({
      next: (res: any) => {
      },
    });
  }
}
