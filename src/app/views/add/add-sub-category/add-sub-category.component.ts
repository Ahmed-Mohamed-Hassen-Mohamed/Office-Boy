import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CategoryService } from 'src/app/services/category.service';
import { SubCategoryService } from 'src/app/services/sub-category.service';

@Component({
  selector: 'app-add-sub-category',
  templateUrl: './add-sub-category.component.html',
  styleUrls: ['./add-sub-category.component.css']
})
export class AddSubCategoryComponent {
  constructor(
    private fb: FormBuilder,
    private categoryService:CategoryService,
    private subCategoryService:SubCategoryService,
    private dailog:MatDialog,
  ) {}
  ngOnInit(): void {
    this.getCategories()
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
    image: ['', [Validators.required]],
  });
  files:any
  images:any [] = [];
  handelUpload(event: any) {
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
    data.append('image', this.files[0]);
    this.subCategoryService.addSubCategory(data).subscribe({
      next: (res: any) => {
      },
    });
  }
}
