import { Provider } from "@angular/core";
import { LinkWidgetDesignComponent } from "./link-widget/link-widget-design.component";
import { ChartWidgetDesignComponent } from "./chart-widget/chart-widget-design.component";
import { TodoWidgetDesignComponent } from "./todo-widget/todo-widget-design.component";

export const WIDGETS: Provider[] = [
  LinkWidgetDesignComponent,
  ChartWidgetDesignComponent,
  TodoWidgetDesignComponent
];
