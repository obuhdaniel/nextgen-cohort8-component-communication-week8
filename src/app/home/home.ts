import { Component, inject, input, output } from '@angular/core';
import { Logo } from '../reusable/logo/logo';
import { Button } from '../reusable/button/button';
import { PillarCard } from '../reusable/pillar-card/pillar-card';
import { Pillar } from '../data/yra.data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [Logo, Button, PillarCard],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
    private router = inject(Router);
  
  videoId = 't8QNiGy4eOI';

  pillars = input.required<Pillar[]>();
  pillarSelected = output<string>();


  handleNavigation(route: string) {
    this.router.navigateByUrl(route); // This executes the actual navigation
  }
}
