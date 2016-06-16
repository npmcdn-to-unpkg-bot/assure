import {Component, OnInit}         from '@angular/core';
import { Router, RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import {RfidMonitorFormComponent} from './rfid-monitor-form.component';
import {RfidReaderFormComponent} from './rfid-reader-form.component';
import {UserProfileFormComponent} from "./user-profile-form.component";

import {AdministrationService} from "./administration.service";
import {RfidMonitorService} from "./rfid-monitor.service";
import {UserProfileService} from "./user-profile.service";
import {UtilityService} from "./utility.service";

@Component({
  selector: 'assure-app',
  templateUrl: 'app/assure.component.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS, AdministrationService, UtilityService]
})
@RouteConfig([
    {
        path: '/rfidmonitor',
        name: 'RfidMonitor',
        component: RfidMonitorFormComponent
    },
    {
        path: '/rfidreader',
        name: 'RfidReader',
        component: RfidReaderFormComponent
    },
    {
        path: '/userprofile',
        name: 'UserProfile',
        component: UserProfileFormComponent
    },
])

export class AssureAppComponent implements OnInit {

    entitys:any = [];
    entitySelect = false;
    entityId:number;
    title:string = 'Next Gen Assure';

    userTypes:any = [];
    userStatuses:any = [];

    constructor(private _router: Router,
    private _http: AdministrationService,
    private _httpUtilityService: UtilityService) {

    }

    ngOnInit() {
        console.log('AssureAppComponent - ngOnInit called');
        this.onGetEntity();
        //this.onGetUserType();
    }


    onGetEntity() {
        this._http.getEntity()
            .subscribe(
                data => this.entitys = data,
                error => console.log(error), //alert(error.toString()),
                () => console.log('getEntity Finished')
            )
    }

    //onGetUserType() {
    //    this._httpUtilityService.getUserType()
    //        .subscribe(
    ///            data => {
    //               this.userTypes   = data;
    //                console.log('onGetUserType = ' + JSON.stringify(data) );
    //            },
    //            error => console.log(error), //alert(error.toString()),
    //            () => console.log('onGetUserType Finished')
    //        )
    //}

    onSelectEntity(entityId: number) {
        console.log('onSelectEntity Called')
        this.entitySelect = true;
        this.entityId = entityId;
    }
}
