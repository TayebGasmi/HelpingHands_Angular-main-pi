import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardComponent} from './dashboard.component';
import {SidebarComponent} from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    DashboardComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  exports: [
    DashboardComponent,
    SidebarComponent
  ]
})
export class DashboardModule {
}
