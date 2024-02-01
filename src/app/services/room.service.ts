import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  url: string = 'https://cafe-app-su0l.onrender.com/';
  constructor(private http: HttpClient) {}
  addRoom(category: any) {
    return this.http.post(this.url + 'room', category);
  }
  getRooms() {
    return this.http.get(this.url + 'rooms');
  }
  getRoom(id: any) {
    return this.http.get(this.url + 'rooms/' + id);
  }
  getCreatedBy(id: any) {
    return this.http.get(this.url + 'roomCreatedBy/' + id);
  }
  updateRoom(id: any, body: any) {
    return this.http.patch(this.url + 'rooms/' + id, body);
  }
  deleteRoom(id:any) {
    return this.http.delete(this.url + 'rooms/' + id);
  }
}
