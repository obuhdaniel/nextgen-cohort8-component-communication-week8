import { Component, inject, input, output, viewChild } from '@angular/core';
import { Logo } from '../reusable/logo/logo';
import { Button } from '../reusable/button/button';
import { WhiteCardItem } from '../data/yra.data';
import { Router } from '@angular/router';
import { EventRegistrationModal } from '../reusable/event-registration-modal/event-registration-modal';
import { VideoPlayer } from '../reusable/video-player/video-player';
import { WhiteCard } from '../reusable/white-card/white-card';

@Component({
  selector: 'app-home',
  imports: [Logo, Button, WhiteCard, EventRegistrationModal, VideoPlayer],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
    private router = inject(Router);
  
  videoId = 't8QNiGy4eOI';

  pillars = input.required<WhiteCardItem[]>();
  pillarSelected = output<string>();

  events = input.required<WhiteCardItem[]>();
  eventSelected = output<string>();
  registrationModal = viewChild.required(EventRegistrationModal);

  resources = input.required<WhiteCardItem[]>();
  resourceSelected = output<string>();


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
