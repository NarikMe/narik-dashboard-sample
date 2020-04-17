import { Component, Injector } from "@angular/core";

import { WidgetDesign } from "../../../dashboard-share/base/widget-design";
import { WidgetDesignUi } from "../../../../../templates/template.decorator";
import { DynamicForm } from "@narik/core";

@DynamicForm("KpiWidgetDesignComponent")
@WidgetDesignUi()
@Component({
  templateUrl: "./kpi-widget-design.component.html"
})
export class KpiWidgetDesignComponent extends WidgetDesign {
  needDataSource = true;

  constructor(injector: Injector) {
    super(injector);
  }
}
