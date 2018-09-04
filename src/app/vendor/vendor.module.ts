import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { UiSwitchModule } from 'ngx-ui-switch';
import { ImageCropperModule } from 'ng2-img-cropper';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatchHeightModule } from "../shared/directives/match-height.directive";
//import {GalleryComponent,NgbdModalContent} from './gallery/gallery.component';
// import { DashboardComponent } from "./dashboard/dashboard.component";
// import { NavemenuComponent } from './navemenu/navemenu.component';
// import { VendorprofileComponent } from './vendorprofile/vendorprofile.component';

// import { ChatComponent } from "./chat/chat.component";
// import { MylistingComponent } from './mylisting/mylisting.component';
 //import { MyaccountComponent } from './myaccount/myaccount.component';
// import { EditprofileComponent } from './editprofile/editprofile.component';
// import { GalleryComponent } from './gallery/gallery.component';
// import { VendorsidebarComponent } from './vendorsidebar/vendorsidebar.component';
// import { MembershipComponent } from './membership/membership.component';
// import { BusinessInfoComponent } from './business-info/business-info.component';
// import { LocationComponent } from './location/location.component';
// import { VideosComponent } from './videos/videos.component';
 import { PromotionsComponent } from './promotions/promotions.component';
//import { PromotionPriorityComponent } from './promotion-priority/promotion-priority.component';
//import { PromotionAudienceComponent } from './promotion-audience/promotion-audience.component';
//import { PromotionDealsComponent } from './promotion-deals/promotion-deals.component';
//import { PromotionHomepageComponent } from './promotion-homepage/promotion-homepage.component';
//import { VediosettingComponent } from './vediosetting/vediosetting.component';
// import { StatisticsComponent } from './statistics/statistics.component';
// import { MyAccountComponent } from './my-account/my-account.component';
// import { MessageComponent } from './message/message.component';

//  import { ReviewComponent } from './review/review.component';
//  import { EventComponent } from './event/event.component';


///import { Albumsetting2Component } from './albumsetting2/albumsetting2.component';

//import { MailsearchComponent } from './mailsearch/mailsearch.component';

//import { EventListComponent } from './event-list/event-list.component';



//import { PortfolioviewComponent } from './portfolioview/portfolioview.component';
//import { ViewPhotoAlbumsComponent } from './view-photo-albums/view-photo-albums.component';

//import { PortfolioviewphotoComponent } from './portfolioviewphoto/portfolioviewphoto.component';
//import { AlbumsettingComponent } from './albumsetting/albumsetting.component';


// import { BusinessServicesComponent } from './business-services/business-services.component';
// import { CalendertableComponent } from './calendertable/calendertable.component';
// import { CreateEventComponent } from './create-event/create-event.component';
// import { VedioviewComponent } from './vedioview/vedioview.component';
// import { PromoteBusinessComponent } from './promote-business/promote-business.component';
// import { CreatePromotionComponent } from './create-promotion/create-promotion.component';
// import { AllPromotionPageComponent } from './all-promotion-page/all-promotion-page.component';

@NgModule({
    imports: [
        CommonModule,
        NgxChartsModule,
        NgbModule,
        MatchHeightModule,
        UiSwitchModule ,
        ImageCropperModule
    ],
    declarations: [
        //NgbdModalContent,
        // DashboardComponent,
        // NavemenuComponent,
        // VendorprofileComponent,
        // ChatComponent,
        // MylistingComponent,
        // MyaccountComponent,
        // EditprofileComponent,
        // GalleryComponent,
        // ReviewsComponent,
        // VendorsidebarComponent,
        // MembershipComponent,
        // BusinessInfoComponent,
        // LocationComponent,
        // VideosComponent,
         PromotionsComponent,
        //PromotionPriorityComponent,
       // PromotionAudienceComponent,
        //PromotionDealsComponent,
        //PromotionHomepageComponent,
       // VediosettingComponent,
        // StatisticsComponent,
        // MyAccountComponent,
        // MessageComponent,

        // ReviewComponent,
        // EventComponent,


        // ReviewComponent,
         //EventComponent,
         //EnquiriesComponent,
         //StorefrontComponent,
        // ActionsComponent,
         //ReachComponent,
         //GallerybarComponent,

        // Albumsetting2Component,
        // MailsearchComponent,

        // EventListComponent,

        // PortfolioviewComponent,
        // ViewPhotoAlbumsComponent,
        // BusinessServicesComponent,
        // CalendertableComponent,
        // CreateEventComponent,
        // VedioviewComponent,
        // PromoteBusinessComponent,
        // CreatePromotionComponent,
        // AllPromotionPageComponent

    ]
})
export class VendorModule { }
