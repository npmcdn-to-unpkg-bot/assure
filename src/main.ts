import { bootstrap } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import {ROUTER_PROVIDERS} from '@angular/router-deprecated';
import { enableProdMode } from '@angular/core';
import { AssureAppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(AssureAppComponent, [HTTP_PROVIDERS, ROUTER_PROVIDERS])
  .catch(err => console.error(err));


