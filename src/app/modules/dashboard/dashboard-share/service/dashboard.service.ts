import { Observable } from "rxjs/internal/Observable";

import { Type } from "@angular/core";

import { WidgetViewType } from "../base/widget-view-type";

export class WidgetType {
  key: string;
  value: string;
  isEnabled: boolean;
  defaultModel: any;
  designComponent?: string;
  viewComponent?: string;
}

export class WidgetTypeGroup {
  key: string;
  value: string;
  isEnabled: boolean;
  widgetTypes: WidgetType[];
}

export abstract class DashboardService {
  abstract init();
  abstract widgetGroups(): Observable<WidgetTypeGroup[]>;
  abstract widgetComponentType(
    widgetGroup: string,
    widgetKey: string,
    widgetType: WidgetViewType
  ): Type<any>;
}
