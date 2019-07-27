import { WidgetModel } from "./widget-model";
import { Input } from "@angular/core";
import { isEquivalent } from "narik-common";
import { DataSourceService } from "../service/dataSource.service";
import { NarikInject } from "narik-core";

export class WidgetView {
  @NarikInject(DataSourceService)
  protected dataSourceService: DataSourceService;

  _model: WidgetModel = {};

  @Input()
  set model(value: any) {
    const tepModel = this.importModel(value);
    if (!isEquivalent(this._model, tepModel)) {
      this._model = tepModel;
      this.afterModelSet();
    }
  }
  get model(): any {
    return this._model;
  }

  protected importModel(model: any): any {
    return model;
  }

  afterModelSet() {}
}
