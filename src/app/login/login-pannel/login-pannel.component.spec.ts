import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPannelComponent } from './login-pannel.component';

describe('LoginPannelComponent', () => {
  let component: LoginPannelComponent;
  let fixture: ComponentFixture<LoginPannelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginPannelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginPannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
