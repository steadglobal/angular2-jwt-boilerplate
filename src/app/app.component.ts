import { Component } from '@angular/core';
import { AuthService } from './users/shared/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  constructor(private authService:AuthService) { 

    }
}
