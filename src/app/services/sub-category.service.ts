import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SubCategoryService {
  url: string = 'https://cafe-app-su0l.onrender.com/';
  constructor(private http: HttpClient) {}
  addOrder(category: any) {
    return this.http.post(this.url + 'order', category);
  }
  getDashboard() {
    return this.http.get(this.url + 'dashboard');
  }
  addSubCategory(category: any) {
    return this.http.post(this.url + 'subCategory', category);
  }
  getSubCategories() {
    return this.http.get(this.url + 'subCategories');
  }
  getCreatedBy(id: any) {
    return this.http.get(this.url + 'subCategoryCreatedBy/' + id);
  }
  getCategory(id: any) {
    return this.http.get(this.url + 'categoryOfSubCategory/' + id);
  }
  getSubCategory(id: any) {
    return this.http.get(this.url + 'subCategories/' + id);
  }
  updateSubCategory(id: any, body: any) {
    return this.http.patch(this.url + 'subCategories/' + id, body);
  }
  deleteSubCategory(id: any) {
    return this.http.delete(this.url + 'subCategories/' + id);
  }
}
