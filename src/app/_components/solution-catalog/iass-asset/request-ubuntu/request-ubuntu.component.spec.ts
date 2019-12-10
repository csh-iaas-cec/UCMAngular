import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestUbuntuComponent } from './request-ubuntu.component';

describe('RequestUbuntuComponent', () => {
  let component: RequestUbuntuComponent;
  let fixture: ComponentFixture<RequestUbuntuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestUbuntuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestUbuntuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
