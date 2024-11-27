import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css'
})
export class ContactPageComponent implements OnInit {

  email = "cramjanum@gmail.com"

  constructor(private meta: Meta) {}

  ngOnInit(): void {
    this.setMetaTags();
  }

  setMetaTags() {
    this.meta.updateTag({ name: 'title', content: 'Contact Us - Get in Touch' });
    this.meta.updateTag({ name: 'description', content: 'Have a question or need more information? Contact us via phone or email, and let us see if we can help you.' });
    this.meta.updateTag({ name: 'keywords', content: 'Contact Us, Customer Support, Email, Phone, Social Media' });
    this.meta.updateTag({ property: 'og:title', content: 'Contact Us - Get in Touch' });
    this.meta.updateTag({ property: 'og:description', content: 'Have a question or need more information? Contact us via phone or email, and let us see if we can help you.' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:url', content: 'http://ramjanumcattorneys.co.za/contact-us' });
  }
}
