import { Component } from "@angular/core";

import { WidgetDesign } from "../../../dashboard-share/base/widget-design";
import { WidgetDesignUi } from "../../../../../templates/template.decorator";

@WidgetDesignUi()
@Component({
  templateUrl: "./datetime-widget-design.component.html"
})
export class DatetimeWidgetDesignComponent extends WidgetDesign {
  static readonly COMPONENT_NAME = "DatetimeWidgetDesignComponent";
  displayTitle = false;
}
