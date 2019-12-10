import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestLinuxComponent } from './request-linux.component';

describe('RequestLinuxComponent', () => {
  let component: RequestLinuxComponent;
  let fixture: ComponentFixture<RequestLinuxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestLinuxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestLinuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
