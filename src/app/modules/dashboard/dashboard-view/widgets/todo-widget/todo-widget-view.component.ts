import { Component } from "@angular/core";

import { WidgetView } from "../../../dashboard-share/base/widget-view";
import { WidgetViewUi } from "src/app/templates/template.decorator";
import { DataSourceService } from "../../../dashboard-share/service/dataSource.service";

@WidgetViewUi()
@Component({
  templateUrl: "./todo-widget-view.component.html"
})
export class TodoWidgetViewComponent extends WidgetView {
  todoItems: any[] = [];
  constructor(private dataSourceService: DataSourceService) {
    super();
  }
  afterMoselSet() {
    this.dataSourceService
      .dataSourceData("todo")
      .subscribe(x => (this.todoItems = x));
  }
}
