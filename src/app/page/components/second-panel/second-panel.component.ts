import { Component, OnInit, ElementRef } from '@angular/core';
import { LayoutWidgetComponent } from 'src/app/column-layout/components/layout-widget/layout-widget.component';

@Component({
  selector: 'app-second-panel',
  templateUrl: './second-panel.component.html',
  styleUrls: ['./second-panel.component.scss']
})
export class SecondPanelComponent extends LayoutWidgetComponent {

  constructor(element: ElementRef) { 
    super(element);
  }

  ngOnInit() {
  }

}
