import { TestBed } from '@angular/core/testing';

import { ColumnLayoutService } from './column-layout.service';

describe('ColumnLayoutService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ColumnLayoutService = TestBed.get(ColumnLayoutService);
    expect(service).toBeTruthy();
  });
});
