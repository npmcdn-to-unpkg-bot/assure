import {Component} from '@angular/core';
import {OnInit} from "@angular/core";
import {Router} from "@angular/router-deprecated";
import {REACTIVE_FORM_DIRECTIVES, FormControl, FormGroup} from '@angular/forms';

import {AdministrationService} from "./administration.service";
import {Entity} from "../entity";
import {EntityService} from "../entity.service";

@Component({
  selector: 'administration-form',
  templateUrl: 'app/administration/administration-form.component.html',
  directives: [REACTIVE_FORM_DIRECTIVES]
})
export class AdministrationFormComponent implements OnInit {

    entitys:any = [];
    entitySelect = false;
    //entityId:number;
    private selectedId: number;

    constructor(private router: Router,
                private http:AdministrationService,
                private entityService:EntityService) {

    }

  ngOnInit() {
    console.log('AssureAppComponent - ngOnInit called');
    this.onGetEntity();
  }

  isSelected(entity: Entity) {
    return entity.entity_id === this.selectedId;
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
    this.entityService.setEntity(entity.entity_id);
  }

}
