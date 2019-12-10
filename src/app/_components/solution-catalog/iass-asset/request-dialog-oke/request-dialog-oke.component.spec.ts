import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestDialogOkeComponent } from './request-dialog-oke.component';

describe('RequestDialogOkeComponent', () => {
  let component: RequestDialogOkeComponent;
  let fixture: ComponentFixture<RequestDialogOkeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestDialogOkeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestDialogOkeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
