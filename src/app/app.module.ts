
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { BannerComponent } from './banner/banner.component';
import { FootComponent } from './foot/foot.component';
import { LoginComponent } from './login/login.component';
import { VendorcardComponent } from './vendorcard/vendorcard.component';
import { DashboardComponent } from "./vendor/dashboard/dashboard.component";
import { MylistingComponent } from './vendor/mylisting/mylisting.component';
import { NavemenuComponent } from './vendor/navemenu/navemenu.component';
import { ChatComponent } from "./vendor/chat/chat.component";
import { VendorprofileComponent } from './vendor/vendorprofile/vendorprofile.component';
import { EditprofileComponent } from './vendor/editprofile/editprofile.component';
import {
    SocialLoginModule,
    AuthServiceConfig,
    GoogleLoginProvider,
    FacebookLoginProvider,
} from "angular5-social-login";

import {RegisterComponent} from './register/register.component';
import { VendorComponent } from './vendor/vendor.component';
import { SearchresultComponent } from './searchresult/searchresult.component';
import { MyaccountComponent } from './vendor/myaccount/myaccount.component';
import { GalleryComponent } from './vendor/gallery/gallery.component';
import { PhotoComponent } from './photo/photo.component';
import { TipsComponent } from './tips/tips.component';
import { DetailpageComponent } from './detailpage/detailpage.component';




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
        FullLayoutComponent,
        ContentLayoutComponent,
        HomeComponent,
        MenuComponent,
        BannerComponent,
        FootComponent,
        LoginComponent,
        RegisterComponent,
        VendorcardComponent,
        VendorComponent,
        DashboardComponent,
        NavemenuComponent,
        VendorprofileComponent,
        ChatComponent,
        MylistingComponent,
        SearchresultComponent,
        MyaccountComponent,
        EditprofileComponent,
        GalleryComponent,
        PhotoComponent,
        TipsComponent,
        DetailpageComponent

  ],
    imports: [
        BrowserAnimationsModule,
        StoreModule.forRoot({}),
        AppRoutingModule,
        FormsModule,
        SharedModule,
        HttpClientModule,
        SocialLoginModule,
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
