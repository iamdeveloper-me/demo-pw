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
//import { } from "./vendor/business-services/business-services.component";
import { MembershipComponent } from "./vendor/membership/membership.component";

import { DetailpageComponent } from './detailpage/detailpage.component';
// import { ChatComponent } from "./vendor/chat/chat.component";
import { EditprofileComponent } from './vendor/editprofile/editprofile.component';
import { MylistingComponent } from './vendor/mylisting/mylisting.component';
import { FaquestionComponent } from './faquestion/faquestion.component';
import { TermsandconComponent } from './termsandcon/termsandcon.component';
import { CareersComponent } from './careers/careers.component';
import { AdvertiseComponent } from './advertise/advertise.component';
import { UserboardComponent } from './userpannel/userboard/userboard.component';
import { InspirationsComponent } from './userpannel/userboard/inspirations/inspirations.component';
import { UserReviewsComponent } from './userpannel/userboard/user-reviews/user-reviews.component';

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
import { CreatePromotionComponent } from './vendor/create-promotion/create-promotion.component';
import { AllPromotionPageComponent } from './vendor/all-promotion-page/all-promotion-page.component';

import {  AdminComponent } from "./admin/admin.component";
import { AdmindashboardComponent } from './admin/admindashboard/admindashboard.component';
import { UseraccountlistComponent } from './admin/useraccountlist/useraccountlist.component';
import { CustomerbillingsComponent } from './admin/customerbillings/customerbillings.component';
import { CalenderandnotesComponent } from './admin/calenderandnotes/calenderandnotes.component';
import { EmailComponent } from './admin/email/email.component';
import { TicketsComponent } from './admin/tickets/tickets.component';
import { MessageschatComponent } from './admin/messageschat/messageschat.component';
import { AdminadvertisingComponent } from './admin/adminadvertising/adminadvertising.component';
import { SocialfeedComponent } from './admin/socialfeed/socialfeed.component';
import { EventsandarticlesComponent } from './admin/eventsandarticles/eventsandarticles.component';
import { SitestatsandreportsComponent } from './admin/sitestatsandreports/sitestatsandreports.component';
import { AdminusersComponent } from './admin/adminusers/adminusers.component';
import { ReviewandfeedbackComponent } from './admin/reviewandfeedback/reviewandfeedback.component';
import { PortfolioviewComponent } from './vendor/portfolioview/portfolioview.component';
import { ViewPhotoAlbumsComponent } from './vendor/view-photo-albums/view-photo-albums.component';
import { AlbumsettingComponent } from './vendor/albumsetting/albumsetting.component';
import { EventListComponent } from './vendor/event-list/event-list.component';
import { Albumsetting2Component } from './vendor/albumsetting2/albumsetting2.component';
import { MailsearchComponent } from './vendor/mailsearch/mailsearch.component';
import { EnquiriesComponent } from './vendor/enquiries/enquiries.component';
import { StorefrontComponent } from './vendor/storefront/storefront.component';
import { ActionsComponent } from './vendor/actions/actions.component';
import { ReachComponent } from './vendor/reach/reach.component';
import { GallerybarComponent } from './vendor/gallerybar/gallerybar.component';
import { VediosettingComponent } from './vendor/vediosetting/vediosetting.component';
import { PromotionPriorityComponent } from './vendor/promotion-priority/promotion-priority.component';
import { PromotionAudienceComponent } from './vendor/promotion-audience/promotion-audience.component';
import { PromotionDealsComponent } from './vendor/promotion-deals/promotion-deals.component';
import { PromotionHomepageComponent } from './vendor/promotion-homepage/promotion-homepage.component';
import { TipslistComponent } from './tipslist/tipslist.component';
import { EventlistComponent } from './eventlist/eventlist.component';
//import { BusinessServicesComponent } from './vendor/business-services/business-services.component';
const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home/searchresult', component: SearchresultComponent },
  { path: 'home/tips_list', component: TipslistComponent },
  { path: 'home/event_list', component: EventlistComponent },
  { path: 'home/detailprofile', component:  DetailpageComponent  },
  { path: 'home/gallery', component:  GalleryComponent  },
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

    { path: 'vendor/creatpromo', component:  CreatePromotionComponent  },
    { path: 'vendor/dashboard', component:  DashboardComponent  },
    { path: 'vendor/albumview', component:  AlbumviewComponent  },
    { path: 'vendor/albumviewphoto', component:  ViewPhotoAlbumsComponent  },
    { path: 'vendor/portfolioview', component:  PortfolioviewComponent  },
    { path: 'vendor/settingalbum', component:  AlbumsettingComponent  },
    { path: 'vendor/eventlist', component:  EventListComponent  },
   
    { path: 'vendor/business', component:  BusinessInfoComponent  },
    { path: 'vendor/location', component:  LocationComponent  },
    { path: 'vendor/gallery', component: GalleryComponent  },
    { path: 'vendor/allpromotion', component: AllPromotionPageComponent  },
    { path: 'vendor/profile', component:  VendorprofileComponent  },
    // {
    //   path: 'vendor/chat',
    //   loadChildren: './chat/chat.module#ChatModule',
    //   component:  ChatComponent
    // },
    { path: 'vendor/event', component:  CreateEventComponent },
    { path: 'vendor/Videos', component:    VideosComponent},
    { path: 'vendor/editprofile', component:   EditprofileComponent },
    { path: 'vendor/mylisting', component:   MylistingComponent },
    //{ path: 'vendor/business-services', component:  BusinessServicesComponent  },
    { path: 'vendor/membership', component:  MembershipComponent  },
    { path: 'vendor/calender', component:  CalendertableComponent},
    { path: 'vendor/Message', component:  MessageComponent},
    { path: 'vendor/videoview', component:    VedioviewComponent},
    { path: 'vendor/PromoteBusiness', component:    PromoteBusinessComponent},
    { path: 'vendor/statistics', component:  StatisticsComponent},
    { path: 'vendor/albumdetailsetting', component:   Albumsetting2Component  },
    { path: 'vendor/mailseach', component:  MailsearchComponent},
    { path: 'vendor/enquiry', component:  EnquiriesComponent},
    { path: 'vendor/storefront', component:  StorefrontComponent},
    { path: 'vendor/actionfront', component:  ActionsComponent},
    { path: 'vendor/reachbar', component:  ReachComponent},
    { path: 'vendor/gallerybar', component:  GallerybarComponent},
    { path: 'vendor/vediosetting', component:  VediosettingComponent},
    { path: 'vendor/priority', component:  PromotionPriorityComponent},
    { path: 'vendor/audience', component:  PromotionAudienceComponent},
    { path: 'vendor/deals', component:  PromotionDealsComponent},
    { path: 'vendor/homepage', component:  PromotionHomepageComponent},

  { path: 'User/vendor', component: VendorlistComponent },  
  { path: 'User/Timeline', component: TimelineComponent },
  { path: 'User/vendor', component: VendorlistComponent },  
  { path: 'User/Bookmarks', component: BookmarkComponent },
  { path: 'User/GuestList', component: GuestComponent },
  { path: 'User/Budget', component: BudgetComponent },
  { path: 'User/Inspirations', component: InspirationsComponent },
  { path: 'User/UserReviews', component: UserReviewsComponent },
  
  { path: 'Admin/dashboard', component:  AdmindashboardComponent },  
  { path: 'Admin/login', component:  AdminComponent },  
  { path: 'Admin/Useraccountlist', component:  UseraccountlistComponent },  
  { path: 'Admin/Customerbillings', component:  CustomerbillingsComponent  },  
  { path: 'Admin/Calenderandnotes', component: CalenderandnotesComponent },  
  { path: 'Admin/Email', component: EmailComponent },  
  { path: 'Admin/Tickets', component:  TicketsComponent  },  
  { path: 'Admin/Messageschat', component:   MessageschatComponent   },    
  { path: 'Admin/Events', component:  EventsandarticlesComponent},  
  { path: 'Admin/tipsandartical', component: SocialfeedComponent  },  
  { path: 'Admin/Sitestats', component: SitestatsandreportsComponent },  
  { path: 'Admin/Adminusers', component: AdminusersComponent },  
  { path: 'Admin/Reviewandfeedback', component: ReviewandfeedbackComponent },  
  { path: 'Admin/advertising', component:   AdminadvertisingComponent  },  
  

  { path: '', component: FullLayoutComponent, data: { title: 'full Views' }, children: Full_ROUTES, canActivate: [AuthGuard] },
  { path: '', component: ContentLayoutComponent, data: { title: 'content Views' }, children: CONTENT_ROUTES, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
