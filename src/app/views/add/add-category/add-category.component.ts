import { Token } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {

  constructor(
    private fb: FormBuilder,
    private categoryService:CategoryService,
    private dailog:MatDialog,
  ) {}
  userForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
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
    data.append('image', this.files[0]);
    this.categoryService.addCategory(data).subscribe({
      next: (res: any) => {
      },
    });
  }
}
