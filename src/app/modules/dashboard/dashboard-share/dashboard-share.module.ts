import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";

import { DashboardService } from "./service/dashboard.service";
import { NarikDashboardService } from "./service/narik-dashboard.service";
import { DataSourceService } from "./service/dataSource.service";
import { NarikDataSourceService } from "./service/narik-dataSource.service";

@NgModule({
  imports: [HttpClientModule],
  providers: [
    {
      provide: DashboardService,
      useClass: NarikDashboardService
    },
    {
      provide: DataSourceService,
      useClass: NarikDataSourceService
    }
  ]
})
export class DashboardShareModule {
  /**
   *
   */
  constructor() {}
}
