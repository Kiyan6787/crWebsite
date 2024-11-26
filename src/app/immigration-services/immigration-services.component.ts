import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-immigration-services',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './immigration-services.component.html',
  styleUrl: './immigration-services.component.css'
})
export class ImmigrationServicesComponent implements OnInit {

  constructor(private meta: Meta) {}

  ngOnInit(): void {
    // Update Description
    this.meta.updateTag({ name: 'description', content: 'Explore our Immigration and Emigration Services offering expert guidance for individuals and families seeking to move across borders. We assist with visa applications, residency permits, and citizenship.' });
    
    // Update Keywords
    this.meta.updateTag({ name: 'keywords', content: 'Immigration services, Emigration services, Visa applications, Residency permits, Citizenship services, Work visa, Study visa, Family visa, Permanent residency, Temporary residency' });

    // Update Author
    this.meta.updateTag({ name: 'author', content: 'CR Attorneys' });
    
    // Update Robots
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
  }

   planePosition = 0;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const scrollTop = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = scrollTop / documentHeight;

    this.planePosition = scrollPercentage * 80;

  }

  //Immigration services list
  visaServices = [
    {
      title: 'Work Visa',
      description: 'We provide assistance in obtaining work visas for people who wish to work abroad.',
    },
    {
      title: 'Student Visa',
      description: 'We provide assistance in obtaining student visas for students who wish to study abroad.',
    },
    {
      title: 'Business Visa',
      description: 'We provide assistance in obtaining business visas for people who wish to start a business abroad.',
    },
    {
      title: 'Tourist Visa',
      description: 'We provide assistance in obtaining tourist visas for people who wish to travel abroad.',
    },
    {
      title: 'Family or Dependent Visa',
      description: 'We provide assistance in obtaining family or dependent visas for people who wish to join their family members abroad.',
    },
  ];

  prServices = [
    {
      title: 'Skilled Migration',
      description: 'We provide assistance in obtaining skilled migration visas for people who wish to migrate abroad.',
    },
    {
      title: 'Investor/Entrepreneur Visa',
      description: 'We provide assistance in obtaining investor/entrepreneur visas for people who wish to invest or start a business abroad.',
    },
    {
      title: 'Family Reunion Visa',
      description: 'We provide assistance in obtaining family reunion visas for people who wish to join their family members abroad.',
    },
    {
      title: 'Refugee and Asylum Services',
      description: 'We provide assistance in obtaining refugee and asylum visas for people who wish to seek refuge abroad.',
    },
  ];

  citizenshipServices = [
    {
      image: 'assets/images/citizenship1.jpg',
      title: 'Citizenship by Descent',
      description: 'We provide assistance in obtaining citizenship by descent for people who wish to claim citizenship through their ancestors.',
    },
    {
      image: 'assets/images/citizenship1.jpg',
      title: 'Citizenship by Naturalization',
      description: 'We provide assistance in obtaining citizenship by naturalization for people who wish to become citizens of a country.',
    },
    {
      image: 'assets/images/citizenship1.jpg',
      title: 'Dual Citizenship',
      description: 'We provide assistance in obtaining dual citizenship for people who wish to hold citizenship of two countries.',
    },
  ];

  trServices = [
    {
      image: 'assets/images/tr1.jpg',
      title: 'Temporary Residence Visa',
      description: 'We provide assistance in obtaining temporary residence visas for people who wish to stay abroad for a short period.',
    },
    {
      image: 'assets/images/tr1.jpg',
      title: 'Temporary Work Visa',
      description: 'We provide assistance in obtaining temporary work visas for people who wish to work abroad for a short period.',
    },
  ];

  legalServices = [
    {
      image: 'assets/images/legal1.jpg',
      title: 'Immigration Consultation',
      description: 'We provide advice on complex immigration rules, regulations, and procedures.',
    },
    {
      image: 'assets/images/legal1.jpg',
      title: 'Appeals and Visa Rejections',
      description: 'We provide assistance in appealing visa rejections and refusals.',
    },
    {
      image: 'assets/images/legal1.jpg',
      title: 'Deportation and Legal Defense',
      description: 'We provide assistance in deportation cases and legal defense',
    },
  ]
}
