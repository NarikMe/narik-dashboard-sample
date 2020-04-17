import { Component, Injector } from "@angular/core";

import { WidgetDesign } from "../../../dashboard-share/base/widget-design";
import { WidgetDesignUi } from "../../../../../templates/template.decorator";
import { DynamicForm } from "@narik/core";

@DynamicForm("DataTableWidgetDesignComponent")
@WidgetDesignUi()
@Component({
  templateUrl: "./data-table-widget-design.component.html",
})
export class DataTableWidgetDesignComponent extends WidgetDesign {
  needDataSource = true;

  constructor(injector: Injector) {
    super(injector);
  }
}
