import {Component, OnInit}         from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import {REACTIVE_FORM_DIRECTIVES, FormControl, FormGroup} from '@angular/forms';

import {Entity} from "./entity";
import {AdministrationService} from "./administration.service";

@Component({
  selector: 'assure-app',
  templateUrl: 'app/assure.component.html',
  directives: [ROUTER_DIRECTIVES, REACTIVE_FORM_DIRECTIVES],
  providers: [ AdministrationService]
})

export class AssureAppComponent implements OnInit {

    entitys:any = [];
    entitySelect = false;
    entityId:number;
    title:string = 'Next Gen Assure';

    administrationForm = new FormGroup({
        entity: new FormControl()
    });

    userTypes:any = [];
    userStatuses:any = [];

    constructor(
      private router: Router,
      private http: AdministrationService) {}

    ngOnInit() {
        console.log('AssureAppComponent - ngOnInit called');
        this.onGetEntity();
    }


    onGetEntity() {
        this.http.getEntity()
            .subscribe(
                data => this.entitys = data,
                error => console.log(error), //alert(error.toString()),
                () => console.log('getEntity Finished')
            )
    }
    onSelectEntity(entity: Entity) {
        console.log('onSelectEntity Called - entity_id =' + entity.entity_id? entity.entity_id : "Not Set" );
        this.entitySelect = true;
        //this.entityId = entity.entity_id;
        this.router.navigate(['/rfid-monitor', entity.entity_id]);
    }
}
