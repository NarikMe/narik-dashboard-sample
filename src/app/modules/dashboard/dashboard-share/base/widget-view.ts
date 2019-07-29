import { WidgetModel } from "./widget-model";
import { Input, ElementRef, Injector, OnInit } from "@angular/core";
import { isEquivalent } from "narik-common";
import { DataSourceService } from "../service/dataSource.service";
import { NarikInject } from "narik-core";
import { fromEvent } from "rxjs";
import { NarikComponent } from "narik-infrastructure";
import { takeWhile } from "rxjs/internal/operators/takeWhile";

export class WidgetView extends NarikComponent implements OnInit {
  isFullScreen = false;
  enabledFullScreen = false;
  displayTitle = true;
  @NarikInject(DataSourceService)
  protected dataSourceService: DataSourceService;

  @NarikInject(ElementRef)
  protected elementRef: ElementRef;

  _model: WidgetModel = {};

  @Input()
  set model(value: any) {
    const tepModel = this.importModel(value);
    if (!isEquivalent(this._model, tepModel)) {
      this._model = tepModel;
      this.afterModelSet();
    }
  }
  get model(): any {
    return this._model;
  }

  protected importModel(model: any): any {
    return model;
  }

  constructor(private injector: Injector) {
    super();
  }

  ngOnInit(): void {
    if (this.enabledFullScreen) {
      fromEvent(this.elementRef.nativeElement, "fullscreenchange")
        .pipe(takeWhile(() => this.isAlive))
        .subscribe((x: any) => {
          this.isFullScreen = !!document.fullscreenElement;
        });
    }
  }

  afterModelSet() {}

  toggleFullScreen() {
    if (this.enabledFullScreen) {
      if (this.isFullScreen) {
        document.exitFullscreen();
      } else {
        const elem = this.elementRef.nativeElement;
        const methodToBeInvoked =
          elem.requestFullscreen ||
          elem.webkitRequestFullScreen ||
          elem["mozRequestFullscreen"] ||
          elem["msRequestFullscreen"];
        if (methodToBeInvoked) {
          methodToBeInvoked.call(elem);
        }
      }
    }
  }
}
