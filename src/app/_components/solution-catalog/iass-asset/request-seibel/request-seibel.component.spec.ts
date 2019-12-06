import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestSeibelComponent } from './request-seibel.component';

describe('RequestSeibelComponent', () => {
  let component: RequestSeibelComponent;
  let fixture: ComponentFixture<RequestSeibelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestSeibelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestSeibelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
