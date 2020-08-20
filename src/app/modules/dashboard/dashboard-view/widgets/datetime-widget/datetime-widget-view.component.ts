import { takeWhile } from "rxjs/internal/operators/takeWhile";
import { Component, OnInit, OnDestroy, Injector } from "@angular/core";

import { WidgetView } from "../../../dashboard-share/base/widget-view";

import { interval } from "rxjs/internal/observable/interval";
import { DynamicForm } from "@narik/core";

@DynamicForm("DatetimeWidgetViewComponent")
@Component({
  templateUrl: "./datetime-widget-view.component.html",
  styleUrls: ["datetime-widget-view.component.css"],
})
export class DatetimeWidgetViewComponent extends WidgetView
  implements OnInit, OnDestroy {
  today: any = new Date();
  displayTitle = false;
  isAlive = true;
  constructor(injector: Injector) {
    super(injector);
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
