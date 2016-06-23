import {bootstrap}    from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { APP_ROUTER_PROVIDERS } from './app.routes';
import {AssureAppComponent} from './assure.component';
import {disableDeprecatedForms, provideForms} from '@angular/forms';

bootstrap(AssureAppComponent, [APP_ROUTER_PROVIDERS, HTTP_PROVIDERS,
  disableDeprecatedForms(),
  provideForms()])
  .catch(err => console.error(err));

