import { Component, OnInit, ElementRef } from '@angular/core';
import { LayoutWidgetComponent } from 'src/app/column-layout/components/layout-widget/layout-widget.component';

@Component({
  selector: 'app-third-panel',
  templateUrl: './third-panel.component.html',
  styleUrls: ['./third-panel.component.scss']
})
export class ThirdPanelComponent extends LayoutWidgetComponent {

  constructor(element: ElementRef) {
    super(element);
  }

  ngOnInit() {
  }

}
