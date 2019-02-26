import { TestBed, inject } from '@angular/core/testing';

import { DefaultRestService } from './default-rest.service';

describe('DefaultRestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DefaultRestService]
    });
  });

  it('should be created', inject([DefaultRestService], (service: DefaultRestService) => {
    expect(service).toBeTruthy();
  }));
});
