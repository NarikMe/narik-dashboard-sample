import { Component, Injector, AfterViewInit } from "@angular/core";

import { WidgetView } from "../../../dashboard-share/base/widget-view";

import { colorSets } from "@swimlane/ngx-charts";
import * as shape from "d3-shape";
import { DynamicComponent } from "@narik/core";

@DynamicComponent("ChartWidgetViewComponent")
@Component({
  templateUrl: "./chart-widget-view.component.html",
  styleUrls: ["chart-widget-view.component.scss"],
})
export class ChartWidgetViewComponent extends WidgetView
  implements AfterViewInit {
  chartData: any[];
  enabledFullScreen = true;
  view: any[];

  colorScheme: any;

  // heatmap
  heatmapMin = 0;
  heatmapMax = 50000;

  curves = {
    Basis: shape.curveBasis,
    "Basis Closed": shape.curveBasisClosed,
    Bundle: shape.curveBundle.beta(1),
    Cardinal: shape.curveCardinal,
    "Cardinal Closed": shape.curveCardinalClosed,
    "Catmull Rom": shape.curveCatmullRom,
    "Catmull Rom Closed": shape.curveCatmullRomClosed,
    Linear: shape.curveLinear,
    "Linear Closed": shape.curveLinearClosed,
    "Monotone X": shape.curveMonotoneX,
    "Monotone Y": shape.curveMonotoneY,
    Natural: shape.curveNatural,
    Step: shape.curveStep,
    "Step After": shape.curveStepAfter,
    "Step Before": shape.curveStepBefore,
    default: shape.curveLinear,
  };
  curve: any = this.curves["Linear"];
  closedCurve: any = this.curves["Linear Closed"];

  constructor(injector: Injector) {
    super(injector);
    this.setColorScheme("cool");
  }
  setColorScheme(name) {
    this.colorScheme = colorSets.find((s) => s.name === name);
  }

  select(data) {
    console.log("Item clicked", JSON.parse(JSON.stringify(data)));
  }
  onLegendLabelClick(entry) {
    console.log("Legend clicked", entry);
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

  getInterpolationType(curveType) {
    return;
  }

  afterModelSet() {
    this.model.schemeType = this.model.schemeType || "ordinal";

    if (this.model.dataSource) {
      this.dataSourceService
        .dataSourceData(this.model.dataSource)
        .subscribe((x) => (this.chartData = x));
    }

    if (this.model.width || this.model.height) {
      this.applyDimensions();
    } else {
      this.view = undefined;
    }

    this.setColorScheme(this.model.colorScheme || "cool");

    if (this.model.curve) {
      this.curve = this.curves[this.model.curve] || this.curves["default"];
    }
    if (this.model.closedCurve) {
      this.closedCurve =
        this.curves[this.model.closedCurve] || this.curves["default"];
    }
    this.doOnResize(0);
  }

  ngAfterViewInit(): void {}

  doOnResize(newSize: number) {
    this.view = [0, 0];
    setTimeout(() => {
      if (this.model && (this.model.width || this.model.height)) {
        this.applyDimensions();
      } else {
        this.view = undefined;
      }
    }, 0);
  }
}
