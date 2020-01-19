import {
  Component,
  OnInit,
  Input,
  QueryList,
  ViewContainerRef,
  ViewChildren,
  ComponentFactoryResolver,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
  Output,
  EventEmitter
} from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { ColumnLayoutService, IColumnLayoutState } from '../../services/column-layout.service';
import { Router, ActivatedRoute } from '@angular/router';

export const UrlName = 'block';

export interface ILayoutOptions {
  component;
  positionByX?: number;
  index?: number;
  nameUrl: string;
}

export interface ILayoutWidget {
  _getWidth: () => number;
}

export interface ILayoutWidgetRef {
  destroy: () => void,
  instance: ILayoutWidget
}

export type ColumnLayoutParentAction = 'prev' | 'next' | number;

@Component({
  selector: 'column-layout',
  templateUrl: './column-layout.component.html',
  styleUrls: ['./column-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ColumnLayoutService]
})
export class ColumnLayoutComponent implements OnInit {

  iterator = [];

  @Input() options: ILayoutOptions[] = [];
  @Input() action: Observable<ColumnLayoutParentAction>;
  @Output() state = new EventEmitter<IColumnLayoutState>()

  private components: ILayoutWidgetRef[] = [];
  private subscriptions = new Subscription();
  positionsByX: number[] = [];
  private startUrlRouteParam: string;

  @ViewChildren('dynamic', { read: ViewContainerRef }) private slotTargets: QueryList<ViewContainerRef>;
  elements: ViewContainerRef[];
  currentDisplay: number[] = [];
  constructor(
    private resolver: ComponentFactoryResolver,
    private cdr: ChangeDetectorRef,
    private columnLayoutService: ColumnLayoutService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.startUrlRouteParam = this.route.snapshot.queryParams[UrlName];
    this.positionsByX = this.options.map(x => 0);
    this.action.subscribe(action => {
      if (action === 'next') this.columnLayoutService.next();
      if (action === 'prev') this.columnLayoutService.prev();
      if (typeof action === 'number') this.columnLayoutService.setStep(action);
    });
  }

  ngAfterViewInit() {
    this.elements = this.slotTargets.toArray();
    this.elements.forEach((target, i) => {
      if (!target.length) {
        let widgetComponent = this.resolver.resolveComponentFactory<ILayoutWidget>(this.options[i].component);
        let cmpRef = target.createComponent(widgetComponent);
        this.components.push(cmpRef);
      }
    });
    debugger
    let blockToViewFromUrl = this.options.findIndex(option => option.nameUrl === this.startUrlRouteParam);
    let blockToView = blockToViewFromUrl > 0 ? blockToViewFromUrl : 0;
    this.columnLayoutService.init(this.options, this.components, [blockToView]);

    this.columnLayoutService.state$.subscribe(data => {
      this.positionsByX = data.payload.positionsByX;
      this.currentDisplay = data.payload.currentDisplay;
      this.setRouter(data.payload.options[data.payload.currentDisplay[0]].nameUrl);
      this.state.emit(data);
      this.cdr.detectChanges();
    });

  }

  getWidth(index: number) {
    let widthPx = this.components[0].instance._getWidth();
    return widthPx;
  }

  ngOnDestroy() {
    this.components.forEach(component => component.destroy());
    this.subscriptions.unsubscribe();
  }

  isView(index: number) {
    return this.currentDisplay.includes(index);
  }


  setRouter(currentUrl: string) {
    let queryParams = {};
    queryParams[UrlName] = currentUrl;
    this.router.navigate([''], { queryParams: queryParams, queryParamsHandling: 'merge' });
  }
}
