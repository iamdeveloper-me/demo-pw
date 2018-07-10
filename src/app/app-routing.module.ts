import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { PhotoComponent } from './photo/photo.component';
import { TipsComponent } from './tips/tips.component';
import { EventsComponent } from './events/events.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

import { FullLayoutComponent } from "./layouts/full/full-layout.component";
import { ContentLayoutComponent } from "./layouts/content/content-layout.component";

import { Full_ROUTES } from "./shared/routes/full-layout.routes";
import { CONTENT_ROUTES } from "./shared/routes/content-layout.routes";
import { SearchresultComponent } from './searchresult/searchresult.component';
import { AuthGuard } from './shared/auth/auth-guard.service';
import { HomeComponent } from './home/home.component';
import { VendorComponent } from './vendor/vendor.component';
import { DashboardComponent } from "./vendor/dashboard/dashboard.component";
import { VendorprofileComponent } from './vendor/vendorprofile/vendorprofile.component';
import { DetailpageComponent } from './detailpage/detailpage.component';
import { ChatComponent } from "./vendor/chat/chat.component";
import { EditprofileComponent } from './vendor/editprofile/editprofile.component';
import { MylistingComponent } from './vendor/mylisting/mylisting.component';
import { GalleryComponent } from './vendor/gallery/gallery.component';
import { ReviewsComponent } from './vendor/reviews/reviews.component';
import { MembershipComponent } from './vendor/membership/membership.component';
import { FaquestionComponent } from './faquestion/faquestion.component';
import { TermsandconComponent } from './termsandcon/termsandcon.component';
import { CareersComponent } from './careers/careers.component';
import { AdvertiseComponent } from './advertise/advertise.component';


import {RegisterComponent} from './register/register.component';
const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home/searchresult', component: SearchresultComponent },
  { path: 'home/searchresult/detailprofile', component:  DetailpageComponent  },
  { path: 'home/photo', component: PhotoComponent },
  { path: 'home/tips', component: TipsComponent },
  { path: 'vendor/dashboard', component:  DashboardComponent  },
  { path: 'vendor/editprofile', component:   EditprofileComponent },
  { path: 'vendor/chat', component:  ChatComponent },
  { path: 'vendor/mylisting', component:   MylistingComponent },
  { path: 'vendor/Membership', component:  MembershipComponent },
  { path: 'vendor/gallery', component:  GalleryComponent   },
  { path: 'vendor/review', component: ReviewsComponent },
  
  { path: 'home/events', component: EventsComponent },
  { path: 'home/contact', component: ContactUsComponent },
  { path: 'home/FAQ', component:FaquestionComponent },
  { path: 'home/TermsandConditions', component: TermsandconComponent  },
  { path: 'home/Careers', component:  CareersComponent  },
  { path: 'home/Advertise', component:  AdvertiseComponent },
  



  { path: '', component: FullLayoutComponent, data: { title: 'full Views' }, children: Full_ROUTES, canActivate: [AuthGuard] },
  { path: '', component: ContentLayoutComponent, data: { title: 'content Views' }, children: CONTENT_ROUTES, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
