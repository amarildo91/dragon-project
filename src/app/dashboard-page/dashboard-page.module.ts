import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPageComponent } from './dashboard-page.component';
import { OrderPipe } from './order.pipe';
import { UiModule } from '../ui/ui.module';

@NgModule({
  imports: [
    CommonModule,
    UiModule
  ],
  declarations: [DashboardPageComponent, OrderPipe],
  exports: [
    DashboardPageComponent
  ]
})
export class DashboardPageModule { }
