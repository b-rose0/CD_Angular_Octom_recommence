import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversationInfosComponent } from './conversation-infos.component';

describe('ConversationInfosComponent', () => {
  let component: ConversationInfosComponent;
  let fixture: ComponentFixture<ConversationInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConversationInfosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConversationInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
