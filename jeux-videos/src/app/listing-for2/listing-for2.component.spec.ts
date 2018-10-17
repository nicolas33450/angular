import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingFor2Component } from './listing-for2.component';

describe('ListingFor2Component', () => {
  let component: ListingFor2Component;
  let fixture: ComponentFixture<ListingFor2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingFor2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingFor2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
