import { takeWhile } from "rxjs/internal/operators/takeWhile";
import { Component, OnInit, OnDestroy } from "@angular/core";

import { WidgetView } from "../../../dashboard-share/base/widget-view";
import { WidgetViewUi } from "src/app/templates/template.decorator";
import { interval } from "rxjs/internal/observable/interval";

@WidgetViewUi()
@Component({
  templateUrl: "./datetime-widget-view.component.html",
  styleUrls: ["datetime-widget-view.component.css"]
})
export class DatetimeWidgetViewComponent extends WidgetView
  implements OnInit, OnDestroy {
  today: any = new Date();
  isAlive = true;
  constructor() {
    super();
  }
  ngOnInit(): void {
    interval(1000)
      .pipe(takeWhile(() => this.isAlive))
      .subscribe(() => {
        this.today = new Date();
      });
  }
  afterModelSet() {}

  ngOnDestroy(): void {
    this.isAlive = false;
  }
}
