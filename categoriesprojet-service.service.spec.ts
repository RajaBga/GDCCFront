import { TestBed } from '@angular/core/testing';

import { CategoriesprojetServiceService } from './categoriesprojet-service.service';

describe('CategoriesprojetServiceService', () => {
  let service: CategoriesprojetServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriesprojetServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
