import { Routes } from '@angular/router';
import { ImmigrationServicesComponent } from './immigration-services/immigration-services.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ServicesPage2Component } from './services-page2/services-page2.component';
import { LitigationServicesComponent } from './litigation-services/litigation-services.component';
import { FamilyLawServicesComponent } from './family-law-services/family-law-services.component';
import { BailApplicationsComponent } from './bail-applications/bail-applications.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {path: '', component: HomePageComponent},
    {path: 'immigration_services', component: ImmigrationServicesComponent},
    {path: 'services', component: ServicesPage2Component},
    {path: 'litigation-services', component: LitigationServicesComponent},
    {path: 'family-law-services', component: FamilyLawServicesComponent},
    {path: 'bail-application', component: BailApplicationsComponent},
    {path: '**', component: NotFoundComponent}
];
