import { Injectable } from '@angular/core';
import { ColumnLayoutModule } from '../column-layout.module';
import { ILayoutOptions, ILayoutWidgetRef } from '../components/column-layout/column-layout.component';
import { BaseStoreService, IBaseStore } from './base-strore.service';
import { Route, Router } from '@angular/router';

export enum ColumnLayoutAction {
  next = 'next',
  prev = 'prev',
  init = 'init',
  setStep = 'setStep'
}

export interface IColumnLayoutState extends IBaseStore {
  action: ColumnLayoutAction,
  payload: {
    options?: ILayoutOptions[];
    elementRefs?: ILayoutWidgetRef[];
    currentDisplay?: number[];
    positionsByX?: number[];
  }
}

@Injectable({
  providedIn: ColumnLayoutModule
})
export class ColumnLayoutService extends BaseStoreService<IColumnLayoutState>{

  constructor(private router: Router) {
    super();
  }

  init(options: ILayoutOptions[], elementRefs: ILayoutWidgetRef[], currentDisplay: number[]) {
    if (!currentDisplay.length) {
      currentDisplay = [0];
    }
    this.state = {
      action: ColumnLayoutAction.init,
      payload: {
        options: options,
        elementRefs: elementRefs,
        currentDisplay: currentDisplay,
        positionsByX: []
      }
    }
    setTimeout(() => {
      this.setStep(currentDisplay[0]);
    });
  }

  private canNext() {
    let current = Math.max(...this.stateValue.payload.currentDisplay);
    return this.stateValue.payload.elementRefs.length - 1 > current;
  }

  private canPrev() {
    let current = Math.min(...this.stateValue.payload.currentDisplay);
    return current > 0;
  }

  next() {
    if (!this.canNext()) return
    let current = Math.max(...this.stateValue.payload.currentDisplay) + 1;
    this._assignState = {
      action: ColumnLayoutAction.next,
      payload: {
        currentDisplay: [current],
        positionsByX: this.updatePositionElements([current])
      }
    }
  }

  prev() {
    if (!this.canPrev()) return
    let current = Math.min(...this.stateValue.payload.currentDisplay) - 1;
    this._assignState = {
      action: ColumnLayoutAction.prev,
      payload: {
        currentDisplay: [current],
        positionsByX: this.updatePositionElements([current])
      }
    }
  }

  setStep(index: number) {
    this._assignState = {
      action: ColumnLayoutAction.setStep,
      payload: {
        currentDisplay: [index],
        positionsByX: this.updatePositionElements([index])
      }
    }
  }

  updatePositionElements(current: number[]) {
    let positionByX: number[] = [];
    this.stateValue.payload.elementRefs.forEach((el, i) => {
      positionByX.push(this.positionRelativeCurrent(i, current));
    });
    return positionByX;
  }

  positionRelativeCurrent(elementIndex: number, currentDisplay: number[]): number {
    let position = 0;
    let elementRefs = this.stateValue.payload.elementRefs;

    if (currentDisplay.includes(elementIndex)) {
      currentDisplay.filter(item => item < elementIndex).forEach(item => {
        position += elementRefs[item].instance._getWidth();
      })
    } else if (Math.max(...currentDisplay) < elementIndex) {
      currentDisplay.forEach(item => {
        position += elementRefs[item].instance._getWidth();
      })
    } else {
      position = -elementRefs[elementIndex].instance._getWidth();
    }
    return position
  }

}
