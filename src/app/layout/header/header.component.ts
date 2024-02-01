import { Component } from '@angular/core';
import { BehaviorService } from 'src/app/services/behavior.service';
import { UserService } from 'src/app/services/user.service';
import { ValueSearchService } from 'src/app/services/value-search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  // opened = true;
  constructor(
    private userService:UserService,
    private behaviorService: BehaviorService,
    private valueSearchService: ValueSearchService,
  ) {}
  ngOnInit(): void {
    this.getProfile();
  }
  searchValue(value:any) {
    this.valueSearchService.updateData(value);
  }
  user:any;
  getProfile() {
    this.userService.getProfile().subscribe({
      next: (user: any) => {
        this.user = user;
      },
    });
  }
}
