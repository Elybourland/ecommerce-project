import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninBarComponent } from './signin-bar.component';

describe('SigninBarComponent', () => {
  let component: SigninBarComponent;
  let fixture: ComponentFixture<SigninBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SigninBarComponent]
    });
    fixture = TestBed.createComponent(SigninBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
