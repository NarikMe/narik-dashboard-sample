import { of } from "rxjs";
import { Observable } from "rxjs/internal/Observable";

import { Type, ComponentFactoryResolver, Injectable } from "@angular/core";

import { WidgetViewType } from "../base/widget-view-type";
import { DashboardService, WidgetTypeGroup } from "./dashboard.service";
import {
  DataProviderService,
  ComponentTypeResolver
} from "@narik/infrastructure";

@Injectable()
export class NarikDashboardService extends DashboardService {
  groups: WidgetTypeGroup[];

  private componentTypes = new Map<string, Type<any>>();
  constructor(
    private dataProvider: DataProviderService,
    private typeResolver: ComponentTypeResolver
  ) {
    super();
  }

  init() {
    this.dataProvider
      .getData({
        dataKey: "widgetTypes"
      })
      .subscribe((x: any) => (this.groups = x.widgetTypeGroups));
  }
  widgetGroups(): Observable<WidgetTypeGroup[]> {
    return of(this.groups);
  }

  widgetComponentType(
    widgetGroup: string,
    widgetKey: string,
    widgetViewType: WidgetViewType
  ): Type<any> {
    if (!widgetGroup) {
      widgetGroup = this.findWidgetGroup(widgetKey);
    }
    const resolvedType = this.componentTypes.get(
      `${widgetKey}_${widgetViewType}`
    );
    if (resolvedType) {
      return resolvedType;
    }
    const group = this.groups.filter(x => x.key === widgetGroup)[0];
    if (group) {
      const widgetType = group.widgetTypes.filter(x => x.key === widgetKey)[0];
      if (widgetType) {
        let typeString = "";
        if (widgetViewType === WidgetViewType.Design) {
          typeString =
            widgetType.designComponent ||
            `${widgetType.key}WidgetDesignComponent`;
        } else {
          if (widgetViewType === WidgetViewType.View) {
            typeString =
              widgetType.viewComponent ||
              `${widgetType.key}WidgetViewComponent`;
          }
        }

        const componentTye = this.typeResolver.resolveComponentType(typeString);

        this.componentTypes.set(`${widgetKey}_${widgetViewType}`, componentTye);
        return componentTye;
      }
    }
    return undefined;
  }
  findWidgetGroup(widgetKey: string): string {
    return this.groups.filter(
      x => x.widgetTypes.filter(w => w.key === widgetKey)[0]
    )[0].key;
  }
}
