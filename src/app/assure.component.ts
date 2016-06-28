import {Component}         from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import {REACTIVE_FORM_DIRECTIVES, FormControl, FormGroup} from '@angular/forms';

//import {Entity} from "./entity";
import {AdministrationService} from "./administration/administration.service";
import {EntityService} from "./entity.service";

@Component({
  selector: 'assure-app',
  templateUrl: 'app/assure.component.html',
  directives: [ROUTER_DIRECTIVES, REACTIVE_FORM_DIRECTIVES],
  providers: [ AdministrationService, EntityService]
})

export class AssureAppComponent {

    //entitys:any = [];
    //entitySelect = true;
    //entityId:number = 32;
    title:string = 'Next Gen Assure';

    constructor(
      private router: Router,
      private http: AdministrationService,
      private entityService: EntityService) {}

    onSelectRfidMonitor() {
      console.log('onSelectRfidMonitor Called - entity_id =' + this.entityService.selectedEntityId);
      this.router.navigate(['/entity', this.entityService.selectedEntityId, '/rfid-monitors']);
    }
    onSelectRfidReader() {
      console.log('onSelectRfidReader Called - entity_id =' + this.entityService.selectedEntityId );
      this.router.navigate(['/entity', this.entityService.selectedEntityId, '/rfid-readers']);
    }
    onSelectUserProfile() {
      console.log('onSelectUserProfile Called - entity_id =' + this.entityService.selectedEntityId );
      this.router.navigate(['/entity', this.entityService.selectedEntityId, '/user-profiles']);
    }

}
