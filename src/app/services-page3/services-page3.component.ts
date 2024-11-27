import { Component, inject, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services-page3',
  standalone: true,
  imports: [],
  templateUrl: './services-page3.component.html',
  styleUrl: './services-page3.component.css'
})
export class ServicesPage3Component implements OnInit {

  constructor(private meta: Meta){}

  ngOnInit(): void {
    this.setMetaTags();
  }

  setMetaTags() {
    this.meta.updateTag({ name: 'title', content: 'Support Services Offered by Our Law Firm' });
    this.meta.updateTag({ name: 'description', content: 'Explore our support services, including Immigration & Emigration, Litigation, Family Law, and Bail Applications. We provide expert legal assistance tailored to your needs.' });
    this.meta.updateTag({ name: 'keywords', content: 'Support Services, Immigration, Litigation, Family Law, Bail Applications' });
    this.meta.updateTag({ property: 'og:title', content: 'Support Services Offered by Our Law Firm' });
    this.meta.updateTag({ property: 'og:description', content: 'Explore our support services, including Immigration & Emigration, Litigation, Family Law, and Bail Applications. We provide expert legal assistance tailored to your needs.' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:url', content: 'http://ramjanumcattorneys.co.za/services' });
    this.meta.updateTag({ property: 'og:image', content: 'http://ramjanumcattorneys.co.za/path-to-your-image.jpg' });
  }

  router = inject(Router);

  navigateToImmigrationServices() {
    this.router.navigate(['immigration_services']).then(() => {
        window.scrollTo(0, 0);
    });
}
  navigateToLitigationServices() {
    this.router.navigate(['litigation-services']).then(() => {
      window.scrollTo(0, 0);
    });
  }
  navigateToFamilyLawServices() {
    this.router.navigate(['family-law-services']).then(() => {
      window.scrollTo(0, 0);
    });
  }
  navigateToBailServices() {
    this.router.navigate(['bail-application']).then(() => {
      window.scrollTo(0, 0);
    });
  }

}
