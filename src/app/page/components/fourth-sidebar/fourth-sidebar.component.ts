import { Component, OnInit, ElementRef } from '@angular/core';
import { LayoutWidgetComponent } from 'src/app/column-layout/components/layout-widget/layout-widget.component';

@Component({
  selector: 'app-fourth-sidebar',
  templateUrl: './fourth-sidebar.component.html',
  styleUrls: ['./fourth-sidebar.component.scss']
})
export class FourthSidebarComponent extends LayoutWidgetComponent {

  constructor(element: ElementRef) { 
    super(element);
  }

  ngOnInit() {
  }

}
