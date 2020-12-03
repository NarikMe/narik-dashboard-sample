import { Component, Injector } from "@angular/core";

import { WidgetDesign } from "../../../dashboard-share/base/widget-design";

import { DynamicComponent } from "@narik/core";

@DynamicComponent("TodoWidgetDesignComponent")
@Component({
  templateUrl: "./todo-widget-design.component.html",
})
export class TodoWidgetDesignComponent extends WidgetDesign {
  needDataSource = true;

  constructor(injector: Injector) {
    super(injector);
  }
}
