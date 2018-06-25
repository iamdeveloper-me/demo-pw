import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VendorComponent } from "./vendor/vendor.component";
import { UserComponent } from "./user/user.component";
import { AdminComponent } from "./admin/admin.component";

const routes: Routes = [
  { 


    path: '',
    children: [
      {
        path: 'vendor',
        component: VendorComponent,
        data: {
          title: 'Dashboard 1'
        }
      },
      {
        path: 'user',
        component: UserComponent,
        data: {
          title: 'Dashboard 2'
        }
      },
      {
        path: 'admin',
        component: AdminComponent,
        data: {
          title: 'Dashboard 2'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule { }
