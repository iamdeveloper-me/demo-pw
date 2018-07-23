 
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//calender 

import { CommonModule } from "@angular/common";
import { NgbModalModule, NgbDatepickerModule, NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { CalendarModule, CalendarDateFormatter } from 'angular-calendar';
import { DateTimePickerComponent } from './vendor/calendertable/date-time-picker.component';

//indox of vendor
import { QuillModule } from 'ngx-quill'











import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from "./shared/shared.module";
import { ToastrModule } from 'ngx-toastr';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { StoreModule } from '@ngrx/store';


import { AppComponent } from './app.component';
import { ContentLayoutComponent } from "./layouts/content/content-layout.component";
import { FullLayoutComponent } from "./layouts/full/full-layout.component";
import { FormsModule } from '@angular/forms';

import { DragulaService } from 'ng2-dragula';
import { AuthService } from './shared/auth/auth.service';
import { AuthGuard } from './shared/auth/auth-guard.service';
 import * as $ from 'jquery';
 import { UiSwitchModule } from 'ngx-ui-switch';
 
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { BannerComponent } from './banner/banner.component';
import { FootComponent } from './foot/foot.component';
import { LoginComponent } from './login/login.component';
import { VendorcardComponent } from './vendorcard/vendorcard.component';
import { VendorComponent } from './vendor/vendor.component';
import { DashboardComponent } from "./vendor/dashboard/dashboard.component";
import { BusinessInfoComponent } from "./vendor/business-info/business-info.component";
import { LocationComponent } from "./vendor/location/location.component";
import { VideosComponent } from './vendor/videos/videos.component';

import { MylistingComponent } from './vendor/mylisting/mylisting.component';
import { NavemenuComponent } from './vendor/navemenu/navemenu.component';
import { ChatComponent } from "./vendor/chat/chat.component";
import { VendorprofileComponent } from './vendor/vendorprofile/vendorprofile.component';
import { EditprofileComponent } from './vendor/editprofile/editprofile.component';
import { ReviewsComponent } from './vendor/reviews/reviews.component';
import { MembershipComponent } from './vendor/membership/membership.component';

import {
    SocialLoginModule,
    AuthServiceConfig,
    GoogleLoginProvider,
    FacebookLoginProvider,
} from "angular5-social-login";

import {RegisterComponent} from './register/register.component';

import { SearchresultComponent } from './searchresult/searchresult.component';
import { MyaccountComponent } from './vendor/myaccount/myaccount.component';
import { GalleryComponent } from './vendor/gallery/gallery.component';
import { VendorsidebarComponent } from './vendor/vendorsidebar/vendorsidebar.component';
import { PhotoComponent } from './photo/photo.component';
import { TipsComponent } from './tips/tips.component';
import { DetailpageComponent } from './detailpage/detailpage.component';
import { EventsComponent } from './events/events.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FaquestionComponent } from './faquestion/faquestion.component';
import { TermsandconComponent } from './termsandcon/termsandcon.component';
import { CareersComponent } from './careers/careers.component';
import { AdvertiseComponent } from './advertise/advertise.component';
import { UserpannelComponent } from './userpannel/userpannel.component';
import { UserboardComponent } from './userpannel/userboard/userboard.component';
import { AllcategoryComponent } from './allcategory/allcategory.component';
import { SupplierByCityComponent } from './supplier-by-city/supplier-by-city.component';
import { SupplierByCateComponent } from './supplier-by-cate/supplier-by-cate.component';
import { CategoryComponent } from './category/category.component';
import { VendorlistComponent } from './userpannel/userboard/vendorlist/vendorlist.component';
import { ToolComponent } from './userpannel/userboard/tool/tool.component';
import { TimelineComponent } from './userpannel/userboard/timeline/timeline.component';
import { BookmarkComponent } from './userpannel/userboard/bookmark/bookmark.component';
import { GuestComponent } from './userpannel/userboard/guest/guest.component';
import { BudgetComponent } from './userpannel/userboard/budget/budget.component';
import { BusinessServicesComponent } from './vendor/business-services/business-services.component';
import { CalendertableComponent } from './vendor/calendertable/calendertable.component';
import { CreateEventComponent } from './vendor/create-event/create-event.component';
import { MessageComponent } from './vendor/message/message.component';
import { AlbumviewComponent } from './vendor/albumview/albumview.component';

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
        AppComponent,
        BusinessInfoComponent,
        LocationComponent,
        FullLayoutComponent,
        ContentLayoutComponent,
        HomeComponent,
        MenuComponent,
        BannerComponent,
        FootComponent,
        LoginComponent,
        RegisterComponent,
        VendorcardComponent,
        NavemenuComponent,
        VendorprofileComponent,
        ChatComponent,
        MylistingComponent,
        SearchresultComponent,
        MyaccountComponent,
        EditprofileComponent,
        GalleryComponent,
        ReviewsComponent,
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
        VendorComponent,
        DashboardComponent,
        UserpannelComponent,
        UserboardComponent,
        AllcategoryComponent,
        SupplierByCityComponent,
        SupplierByCateComponent,
         VideosComponent,
        BusinessServicesComponent,
        CategoryComponent,
        VendorlistComponent,
        ToolComponent,
        TimelineComponent ,
        BookmarkComponent,
        GuestComponent,
        BudgetComponent,
        CalendertableComponent,
        CreateEventComponent,
        AlbumviewComponent,
        DateTimePickerComponent,
        MessageComponent

  ],
    imports: [
        BrowserAnimationsModule,
        StoreModule.forRoot({}),
        AppRoutingModule,
        FormsModule,
        SharedModule,
        UiSwitchModule ,
        HttpClientModule,
        SocialLoginModule,
        //inbox
        QuillModule ,
        //calender
        CommonModule,
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
            apiKey: 'AIzaSyBr5_picK8YJK7fFR2CPzTVMj6GG1TtRGo'
        })
    ],

    providers: [
        AuthService,
        AuthGuard,
        DragulaService,
        {
            provide: AuthServiceConfig,
            useFactory: getAuthServiceConfigs
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
