import { Component, OnInit, EventEmitter } from '@angular/core';
import { ILayoutOptions, ColumnLayoutParentAction } from 'src/app/column-layout/components/column-layout/column-layout.component';
import { MainViewComponent } from '../main-view/main-view.component';
import { SecondPanelComponent } from '../second-panel/second-panel.component';
import { ThirdPanelComponent } from '../third-panel/third-panel.component';
import { FourthSidebarComponent } from '../fourth-sidebar/fourth-sidebar.component';
import { FifthPanelComponent } from '../fifth-panel/fifth-panel.component';
import { IColumnLayoutState } from 'src/app/column-layout/services/column-layout.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  layoutAction = new EventEmitter<ColumnLayoutParentAction>()

  options: ILayoutOptions[] = [
    { component: MainViewComponent, nameUrl: 'main' },
    { component: SecondPanelComponent, nameUrl: 'second' },
    { component: ThirdPanelComponent, nameUrl: 'thrid' },
    { component: FourthSidebarComponent, nameUrl: 'fourth' },
    { component: FifthPanelComponent, nameUrl: 'fifth' }
  ]

  next() {
    this.layoutAction.emit('next')
  }
  prev() {
    this.layoutAction.emit('prev')
  }
  step(step: number) {
    this.layoutAction.emit(step)
  }

  layoutChange(state: IColumnLayoutState) {
    // console.warn('Page Layout: ', state);
  }
}
