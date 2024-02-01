import { Component } from '@angular/core';
import { BehaviorService } from 'src/app/services/behavior.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(private behaviorService: BehaviorService) {
    this.behaviorService.data$.subscribe((value) => {});
  }
  ngOnInit(): void {}
  updateData() {
    this.behaviorService.updateData('false');
  }
  logOut(){
    localStorage.removeItem('token')
    this.behaviorService.updateData('false');
  }
}
