import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './components/page/page.component';
import { MainViewComponent } from './components/main-view/main-view.component';
import { SecondPanelComponent } from './components/second-panel/second-panel.component';
import { ThirdPanelComponent } from './components/third-panel/third-panel.component';
import { FourthSidebarComponent } from './components/fourth-sidebar/fourth-sidebar.component';
import { FifthPanelComponent } from './components/fifth-panel/fifth-panel.component';
import { ColumnLayoutModule } from '../column-layout/column-layout.module';



@NgModule({
  declarations: [PageComponent, MainViewComponent, SecondPanelComponent, ThirdPanelComponent, FourthSidebarComponent, FifthPanelComponent],
  entryComponents: [PageComponent, MainViewComponent, SecondPanelComponent, ThirdPanelComponent, FourthSidebarComponent, FifthPanelComponent],
  exports: [PageComponent],
  bootstrap: [PageComponent],
  imports: [
    CommonModule,
    ColumnLayoutModule
  ]
})
export class PageModule { }
