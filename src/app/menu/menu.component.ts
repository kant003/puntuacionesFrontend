import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit() {
  }

  emailRegistrado() {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      return JSON.parse(currentUser).email;
    } else {
      return 'no logueado';
    }
  }

  logout() {
    this.authService.logout();
  }

}
