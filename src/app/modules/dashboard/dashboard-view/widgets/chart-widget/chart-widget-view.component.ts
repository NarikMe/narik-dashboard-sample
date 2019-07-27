import { Component } from "@angular/core";

import { WidgetView } from "../../../dashboard-share/base/widget-view";
import { WidgetViewUi } from "src/app/templates/template.decorator";
import { colorSets } from "@swimlane/ngx-charts/release/utils";

@WidgetViewUi()
@Component({
  templateUrl: "./chart-widget-view.component.html",
  styleUrls: ["chart-widget-view.component.scss"]
})
export class ChartWidgetViewComponent extends WidgetView {
  theme = "light";
  chartType: string;
  chartGroups: any[];
  chart: any;
  realTimeData: boolean = false;
  countries: any[];
  chartData: any[];
  multi: any[];
  fiscalYearReport: any[];
  dateData: any[];
  dateDataWithRange: any[];
  calendarData: any[];
  statusData: any[];
  sparklineData: any[];
  timelineFilterBarData: any[];
  graph: { links: any[]; nodes: any[] };
  bubble: any;
  linearScale: boolean = false;
  range: boolean = false;

  view: any[];
  width: number = 700;
  height: number = 300;
  fitContainer: boolean = false;

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  legendTitle = "Legend";
  legendPosition = "right";
  showXAxisLabel = true;
  tooltipDisabled = false;
  showText = true;
  xAxisLabel = "Country";
  showYAxisLabel = true;
  yAxisLabel = "GDP Per Capita";
  showGridLines = true;
  innerPadding = "10%";
  barPadding = 8;
  groupPadding = 16;
  roundDomains = false;
  maxRadius = 10;
  minRadius = 3;
  showSeriesOnHover = true;
  roundEdges: boolean = true;
  animations: boolean = true;
  xScaleMin: any;
  xScaleMax: any;
  yScaleMin: number;
  yScaleMax: number;
  showDataLabel = false;
  noBarWhenZero = true;
  trimXAxisTicks = true;
  trimYAxisTicks = true;
  rotateXAxisTicks = true;
  maxXAxisTickLength = 16;
  maxYAxisTickLength = 16;

  colorScheme: any;

  rangeFillOpacity: number = 0.15;

  constructor() {
    super();
    this.setColorScheme("cool");
  }
  setColorScheme(name) {
    this.colorScheme = colorSets.find(s => s.name === name);
  }

  select(data) {
    console.log("Item clicked", JSON.parse(JSON.stringify(data)));
  }

  activate(data) {
    console.log("Activate", JSON.parse(JSON.stringify(data)));
  }

  deactivate(data) {
    console.log("Deactivate", JSON.parse(JSON.stringify(data)));
  }

  applyDimensions() {
    this.view = [+this.model.width, +this.model.height];
  }

  afterModelSet() {
    this.model.schemeType = this.model.schemeType || "ordinal";

    if (this.model.dataSource) {
      this.dataSourceService
        .dataSourceData(this.model.dataSource)
        .subscribe(x => (this.chartData = x));
    }

    if (this.model.width || this.model.height) {
      this.applyDimensions();
    } else {
      this.view = undefined;
    }

    this.setColorScheme(this.model.colorScheme || "cool");
  }
}
