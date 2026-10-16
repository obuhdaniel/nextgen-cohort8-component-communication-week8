import { Component } from '@angular/core';
import { Logo } from '../reusable/logo/logo';
import { Button } from '../reusable/button/button';

@Component({
  selector: 'app-home',
  imports: [Logo, Button],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  videoId = 't8QNiGy4eOI';
}
