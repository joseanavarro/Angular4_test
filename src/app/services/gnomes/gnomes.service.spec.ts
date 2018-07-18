import { TestBed, inject } from '@angular/core/testing';

import { GnomesService } from './gnomes.service';

describe('GnomesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GnomesService]
    });
  });

  it('should be created', inject([GnomesService], (service: GnomesService) => {
    expect(service).toBeTruthy();
  }));
});
