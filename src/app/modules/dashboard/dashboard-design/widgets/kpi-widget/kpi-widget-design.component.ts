import { Component, Injector } from "@angular/core";

import { WidgetDesign } from "../../../dashboard-share/base/widget-design";

import { DynamicForm } from "@narik/core";

@DynamicForm("KpiWidgetDesignComponent")
@Component({
  templateUrl: "./kpi-widget-design.component.html",
})
export class KpiWidgetDesignComponent extends WidgetDesign {
  needDataSource = true;

  constructor(injector: Injector) {
    super(injector);
  }
}
