import { Component, computed, input, output } from '@angular/core';
import { Button } from '../button/button';
import { ResourceItem } from '../../data/yra.data';

@Component({
  selector: 'app-resource-card',
  imports: [Button],
  templateUrl: './resource-card.html',
  styleUrl: './resource-card.css',
})
export class ResourceCard {
   resource = input.required<ResourceItem>();

  // event up: reports the route, the parent decides what to do with it
  linkClick = output<string>();

  // derived state
  iconClass = computed(() => `icon icon-${this.resource().tone}`);

  onLinkClick() {
    this.linkClick.emit(this.resource().route);
}

}
