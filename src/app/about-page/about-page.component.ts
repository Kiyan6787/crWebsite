import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.css'
})
export class AboutPageComponent implements OnInit {

  constructor(private meta: Meta) { }

  ngOnInit(): void {
    // Set meta tags dynamically
    this.meta.updateTag({ name: 'description', content: 'Discover the history, track record, and guiding principles of our law firm. We offer expert legal services and are dedicated to providing you with the help you need.' });
    this.meta.updateTag({ name: 'keywords', content: 'About Us, Law Firm, Legal Services, Lawyer Background, History, Track Record, Guiding Principles' });
    this.meta.updateTag({ name: 'author', content: 'Your Name or Law Firm Name' });
  }

}
