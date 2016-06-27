import { provideRouter, RouterConfig } from '@angular/router';

import {RfidMonitorFormComponent} from "./rfid-monitor-form.component";
import {RfidReaderFormComponent} from "./rfid-reader-form.component";
import {UserProfileFormComponent} from "./user-profile-form.component";


//{
//  path: '',
//    redirectTo: '/crisis-center',
//  terminal: true
//},

export const routes: RouterConfig = [
  {
    path: '',
      redirectTo: '/rfid-monitor/23',
    terminal: true
  },
  { path: 'rfid-monitor/:id', component: RfidMonitorFormComponent },
  { path: 'rfid-reader/:id', component: RfidReaderFormComponent },
  { path: 'user-profile/:id', component: UserProfileFormComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
