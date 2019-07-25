import { Component } from "@angular/core";

import { WidgetView } from "../../../dashboard-share/base/widget-view";
import { WidgetViewUi } from "src/app/templates/template.decorator";

@WidgetViewUi()
@Component({
  templateUrl: "./chart-widget-view.component.html"
})
export class ChartWidgetViewComponent extends WidgetView {}
