import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css'],
})
export class UpdateCategoryComponent {
  constructor(
    private fb: FormBuilder,
    private categoryService: CategoryService,
    @Inject(MAT_DIALOG_DATA) public id: any,
  ) {}
  ngOnInit(): void {
    this.getCategory();
  }
  category: any;
  getCategory() {
    this.categoryService.getCategory(this.id).subscribe({
      next: (category: any) => {
        this.category = category;
      },
    });
  }
  userForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    image: [''],
  });
  files: any;
  images: any[] = [];
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
  onSubmit(value: any) {
    const data = new FormData();
    data.append('name', value.name);
    if (this.files) {
      data.append('image', this.files[0]);
    }
    this.categoryService.updateCategory(this.id, data).subscribe({
      next: (res: any) => {
        console.log(res);
      },
    });
  }
}
