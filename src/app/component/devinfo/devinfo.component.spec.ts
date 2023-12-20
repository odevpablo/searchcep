import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevinfoComponent } from './devinfo.component';

describe('DevinfoComponent', () => {
  let component: DevinfoComponent;
  let fixture: ComponentFixture<DevinfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DevinfoComponent]
    });
    fixture = TestBed.createComponent(DevinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
