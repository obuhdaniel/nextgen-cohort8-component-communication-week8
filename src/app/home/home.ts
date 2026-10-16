import { Component, inject, input, output, viewChild } from '@angular/core';
import { Logo } from '../reusable/logo/logo';
import { Button } from '../reusable/button/button';
import { PillarCard } from '../reusable/pillar-card/pillar-card';
import { Pillar, YraEvent } from '../data/yra.data';
import { Router } from '@angular/router';
import { EventCard } from '../reusable/event-card/event-card';
import { EventRegistrationModal } from '../reusable/event-registration-modal/event-registration-modal';

@Component({
  selector: 'app-home',
  imports: [Logo, Button, PillarCard, EventCard, EventRegistrationModal],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
    private router = inject(Router);
  
  videoId = 't8QNiGy4eOI';

  pillars = input.required<Pillar[]>();
  pillarSelected = output<string>();

  events = input.required<YraEvent[]>();
  eventSelected = output<string>();
  registrationModal = viewChild.required(EventRegistrationModal);


  handleNavigation(route: string) {
    this.router.navigateByUrl(route); // This executes the actual navigation
  }

  handleEventRegistration(id: string){
    const event = this.events().find((item) => item.id === id);
    if (event) this.registrationModal().openModal(event);
  }

  handleEventDetails(id:string){

  }
}
