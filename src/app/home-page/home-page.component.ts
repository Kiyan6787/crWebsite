import { Component } from '@angular/core';
import { LandingPageComponent } from "../landing-page/landing-page.component";
import { ServicesPage2Component } from "../services-page2/services-page2.component";
import { AboutPageComponent } from "../about-page/about-page.component";
import { TestimonialsComponent } from "../testimonials/testimonials.component";
import { ContactPageComponent } from "../contact-page/contact-page.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [LandingPageComponent, ServicesPage2Component, AboutPageComponent, TestimonialsComponent, ContactPageComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
