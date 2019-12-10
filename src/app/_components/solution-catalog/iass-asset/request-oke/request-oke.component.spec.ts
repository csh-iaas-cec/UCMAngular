import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestOkeComponent } from './request-oke.component';

describe('RequestOkeComponent', () => {
  let component: RequestOkeComponent;
  let fixture: ComponentFixture<RequestOkeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestOkeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestOkeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
