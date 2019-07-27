import { Provider } from "@angular/core";
import { LinkWidgetViewComponent } from "./link-widget/link-widget-view.component";
import { ChartWidgetViewComponent } from "./chart-widget/chart-widget-view.component";
import { TodoWidgetViewComponent } from "./todo-widget/todo-widget-view.component";
import { DatetimeWidgetViewComponent } from "./datetime-widget/datetime-widget-view.component";

export const WIDGETS: Provider[] = [
  LinkWidgetViewComponent,
  ChartWidgetViewComponent,
  TodoWidgetViewComponent,
  DatetimeWidgetViewComponent
];
