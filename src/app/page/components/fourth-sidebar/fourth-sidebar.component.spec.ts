import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthSidebarComponent } from './fourth-sidebar.component';

describe('FourthSidebarComponent', () => {
  let component: FourthSidebarComponent;
  let fixture: ComponentFixture<FourthSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourthSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourthSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
