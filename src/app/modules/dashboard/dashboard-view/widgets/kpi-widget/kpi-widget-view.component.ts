import { Component, Injector } from "@angular/core";

import { WidgetView } from "../../../dashboard-share/base/widget-view";
import { WidgetViewUi } from "src/app/templates/template.decorator";

@WidgetViewUi()
@Component({
  templateUrl: "./kpi-widget-view.component.html",
  styleUrls: ["kpi-widget-view.component.css"]
})
export class KpiWidgetViewComponent extends WidgetView {
  static readonly COMPONENT_NAME = "KpiWidgetViewComponent";

  displayTitle = false;
  kpiInfo: any = {};
  constructor(injector: Injector) {
    super(injector);
  }
  afterModelSet() {
    if (this.model.dataSource) {
      this.dataSourceService
        .dataSourceData(this.model.dataSource)
        .subscribe(x => (this.kpiInfo = x));
    }
  }
}
