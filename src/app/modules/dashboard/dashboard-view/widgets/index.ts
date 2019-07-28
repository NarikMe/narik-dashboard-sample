import { Provider } from "@angular/core";

import { ChartWidgetViewComponent } from "./chart-widget/chart-widget-view.component";
import { DatetimeWidgetViewComponent } from "./datetime-widget/datetime-widget-view.component";
import { KpiWidgetViewComponent } from "./kpi-widget/kpi-widget-view.component";
import { LinkWidgetViewComponent } from "./link-widget/link-widget-view.component";
import { TodoWidgetViewComponent } from "./todo-widget/todo-widget-view.component";

export const WIDGETS: Provider[] = [
  LinkWidgetViewComponent,
  ChartWidgetViewComponent,
  TodoWidgetViewComponent,
  DatetimeWidgetViewComponent,
  KpiWidgetViewComponent
];
