import { Component, OnInit } from "@angular/core";

import { WidgetDesign } from "../../../dashboard-share/base/widget-design";
import { WidgetDesignUi } from "../../../../../templates/template.decorator";
import chartGroups from "./chartTypes";
import { colorSets } from "@swimlane/ngx-charts/release/utils";

@WidgetDesignUi()
@Component({
  templateUrl: "./chart-widget-design.component.html",
  styleUrls: ["chart-widget-design.component.css"]
})
export class ChartWidgetDesignComponent extends WidgetDesign implements OnInit {
  chartGroups: any[] = chartGroups;

  chart: any = { options: [] };
  dataSources: any[] = [];

  selectOptions: any = {
    showToolbar: false
  };

  themes: any[] = [
    {
      id: "dark",
      title: "Dark"
    },
    {
      id: "light",
      title: "Light"
    }
  ];
  legendPositions: any[] = [
    {
      id: "right",
      title: "Right"
    },
    {
      id: "below",
      title: "Below"
    }
  ];
  schemeTypes: any[] = [
    {
      id: "ordinal",
      title: "Ordinal"
    },
    {
      id: "linear",
      title: "Linear"
    }
  ];

  colorSchemes: any[] = colorSets.map(x => {
    return {
      id: x.name,
      title: x.name
    };
  });

  constructor() {
    super();
  }
  ngOnInit(): void {
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

  afterModelSet() {
    if (this.model && this.model.chartType) {
      this.selectChart(this.model.chartType);
    }
  }
  selectChart(chartSelector) {
    for (const group of this.chartGroups) {
      this.chart = group.charts.find(x => x.selector === chartSelector);
      if (this.chart) {
        break;
      }
    }
  }
}
