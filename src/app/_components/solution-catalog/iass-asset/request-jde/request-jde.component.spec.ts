import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestJdeComponent } from './request-jde.component';

describe('RequestJdeComponent', () => {
  let component: RequestJdeComponent;
  let fixture: ComponentFixture<RequestJdeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestJdeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestJdeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
