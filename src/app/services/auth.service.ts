import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url: string = 'https://cafe-app-su0l.onrender.com/';
  constructor(private http: HttpClient) {}
  signIn(body: any) {
    return this.http.post(this.url + 'loginAdmin', body);
  }
}
