import { UUID } from "angular2-uuid";

import { WidgetModel } from "./widget-model";
import { Input } from "@angular/core";
import { isEquivalent } from "narik-common";

export class WidgetDesign {
  _model: WidgetModel = {};

  @Input()
  set model(value: any) {
    const tepModel = this.importModel(value);
    if (!isEquivalent(this._model, tepModel)) {
      this._model = tepModel;
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
}
