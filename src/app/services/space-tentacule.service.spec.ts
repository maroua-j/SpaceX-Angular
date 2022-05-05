import { TestBed } from '@angular/core/testing';

import { SpaceTentaculeService } from './space-tentacule.service';

describe('SpaceTentaculeService', () => {
  let service: SpaceTentaculeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpaceTentaculeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
