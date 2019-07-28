import { UUID } from "angular2-uuid";

import { WidgetModel } from "./widget-model";
import { Input, OnInit } from "@angular/core";
import { isEquivalent } from "narik-common";
import { NarikInject } from "narik-core";
import { DataSourceService } from "../service/dataSource.service";
import { NarikComponent } from "narik-infrastructure";

export class WidgetDesign extends NarikComponent implements OnInit {
  @NarikInject(DataSourceService)
  protected dataSourceService: DataSourceService;
  displayTitle = true;
  needDataSource = false;
  _model: WidgetModel = {};
  dataSources: any[] = [];

  selectOptions: any = {
    showToolbar: false
  };

  @Input()
  set model(value: any) {
    const tepModel = this.importModel(value);
    if (!isEquivalent(this._model, tepModel)) {
      this._model = tepModel;
      this.afterModelSet();
    }
  }
  get model(): any {
    if (this._model && !this._model.uniqueId) {
      this._model.uniqueId = UUID.UUID();
    }
    return this.exportModel(this._model);
  }

  protected importModel(model: any): any {
    return model;
  }
  protected exportModel(model: any): any {
    return model;
  }

  ngOnInit(): void {
    if (this.needDataSource) {
      this.dataSourceService.dataSourceList().subscribe(
        x =>
          (this.dataSources = x.map(ds => {
            return {
              id: ds,
              title: ds
            };
          }))
      );
    }
  }

  afterModelSet() {}
}
