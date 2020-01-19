import { ElementRef } from '@angular/core';
import { ILayoutWidget } from '../column-layout/column-layout.component';

export class LayoutWidgetComponent implements ILayoutWidget {

  constructor(private element: ElementRef) { }

  _getWidth(): number {
    return this.element.nativeElement.offsetWidth;
 }

}
