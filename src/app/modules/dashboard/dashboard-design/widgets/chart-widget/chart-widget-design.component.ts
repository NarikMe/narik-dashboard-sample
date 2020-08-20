import { Component, OnInit, Injector } from "@angular/core";

import { WidgetDesign } from "../../../dashboard-share/base/widget-design";

import chartGroups from "./chartTypes";
import { colorSets } from "@swimlane/ngx-charts";
import { toDtoArray } from "@narik/common";
import { DynamicForm } from "@narik/core";

@DynamicForm("ChartWidgetDesignComponent")
@Component({
  templateUrl: "./chart-widget-design.component.html",
  styleUrls: ["chart-widget-design.component.css"],
})
export class ChartWidgetDesignComponent extends WidgetDesign implements OnInit {
  chartGroups: any[] = [];
  needDataSource = true;
  chart: any = { options: [] };

  curves = toDtoArray([
    "Basis",
    "Bundle",
    "Cardinal",
    "Catmull Rom",
    "Linear",
    "Monotone X",
    "Monotone Y",
    "Natural",
    "Step",
    "Step After",
    "Step Before",
  ]);

  closedCurves = toDtoArray([
    "Basis Closed",
    "Cardinal Closed",
    "Catmull Rom Closed",
    "Linear Closed",
  ]);

  themes: any[] = [
    {
      id: "dark",
      title: "Dark",
    },
    {
      id: "light",
      title: "Light",
    },
  ];
  legendPositions: any[] = [
    {
      id: "right",
      title: "Right",
    },
    {
      id: "below",
      title: "Below",
    },
  ];
  schemeTypes: any[] = [
    {
      id: "ordinal",
      title: "Ordinal",
    },
    {
      id: "linear",
      title: "Linear",
    },
  ];

  colorSchemes: any[] = colorSets.map((x) => {
    return {
      id: x.name,
      title: x.name,
    };
  });

  constructor(injector: Injector) {
    super(injector);
    this.chartGroups = chartGroups;
  }

  afterModelSet() {
    this.chartGroups = chartGroups;
    if (this.model && this.model.chartType) {
      this.selectChart(this.model.chartType);
    }
  }
  selectChart(chartSelector) {
    for (const group of this.chartGroups) {
      this.chart = group.charts.find((x) => x.selector === chartSelector);
      if (this.chart) {
        break;
      }
    }
  }
}
