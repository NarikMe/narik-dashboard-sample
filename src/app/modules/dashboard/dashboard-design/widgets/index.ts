import { Provider } from "@angular/core";

import { ChartWidgetDesignComponent } from "./chart-widget/chart-widget-design.component";
import { DatetimeWidgetDesignComponent } from "./datetime-widget/datetime-widget-design.component";
import { KpiWidgetDesignComponent } from "./kpi-widget/kpi-widget-design.component";
import { LinkWidgetDesignComponent } from "./link-widget/link-widget-design.component";
import { TodoWidgetDesignComponent } from "./todo-widget/todo-widget-design.component";

export const WIDGETS: Provider[] = [
  LinkWidgetDesignComponent,
  ChartWidgetDesignComponent,
  TodoWidgetDesignComponent,
  DatetimeWidgetDesignComponent,
  KpiWidgetDesignComponent
];
