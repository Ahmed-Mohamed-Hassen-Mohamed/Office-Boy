import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  url: string = 'https://cafe-app-su0l.onrender.com/';
  constructor(private http: HttpClient) {}
  addUser(body: any) {
    return this.http.post(this.url + 'user', body);
  }
  getProfile() {
    return this.http.get(this.url + 'Profile');
  }
  getUsers(roles: any) {
    return this.http.get(this.url + 'users?roles=' + roles);
  }
  getUser(id: any) {
    return this.http.get(this.url + 'users/' + id);
  }
  getUserRoom(id: any) {
    return this.http.get(this.url + 'userRoom/' + id);
  }
  updateUser(id: any, body: any) {
    return this.http.patch(this.url + 'users/' + id, body);
  }
  deleteUser(id:any) {
    return this.http.delete(this.url + 'users/' + id);
  }
  deleteToken() {
    return this.http.get(this.url + 'token');
  }
}
