import { Component } from '@angular/core';
import { AddRoomComponent } from '../add/add-room/add-room.component';
import { MatDialog } from '@angular/material/dialog';
import { CategoryService } from 'src/app/services/category.service';
import { RoomService } from 'src/app/services/room.service';
import { ValueSearchService } from 'src/app/services/value-search.service';
import { UpdateRoomComponent } from '../update/update-room/update-room.component';
import { DeleteComponent } from '../delete/delete.component';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css'],
})
export class RoomComponent {
  rooms: any[] = [];
  searchValue = '';
  constructor(
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
    this.getRooms();
  }
  getRooms() {
    this.roomService.getRooms().subscribe({
      next: (rooms: any) => {
        this.rooms = rooms;
        // for (let room of rooms) {
        //   this.roomService.getCreatedBy(room._id).subscribe({
        //     next: (owner: any) => {
        //       room.owner = owner;
        //     },
        //   });
        //   this.rooms.push(room);
        // }
      },
    });
  }
  addRoom() {
    let dailog = this.dailog.open(AddRoomComponent);
    dailog.afterClosed().subscribe((result) => {
      this.rooms = [];
      this.getRooms();
    });
  }
  updateRoom(id: any) {
    let dailog = this.dailog.open(UpdateRoomComponent, { data: id });
    dailog.afterClosed().subscribe((result) => {
      this.rooms = [];
      this.getRooms();
    });
  }
  deleteRoom(id: any) {
    let dailog = this.dailog.open(DeleteComponent, {
      data: { i: 4, id: id },
    });
    dailog.afterClosed().subscribe((result) => {
      this.rooms = [];
      this.getRooms();
    });
  }
}
