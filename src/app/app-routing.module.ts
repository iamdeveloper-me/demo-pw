import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { PhotoComponent } from './photo/photo.component';
import { TipsComponent } from './tips/tips.component';

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
import { EditprofileComponent } from './vendor/editprofile/editprofile.component';
import { MylistingComponent } from './vendor/mylisting/mylisting.component';
import { GalleryComponent } from './vendor/gallery/gallery.component';
const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'searchresult', component: SearchresultComponent },
  { path: 'searchresult/detailprofile', component:  DetailpageComponent  },
  { path: 'detailprofile', component:  DetailpageComponent  },
  { path: 'vendor', component:  VendorComponent  },
  { path: 'photo', component: PhotoComponent },
  { path: 'tips', component: TipsComponent },
  { path: 'dashboard', component:  DashboardComponent  },
  { path: 'home/vendor/gallery', component:  GalleryComponent   },
  { path: 'profile', component:  VendorprofileComponent  },
  { path: 'chat', component:  ChatComponent },
  { path: 'editprofile', component:   EditprofileComponent },
  { path: 'mylisting', component:   MylistingComponent },
  { path: 'home/searchresult', component: SearchresultComponent },
  { path: 'home/photo', component: PhotoComponent },
  { path: 'home/photo/tips', component: TipsComponent },
  { path: 'home/tips/photo', component: PhotoComponent },
  { path: 'home/tips/photo/tips', component: TipsComponent },
  { path: 'home/photo/tips/photos', component: PhotoComponent },
  { path: 'home/tips', component: TipsComponent },
  { path: 'home/vendor', component:  VendorComponent  },
  { path: 'home/searchresult/detailprofile', component:  DetailpageComponent  },
  { path: 'home/vendor/dashboard', component:  DashboardComponent  },
  { path: 'home/vendor/dashboard/profile', component:  VendorprofileComponent  },
  { path: 'home/vendor/dashboard/chat', component:  ChatComponent },
  { path: 'home/vendor/dashboard/editprofile', component:   EditprofileComponent },
  { path: 'home/vendor/chat', component:  ChatComponent },
  { path: 'home/vendor/editprofile', component:   EditprofileComponent },
  { path: 'home/vendor/mylisting', component:   MylistingComponent },
  { path: 'home/vendor/dashboard/mylisting', component:   MylistingComponent },
  { path: 'home/photo/home', component: HomeComponent },
  { path: 'home/tips/home', component: HomeComponent },

  
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
