import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public logoutBtn() {
    localStorage.clear()
    this.router.navigate(['/']);  
  }
  constructor(private router: Router) {}

  title = 'Harrys cars';
}
