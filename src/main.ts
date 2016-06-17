import { bootstrap } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import {ROUTER_PROVIDERS} from '@angular/router-deprecated';
import { enableProdMode } from '@angular/core';
import { AssureAppComponent, environment } from './app/';
import {disableDeprecatedForms, provideForms} from '@angular/forms';

if (environment.production) {
  enableProdMode();
}

bootstrap(AssureAppComponent, [HTTP_PROVIDERS, ROUTER_PROVIDERS,
      disableDeprecatedForms(),
      provideForms()])
  .catch(err => console.error(err));


