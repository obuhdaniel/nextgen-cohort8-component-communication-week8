import { Component, computed, input, output } from '@angular/core';
import { WhiteCardItem } from '../../data/yra.data';
import { Button } from '../button/button';

@Component({
  selector: 'app-white-card',
  imports: [Button],
  templateUrl: './white-card.html',
  styleUrl: './white-card.css',
})
export class WhiteCard {
  item = input.required<WhiteCardItem>();
  variant = input<'default' | 'compact'>('default');

  action = output<string>();

  iconClass = computed(() => `icon icon-${this.item().tone}`);
  badgeClass = computed(() =>
    this.item().category === 'Seminar' ? 'badge badge-orange' : 'badge badge-teal',
  );
  imageBackground = computed(
    () =>
      this.item().imageBackground ??
      'linear-gradient(135deg, var(--color-brand-teal), #72c5da)',
  );
  metadata = computed(() =>
    [this.item().date, this.item().mode, this.item().duration].filter(
      (value): value is string => Boolean(value),
    ),
  );

  onAction() {
    this.action.emit(this.item().actionValue);
  }
}
