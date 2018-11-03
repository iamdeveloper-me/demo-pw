import { NgModule } from '@angular/core';
import { FormsRoutingModule } from "./forms-routing.module";


import { ValidationFormsComponent } from "./validation/validation-forms.component";
import { WizardFormsComponent } from "./wizard/wizard-forms.component";
import { BasicComponent } from './layouts/basic/basic.component';
import { HorizontalComponent } from './layouts/horizontal/horizontal.component';
import { HiddenLabelsComponent } from './layouts/hidden-labels/hidden-labels.component';
import { FormActionsComponent } from './layouts/form-actions/form-actions.component';
import { BorderedComponent } from './layouts/bordered/bordered.component';
import { StripedRowsComponent } from './layouts/striped-rows/striped-rows.component';
import { InputsComponent } from './elements/inputs/inputs.component';
import { InputGroupsComponent } from './elements/input-groups/input-groups.component';
import { InputGridComponent } from './elements/input-grid/input-grid.component';


import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NGXFormWizardModule } from "./ngx-wizard/ngx-wizard.module";
import { CustomFormsModule } from 'ng2-validation';
import { MatchHeightModule } from "../shared/directives/match-height.directive";
@NgModule({
    imports: [
       
        FormsRoutingModule,

        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        NGXFormWizardModule,
        CustomFormsModule,
        MatchHeightModule,
        NgbModule
    ],
    declarations: [
        ValidationFormsComponent,
        WizardFormsComponent,
        BasicComponent,
        HorizontalComponent,
        HiddenLabelsComponent,
        FormActionsComponent,
        BorderedComponent,
        StripedRowsComponent,
        InputsComponent,
        InputGroupsComponent,
        InputGridComponent
    ]

})
export class FormModule { }
