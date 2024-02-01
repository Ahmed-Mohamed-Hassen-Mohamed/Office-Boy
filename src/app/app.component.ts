import { Component } from '@angular/core';
import { BehaviorService } from './services/behavior.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  opened = true;
  token:any;
  constructor(private behaviorService: BehaviorService) {
    this.behaviorService.data$.subscribe((value) => {
      this.token = localStorage.getItem('token');
    });
  }
  ngOnInit(): void {
    this.getToken()
  }
  getToken() {
    this.token = localStorage.getItem('token');
  }
  updateData() {
    if(this.opened) {
      this.behaviorService.updateData('false');
    }
  }
}
