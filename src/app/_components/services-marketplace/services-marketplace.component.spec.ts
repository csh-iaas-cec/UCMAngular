import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesMarketplaceComponent } from './services-marketplace.component';

describe('ServicesMarketplaceComponent', () => {
  let component: ServicesMarketplaceComponent;
  let fixture: ComponentFixture<ServicesMarketplaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesMarketplaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesMarketplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
