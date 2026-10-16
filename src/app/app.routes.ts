import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Login } from './login/login';
import { YRA_PILLARS } from './data/yra.data';

export const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '', component: Home, data: {
    pillars: YRA_PILLARS
  } },
  { path: 'login', component: Login },

  { path: 'opportunities', component: Home},
  { path: 'community', component: Home},
  { path: 'programmes', component: Home},
  { path: 'resources', component: Home},
];
