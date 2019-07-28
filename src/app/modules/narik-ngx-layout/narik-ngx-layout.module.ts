import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { COMPONENTS } from "./index";

import {
  NbActionsModule,
  NbCardModule,
  NbContextMenuModule,
  NbLayoutModule,
  NbMenuModule,
  NbSearchModule,
  NbSidebarModule,
  NbSidebarService,
  NbUserModule,
  NbIconModule
} from "@nebular/theme";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    NbActionsModule,
    NbCardModule,
    NbContextMenuModule,
    NbLayoutModule,
    NbMenuModule.forRoot(),
    NbSearchModule,
    NbSidebarModule,
    NbIconModule,
    NbUserModule
  ],
  declarations: [COMPONENTS],
  exports: [COMPONENTS],
  providers: [NbSidebarService]
})
export class NarikNgxLayout {}
