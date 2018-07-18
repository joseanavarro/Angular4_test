import { inject, TestBed } from '@angular/core/testing';
import { AppConstant } from './app-constant.service';


describe('AppConstantService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppConstant]
    });
  });

  it('should be created', inject([AppConstant], (service: AppConstant) => {
    expect(service).toBeTruthy();
  }));
});
