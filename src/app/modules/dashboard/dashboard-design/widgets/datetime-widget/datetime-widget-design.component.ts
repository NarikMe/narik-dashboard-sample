import { Component, Injector } from "@angular/core";

import { WidgetDesign } from "../../../dashboard-share/base/widget-design";

import { DynamicForm } from "@narik/core";

@DynamicForm("DatetimeWidgetDesignComponent")
@Component({
  templateUrl: "./datetime-widget-design.component.html",
})
export class DatetimeWidgetDesignComponent extends WidgetDesign {
  displayTitle = false;

  constructor(injector: Injector) {
    super(injector);
  }
}
