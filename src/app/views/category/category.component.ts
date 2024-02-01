import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddCategoryComponent } from '../add/add-category/add-category.component';
import { CategoryService } from 'src/app/services/category.service';
import { ValueSearchService } from 'src/app/services/value-search.service';
import { UpdateCategoryComponent } from '../update/update-category/update-category.component';
import { DeleteComponent } from '../delete/delete.component';
import { BehaviorService } from 'src/app/services/behavior.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent {
  categories: any[] = [];
  searchValue = '';
  constructor(
    private categoryService: CategoryService,
    private behaviorService:BehaviorService,
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
    this.getCategories();
  }
  getCategories() {
    this.categories = [];
    this.categoryService.getCategories().subscribe({
      next: (categories: any) => {
        this.categories = categories;
      },
      error: (err:any) => {
        if(err.error.message == 'jwt expired') {
          localStorage.removeItem('token')
          this.behaviorService.updateData('false');
        }
      }
    });
  }
  addCategory() {
    let dailog = this.dailog.open(AddCategoryComponent);
    dailog.afterClosed().subscribe((result) => {
      this.categories = [];
      this.getCategories();
    });
  }
  updateCategory(id: any) {
    let dailog = this.dailog.open(UpdateCategoryComponent, { data: id });
    dailog.afterClosed().subscribe((result) => {
      this.categories = [];
      this.getCategories();
    });
  }
  deleteCategory(id: any) {
    let dailog = this.dailog.open(DeleteComponent, {
      data: { i: 2, id: id },
    });
    dailog.afterClosed().subscribe((result) => {
      this.categories = [];
      this.getCategories();
    });
  }
}
