import { TestBed } from '@angular/core/testing';

import { GiftControllerService } from './gift-controller.service';

describe('GiftServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GiftControllerService = TestBed.get(GiftControllerService);
    expect(service).toBeTruthy();
  });
});
