import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { UserpannelRoutingModule } from "./userpannel-routing.module";
import { ChartistModule } from 'ng-chartist';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatchHeightModule } from "../shared/directives/match-height.directive";
//import { UseraccountComponent } from './userboard/useraccount/useraccount.component';






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

      // UseraccountComponent
    ],

    providers: [],
})
export class UserpannelModule { }
