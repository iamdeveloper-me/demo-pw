import { HompageLocationComponent } from './vendor/hompage-location/hompage-location.component';
import { PaymentSelectionComponent } from './vendor/payment-selection/payment-selection.component';
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
import { ErrorComponent } from './error/error.component';

import { HomeComponent } from './home/home.component';
import { ChatComponent } from "./vendor/chat/chat.component";
import { DashboardComponent } from "./vendor/dashboard/dashboard.component";
import { BusinessInfoComponent } from "./vendor/business-info/business-info.component";
import { LocationComponent } from "./vendor/location/location.component";
//import { } from "./vendor/business-services/business-services.component";
import { MembershipComponent } from "./vendor/membership/membership.component";

import { DetailpageComponent } from './detailpage/detailpage.component';

import { EditprofileComponent } from './vendor/editprofile/editprofile.component';
import { MylistingComponent } from './vendor/mylisting/mylisting.component';
import { FaquestionComponent } from './faquestion/faquestion.component';
import { TermsandconComponent } from './termsandcon/termsandcon.component';
import { CareersComponent } from './careers/careers.component';
import { AdvertiseComponent } from './advertise/advertise.component';
import { FootCupleComponent } from './foot-cuple/foot-cuple.component';
import { UserboardComponent } from './userpannel/userboard/userboard.component';
import { InspirationsComponent } from './userpannel/userboard/inspirations/inspirations.component';
import { UserReviewsComponent } from './userpannel/userboard/user-reviews/user-reviews.component';

import { SupplierbylocationComponent } from './supplierbylocation/supplierbylocation.component';





import { RegisterComponent} from './register/register.component';
import { EventsComponent } from './events/events.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { VendorprofileComponent } from './vendor/vendorprofile/vendorprofile.component';

import { DiscountdealsComponent } from './vendor/discountdeals/discountdeals.component';

// import { VendorComponent } from './vendor/vendor.component';
import { AllcategoryComponent } from './allcategory/allcategory.component';
import { GalleryComponent } from './vendor/gallery/gallery.component';
import { VideosComponent } from './vendor/videos/videos.component';
import { CategoryComponent } from './category/category.component';
import { VendorlistComponent } from './userpannel/userboard/vendorlist/vendorlist.component';
import { TimelineComponent } from './userpannel/userboard/timeline/timeline.component';
import { UsermessageComponent } from './userpannel/userboard/usermessage/usermessage.component';
import { UsermailsearchComponent } from './userpannel/userboard/usermailsearch/usermailsearch.component';
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

import { AdminComponent } from "./admin/admin.component";
import { AdmindashboardComponent } from './admin/admindashboard/admindashboard.component';
import { UseraccountlistComponent } from './admin/useraccountlist/useraccountlist.component';
import { CustomerbillingsComponent } from './admin/customerbillings/customerbillings.component';
import { CalenderandnotesComponent } from './admin/calenderandnotes/calenderandnotes.component';
import { EmailComponent } from './admin/email/email.component';
import { TicketsComponent } from './admin/tickets/tickets.component';
import { MessageschatComponent } from './admin/messageschat/messageschat.component';
import { AdminadvertisingComponent } from './admin/adminadvertising/adminadvertising.component';
import { TaskboardComponent } from './admin/taskboard/taskboard.component';
import { SiteFeedbackComponent } from './admin/site-feedback/site-feedback.component';
import { AdminexpensesComponent } from './admin/adminexpenses/adminexpenses.component';

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
import { BusinessServicesComponent } from './vendor/business-services/business-services.component';
import { InvoiceDetailComponent } from './vendor/invoice-detail/invoice-detail.component';
import { TipslistComponent } from './tipslist/tipslist.component';
import { EventlistComponent } from './eventlist/eventlist.component';
import { UserdetailsComponent } from './admin/userdetails/userdetails.component';

