import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-family-law-services',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './family-law-services.component.html',
  styleUrl: './family-law-services.component.css'
})
export class FamilyLawServicesComponent implements OnInit {

  familyLawServices = [
    {
      titel:'Divorce and Separation',
      description: 'Assistance with legal procedures for divorce or separation, including settlement agreements.'
    },
    {
      titel:'Child Custody and Visitation',
      description: 'Legal representation in custody battles and ensuring fair visitation rights for parents.'
    },
    {
      titel:'Child Support',
      description: 'Assistance with securing or modifying child support agreements.'
    },
    {
      titel:'Domestic Violence Protection',
      description: 'Legal action to protect individuals facing domestic abuse, including obtaining restraining orders.'
    },
    {
      titel:'Spousal Support (Maintenance)',
      description: 'Assistance in securing spousal support or modifying existing agreements.'
    },
  ];

  constructor(private meta: Meta, private title: Title) {
    this.title.setTitle('Family Law Services - Ramjanum C Attorneys');
    this.meta.updateTag({ 
      name: 'description', 
      content: 'Comprehensive family law legal services including divorce, maintenance, and more.' 
    });
  }

  ngOnInit(): void {
    this.setMetaTags();
  }

  setMetaTags() {
    this.meta.updateTag({ name: 'title', content: 'Family Law Services - Compassionate Legal Support' });
    this.meta.updateTag({ name: 'description', content: 'Explore our family law services covering divorce, child custody, adoption, and domestic violence protection. We provide compassionate legal support.' });
    this.meta.updateTag({ name: 'keywords', content: 'Family Law, Divorce, Child Custody, Adoption, Domestic Violence, Legal Support' });
    this.meta.updateTag({ property: 'og:title', content: 'Family Law Services - Compassionate Legal Support' });
    this.meta.updateTag({ property: 'og:description', content: 'Explore our family law services covering divorce, child custody, adoption, and domestic violence protection. We provide compassionate legal support.' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:url', content: 'http://ramjanumcattorneys.co.za/family-law' });
  }
}
