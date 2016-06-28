import { provideRouter, RouterConfig } from '@angular/router';

import {RfidMonitorFormComponent} from "./rfid-monitor/rfid-monitor-form.component";
import {RfidReaderFormComponent} from "./rfid-reader/rfid-reader-form.component";
import {UserProfileFormComponent} from "./user-profile/user-profile-form.component";
import {AdministrationFormComponent} from "./administration/administration-form.component";

import { LoginRoutes, AUTH_PROVIDERS }     from './login.routes';

import { CanDeactivateGuard } from './interfaces';

export const routes: RouterConfig = [
  ...LoginRoutes,
  { path: '', redirectTo: 'entity', terminal: true },
  { path: 'entity', component: AdministrationFormComponent },
  { path: 'entity/:entityId/rfid-monitors', component: RfidMonitorFormComponent, canDeactivate: [CanDeactivateGuard] },
  { path: 'entity/:entityId/rfid-readers',  component: RfidReaderFormComponent,  canDeactivate: [CanDeactivateGuard] },
  { path: 'entity/:entityId/user-profiles', component: UserProfileFormComponent, canDeactivate: [CanDeactivateGuard] }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
  AUTH_PROVIDERS,
  CanDeactivateGuard
];
