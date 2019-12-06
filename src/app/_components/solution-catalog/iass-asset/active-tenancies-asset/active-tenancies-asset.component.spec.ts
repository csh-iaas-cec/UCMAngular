import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveTenanciesAssetComponent } from './active-tenancies-asset.component';

describe('ActiveTenanciesAssetComponent', () => {
  let component: ActiveTenanciesAssetComponent;
  let fixture: ComponentFixture<ActiveTenanciesAssetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveTenanciesAssetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveTenanciesAssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
