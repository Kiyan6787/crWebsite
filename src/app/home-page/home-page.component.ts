import { Component, OnInit } from '@angular/core';
import { LandingPageComponent } from "../landing-page/landing-page.component";
import { ServicesPage2Component } from "../services-page2/services-page2.component";
import { AboutPageComponent } from "../about-page/about-page.component";
import { TestimonialsComponent } from "../testimonials/testimonials.component";
import { ContactPageComponent } from "../contact-page/contact-page.component";
import { ServicesPage3Component } from "../services-page3/services-page3.component";
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { filter } from 'rxjs';
import { ScrollServiceService } from '../services/scroll-service.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    LandingPageComponent, 
    //ServicesPage2Component, 
    AboutPageComponent, 
    TestimonialsComponent, 
    ContactPageComponent, 
    ServicesPage3Component
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {

  constructor(
    private router: Router,
    private scrollService: ScrollServiceService,
    private meta: Meta,
    private title: Title
  ) {}

  updateMetaTags(route: string) {
    const metaTags: any = {
      'home': {
        title: 'Home | Ramjanum C Attorneys',
        description: 'Welcome to Ramjanum Attorneys...',
        keywords: 'law firm, attorneys, legal services, South Africa, Ramjanum, legal advice, lawyers'
      },
      'our-services': {
        title: 'Legal Services | Ramjanum C Attorneys',
        description: 'Professional legal services including...',
        keywords: 'legal services, corporate law, civil litigation, contract law, legal consultation, South African law, attorney services, immigration, immigration law, bail applications, family law, divorce lawyer, emmigration, visas, visa services, visa application, South Africa'
      },
      'about': {
        title: 'About Us | Ramjanum C Attorneys',
        description: 'Offering professional legal services.',
        keywords: 'law firm history, legal team, professional attorneys, legal experience, South African lawyers, legal expertise'
      },
      'testimonials': {
        title: 'Testimonials | Ramjanum C Attorneys',
        description: 'See what our clients say about us.',
        keywords: 'client reviews, legal testimonials, attorney feedback, client satisfaction, law firm reviews'
      },
      'contact': {
        title: 'Contact Us | Ramjanum C Attorneys',
        description: 'Contact us for any immigration & emmigration services, litigation, family law or bail application services.',
        keywords: 'contact attorney, legal consultation, law firm location, attorney contact, legal advice contact'
      },
    };

    const tags = metaTags[route] || metaTags['home'];
    this.title.setTitle(tags.title);
    this.meta.updateTag({ name: 'description', content: tags.description });
    this.meta.updateTag({ 
      name: 'keywords', 
      content: tags.keywords 
    });

    // Update Open Graph tags
    this.meta.updateTag({ 
      property: 'og:title', 
      content: tags.title 
    });
    this.meta.updateTag({ 
      property: 'og:description', 
      content: tags.description 
    });
    
    // Update Twitter Card tags
    this.meta.updateTag({ 
      name: 'twitter:title', 
      content: tags.title 
    });
    this.meta.updateTag({ 
      name: 'twitter:description', 
      content: tags.description 
    });
  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const route = event.urlAfterRedirects.slice(1);
        this.scrollService.scrollToSection(route);
        this.updateMetaTags(route);
      }
    });
  }
  
}
