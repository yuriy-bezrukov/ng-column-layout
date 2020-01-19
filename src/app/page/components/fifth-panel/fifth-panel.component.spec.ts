import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FifthPanelComponent } from './fifth-panel.component';

describe('FifthPanelComponent', () => {
  let component: FifthPanelComponent;
  let fixture: ComponentFixture<FifthPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FifthPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FifthPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
