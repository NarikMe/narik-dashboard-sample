
import {
  NarikMatBusyIndicatorModule,
  NarikMatToolbarModule,
  NarikMatButtonModule,
  NarikMatSelectModule,
  NarikMatInputModule,
  NarikMatCheckBoxModule
} from "@narik/ui-material";

import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { DashboardCellComponent } from "./dashboard-cell/dashboard-cell.component";
import { DashboardDesignerComponent } from "./dashboard-designer/dashboard-designer.component";
import { DashboardRowComponent } from "./dashboard-row/dashboard-row.component";
import { WIDGETS } from "./widgets/index";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { TranslateModule } from "@ngx-translate/core";
import { FormsModule } from "@angular/forms";
import { SelectWidgetTypeComponent } from "./select-widget-type/select-widget-type.component";
import { NarikCommonModule } from "@narik/common";
import { MatIconModule } from "@angular/material/icon";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { MatTabsModule } from "@angular/material/tabs";
import { MatListModule } from "@angular/material/list";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTabsModule,
    NarikCommonModule,
    NarikMatBusyIndicatorModule,
    NarikMatToolbarModule,
    NarikMatButtonModule,
    NarikMatSelectModule,
    NarikMatInputModule,
    NarikMatCheckBoxModule,
    MatListModule,
    TranslateModule,
    DragDropModule
  ],
  declarations: [
    WIDGETS,
    DashboardDesignerComponent,
    DashboardCellComponent,
    DashboardRowComponent,
    SelectWidgetTypeComponent
  ],
  entryComponents: [WIDGETS, SelectWidgetTypeComponent],
  exports: [DashboardDesignerComponent],
  providers: []
})
export class DashboardDesignModule {}
