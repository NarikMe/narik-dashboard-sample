import { of } from "rxjs";
import { Observable } from "rxjs/internal/Observable";

import { Type, ComponentFactoryResolver, Injectable } from "@angular/core";

import { WidgetViewType } from "../base/widget-view-type";
import { DashboardService, WidgetTypeGroup } from "./dashboard.service";
import { DataProviderService } from "narik-infrastructure";

@Injectable()
export class NarikDashboardService extends DashboardService {
  groups: WidgetTypeGroup[];

  private componentTypes = new Map<string, Type<any>>();
  constructor(
    private dataProvider: DataProviderService,
    private componentFactoryResolver: ComponentFactoryResolver
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

        const factories = Array.from(
          this.componentFactoryResolver["_factories"].keys()
        );
        const factoryClass = factories.find(
          (x: any) =>
            x.name === typeString || x["COMPONENT_NAME"] === typeString
        );

        if (!factoryClass) {
          throw new Error(`colud not find entry for "${typeString}"`);
        }
        this.componentTypes.set(
          `${widgetKey}_${widgetViewType}`,
          factoryClass as Type<any>
        );
        return factoryClass as Type<any>;
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
