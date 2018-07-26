import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { UiSwitchModule } from 'ngx-ui-switch';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatchHeightModule } from "../shared/directives/match-height.directive";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { NavemenuComponent } from './navemenu/navemenu.component';
import { VendorprofileComponent } from './vendorprofile/vendorprofile.component';

import { ChatComponent } from "./chat/chat.component";
import { MylistingComponent } from './mylisting/mylisting.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { VendorsidebarComponent } from './vendorsidebar/vendorsidebar.component';
import { MembershipComponent } from './membership/membership.component';
import { BusinessInfoComponent } from './business-info/business-info.component';
import { LocationComponent } from './location/location.component';
import { VideosComponent } from './videos/videos.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { MessageComponent } from './message/message.component';
import { ReviewComponent } from './review/review.component';
import { EventComponent } from './event/event.component';
import { BusinessServicesComponent } from './business-services/business-services.component';
import { CalendertableComponent } from './calendertable/calendertable.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { VedioviewComponent } from './vedioview/vedioview.component';
import { PromoteBusinessComponent } from './promote-business/promote-business.component';
import { CreatePromotionComponent } from './create-promotion/create-promotion.component';
import { AllPromotionPageComponent } from './all-promotion-page/all-promotion-page.component';

@NgModule({
    imports: [
        CommonModule,
        NgxChartsModule,
        NgbModule,
        MatchHeightModule,
        UiSwitchModule 
    ],
    declarations: [
        DashboardComponent,
        NavemenuComponent,
        VendorprofileComponent,
        ChatComponent,
        MylistingComponent,
        MyaccountComponent,
        EditprofileComponent,
        GalleryComponent,
        ReviewsComponent,
        VendorsidebarComponent,
        MembershipComponent,
        BusinessInfoComponent,
        LocationComponent,
        VideosComponent,
        PromotionsComponent,
        StatisticsComponent,
        MyAccountComponent,
        MessageComponent,
        ReviewComponent,
        EventComponent,
        BusinessServicesComponent,
        CalendertableComponent,
        CreateEventComponent,
        VedioviewComponent,
        PromoteBusinessComponent,
        CreatePromotionComponent,
        AllPromotionPageComponent

    ]
})
export class VendorModule { }
