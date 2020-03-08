import { Component } from "@angular/core";

import { WidgetDesign } from "../../../dashboard-share/base/widget-design";
import { WidgetDesignUi } from "../../../../../templates/template.decorator";
import { DynamicForm } from "@narik/core";

@DynamicForm("TodoWidgetDesignComponent")
@WidgetDesignUi()
@Component({
  templateUrl: "./todo-widget-design.component.html"
})
export class TodoWidgetDesignComponent extends WidgetDesign {
  needDataSource = true;
}
