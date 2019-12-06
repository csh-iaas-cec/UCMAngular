import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestWindowsComponent } from './request-windows.component';

describe('RequestWindowsComponent', () => {
  let component: RequestWindowsComponent;
  let fixture: ComponentFixture<RequestWindowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestWindowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestWindowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
