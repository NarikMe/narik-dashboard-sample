import { Component, Injector } from "@angular/core";

import { WidgetView } from "../../../dashboard-share/base/widget-view";

import { DynamicComponent } from "@narik/core";

@DynamicComponent("TodoWidgetViewComponent")
@Component({
  templateUrl: "./todo-widget-view.component.html",
  styleUrls: ["todo-widget-view.component.css"],
})
export class TodoWidgetViewComponent extends WidgetView {
  todoItems: any[] = [];
  constructor(injector: Injector) {
    super(injector);
  }
  afterModelSet() {
    if (this.model.dataSource) {
      this.dataSourceService
        .dataSourceData(this.model.dataSource)
        .subscribe((x) => (this.todoItems = x));
    }
  }

  get remainCount() {
    return this.todoItems.filter((x) => !x.done).length;
  }
}
