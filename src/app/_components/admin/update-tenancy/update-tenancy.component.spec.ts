import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTenancyComponent } from './update-tenancy.component';

describe('UpdateTenancyComponent', () => {
  let component: UpdateTenancyComponent;
  let fixture: ComponentFixture<UpdateTenancyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateTenancyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTenancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
