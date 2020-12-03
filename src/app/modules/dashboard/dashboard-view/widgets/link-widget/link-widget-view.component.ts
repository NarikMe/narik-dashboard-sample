import { Component, Injector } from "@angular/core";

import { WidgetView } from "../../../dashboard-share/base/widget-view";

import { DynamicComponent } from "@narik/core";

@DynamicComponent("LinkWidgetViewComponent")
@Component({
  templateUrl: "./link-widget-view.component.html",
  styles: [
    `
      a {
        color: #1a2138;
      }
    `,
  ],
})
export class LinkWidgetViewComponent extends WidgetView {
  constructor(injector: Injector) {
    super(injector);
  }
}
