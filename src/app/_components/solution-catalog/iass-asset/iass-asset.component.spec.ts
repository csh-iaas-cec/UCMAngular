import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IassAssetComponent } from './iass-asset.component';

describe('IassAssetComponent', () => {
  let component: IassAssetComponent;
  let fixture: ComponentFixture<IassAssetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IassAssetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IassAssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
