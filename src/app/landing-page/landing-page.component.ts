import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent implements OnInit {

  constructor(private meta: Meta) {}

  ngOnInit(): void {
    this.setMetaTags();
  }

  setMetaTags() {
    this.meta.updateTag({ name: 'title', content: 'Tailored Legal Counsel and Solutions' });
    this.meta.updateTag({ name: 'description', content: 'Specializing in all aspects of real estate law, from buying and selling property to drafting contracts. Contact us for tailored legal counsel.' });
    this.meta.updateTag({ name: 'keywords', content: 'Real Estate Law, Legal Counsel, Property Buying, Property Selling, Contract Drafting' });
    this.meta.updateTag({ property: 'og:title', content: 'Tailored Legal Counsel and Solutions' });
    this.meta.updateTag({ property: 'og:description', content: 'Specializing in all aspects of real estate law, from buying and selling property to drafting contracts. Contact us for tailored legal counsel.' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:url', content: 'http://yourdomain.com/landing-page' });
  }

}
