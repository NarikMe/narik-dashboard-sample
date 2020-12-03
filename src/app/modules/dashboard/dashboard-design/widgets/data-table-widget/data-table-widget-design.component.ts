import { Component, Injector } from "@angular/core";

import { WidgetDesign } from "../../../dashboard-share/base/widget-design";

import { DynamicComponent } from "@narik/core";

@DynamicComponent("DataTableWidgetDesignComponent")
@Component({
  templateUrl: "./data-table-widget-design.component.html",
})
export class DataTableWidgetDesignComponent extends WidgetDesign {
  needDataSource = true;

  constructor(injector: Injector) {
    super(injector);
  }
}
