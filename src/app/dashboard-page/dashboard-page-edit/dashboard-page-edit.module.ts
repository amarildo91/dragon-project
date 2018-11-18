import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPageEditComponent } from './dashboard-page-edit.component';
import { FormsModule, ReactiveFormsModule }  from '@angular/forms';
import { UiModule } from '../../ui/ui.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UiModule   
  ],
  declarations: [DashboardPageEditComponent]
})
export class DashboardPageEditModule{}