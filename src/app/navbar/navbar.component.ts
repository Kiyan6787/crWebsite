import { Component, inject, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  router = inject(Router);

  naviagteToServices() {
    this.router.navigate(['services']);
  }

  ngOnInit() {
    // Close navbar on route change
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Check if navbar is expanded
        const navbar = document.querySelector('.navbar-collapse');
        if (navbar?.classList.contains('show')) {
          const togglerButton = document.querySelector('.navbar-toggler') as HTMLElement;
          togglerButton?.click();
        }
      }
    });
  }
}
