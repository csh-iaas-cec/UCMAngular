import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestDatabaseComponent } from './request-database.component';

describe('RequestDatabaseComponent', () => {
  let component: RequestDatabaseComponent;
  let fixture: ComponentFixture<RequestDatabaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestDatabaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestDatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
