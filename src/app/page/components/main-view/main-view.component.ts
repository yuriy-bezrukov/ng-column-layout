import { Component, OnInit, ElementRef } from '@angular/core';
import { LayoutWidgetComponent } from 'src/app/column-layout/components/layout-widget/layout-widget.component';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent extends LayoutWidgetComponent {

  constructor(element: ElementRef) { 
    super(element);
  }

  ngOnInit() {
  }

}
