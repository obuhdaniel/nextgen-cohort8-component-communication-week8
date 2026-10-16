import { Component, computed, input, output } from '@angular/core';
import { YraEvent } from '../../data/yra.data';
import { Button } from '../button/button';

@Component({
  selector: 'app-event-card',
  imports: [Button],
  templateUrl: './event-card.html',
  styleUrl: './event-card.css',
})
export class EventCard {

  //data down
  event = input.required<YraEvent>();
  variant = input<'default' | 'compact'>('default');


  //events up
  register = output<string>();
  details = output<string>();


  //calaculate fee display label

  feeLabel = computed(() => {
    const fee = this.event().fee;
    return fee === 0? 'Free' : `#${fee.toLocaleString('en-NG')}`;


  });

  badgeClass = computed(()=> this.event().category === 'Seminar' ? 'badge badge-orange': 'badge badge-teal');

  imageBackground = computed(() => {
    this.event().gradient ?? 'linear-gradient(135deg, var(--color-brand-teal), #72c5da)'
  });


  onRegister() {
    this.register.emit(this.event().id);
  }

  onDetails(){
    this.details.emit(this.event().id);
  }



}