//import { BusinessServicesComponent } from './vendor/business-services/business-services.component';
import { DetailstatsComponent } from './admin/detailstats/detailstats.component';
import { SalesstatsComponent } from './admin/salesstats/salesstats.component';
import { CRMstatsComponent } from './admin/crmstats/crmstats.component';
import { NetworkstatsComponent } from './admin/networkstats/networkstats.component';
import { CategorystatsComponent } from './admin/categorystats/categorystats.component';
import { VendorstatsComponent } from './admin/vendorstats/vendorstats.component';

import { AdminuseraccountComponent } from './admin/adminuseraccount/adminuseraccount.component';
import { AdminsidebarComponent } from './admin/adminsidebar/adminsidebar.component';
import { PhotogallaryComponent } from './photogallary/photogallary.component';
import { VediogallaryComponent } from './vediogallary/vediogallary.component';
import { SuccessComponent } from './vendor/success/success.component';
import { FailureComponent } from './vendor/failure/failure.component';

import { PhotogallerydetailComponent } from './photogallerydetail/photogallerydetail.component';
import { UseraccountComponent } from './userpannel/userboard/useraccount/useraccount.component';
//import { VendorComponent } from './dashboard/vendor/vendor.component';

import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { Gallery0Component } from './vendor/gallery0/gallery0.component';

import { AuthGuardService } from './services/auth-guard.service';

import { DealsComponent } from './deals/deals.component';
import { DealDetailsComponent } from './deal-details/deal-details.component';
import { HoneymoonComponent } from './honeymoon/honeymoon.component';
import { HoneymoonDetailsComponent } from './honeymoon-details/honeymoon-details.component';

import { EventcelandarComponent } from './eventcelandar/eventcelandar.component';
import { DreamWeddingLocationsComponent } from './dream-wedding-locations/dream-wedding-locations.component';
import { FeaturedWeddingSuppliersComponent } from './featured-wedding-suppliers/featured-wedding-suppliers.component';



