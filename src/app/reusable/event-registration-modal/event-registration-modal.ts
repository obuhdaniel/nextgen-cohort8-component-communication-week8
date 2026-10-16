import { Component, HostListener, output, signal } from '@angular/core';
import { YraEvent } from '../../data/yra.data';
import { email, form, FormField, minLength, required } from '@angular/forms/signals';


interface Registration {
  fullName: string;
  email: string;
  institution: string;
  researchArea: string;
}

@Component({
  selector: 'app-event-registration-modal',
  imports: [FormField],
  templateUrl: './event-registration-modal.html',
  styleUrl: './event-registration-modal.css',
})



export class EventRegistrationModal {
  // Modal state
  readonly isModalOpen = signal(false);
  readonly selectedEvent = signal<YraEvent | null>(null);

  readonly registrationSubmitted = output<Registration & { event: YraEvent }>();

  // Form feedback state
  readonly submitted = signal(false);
  readonly registrationComplete = signal(false);

  // The source-of-truth model for Signal Forms
  readonly registrationModel = signal<Registration>({
    fullName: '',
    email: '',
    institution: '',
    researchArea: '',
  });

  // Build the form and attach validation rules
  readonly registrationForm = form(
    this.registrationModel,
    (path) => {
      required(path.fullName, {
        message: 'Please enter your full name.',
      });

      minLength(path.fullName, 2, {
        message: 'Your name must contain at least 2 characters.',
      });

      required(path.email, {
        message: 'Please enter your email address.',
      });

      email(path.email, {
        message: 'Please enter a valid email address.',
      });
    },
  );

  openModal(event: YraEvent): void {
    this.selectedEvent.set(event);
    this.resetForm();
    this.isModalOpen.set(true);
  }

  closeModal(): void {
    this.isModalOpen.set(false);
    this.selectedEvent.set(null);
  }

  @HostListener('document:keydown.escape')
  closeOnEscape(): void {
    if (this.isModalOpen()) {
      this.closeModal();
    }
  }

  onBackdropClick(event: MouseEvent): void {
    // Close only when the backdrop itself is clicked
    if (event.target === event.currentTarget) {
      this.closeModal();
    }
  }



  resetForm(): void {
    this.registrationModel.set({
      fullName: '',
      email: '',
      institution: '',
      researchArea: '',
    });

    this.submitted.set(false);
    this.registrationComplete.set(false);
  }

  submitRegistration(): void {
    this.submitted.set(true);

    if (!this.registrationForm().valid()) {
      return;
    }

    // For learning purposes, show the submitted data in the console.
    const event = this.selectedEvent();
    if (!event) return;

    this.registrationSubmitted.emit({ event, ...this.registrationModel() });

    this.registrationComplete.set(true);
  }

  formatFee(fee: number): string {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      maximumFractionDigits: 0,
    }).format(fee);
  }

  getCategoryClass(category: string): string {
    switch (category) {
      case 'Seminar':
        return 'bg-orange-50 text-orange-700';
      case 'Workshop':
        return 'bg-purple-50 text-purple-700';
      default:
        return 'bg-cyan-50 text-[#1f86a5]';
    }
  }
}
