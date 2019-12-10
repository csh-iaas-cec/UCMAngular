import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassAssetComponent } from './pass-asset.component';

describe('PassAssetComponent', () => {
  let component: PassAssetComponent;
  let fixture: ComponentFixture<PassAssetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassAssetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassAssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
