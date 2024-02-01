import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  url: string = 'https://cafe-app-su0l.onrender.com/';
  constructor(private http: HttpClient) {}
  addCategory(category: any) {
    return this.http.post(this.url + 'category', category);
  }
  getCategory(id: any) {
    return this.http.get(this.url + 'categories/' + id);
  }
  getCategories() {
    return this.http.get(this.url + 'categories');
  }
  getCreatedBy(id: any) {
    return this.http.get(this.url + 'categoryCreatedBy/' + id);
  }
  updateCategory(id: any, body: any) {
    return this.http.patch(this.url + 'categories/' + id, body);
  }
  deleteCategory(id:any) {
    return this.http.delete(this.url + 'categories/' + id);
  }
}
