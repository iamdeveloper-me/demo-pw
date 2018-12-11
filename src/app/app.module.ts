import { NgModule} from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RatingModule} from "ngx-rating";
import { FileUploadModule } from 'ng2-file-upload/ng2-file-upload';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import {DatePipe} from '@angular/common';
import { ImageCropperModule } from 'ng2-img-cropper';

import { DiscountdealsComponent } from './vendor/discountdeals/discountdeals.component';




//calender 

import { CommonModule } from "@angular/common";
import { NgbModalModule, NgbDatepickerModule, NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { CalendarModule, CalendarDateFormatter } from 'angular-calendar';
// import { DateTimePickerComponent } from './vendor/calendertable/date-time-picker.component';

//indox of vendor
import { QuillModule } from 'ngx-quill'
//vendorcharts
import { PortfolioviewphotoComponent } from './vendor/portfolioviewphoto/portfolioviewphoto.component';
//import { AngularFileUploaderModule } from "angular-file-uploader";

import { ChartsModule } from 'ng2-charts';
import { ChartistModule} from 'ng-chartist';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from "./shared/shared.module";
// import { VendorModule } from "./vendor/vendor.module" 
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { ContentLayoutComponent } from "./layouts/content/content-layout.component";
import { FullLayoutComponent } from "./layouts/full/full-layout.component";
import { HttpModule } from '@angular/http';
import { DragulaService } from 'ng2-dragula';
import { AuthService } from './shared/auth/auth.service';
import { AuthGuard } from './shared/auth/auth-guard.service';
import * as $ from 'jquery';
import { UiSwitchModule } from 'ngx-ui-switch';
 
import {
    SocialLoginModule,
    AuthServiceConfig,
    GoogleLoginProvider,
    FacebookLoginProvider,
} from "angular5-social-login";




import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { BannerComponent } from './banner/banner.component';
import { FootComponent } from './foot/foot.component';

import { VendorcardComponent } from './vendorcard/vendorcard.component';
import { RegisterComponent } from './register/register.component';
import { EqualValidator } from './register/equal-validator.directive';
import { SearchresultComponent } from './searchresult/searchresult.component';
import { PhotoComponent } from './photo/photo.component';
import { TipsComponent } from './tips/tips.component';
import { DetailpageComponent } from './detailpage/detailpage.component';
import { EventsComponent } from './events/events.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FaquestionComponent } from './faquestion/faquestion.component';
import { TermsandconComponent } from './termsandcon/termsandcon.component';
import { CareersComponent } from './careers/careers.component';
import { AdvertiseComponent } from './advertise/advertise.component';
import { AllcategoryComponent } from './allcategory/allcategory.component';
import { SupplierByCityComponent } from './supplier-by-city/supplier-by-city.component';
import { SupplierByCateComponent } from './supplier-by-cate/supplier-by-cate.component';
import { CategoryComponent } from './category/category.component';

import { VendorlistComponent } from './userpannel/userboard/vendorlist/vendorlist.component';
import { ToolComponent } from './userpannel/userboard/tool/tool.component';
import { UserpannelComponent } from './userpannel/userpannel.component';
import { UserboardComponent } from './userpannel/userboard/userboard.component';
import { InspirationsComponent } from './userpannel/userboard/inspirations/inspirations.component';
import { UserReviewsComponent } from './userpannel/userboard/user-reviews/user-reviews.component';
import { UserbannerComponent } from './userpannel/userboard/userbanner/userbanner.component';
import { TimelineComponent } from './userpannel/userboard/timeline/timeline.component';
import { UsermessageComponent } from './userpannel/userboard/usermessage/usermessage.component';
import { UsermailsearchComponent } from './userpannel/userboard/usermailsearch/usermailsearch.component'
import { BookmarkComponent ,NgbdbookmarkModalContent } from './userpannel/userboard/bookmark/bookmark.component';
import { GuestComponent } from './userpannel/userboard/guest/guest.component';
import { BudgetComponent } from './userpannel/userboard/budget/budget.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
import { BusinessServicesComponent } from './vendor/business-services/business-services.component';
//import { BusinessServicesComponent } from './vendor/business-services/business-services.component';
import { CalendertableComponent } from './vendor/calendertable/calendertable.component';
import { CreateEventComponent } from './vendor/create-event/create-event.component';
import { MessageComponent } from './vendor/message/message.component';
import { AlbumviewComponent } from './vendor/albumview/albumview.component';
import { PromoteBusinessComponent , NgbdpromotbusinessModalContent} from './vendor/promote-business/promote-business.component';
import { VedioviewComponent  } from './vendor/vedioview/vedioview.component';
import { StatisticsComponent } from './vendor/statistics/statistics.component';
import { AllPromotionPageComponent ,NgbdModalContent} from './vendor/all-promotion-page/all-promotion-page.component';
import { VendorsidebarComponent } from './vendor/vendorsidebar/vendorsidebar.component';
import { GalleryComponent  } from './vendor/gallery/gallery.component';
// import { VendorComponent } from './vendor/vendor/vendor.component';
import { DashboardComponent } from "./vendor/dashboard/dashboard.component";
import { BusinessInfoComponent } from "./vendor/business-info/business-info.component";
import { LocationComponent} from "./vendor/location/location.component";
import { VideosComponent ,SafePipeP} from './vendor/videos/videos.component';
import { MylistingComponent } from './vendor/mylisting/mylisting.component';
import { NavemenuComponent } from './vendor/navemenu/navemenu.component';
import { ChatComponent } from "./vendor/chat/chat.component";
import { VendorprofileComponent } from './vendor/vendorprofile/vendorprofile.component';
import { EditprofileComponent } from './vendor/editprofile/editprofile.component';
import { ReviewsComponent } from './vendor/reviews/reviews.component';
import { MembershipComponent } from './vendor/membership/membership.component';


import { CreatePromotionComponent } from './vendor/create-promotion/create-promotion.component'; 





import {  AdminComponent } from "./admin/admin.component";
import { AdminsidebarComponent } from './admin/adminsidebar/adminsidebar.component';
import { AdminnavbarComponent } from './admin/adminnavbar/adminnavbar.component';
import { AdmindashboardComponent } from './admin/admindashboard/admindashboard.component';
import { UseraccountlistComponent ,NgbduserModalContent } from './admin/useraccountlist/useraccountlist.component';
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
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { AdmincalenderComponent } from './admin/admincalender/admincalender.component';
import { MininavbarComponent } from './admin/mininavbar/mininavbar.component';
import { PortfolioviewComponent } from './vendor/portfolioview/portfolioview.component';
import { ViewPhotoAlbumsComponent } from './vendor/view-photo-albums/view-photo-albums.component';
import { AlbumsettingComponent } from './vendor/albumsetting/albumsetting.component';
import { EventListComponent } from './vendor/event-list/event-list.component';
import { Albumsetting2Component } from './vendor/albumsetting2/albumsetting2.component';
import { MailsearchComponent, ReversePipe } from './vendor/mailsearch/mailsearch.component';
import { EnquiriesComponent } from './vendor/enquiries/enquiries.component';
import { StorefrontComponent } from './vendor/storefront/storefront.component';
import { ActionsComponent } from './vendor/actions/actions.component';
import { ReachComponent } from './vendor/reach/reach.component';
import { GallerybarComponent } from './vendor/gallerybar/gallerybar.component';

import { EventComponent } from './vendor/event/event.component';
import { ReviewComponent } from './vendor/review/review.component';
import { VediosettingComponent,SafePipe } from './vendor/vediosetting/vediosetting.component';


import { PromotionPriorityComponent } from './vendor/promotion-priority/promotion-priority.component';
import { PromotionAudienceComponent } from './vendor/promotion-audience/promotion-audience.component';
import { PromotionDealsComponent } from './vendor/promotion-deals/promotion-deals.component';
import { PromotionHomepageComponent } from './vendor/promotion-homepage/promotion-homepage.component';
import { TipslistComponent } from './tipslist/tipslist.component';
import { EventlistComponent } from './eventlist/eventlist.component';
import { InvoiceDetailComponent } from './vendor/invoice-detail/invoice-detail.component';
import { FootCupleComponent } from './foot-cuple/foot-cuple.component';
import { TaskboardComponent } from './admin/taskboard/taskboard.component';

import { UserdetailsComponent } from './admin/userdetails/userdetails.component';

import { SiteFeedbackComponent } from './admin/site-feedback/site-feedback.component';
import { DetailstatsComponent } from './admin/detailstats/detailstats.component';
import { SalesstatsComponent } from './admin/salesstats/salesstats.component';
import { CRMstatsComponent } from './admin/crmstats/crmstats.component';
import { NetworkstatsComponent } from './admin/networkstats/networkstats.component';
import { CategorystatsComponent } from './admin/categorystats/categorystats.component';
import { AdminuseraccountComponent } from './admin/adminuseraccount/adminuseraccount.component';
import { VendorstatsComponent } from './admin/vendorstats/vendorstats.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { MatchHeightModule } from "./shared/directives/match-height.directive";

import { MyaccountComponent } from './vendor/myaccount/myaccount.component';

import { UseraccountComponent } from './userpannel/userboard/useraccount/useraccount.component';
import { ErrorComponent } from './error/error.component';

import { AdminexpensesComponent } from './admin/adminexpenses/adminexpenses.component';
import { SupplierbylocationComponent } from './supplierbylocation/supplierbylocation.component';
import { PhotogallaryComponent } from './photogallary/photogallary.component';
import { VediogallaryComponent } from './vediogallary/vediogallary.component';
import { SuccessComponent } from './vendor/success/success.component';
import { FailureComponent } from './vendor/failure/failure.component';


import { PhotogallerydetailComponent } from './photogallerydetail/photogallerydetail.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

// code by v
import {BrowserModule} from '@angular/platform-browser';
import {NgxPaginationModule} from 'ngx-pagination';

//import { VendorComponent } from './dashboard/vendor/vendor.component';

import { apiService } from './shared/service/api.service';
import { PaymentSelectionComponent } from './vendor/payment-selection/payment-selection.component';
import { HompageLocationComponent } from './vendor/hompage-location/hompage-location.component';

export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
    
  }

