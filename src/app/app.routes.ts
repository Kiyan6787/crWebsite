import { Routes } from '@angular/router';
import { ImmigrationServicesComponent } from './immigration-services/immigration-services.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LitigationServicesComponent } from './litigation-services/litigation-services.component';
import { FamilyLawServicesComponent } from './family-law-services/family-law-services.component';
import { BailApplicationsComponent } from './bail-applications/bail-applications.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ServicesPage3Component } from './services-page3/services-page3.component';

export const routes: Routes = [
    {path: '', component: HomePageComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            {path: 'our-services', component: HomePageComponent},
            {path: 'about', component: HomePageComponent},
            {path: 'testimonials', component: HomePageComponent},
            {path: 'contact', component: HomePageComponent},
        ]
    },
    {path: 'immigration_services', component: ImmigrationServicesComponent},
    {path: 'litigation-services', component: LitigationServicesComponent},
    {path: 'family-law-services', component: FamilyLawServicesComponent},
    {path: 'bail-application', component: BailApplicationsComponent},
    {path: 'our-services', component: ServicesPage3Component},
    {path: '**', component: NotFoundComponent}
];
