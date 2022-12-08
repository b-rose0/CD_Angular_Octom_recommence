import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpPannelComponent } from './sign-up-pannel.component';

describe('SignUpPannelComponent', () => {
  let component: SignUpPannelComponent;
  let fixture: ComponentFixture<SignUpPannelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignUpPannelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignUpPannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
