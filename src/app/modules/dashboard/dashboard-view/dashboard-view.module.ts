import { MatIconModule } from "@angular/material";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatCardModule } from "@angular/material/card";

import { DashboardViewCellComponent } from "./dashboard-view-cell/dashboard-view-cell.component";
import { DashboardViewRowComponent } from "./dashboard-view-row/dashboard-view-row.component";
import { WIDGETS } from "./widgets/index";
import { DashboardViewerComponent } from "./dashboard-viewer/dashboard-viewer.component";
import { NarikCommonModule } from "narik-common";
import {
  NarikMatToolbarModule,
  NarikMatBusyIndicatorModule
} from "narik-ui-material";
import { MatListModule } from "@angular/material/list";
import { NgxChartsModule } from "@swimlane/ngx-charts";

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    NarikCommonModule,
    NarikMatToolbarModule,
    NarikMatBusyIndicatorModule,
    MatListModule,
    NgxChartsModule,
    RouterModule
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
