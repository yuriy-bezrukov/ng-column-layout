import { Component, OnInit, ElementRef } from '@angular/core';
import { LayoutWidgetComponent } from 'src/app/column-layout/components/layout-widget/layout-widget.component';

@Component({
  selector: 'app-fifth-panel',
  templateUrl: './fifth-panel.component.html',
  styleUrls: ['./fifth-panel.component.scss']
})
export class FifthPanelComponent  extends LayoutWidgetComponent {

  constructor(element: ElementRef) { 
    super(element);
  }

  ngOnInit() {
  }

}
