import { Component } from '@angular/core';
import { AddSubCategoryComponent } from '../add/add-sub-category/add-sub-category.component';
import { MatDialog } from '@angular/material/dialog';
import { CategoryService } from 'src/app/services/category.service';
import { SubCategoryService } from 'src/app/services/sub-category.service';
import { ValueSearchService } from 'src/app/services/value-search.service';
import { UpdateCategoryComponent } from '../update/update-category/update-category.component';
import { UpdateSubCategoryComponent } from '../update/update-sub-category/update-sub-category.component';
import { DeleteComponent } from '../delete/delete.component';

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.css'],
})
export class SubCategoryComponent {
  searchValue = '';
  categoryName = 'Select All';
  categoryId = '';
  categories: any[] = [];
  subCategories: any[] = [];
  constructor(
    private categoryService: CategoryService,
    private subCategoryService: SubCategoryService,
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
    this.getSubCategories();
  }
  getCategories() {
    this.categoryService.getCategories().subscribe({
      next: (categories: any) => {
        this.categories = categories;
      },
    });
  }
  getSubCategories() {
    this.subCategoryService.getSubCategories().subscribe({
      next: (subCategories: any) => {
        this.subCategories = subCategories
        // for (let subCategory of subCategories) {
        //   this.subCategoryService.getCreatedBy(subCategory._id).subscribe({
        //     next: (owner: any) => {
        //       subCategory.owner = owner;
        //     },
        //   });
        //   this.subCategoryService.getCategory(subCategory._id).subscribe({
        //     next: (category: any) => {
        //       subCategory.category = category;
        //     },
        //   });
        //   this.subCategories.push(subCategory);
        // }
      },
    });
  }
  addOrder(id:any) {
    let value = {subCategoryId:id, owner:'64f8748afbd9bd6f02435c71',quantity:1}
    console.log(value);

    this.subCategoryService.addOrder(value).subscribe({
      next: (owner: any) => {
      },
    });
  }
  addSubCategory() {
    let dailog = this.dailog.open(AddSubCategoryComponent);
    dailog.afterClosed().subscribe((result) => {
      this.subCategories = [];
      this.getSubCategories();
    });
  }
  updateSubCategory(id: any) {
    let dailog = this.dailog.open(UpdateSubCategoryComponent, { data: id });
    dailog.afterClosed().subscribe((result) => {
      this.subCategories = [];
      this.getSubCategories();
    });
  }
  deleteSubCategory(id: any) {
    let dailog = this.dailog.open(DeleteComponent, {
      data: { i: 3, id: id },
    });
    dailog.afterClosed().subscribe((result) => {
      this.subCategories = [];
      this.getSubCategories();
    });
  }
  filter(category: any) {
    if (category == 'category') {
      this.categoryName = 'Select All';
      this.categoryId = '';
    } else {
      this.categoryName = category.name;
      this.categoryId = category._id;
    }
  }
}