const appRoutes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home/searchresult/:id', component: SearchresultComponent },
  { path: 'home/tips_list', component: TipslistComponent },
  { path: 'home/event_list', component: EventlistComponent },
  { path: 'home/detailprofile', component:  DetailpageComponent  },
  { path: 'home/gallery', component:  GalleryComponent  },
  //{ path: 'home/vendor', component:  VendorComponent  },
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
  { path: 'home/cuplefoot', component:  FootCupleComponent },
  { path: 'home/Photogallary', component:  PhotogallaryComponent },
  { path: 'home/Vediogallary', component:  VediogallaryComponent },
  { path: 'home/supplierbylocation', component:  SupplierbylocationComponent },
  { path: 'home/Photogallerydetail', component:  PhotogallerydetailComponent },
  { path: 'home/ResetPassword', component:  ResetPasswordComponent },
  { path: 'home/allDreamWedding', component:  DreamWeddingLocationsComponent },
  { path: 'home/FeaturedWeddingSuppliers', component:  FeaturedWeddingSuppliersComponent },

  { path: 'home/Deals', component:  DealsComponent },
  { path: 'home/Deal_Details', component:  DealDetailsComponent },
  { path: 'home/Honeymoon', component:  HoneymoonComponent },
  { path: 'home/Honeymoon_Details', component:  HoneymoonDetailsComponent },

  { path: 'vendor/creatpromo', component:  CreatePromotionComponent, canActivate:[AuthGuardService]  },
  { path: 'vendor/messagess', component:  ChatComponent, canActivate:[AuthGuardService]  },
  { path: 'vendor/dashboard', component:  DashboardComponent,canActivate:[AuthGuardService]  },
  { path: 'vendor/albumview', component:  AlbumviewComponent,canActivate:[AuthGuardService]  },
  { path: 'vendor/albumviewphoto/:id', component:  ViewPhotoAlbumsComponent,canActivate:[AuthGuardService]  },
  { path: 'vendor/portfolioview', component:  PortfolioviewComponent,canActivate:[AuthGuardService]  },
  { path: 'vendor/settingalbum/:id', component:  AlbumsettingComponent,canActivate:[AuthGuardService]  },
  { path: 'vendor/eventlist', component:  EventListComponent,canActivate:[AuthGuardService]  },
  { path: 'vendor/invoice', component:  InvoiceDetailComponent,canActivate:[AuthGuardService]  },
  { path: 'vendor/business', component:  BusinessInfoComponent,canActivate:[AuthGuardService]  },
  { path: 'vendor/location', component:  LocationComponent,canActivate:[AuthGuardService]  },
  { path: 'vendor/gallery', component: GalleryComponent,canActivate:[AuthGuardService]  },
  { path: 'vendor/allpromotion', component: AllPromotionPageComponent,canActivate:[AuthGuardService]  },
  { path: 'vendor/profile', component:  VendorprofileComponent,canActivate:[AuthGuardService]  },
  { path: 'vendor/discountdeals', component:  DiscountdealsComponent,canActivate:[AuthGuardService]  },
    // {
    //   path: 'vendor/chat',
    //   loadChildren: './chat/chat.module#ChatModule',
    //   component:  ChatComponent
    // },

    { path: 'vendor/event', component:  CreateEventComponent,canActivate:[AuthGuardService] },
    { path: 'vendor/Videos', component:    VideosComponent,canActivate:[AuthGuardService]},
    { path: 'vendor/editprofile', component:   EditprofileComponent,canActivate:[AuthGuardService] },
    { path: 'vendor/mylisting', component:   MylistingComponent,canActivate:[AuthGuardService] },
    { path: 'vendor/business-services', component:  BusinessServicesComponent,canActivate:[AuthGuardService]  },
    { path: 'vendor/membership', component:  MembershipComponent,canActivate:[AuthGuardService]  },
    { path: 'vendor/calender', component:  CalendertableComponent,canActivate:[AuthGuardService]},
    { path: 'vendor/eventcalander', component: EventcelandarComponent,canActivate:[AuthGuardService]},
    { path: 'vendor/Message', component:  MessageComponent,canActivate:[AuthGuardService]},
    { path: 'vendor/videoview', component:    VedioviewComponent,canActivate:[AuthGuardService]},
    { path: 'vendor/PromoteBusiness', component:    PromoteBusinessComponent,canActivate:[AuthGuardService]},
    { path: 'vendor/statistics', component:  StatisticsComponent,canActivate:[AuthGuardService]},
    { path: 'vendor/albumdetailsetting', component:   Albumsetting2Component,canActivate:[AuthGuardService]  },
    { path: 'vendor/msg/:id', component:  MailsearchComponent,canActivate:[AuthGuardService]},
    { path: 'vendor/enquiry', component:  EnquiriesComponent,canActivate:[AuthGuardService]},
    { path: 'vendor/homepage-location', component:  HompageLocationComponent,canActivate:[AuthGuardService]},

    
    { path: 'vendor/storefront', component:  StorefrontComponent,canActivate:[AuthGuardService]},
    { path: 'vendor/actionfront', component:  ActionsComponent,canActivate:[AuthGuardService]},
    { path: 'vendor/reachbar', component:  ReachComponent,canActivate:[AuthGuardService]},
    { path: 'vendor/gallerybar', component:  GallerybarComponent,canActivate:[AuthGuardService]},
    { path: 'vendor/vediosetting', component:  VediosettingComponent,canActivate:[AuthGuardService]},
    { path: 'vendor/priority', component:  PromotionPriorityComponent,canActivate:[AuthGuardService]},
    { path: 'vendor/audience', component:  PromotionAudienceComponent,canActivate:[AuthGuardService]},
    { path: 'vendor/deals', component:  PromotionDealsComponent,canActivate:[AuthGuardService]},
    { path: 'vendor/homepage', component:  PromotionHomepageComponent,canActivate:[AuthGuardService]},
    { path: 'vendor/gallery0', component:  Gallery0Component,canActivate:[AuthGuardService]},


    { path: 'vendor/Success', component:  SuccessComponent},
    { path: 'vendor/Failure', component:  FailureComponent},
    { path: 'vendor/payment-selection', component:  PaymentSelectionComponent  },
    
  


  { path: 'User/vendor', component: VendorlistComponent },  

  { path: 'User/Timeline', component: TimelineComponent,canActivate:[AuthGuardService] },
  { path: 'User/Message', component: UsermessageComponent,canActivate:[AuthGuardService] },
  { path: 'User/mailsearch', component: UsermailsearchComponent,canActivate:[AuthGuardService] },
  { path: 'User/vendor', component: VendorlistComponent,canActivate:[AuthGuardService] },  

  { path: 'User/Bookmarks', component: BookmarkComponent,canActivate:[AuthGuardService] },
  { path: 'User/GuestList', component: GuestComponent,canActivate:[AuthGuardService] },
  { path: 'User/Budget', component: BudgetComponent,canActivate:[AuthGuardService] },
  { path: 'User/Inspirations', component: InspirationsComponent,canActivate:[AuthGuardService] },
  { path: 'User/UserReviews', component: UserReviewsComponent,canActivate:[AuthGuardService] },
  { path: 'User/myaccount', component: UseraccountComponent,canActivate:[AuthGuardService] },
  { path: 'Admin/dashboard', component:  AdmindashboardComponent,canActivate:[AuthGuardService] },  
  { path: 'Admin/login', component:  AdminComponent },  
  { path: 'Admin/Useraccountlist', component:  UseraccountlistComponent,canActivate:[AuthGuardService] },  
  { path: 'Admin/Customerbillings', component:  CustomerbillingsComponent,canActivate:[AuthGuardService]  },  
  { path: 'Admin/Calenderandnotes', component: CalenderandnotesComponent,canActivate:[AuthGuardService] },  
  { path: 'Admin/Email', component: EmailComponent,canActivate:[AuthGuardService] },  
  { path: 'Admin/Tickets', component:  TicketsComponent,canActivate:[AuthGuardService]  },  
  { path: 'Admin/Messageschat', component:   MessageschatComponent,canActivate:[AuthGuardService]   },    
  { path: 'Admin/Events', component:  EventsandarticlesComponent,canActivate:[AuthGuardService]},  
  { path: 'Admin/tipsandartical', component: SocialfeedComponent,canActivate:[AuthGuardService]  },  
  { path: 'Admin/Sitestats', component: SitestatsandreportsComponent,canActivate:[AuthGuardService] }, 
  { path: 'Admin/adminexpenses', component: AdminexpensesComponent,canActivate:[AuthGuardService] },  
 
  { path: 'Admin/Adminusers', component: AdminusersComponent,canActivate:[AuthGuardService] },  
  { path: 'Admin/Reviewandfeedback', component: ReviewandfeedbackComponent,canActivate:[AuthGuardService] },  
  { path: 'Admin/advertising', component:   AdminadvertisingComponent,canActivate:[AuthGuardService]  },  
  
  { path: 'Admin/taskboard', component:   TaskboardComponent,canActivate:[AuthGuardService]  },
  { path: 'Admin/site-feedback', component:   SiteFeedbackComponent,canActivate:[AuthGuardService]  },

  { path: 'Admin/userdetails', component:   UserdetailsComponent,canActivate:[AuthGuardService]  },


  { path: 'Admin/visitor-detail-stats', component:   DetailstatsComponent,canActivate:[AuthGuardService]  },


  { path: 'Admin/Sales-stats', component:   SalesstatsComponent,canActivate:[AuthGuardService]  },
  { path: 'Admin/CRM-stats', component:   CRMstatsComponent,canActivate:[AuthGuardService]  },
  { path: 'Admin/Network-stats', component:   NetworkstatsComponent,canActivate:[AuthGuardService]  },
  { path: 'Admin/Category-stats', component:   CategorystatsComponent,canActivate:[AuthGuardService]  },
  { path: 'Admin/Vendor-stats', component:   VendorstatsComponent,canActivate:[AuthGuardService]  },
 { path: 'Admin/adminaccount', component:   AdminuseraccountComponent,canActivate:[AuthGuardService]  },

  { path: '', component: FullLayoutComponent, data: { title: 'full Views' }, children: Full_ROUTES, canActivate: [AuthGuard] },
  { path: '', component: ContentLayoutComponent, data: { title: 'content Views' }, children: CONTENT_ROUTES, canActivate: [AuthGuard] },
  { path: '**', component: ErrorComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
