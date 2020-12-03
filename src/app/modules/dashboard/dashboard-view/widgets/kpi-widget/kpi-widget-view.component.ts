import { Component, Injector } from "@angular/core";

import { WidgetView } from "../../../dashboard-share/base/widget-view";

import { DynamicComponent } from "@narik/core";

@DynamicComponent("KpiWidgetViewComponent")
@Component({
  templateUrl: "./kpi-widget-view.component.html",
  styleUrls: ["kpi-widget-view.component.css"],
})
export class KpiWidgetViewComponent extends WidgetView {
  displayTitle = false;
  kpiInfo: any = {};
  constructor(injector: Injector) {
    super(injector);
  }
  afterModelSet() {
    if (this.model.dataSource) {
      this.dataSourceService
        .dataSourceData(this.model.dataSource)
        .subscribe((x) => (this.kpiInfo = x));
    }
  }
}
