import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTenancyComponent } from './add-tenancy.component';

describe('AddTenancyComponent', () => {
  let component: AddTenancyComponent;
  let fixture: ComponentFixture<AddTenancyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTenancyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTenancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
