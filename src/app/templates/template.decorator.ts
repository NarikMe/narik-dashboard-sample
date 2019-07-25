import { TypeDecorator } from "@angular/core";
import { applyBaseTemplate } from "narik-core";

export function NarikListUi() {
  const typeDecorator: TypeDecorator = function Decorator(cls: any) {
    return applyBaseTemplate(cls, "NarikListUi");
  };
  return typeDecorator;
}

export function NarikDetailUi() {
  const typeDecorator: TypeDecorator = function Decorator(cls: any) {
    return applyBaseTemplate(cls, "NarikDetailUi");
  };
  return typeDecorator;
}

export function WidgetViewUi() {
  const typeDecorator: TypeDecorator = function Decorator(cls: any) {
    return applyBaseTemplate(cls, "WidgetViewUi");
  };
  return typeDecorator;
}

export function WidgetDesignUi() {
  const typeDecorator: TypeDecorator = function Decorator(cls: any) {
    return applyBaseTemplate(cls, "WidgetDesignUi");
  };
  return typeDecorator;
}
