import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTenancyComponent } from './delete-tenancy.component';

describe('DeleteTenancyComponent', () => {
  let component: DeleteTenancyComponent;
  let fixture: ComponentFixture<DeleteTenancyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteTenancyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteTenancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
