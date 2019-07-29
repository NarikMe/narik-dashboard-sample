import { Component } from "@angular/core";

import { WidgetDesign } from "../../../dashboard-share/base/widget-design";
import { WidgetDesignUi } from "../../../../../templates/template.decorator";

@WidgetDesignUi()
@Component({
  templateUrl: "./data-table-widget-design.component.html"
})
export class DataTableWidgetDesignComponent extends WidgetDesign {
  static readonly COMPONENT_NAME = "DataTableWidgetDesignComponent";
  needDataSource = true;
}
