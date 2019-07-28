import { Component } from "@angular/core";

import { WidgetView } from "../../../dashboard-share/base/widget-view";
import { WidgetViewUi } from "src/app/templates/template.decorator";
import { colorSets } from "@swimlane/ngx-charts/release/utils";
import * as shape from "d3-shape";

@WidgetViewUi()
@Component({
  templateUrl: "./chart-widget-view.component.html",
  styleUrls: ["chart-widget-view.component.scss"]
})
export class ChartWidgetViewComponent extends WidgetView {
  chartData: any[];

  view: any[];

  colorScheme: any;

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
    default: shape.curveLinear
  };
  curve: any = this.curves["Linear"];
  closedCurve: any = this.curves["Linear Closed"];

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

  getInterpolationType(curveType) {
    return;
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

    if (this.model.curve) {
      this.curve = this.curves[this.model.curve] || this.curves["default"];
    }
    if (this.model.closedCurve) {
      this.closedCurve =
        this.curves[this.model.closedCurve] || this.curves["default"];
    }
  }
}
