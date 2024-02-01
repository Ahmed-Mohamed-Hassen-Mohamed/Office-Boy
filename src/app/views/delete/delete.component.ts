import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { CategoryService } from 'src/app/services/category.service';
import { RoomService } from 'src/app/services/room.service';
import { UserService } from 'src/app/services/user.service';
import { SubCategoryComponent } from '../sub-category/sub-category.component';
import { SubCategoryService } from 'src/app/services/sub-category.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css'],
})
export class DeleteComponent {
  constructor(
    private userService: UserService,
    private categoryService: CategoryService,
    private subCategoryService: SubCategoryService,
    private roomService: RoomService,
    private dailog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  ngOnInit(): void {}
  deleteitem() {
    if (this.data.i == 0 || this.data.i == 1) {
      this.userService.deleteUser(this.data.id).subscribe({
        next: (user: any) => {},
      });
    } else if (this.data.i == 2) {
      this.categoryService.deleteCategory(this.data.id).subscribe({
        next: (category: any) => {},
      });
    } else if (this.data.i == 3) {
      this.subCategoryService.deleteSubCategory(this.data.id).subscribe({
        next: (subCategory: any) => {},
      });
    } else if (this.data.i == 4) {
      this.roomService.deleteRoom(this.data.id).subscribe({
        next: (room: any) => {},
      });
    }
  }
}
