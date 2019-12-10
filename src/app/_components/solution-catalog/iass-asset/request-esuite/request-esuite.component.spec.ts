import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestEsuiteComponent } from './request-esuite.component';

describe('RequestEsuiteComponent', () => {
  let component: RequestEsuiteComponent;
  let fixture: ComponentFixture<RequestEsuiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestEsuiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestEsuiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
