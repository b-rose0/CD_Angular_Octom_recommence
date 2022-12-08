import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetPasswordPannelComponent } from './forget-password-pannel.component';

describe('ForgetPasswordPannelComponent', () => {
  let component: ForgetPasswordPannelComponent;
  let fixture: ComponentFixture<ForgetPasswordPannelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgetPasswordPannelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgetPasswordPannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
