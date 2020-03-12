import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { TableRowComponent } from './table-row/table-row.component';
import { TableHeadComponent } from './table-head/table-head.component';
import { TableComponent } from './table/table.component';
import { TableLayoutComponent } from './table-layout/table-layout.component';
import { CardLayoutComponent } from './card-layout/card-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { ContentHeaderComponent } from './content-header/content-header.component';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    TableRowComponent,
    TableHeadComponent,
    TableComponent,
    TableLayoutComponent,
    CardLayoutComponent,
    DashboardComponent,
    FooterComponent,
    PageHeaderComponent,
    ContentHeaderComponent,
    ScrollToTopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
