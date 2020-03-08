import { DataSourceService, DashboardDataSource } from "./dataSource.service";
import { Observable } from "rxjs/internal/Observable";
import { DataProviderService } from "@narik/infrastructure";
import { of } from "rxjs/internal/observable/of";
import { Injectable } from "@angular/core";

@Injectable()
export class NarikDataSourceService extends DataSourceService {
  dataSources: DashboardDataSource[];
  constructor(private dataProvider: DataProviderService) {
    super();
  }

  init() {
    this.dataProvider
      .getData({
        dataKey: "widgetData"
      })
      .subscribe((x: any) => (this.dataSources = x.dataSources));
  }

  dataSourceList(): Observable<string[]> {
    return of(this.dataSources.map(x => x.key));
  }
  dataSourceMetadata(dataSourceKey: string): Observable<any> {
    return of(
      this.dataSources.filter(x => x.key === dataSourceKey)[0].metaData
    );
  }
  dataSourceData(dataSourceKey: string, parameters: any[]): Observable<any> {
    return of(this.dataSources.filter(x => x.key === dataSourceKey)[0].data);
  }
}
