import { Component } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { SubCategoryService } from 'src/app/services/sub-category.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  categories: any[] = [];
  constructor(
    private categoryService: CategoryService,
    private subCategoryService: SubCategoryService
  ) {}
  orders: any[] = [];
  totalOfOrders = 0;
  categoryId = '';
  male = 0;
  female = 0;
  all = false;
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
  subCategories: any[] = [];
  getSubCategories() {
    this.subCategoryService.getSubCategories().subscribe({
      next: (subCategories: any) => {
        this.subCategories = subCategories;
        this.getOrders();
      },
    });
  }
  getOrders(temp=true) {
    this.all = true;
    this.totalOfOrders = 0;
    this.male = 0;
    this.female = 0;
    this.categoryId = '';
    this.subCategoryService.getDashboard().subscribe({
      next: (orders: any) => {
        this.orders = orders;
        for (let order of orders) {
          this.totalOfOrders += order.quantity;
          if (order.owner.gender == 'male') {
            this.male += order.quantity;
          } else if (order.owner.gender == 'female') {
            this.female += order.quantity;
          }
          if (temp) {
            var i = 0;
            for (let subCategory of this.subCategories) {
              if (subCategory._id == order.subCategoryId._id) {
                if (this.subCategories[i].quantity) {
                  this.subCategories[i].quantity += order.quantity;
                } else {
                  this.subCategories[i].quantity = order.quantity;
                }
              }
              i++;
            }
          }
        }
      },
    });
  }
  filter(id: any) {
    this.all = false;
    this.categoryId = id;
    this.totalOfOrders = 0;
    this.male = 0;
    this.female = 0;
    var i = 0;
    for (let order of this.orders) {
      if (order.subCategoryId.categoryId == this.categoryId) {
        this.totalOfOrders += order.quantity;
        if (order.owner.gender == 'male') {
          this.male += order.quantity;
        } else if (order.owner.gender == 'female') {
          this.female += order.quantity;
        }
      }
      i++;
    }
  }
}
