import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionCatalogComponent } from './solution-catalog.component';

describe('SolutionCatalogComponent', () => {
  let component: SolutionCatalogComponent;
  let fixture: ComponentFixture<SolutionCatalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolutionCatalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
