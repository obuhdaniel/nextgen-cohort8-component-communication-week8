import { Component, computed, input, output } from '@angular/core';
import { Pillar } from '../../data/yra.data';

@Component({
  selector: 'app-pillar-card',
  templateUrl: './pillar-card.html',
  styleUrl: './pillar-card.css',
})
export class PillarCard {
  // data down
  pillar = input.required<Pillar>();

  // event up: reports the route, the parent decides what to do with it
  linkClick = output<string>();

  // derived state
  iconClass = computed(() => `icon icon-${this.pillar().tone}`);

  onLinkClick() {
    this.linkClick.emit(this.pillar().route);
  }
}