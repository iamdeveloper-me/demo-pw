import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { PhotoComponent } from './photo/photo.component';
import { TipsComponent } from './tips/tips.component';

import { FullLayoutComponent } from "./layouts/full/full-layout.component";
import { ContentLayoutComponent } from "./layouts/content/content-layout.component";
import { Full_ROUTES } from "./shared/routes/full-layout.routes";
import { CONTENT_ROUTES } from "./shared/routes/content-layout.routes";
import { SearchresultComponent } from './searchresult/searchresult.component';
import { AuthGuard } from './shared/auth/auth-guard.service';

import { HomeComponent } from './home/home.component';
import { DashboardComponent } from "./vendor/dashboard/dashboard.component";
import { BusinessInfoComponent } from "./vendor/business-info/business-info.component";
import { LocationComponent } from "./vendor/location/location.component";
import { BusinessServicesComponent } from "./vendor/business-services/business-services.component";
import { MembershipComponent } from "./vendor/membership/membership.component";

import { DetailpageComponent } from './detailpage/detailpage.component';
import { ChatComponent } from "./vendor/chat/chat.component";
import { EditprofileComponent } from './vendor/editprofile/editprofile.component';
import { MylistingComponent } from './vendor/mylisting/mylisting.component';
import { FaquestionComponent } from './faquestion/faquestion.component';
import { TermsandconComponent } from './termsandcon/termsandcon.component';
import { CareersComponent } from './careers/careers.component';
import { AdvertiseComponent } from './advertise/advertise.component';
import { UserboardComponent } from './userpannel/userboard/userboard.component';
import { RegisterComponent} from './register/register.component';
import { EventsComponent } from './events/events.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { VendorprofileComponent } from './vendor/vendorprofile/vendorprofile.component';
import { VendorComponent } from './vendor/vendor.component';
import { AllcategoryComponent } from './allcategory/allcategory.component';
import { GalleryComponent } from './vendor/gallery/gallery.component';
import { VideosComponent } from './vendor/videos/videos.component';
import { CategoryComponent } from './category/category.component';
import { VendorlistComponent } from './userpannel/userboard/vendorlist/vendorlist.component';
import { TimelineComponent } from './userpannel/userboard/timeline/timeline.component';
import { BookmarkComponent } from './userpannel/userboard/bookmark/bookmark.component';
import { GuestComponent } from './userpannel/userboard/guest/guest.component';
import { BudgetComponent } from './userpannel/userboard/budget/budget.component';

import { CalendertableComponent } from './vendor/calendertable/calendertable.component';
import { CreateEventComponent } from './vendor/create-event/create-event.component';
import { MessageComponent } from './vendor/message/message.component';
import { AlbumviewComponent } from './vendor/albumview/albumview.component';
import { PromoteBusinessComponent } from './vendor/promote-business/promote-business.component';
import { StatisticsComponent } from './vendor/statistics/statistics.component';

import { VedioviewComponent } from './vendor/vedioview/vedioview.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  
  { path: 'register', component: RegisterComponent },
  { path: 'home/searchresult', component: SearchresultComponent },
  { path: 'home/detailprofile', component:  DetailpageComponent  },
  { path: 'home/gallery', component:  GalleryComponent  },

  { path: 'vendor/gallery', component: GalleryComponent  },

  { path: 'home/vendor', component:  VendorComponent  },
  { path: 'home/photo', component: PhotoComponent },
  { path: 'home/tips', component: TipsComponent },
  { path: 'home/contact', component: ContactUsComponent },
  { path: 'home/events', component:  EventsComponent  },
  { path: 'home/allcategory', component:  AllcategoryComponent },

  { path: 'home/category', component:  CategoryComponent },
  { path: 'home/register', component:  RegisterComponent  },
  { path: 'home/events', component: EventsComponent },
  { path: 'home/contact', component: ContactUsComponent },
  { path: 'home/FAQ', component:FaquestionComponent },
  { path: 'home/TermsandConditions', component: TermsandconComponent  },
  { path: 'home/Careers', component:  CareersComponent  },

  { path: 'home/Advertise', component:  AdvertiseComponent },


    { path: 'vendor/dashboard', component:  DashboardComponent  },
    { path: 'vendor/albumview', component:  AlbumviewComponent  },
    { path: 'vendor/business', component:  BusinessInfoComponent  },
    { path: 'vendor/location', component:  LocationComponent  },
    { path: 'vendor/profile', component:  VendorprofileComponent  },
    { path: 'vendor/chat', component:  ChatComponent },
    { path: 'vendor/event', component:  CreateEventComponent },
    { path: 'vendor/Videos', component:    VideosComponent},
    { path: 'vendor/editprofile', component:   EditprofileComponent },
    { path: 'vendor/mylisting', component:   MylistingComponent },
    { path: 'vendor/business-services', component:  BusinessServicesComponent  },
    { path: 'vendor/membership', component:  MembershipComponent  },
    { path: 'vendor/calender', component:  CalendertableComponent},
    { path: 'vendor/Message', component:  MessageComponent},
    { path: 'vendor/videoview', component:    VedioviewComponent},
     { path: 'vendor/PromoteBusiness', component:    PromoteBusinessComponent},
    { path: 'vendor/statistics', component:  StatisticsComponent},
    { path: 'User/vendor', component: VendorlistComponent },  
  { path: 'User/Timeline', component: TimelineComponent },
  { path: 'User/Bookmarks', component: BookmarkComponent },
  { path: 'User/GuestList', component: GuestComponent },
  { path: 'User/Budget', component: BudgetComponent },

  { path: '', component: FullLayoutComponent, data: { title: 'full Views' }, children: Full_ROUTES, canActivate: [AuthGuard] },
  { path: '', component: ContentLayoutComponent, data: { title: 'content Views' }, children: CONTENT_ROUTES, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
