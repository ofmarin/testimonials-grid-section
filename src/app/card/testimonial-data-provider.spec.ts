import { TestBed } from '@angular/core/testing';

import { TestimonialDataProvider } from './testimonial-data-provider';

describe('TestimonialDataProvider', () => {
  let service: TestimonialDataProvider;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestimonialDataProvider);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
