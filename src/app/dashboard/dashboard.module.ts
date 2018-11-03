import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { DashboardRoutingModule } from "./dashboard-routing.module";
import { ChartistModule } from 'ng-chartist';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatchHeightModule } from "../shared/directives/match-height.directive";

import { VendorComponent } from "./vendor/vendor.component";
import { UserComponent } from "./user/user.component";
import { AdminComponent } from "./admin/admin.component";
import { NavComponent } from './vendor/nav/nav.component';


@NgModule({
    imports: [
        CommonModule,
        DashboardRoutingModule,
        ChartistModule,
        NgbModule,
        MatchHeightModule
    ],
    exports: [],
    declarations: [
        VendorComponent,
        UserComponent,
        AdminComponent,
        NavComponent
    ],
    providers: [],
})
export class DashboardModule { }
