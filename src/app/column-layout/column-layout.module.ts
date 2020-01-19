import { NgModule, } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { ColumnLayoutComponent } from './components/column-layout/column-layout.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";



@NgModule({
  declarations: [ColumnLayoutComponent],
  exports: [ColumnLayoutComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ]
})
export class ColumnLayoutModule { }
