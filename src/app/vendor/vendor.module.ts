import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";


import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatchHeightModule } from "../shared/directives/match-height.directive";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { NavemenuComponent } from './navemenu/navemenu.component';
import { VendorprofileComponent } from './vendorprofile/vendorprofile.component';

import { ChatComponent } from "./chat/chat.component";
import { MylistingComponent } from './mylisting/mylisting.component';




@NgModule({
    imports: [
        CommonModule,
        NgxChartsModule,
        NgbModule,
        MatchHeightModule
    ],
    declarations: [
        DashboardComponent,
        NavemenuComponent,
        VendorprofileComponent,
        ChatComponent,
        MylistingComponent
    ]
})
export class VendorModule { }
