import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollServiceService {

  constructor() { }

  private componentOffsets  : any= {
    'home': 'home-section',
    'our-services': 'services-section',
    'about': 'about-section',
    'contact': 'contact-section',
    'testimonials': 'testimony-section'
  };

  scrollToSection(route: string) {
    const elementId = this.componentOffsets[route];
    if (elementId) {
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
}
