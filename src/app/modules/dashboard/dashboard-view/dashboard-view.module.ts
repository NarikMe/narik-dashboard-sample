import { NgMathPipesModule } from "angular-pipes";
import { NarikCommonModule } from "narik-common";
import {
  NarikMatBusyIndicatorModule,
  NarikMatToolbarModule,
  NarikMatCheckBoxModule,
  NarikMatDataTableModule
} from "narik-ui-material";
import { DateFnsModule } from "ngx-date-fns";

import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatChipsModule, MatIconModule } from "@angular/material";
import { MatCardModule } from "@angular/material/card";
import { MatListModule } from "@angular/material/list";
import { RouterModule } from "@angular/router";
import { NgxChartsModule } from "@swimlane/ngx-charts";

import { DashboardViewCellComponent } from "./dashboard-view-cell/dashboard-view-cell.component";
import { DashboardViewRowComponent } from "./dashboard-view-row/dashboard-view-row.component";
import { DashboardViewerComponent } from "./dashboard-viewer/dashboard-viewer.component";
import { WIDGETS } from "./widgets/index";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatIconModule,
    MatChipsModule,
    NarikCommonModule,
    NarikMatToolbarModule,
    NarikMatBusyIndicatorModule,
    NarikMatCheckBoxModule,
    NarikMatDataTableModule,
    MatListModule,
    NgxChartsModule,
    RouterModule,
    NgMathPipesModule,
    DateFnsModule.forRoot()
  ],
  declarations: [
    WIDGETS,
    DashboardViewRowComponent,
    DashboardViewCellComponent,
    DashboardViewerComponent
  ],
  entryComponents: [WIDGETS],
  exports: [DashboardViewerComponent],
  providers: []
})
export class DashboardViewModule {}
