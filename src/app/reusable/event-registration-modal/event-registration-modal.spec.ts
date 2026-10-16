import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventRegistrationModal } from './event-registration-modal';

describe('EventRegistrationModal', () => {
  let component: EventRegistrationModal;
  let fixture: ComponentFixture<EventRegistrationModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventRegistrationModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventRegistrationModal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
