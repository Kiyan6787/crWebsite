import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-litigation-services',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './litigation-services.component.html',
  styleUrl: './litigation-services.component.css'
})
export class LitigationServicesComponent implements OnInit {

  litigationServices = [
    {
      title: 'Civil Litigation',
      description: 'We provide legal representation in civil litigation matters. Our team of experienced lawyers will guide you through the process and ensure that your rights are protected.'
    },
    {
      title: 'Criminal Litigation',
      description: 'Representation in criminal cases, defending or prosecuting criminal charges..'
    },
    {
      title: 'Commercial Litigation',
      description: 'Resolving disputes related to business transactions, partnerships, and trade issues.'
    },
    {
      title: 'Employment Disputes',
      description: 'Representing clients in disputes with employers or employees regarding contracts, discrimination, or wrongful dismissal.'
    },
  ];

  constructor(private meta: Meta) {}

  ngOnInit(): void {
    this.setMetaTags();
  }

  setMetaTags() {
    this.meta.updateTag({ name: 'title', content: 'Comprehensive Litigation Services' });
    this.meta.updateTag({ name: 'description', content: 'We provide comprehensive litigation services, representing clients in civil, criminal, and commercial disputes. Our experienced legal team advocates for your rights in court.' });
    this.meta.updateTag({ name: 'keywords', content: 'Litigation Services, Civil Disputes, Criminal Defense, Commercial Disputes, Personal Injury Claims' });
    this.meta.updateTag({ property: 'og:title', content: 'Comprehensive Litigation Services' });
    this.meta.updateTag({ property: 'og:description', content: 'We provide comprehensive litigation services, representing clients in civil, criminal, and commercial disputes. Our experienced legal team advocates for your rights in court.' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:url', content: 'http://yourdomain.com/litigation-services' });
    this.meta.updateTag({ property: 'og:image', content: 'http://yourdomain.com/path-to-your-image.jpg' });
  }
}
