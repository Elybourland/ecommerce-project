import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountProductsComponent } from './discount-products.component';

describe('DiscountProductsComponent', () => {
  let component: DiscountProductsComponent;
  let fixture: ComponentFixture<DiscountProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiscountProductsComponent]
    });
    fixture = TestBed.createComponent(DiscountProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
