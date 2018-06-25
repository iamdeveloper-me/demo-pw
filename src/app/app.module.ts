
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
import { LoginPageComponent } from './login/login-page.component';



export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
  }

@NgModule({
    declarations: [
        AppComponent,
        FullLayoutComponent,
        ContentLayoutComponent,
        HomeComponent,
        LoginPageComponent
    ],
    imports: [
        BrowserAnimationsModule,
        StoreModule.forRoot({}),
        AppRoutingModule,
        FormsModule,
        SharedModule,
        HttpClientModule,
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
        DragulaService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }