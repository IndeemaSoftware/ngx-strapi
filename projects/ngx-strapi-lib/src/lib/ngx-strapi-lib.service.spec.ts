import { TestBed, inject } from '@angular/core/testing';

import { NgxStrapiLibService } from './ngx-strapi-lib.service';

describe('NgxStrapiLibService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxStrapiLibService]
    });
  });

  it('should be created', inject([NgxStrapiLibService], (service: NgxStrapiLibService) => {
    expect(service).toBeTruthy();
  }));
});
