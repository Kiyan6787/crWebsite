import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-bail-applications',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './bail-applications.component.html',
  styleUrl: './bail-applications.component.css'
})
export class BailApplicationsComponent implements OnInit {

  bailApplicationServices = [
    {
      title:'Bail Application Process',
      description:'Representing clients during the bail application process, ensuring fair hearing and presenting a strong case for release.'
    },
    {
      title:'Bail Appeal',
      description:'Assistance in appealing denied bail applications, providing legal representation in higher courts.'
    },
  ];

  constructor(private meta: Meta) {}

  ngOnInit(): void {
    this.setMetaTags();
  }

  setMetaTags() {
    this.meta.updateTag({ name: 'title', content: 'Bail Applications - Expert Legal Assistance' });
    this.meta.updateTag({ name: 'description', content: 'We assist clients with bail applications, ensuring a smooth process from initial request to appeal. Our experienced team advocates for your release.' });
    this.meta.updateTag({ name: 'keywords', content: 'Bail Applications, Legal Assistance, Bail Hearing, Bail Modifications, Legal Representation' });
    this.meta.updateTag({ property: 'og:title', content: 'Bail Applications - Expert Legal Assistance' });
    this.meta.updateTag({ property: 'og:description', content: 'We assist clients with bail applications, ensuring a smooth process from initial request to appeal.' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:url', content: 'https://ramjanumcattorneys.co.za/bail-applications' });
  }
}
