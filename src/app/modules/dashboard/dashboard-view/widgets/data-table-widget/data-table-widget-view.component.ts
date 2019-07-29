import { Component, Injector } from "@angular/core";

import { WidgetView } from "../../../dashboard-share/base/widget-view";
import { WidgetViewUi } from "src/app/templates/template.decorator";
import { MatLocalDataSource } from "narik-ui-material";

@WidgetViewUi()
@Component({
  templateUrl: "./data-table-widget-view.component.html",
  styleUrls: ["data-table-widget-view.component.css"]
})
export class DataTableWidgetViewComponent extends WidgetView {
  static readonly COMPONENT_NAME = "DataTableWidgetViewComponent";
  dataSource: MatLocalDataSource<any> = new MatLocalDataSource<any>(
    undefined,
    undefined
  );
  pagingInfo: any;
  fields: any[] = [];
  enabledFullScreen = true;
  constructor(injector: Injector) {
    super(injector);
  }
  afterModelSet() {
    if (this.model.dataSource) {
      if (this.model.pageSize) {
        this.pagingInfo = {
          pageSize: +this.model.pageSize
        };
      } else {
        this.pagingInfo = undefined;
      }
      this.dataSourceService
        .dataSourceMetadata(this.model.dataSource)
        .subscribe(
          (x: any[]) =>
            (this.fields = x.map(field => {
              return {
                name: field.field,
                model: field.field,
                label: field.title || field.field,
                type: field.type,
                options: {}
              };
            }))
        );
      this.dataSourceService
        .dataSourceData(this.model.dataSource)
        .subscribe(x => this.dataSource.setData(x));
    }
  }
}
