import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { BehaviorService } from 'src/app/services/behavior.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent {
  hide = true;
  constructor(
    private authService: AuthService,
    private behaviorService: BehaviorService,
    private router: Router
  ) {}
  onSubmit(value: any) {
    this.authService.signIn(value).subscribe({
      next: (res: any) => {
        localStorage.setItem('token', res.token);
        this.behaviorService.updateData('false');
        this.router.navigateByUrl('');
      },
    });
  }
  updateData() {
    this.behaviorService.updateData('false');
  }
}
