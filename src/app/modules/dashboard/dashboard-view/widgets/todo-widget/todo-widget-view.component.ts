import { Component } from "@angular/core";

import { WidgetView } from "../../../dashboard-share/base/widget-view";
import { WidgetViewUi } from "src/app/templates/template.decorator";

@WidgetViewUi()
@Component({
  templateUrl: "./todo-widget-view.component.html",
  styleUrls: ["todo-widget-view.component.css"]
})
export class TodoWidgetViewComponent extends WidgetView {
  todoItems: any[] = [];
  constructor() {
    super();
  }
  afterModelSet() {
    this.dataSourceService
      .dataSourceData("todo")
      .subscribe(x => (this.todoItems = x));
  }
}
