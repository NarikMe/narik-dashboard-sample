import { Component, Input, OnInit, ViewChild, ElementRef } from "@angular/core";

import { DashboardRow } from "../../dashboard-share/base/dashboard-row";
import { CommandHost, CommandInfo } from "narik-infrastructure";
import { Observable } from "rxjs/internal/Observable";
import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";
import { saveAs } from "file-saver";
import { DashboardService } from "../../dashboard-share/service/dashboard.service";
import { WidgetViewType } from "../../dashboard-share/base/widget-view-type";

@Component({
  selector: "dashboard-designer",
  templateUrl: "dashboard-designer.component.html",
  styleUrls: ["dashboard-designer.component.css"]
})
export class DashboardDesignerComponent implements OnInit, CommandHost {
  change: Observable<any>;

  @Input()
  rows: DashboardRow[] = [];

  @ViewChild("importFile", { static: false })
  importFile: ElementRef<any>;

  constructor(private dashboardService: DashboardService) {}

  ngOnInit() {}

  processCommand(cmd: CommandInfo) {
    if (cmd.commandKey === "add") {
      this.rows.push(new DashboardRow(cmd.commandData || 1));
    } else if (cmd.commandKey === "import") {
      this.importFile.nativeElement.click();
    } else if (cmd.commandKey === "export") {
      this.export();
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.rows, event.previousIndex, event.currentIndex);
  }

  removeRow(row: DashboardRow) {
    const pos = this.rows.indexOf(row);
    if (pos >= 0) {
      this.rows.splice(pos, 1);
    }
  }

  export() {
    const data = {
      rows: this.rows
    };
    const blob = new Blob([JSON.stringify(data)], {
      type: "application/octet-stream"
    });
    saveAs(blob, `${"data"}.json`);
  }

  import(e) {
    if (e.target.files[0]) {
      const that = this;
      const reader = new FileReader();
      reader.readAsText(e.target.files[0], "UTF-8");
      reader.onload = evt => {
        const newModel = JSON.parse((evt.target as any).result)
          .rows as DashboardRow[];
        this.applyComponentTypes(newModel);
        this.rows = newModel;
      };
      reader.onerror = evt => {};
    }
  }
  applyComponentTypes(rows: DashboardRow[]) {
    for (const row of rows) {
      for (const cell of row.cells) {
        if (cell.widgetInfo && cell.widgetInfo.widgetTypeKey) {
          cell.widgetInfo.widgetType = this.dashboardService.widgetComponentType(
            undefined,
            cell.widgetInfo.widgetTypeKey,
            WidgetViewType.View
          );
        }
      }
    }
  }
}
