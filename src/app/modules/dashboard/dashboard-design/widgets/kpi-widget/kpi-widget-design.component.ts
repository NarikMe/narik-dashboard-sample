import { Component } from "@angular/core";

import { WidgetDesign } from "../../../dashboard-share/base/widget-design";
import { WidgetDesignUi } from "../../../../../templates/template.decorator";

@WidgetDesignUi()
@Component({
  templateUrl: "./kpi-widget-design.component.html"
})
export class KpiWidgetDesignComponent extends WidgetDesign {
  static readonly COMPONENT_NAME = "KpiWidgetDesignComponent";
  needDataSource = true;
}
