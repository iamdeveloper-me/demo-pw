import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from "./chat/chat.component";
// import { AdvancedCardsComponent } from "./advanced/advanced-cards.component";
import { VendorprofileComponent } from './vendorprofile/vendorprofile.component';

const routes: Routes = [
    { path: '/profile', component:  VendorprofileComponent  },
    { path: '/chat', component:  ChatComponent  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class VendorRoutingModule { }
