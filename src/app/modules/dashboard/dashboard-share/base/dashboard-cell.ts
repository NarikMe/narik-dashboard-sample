import { Type } from "@angular/core";

export class DashboardCell {
  static colClasses = ["col-md-", "col-sm-", "col-xs-"];

  size: number;
  constructor(size?: number) {
    this.size = size || 12;
  }

  widgetInfo?: {
    widgetTypeKey?: string;
    widgetType?: Type<any>;
    widgetModel?: any;
  };
}
