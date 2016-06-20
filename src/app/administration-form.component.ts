import {Component} from '@angular/core';
import {OnInit} from "@angular/core";
import {Router} from "@angular/router-deprecated";
import {REACTIVE_FORM_DIRECTIVES, FormControl, FormGroup} from '@angular/forms';

import {AdministrationService} from "./administration.service";

@Component({
  selector: 'administration-form',
  templateUrl: 'app/administration-form.component.html',
  directives: [REACTIVE_FORM_DIRECTIVES]
})
export class AdministrationFormComponent implements OnInit {

    entitys:any = [];
    entitySelect = false;
    entityId:number;

    constructor(private _router: Router,
                private _httpService:AdministrationService) {

    }

    ngOnInit() {
        console.log('AdministrationFormComponent - ngOnInit called');
        this.onGetEntity();
    }


    onGetEntity() {
        this._httpService.getEntity()
            .subscribe(
                data => this.entitys = data, //JSON.stringify(data),
                error => console.log(error), //alert(error.toString()),
                () => console.log('getEntity Finished')
            )
    }

    onSelectEntity(entityId: number) {
        console.log('onSelectEntity Called')
        this.entitySelect = true;
        this.entityId = entityId;
    }

    gotoRfidMonitor(entityId: number) {
        console.log('gotoRfidMonitor entityId = ' + entityId);
        let link = ['RfidMonitor', { entityId: entityId }];
        this._router.navigate(link);
    }

}