export function getAuthServiceConfigs() {
    let config = new AuthServiceConfig(
        [
            {
                id: FacebookLoginProvider.PROVIDER_ID,
                // provider: new FacebookLoginProvider("561602290896109")
                provider: new FacebookLoginProvider("2098318490445607")
            },
            {
                id: GoogleLoginProvider.PROVIDER_ID,
                provider: new GoogleLoginProvider("648350515282-rj198cao710kjbpgkc31k9dpkdck991h.apps.googleusercontent.com")
            },
        ]
);
    return config;
}
@NgModule({
    declarations: [
        SafePipeP,
        SafePipe,
        ReversePipe  ,
        AppComponent,
        InvoiceDetailComponent,
        EnquiriesComponent,
        TipslistComponent,
       // VendorComponent ,
        PromotionPriorityComponent,
        NgbdModalContent,
        StorefrontComponent,
        PromotionHomepageComponent,
        PromotionAudienceComponent,
        PromotionDealsComponent,
        ReachComponent,
        ActionsComponent,
        GallerybarComponent,
        AllPromotionPageComponent,
        Albumsetting2Component,
        MailsearchComponent,
        EventListComponent,
        AlbumsettingComponent,
        PortfolioviewComponent,
        ViewPhotoAlbumsComponent,
        BusinessInfoComponent,
        
        CreatePromotionComponent,
        LocationComponent,
        FullLayoutComponent,
        ContentLayoutComponent,
        HomeComponent,
        MenuComponent,
        BannerComponent,
        FootComponent,
        RegisterComponent,
        VendorcardComponent,
        NavemenuComponent,
        VendorprofileComponent,
        ChatComponent,
        MylistingComponent,
        SearchresultComponent,
    
        EditprofileComponent,
        GalleryComponent,
        DiscountdealsComponent,
        ReviewsComponent,
        NgbduserModalContent ,
        VendorsidebarComponent,
        PhotoComponent,
        TipsComponent,
        DetailpageComponent,
        MembershipComponent,
        EventsComponent,
        ContactUsComponent,
        FaquestionComponent,
        TermsandconComponent,
        CareersComponent,
        AdvertiseComponent,
        //VendorComponent,
        DashboardComponent,
        UserpannelComponent,
        UserboardComponent,
        AllcategoryComponent,
        SupplierByCityComponent,
        SupplierByCateComponent,
        VideosComponent,
      

        BusinessServicesComponent ,
        CategoryComponent,
        VendorlistComponent,
        ToolComponent,
        TimelineComponent ,
        UsermessageComponent,
        UsermailsearchComponent,
        UseraccountComponent,
        BookmarkComponent,
        NgbdbookmarkModalContent,
        GuestComponent,
        BudgetComponent,
        CalendertableComponent,
        CreateEventComponent,
        AlbumviewComponent,

        PromoteBusinessComponent,  
        NgbdpromotbusinessModalContent,

        VedioviewComponent,
        // DateTimePickerComponent,
        MessageComponent,
        StatisticsComponent,
        UserReviewsComponent,
        InspirationsComponent,
        UserbannerComponent,
        AdminComponent,
        AdminsidebarComponent,
        AdminnavbarComponent,
        AdmindashboardComponent,
        UseraccountlistComponent,
        CustomerbillingsComponent,
        CalenderandnotesComponent,
        EmailComponent,
        TicketsComponent,
        MessageschatComponent,
        AdminadvertisingComponent,
        SocialfeedComponent,
        EventsandarticlesComponent,
        SitestatsandreportsComponent,
        AdminusersComponent,
        ReviewandfeedbackComponent,
        MyaccountComponent,
        AdmincalenderComponent,
        MininavbarComponent,
        PortfolioviewphotoComponent,
        EventComponent,
        ReviewComponent,
        VediosettingComponent,
        TipslistComponent,
        EventlistComponent,
        FootCupleComponent,
        TaskboardComponent,
        SiteFeedbackComponent,

        UserdetailsComponent,

        DetailstatsComponent,
        SalesstatsComponent,
        CRMstatsComponent,
        NetworkstatsComponent,
        CategorystatsComponent,
        VendorstatsComponent,
        AdminuseraccountComponent,
        ErrorComponent,
        AdminexpensesComponent,
        SupplierbylocationComponent,
        PhotogallaryComponent,
        VediogallaryComponent,
        PhotogallerydetailComponent,

        SuccessComponent,
        FailureComponent,
        ResetPasswordComponent,

        EqualValidator,

        PaymentSelectionComponent,

        HompageLocationComponent
        
        




  ],
    imports: [
        ReactiveFormsModule,
        CustomFormsModule,
        MatchHeightModule,
        
        FileUploadModule,
        ImageCropperModule,
        BrowserAnimationsModule,
        StoreModule.forRoot({}),
        AppRoutingModule,
        FormsModule,
        SharedModule,
        UiSwitchModule ,
        HttpClientModule,
        SocialLoginModule,
        HttpModule,
        RatingModule,
        // VendorModule,
        //inbox
        QuillModule,
        //calender
        CommonModule,
        //charts 
        ChartsModule,
        Ng2SmartTableModule,
        ChartistModule,
        NgxChartsModule,
        CalendarModule.forRoot(),
        NgbModalModule.forRoot(),
        NgbDatepickerModule.forRoot(),
        NgbTimepickerModule.forRoot(),
        ToastrModule.forRoot(),
        NgbModule.forRoot(),

        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClient]
              }
        }),
        AgmCoreModule.forRoot({
           // apiKey: 'AIzaSyBr5_picK8YJK7fFR2CPzTVMj6GG1TtRGo',
            apiKey: 'Ei8N8XXZeK7WUTKSCi4B8A',
            libraries: ["places"]
        }),
        // code by v
        BrowserModule, NgxPaginationModule
    ],

    providers: [
        {provide: LocationStrategy, useClass: HashLocationStrategy},
        AuthService,
        GoogleMapsAPIWrapper,
        AuthGuard,
        DragulaService,
       
        DatePipe,

        {
            provide: AuthServiceConfig,
            useFactory: getAuthServiceConfigs
        },
        apiService
    ],
    bootstrap: [AppComponent, MylistingComponent],
    entryComponents: [NgbdModalContent],
   
})
export class AppModule {
}
