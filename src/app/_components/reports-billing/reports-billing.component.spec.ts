import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsBillingComponent } from './reports-billing.component';

describe('ReportsBillingComponent', () => {
  let component: ReportsBillingComponent;
  let fixture: ComponentFixture<ReportsBillingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsBillingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
