import {TestBed} from '@angular/core/testing';

import {CategoryReclamationService} from './category-reclamation.service';

describe('CategoryReclamationService', () => {
  let service: CategoryReclamationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoryReclamationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
