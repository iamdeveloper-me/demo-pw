import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { FullLayoutComponent } from "./layouts/full/full-layout.component";
import { ContentLayoutComponent } from "./layouts/content/content-layout.component";

import { Full_ROUTES } from "./shared/routes/full-layout.routes";
import { CONTENT_ROUTES } from "./shared/routes/content-layout.routes";
import { SearchresultComponent } from './searchresult/searchresult.component';
import { AuthGuard } from './shared/auth/auth-guard.service';
import { HomeComponent } from './home/home.component';
import { VendorComponent } from './vendor/vendor.component';
import { DashboardComponent } from "./vendor/dashboard/dashboard.component";
import { VendorprofileComponent } from './vendor/vendorprofile/vendorprofile.component';
import { DetailpageComponent } from './detailpage/detailpage.component';
import { ChatComponent } from "./vendor/chat/chat.component";
const appRoutes: Routes = [
  { path: 'searchresult', component: SearchresultComponent },
   { path: 'home', component: HomeComponent },
  { path: 'vendor', component:  VendorComponent  },
   { path: 'searchresult/detailprofile', component:  DetailpageComponent  },
  { path: 'vendor/dashboard', component:  DashboardComponent  },
  { path: 'vendor/dashboard/profile', component:  VendorprofileComponent  },
  { path: 'vendor/dashboard/chat', component:  ChatComponent },
  
  // {
  //   path: 'home/vendor',
  //   redirectTo: 'dashboard/vendor',
  //   pathMatch: 'full',
  // },
  // {
  //   path: 'home/user',
  //   redirectTo: 'dashboard/user',
  //   pathMatch: 'full',
  // }, 
  
  { path: '', component: FullLayoutComponent, data: { title: 'full Views' }, children: Full_ROUTES, canActivate: [AuthGuard] },
  { path: '', component: ContentLayoutComponent, data: { title: 'content Views' }, children: CONTENT_ROUTES, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
