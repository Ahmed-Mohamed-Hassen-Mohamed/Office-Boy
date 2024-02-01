import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { CategoryService } from 'src/app/services/category.service';
import { SubCategoryService } from 'src/app/services/sub-category.service';

@Component({
  selector: 'app-update-sub-category',
  templateUrl: './update-sub-category.component.html',
  styleUrls: ['./update-sub-category.component.css']
})
export class UpdateSubCategoryComponent {
  constructor(
    private fb: FormBuilder,
    private categoryService:CategoryService,
    private subCategoryService:SubCategoryService,
    private dailog:MatDialog,
    @Inject(MAT_DIALOG_DATA) public id: any,
  ) {}
  ngOnInit(): void {
    this.getCategories();
    this.getSubCategory();
  }
  subCategory:any;
  getSubCategory() {
    this.subCategoryService.getSubCategory(this.id).subscribe({
      next: (subCategory: any) => {
        this.subCategory = subCategory;
      },
    });
  }
  categories:any[]=[];
  getCategories() {
    this.categoryService.getCategories().subscribe({
      next: (categories: any) => {
        this.categories = categories;
      },
    });
  }
  userForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    categoryId: ['', [Validators.required]],
    image: [''],
  });
  files:any
  images:any [] = [];
  handelUpload(event: any) {
    this.files = [];
    this.files = event.target.files;
    this.images = [];
    for (let file of this.files) {
      const reader = new FileReader();
      reader.onload = () => {
        this.images.push(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  }
  onSubmit(value:any) {
    const data = new FormData();
    data.append('name', value.name);
    data.append('categoryId', value.categoryId);
    if (this.files) {
      data.append('image', this.files[0]);
    }
    this.subCategoryService.updateSubCategory(this.id, data).subscribe({
      next: (res: any) => {
      },
    });
  }
}
