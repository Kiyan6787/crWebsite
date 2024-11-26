import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { ServicesComponent } from "./services-page/services.component";
import { AboutPageComponent } from "./about-page/about-page.component";
import { TestimonialsComponent } from "./testimonials/testimonials.component";
import { ServicesPage2Component } from "./services-page2/services-page2.component";
import { ContactPageComponent } from "./contact-page/contact-page.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, LandingPageComponent, ServicesComponent, AboutPageComponent, TestimonialsComponent, ServicesPage2Component, ContactPageComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'crWebsite';
}
