import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { UserpannelRoutingModule } from "./userpannel-routing.module";
import { ChartistModule } from 'ng-chartist';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatchHeightModule } from "../shared/directives/match-height.directive";

import { UserboardComponent } from './userboard/userboard.component';
import { TimelineComponent } from './userboard/timeline/timeline.component';
import { BookmarkComponent } from './userboard/bookmark/bookmark.component';
import { GuestComponent } from './userboard/guest/guest.component';
import { BudgetComponent } from './userboard/budget/budget.component';
import { VendorlistComponent } from './userboard/vendorlist/vendorlist.component';
import { ToolComponent } from './userboard/tool/tool.component';
import { InspirationsComponent } from './userboard/inspirations/inspirations.component';
import { UserReviewsComponent } from './userboard/user-reviews/user-reviews.component';
import { UserbannerComponent } from './userboard/userbanner/userbanner.component';





@NgModule({
    imports: [
        CommonModule,
        UserpannelRoutingModule,
        ChartistModule,
        NgbModule,
        MatchHeightModule
    ],
    exports: [],
    declarations: [
        // VendorComponent,
        // UserComponent,
        // AdminComponent,
        // NavComponent
        UserboardComponent,
        TimelineComponent,
        BookmarkComponent,
        GuestComponent,
        BudgetComponent,
        VendorlistComponent,
        ToolComponent,
        InspirationsComponent,
        UserReviewsComponent,
        UserbannerComponent,
        ],
    providers: [],
})
export class UserpannelModule { }
