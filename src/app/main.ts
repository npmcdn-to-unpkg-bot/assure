
import {bootstrap}    from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import {ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {AssureAppComponent} from './assure.component';
import {disableDeprecatedForms, provideForms} from '@angular/forms';

bootstrap(AssureAppComponent, [HTTP_PROVIDERS, ROUTER_PROVIDERS,
      disableDeprecatedForms(),
      provideForms()])
    .catch(err => console.error(err));
