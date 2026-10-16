import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventRegistrationModal } from './event-registration-modal';
import { YraEvent } from '../../data/yra.data';

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

  const event: YraEvent = {
    id: 'bootcamp',
    title: 'Research Bootcamp',
    imageLabel: 'BOOTCAMP',
    category: 'Training',
    date: '20 Aug',
    mode: 'Online',
    duration: '4 Weeks',
    summary: 'Research training.',
    fee: 15000,
  };

  it('opens for the selected event and resets previous form state', () => {
    component.registrationModel.set({
      fullName: 'Ada Lovelace',
      email: 'ada@example.com',
      institution: 'YRA',
      researchArea: 'Computing',
    });
    component.submitted.set(true);

    component.openModal(event);

    expect(component.isModalOpen()).toBe(true);
    expect(component.selectedEvent()).toBe(event);
    expect(component.registrationModel().fullName).toBe('');
    expect(component.submitted()).toBe(false);
  });

  it('does not complete an invalid registration', () => {
    component.openModal(event);
    component.submitRegistration();

    expect(component.submitted()).toBe(true);
    expect(component.registrationComplete()).toBe(false);
  });

  it('emits a valid registration and shows the success state', () => {
    const emitted = vi.fn();
    component.registrationSubmitted.subscribe(emitted);
    component.openModal(event);
    component.registrationModel.set({
      fullName: 'Ada Lovelace',
      email: 'ada@example.com',
      institution: 'YRA',
      researchArea: 'Computing',
    });

    component.submitRegistration();

    expect(emitted).toHaveBeenCalledWith({
      event,
      fullName: 'Ada Lovelace',
      email: 'ada@example.com',
      institution: 'YRA',
      researchArea: 'Computing',
    });
    expect(component.registrationComplete()).toBe(true);
  });

  it('closes on Escape', () => {
    component.openModal(event);

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));

    expect(component.isModalOpen()).toBe(false);
    expect(component.selectedEvent()).toBeNull();
  });
});
