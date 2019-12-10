import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestPeoplesoftComponent } from './request-peoplesoft.component';

describe('RequestPeoplesoftComponent', () => {
  let component: RequestPeoplesoftComponent;
  let fixture: ComponentFixture<RequestPeoplesoftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestPeoplesoftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestPeoplesoftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
