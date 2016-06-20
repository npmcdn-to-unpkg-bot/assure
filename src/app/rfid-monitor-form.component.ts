import {Component,OnInit} from '@angular/core';
import {NgForm}    from '@angular/common';
import {RouteParams, Router} from "@angular/router-deprecated";
import {REACTIVE_FORM_DIRECTIVES, FormControl, FormGroup} from '@angular/forms';

import {RfidMonitor}    from './rfid-monitor';
import {RfidMonitorService} from "./rfid-monitor.service";

@Component({
  selector: 'rfid-monitor-form',
  templateUrl: 'app/rfid-monitor-form.component.html',
  directives: [REACTIVE_FORM_DIRECTIVES],
  providers: [RfidMonitorService]
})
export class RfidMonitorFormComponent implements OnInit{

    rfidMonitors = [];

    submitted = false;
    editMode:string = 'no';

    selectedRfidMonitor: RfidMonitor;

    rfidMonitorForm = new FormGroup({
      monitorCode: new FormControl(),
      description: new FormControl()
    });


  entityId:number; // =23;


    constructor(private _router:Router,
                private _routeParams: RouteParams,
                private _httpService:RfidMonitorService) {

    }

    ngOnInit() {
        this.entityId = +this._routeParams.get('entityId');
        this.onGetRfidMonitor();
    }

    goBack() {
        window.history.back();
    }


    onGetRfidMonitor() {

        console.log('entityId is ' + this.entityId.toString());
        this._httpService.getRfidMonitor(this.entityId)
            .subscribe(
                data => {this.rfidMonitors = data;
                    console.log('getRFIDMonitor data');
                    //JSON.stringify(data)
                    },
                error => console.log(error), //alert(error.toString()),
                () => console.log('getRFIDMonitor Finished')
            )
    }

    onSubmit() {
        this.submitted = true;
        console.log(JSON.stringify(this.selectedRfidMonitor));

        this._httpService.updateRfidMonitor(this.selectedRfidMonitor)
            .subscribe(
                data => {
                    this.editMode = 'no';
                    this.onGetRfidMonitor()}, //JSON.stringify(data),
                error => console.log(error), //alert(error.toString()),
                () => console.log('updateRFIDMonitor Finished')
            )
    }

    onNewMonitor() {
            this.selectedRfidMonitor = new RfidMonitor(0,'','',this.entityId);
            this.editMode = 'insert';

    }

    onSelect(rfidMonitor: RfidMonitor) {
        this.selectedRfidMonitor = rfidMonitor;
        this.editMode = 'update';

    }

    onCancelMonitorEdit(){
        //this.selectedRfidMonitor = new RfidMonitor(0,'','',0);
        this.editMode = 'no';
    }

}
