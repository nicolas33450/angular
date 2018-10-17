import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingForComponent } from './listing-for.component';

describe('ListingForComponent', () => {
  let component: ListingForComponent;
  let fixture: ComponentFixture<ListingForComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingForComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
