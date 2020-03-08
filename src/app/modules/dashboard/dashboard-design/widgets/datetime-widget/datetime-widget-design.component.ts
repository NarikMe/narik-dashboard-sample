import { Component } from "@angular/core";

import { WidgetDesign } from "../../../dashboard-share/base/widget-design";
import { WidgetDesignUi } from "../../../../../templates/template.decorator";
import { DynamicForm } from "@narik/core";

@DynamicForm("DatetimeWidgetDesignComponent")
@WidgetDesignUi()
@Component({
  templateUrl: "./datetime-widget-design.component.html"
})
export class DatetimeWidgetDesignComponent extends WidgetDesign {
  displayTitle = false;
}
