import { WidgetModel } from "./widget-model";
import { Input } from "@angular/core";
import { isEquivalent } from "narik-common";

export class WidgetView {
  _model: WidgetModel = {};

  @Input()
  set model(value: any) {
    const tepModel = this.importModel(value);
    if (!isEquivalent(this._model, tepModel)) {
      this._model = tepModel;
      this.afterMoselSet();
    }
  }
  get model(): any {
    return this._model;
  }

  protected importModel(model: any): any {
    return model;
  }

  afterMoselSet() {}
}
