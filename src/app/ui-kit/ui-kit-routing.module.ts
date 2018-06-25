import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GridsComponent } from "./grids/grids.component";
import { TypographyComponent } from "./typography/typography.component";

const routes: Routes = [
  {
    path: '',
    children: [     
      {
        path: 'grids',
        component: GridsComponent,
        data: {
          title: 'Grids'
        }
      },      
      {
        path: 'typography',
        component: TypographyComponent,
        data: {
          title: 'Typography'
        }
      },      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UIKitRoutingModule { }
