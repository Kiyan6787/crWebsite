import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  email = "cramjanum@gmail.com"

  currentYear: number;

  constructor() {
    this.currentYear = new Date().getFullYear();
  }
}
