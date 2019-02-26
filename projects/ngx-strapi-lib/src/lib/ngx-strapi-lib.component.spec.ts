import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxStrapiLibComponent } from './ngx-strapi-lib.component';

describe('NgxStrapiLibComponent', () => {
  let component: NgxStrapiLibComponent;
  let fixture: ComponentFixture<NgxStrapiLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxStrapiLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxStrapiLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
