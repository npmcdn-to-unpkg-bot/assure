import {Component, OnInit, OnDestroy} from '@angular/core';
import {NgForm}    from '@angular/common';
import {Router, ActivatedRoute, ROUTER_DIRECTIVES } from "@angular/router";
import {REACTIVE_FORM_DIRECTIVES, FormControl, FormGroup} from '@angular/forms';

import {RfidMonitor}    from './rfid-monitor';
import {RfidMonitorService} from "./rfid-monitor.service";

@Component({
  selector: 'rfid-monitor-form',
  templateUrl: 'app/rfid-monitor/rfid-monitor-form.component.html',
  directives: [REACTIVE_FORM_DIRECTIVES, ROUTER_DIRECTIVES],
  providers: [RfidMonitorService]
})
export class RfidMonitorFormComponent implements OnInit, OnDestroy{

    rfidMonitors = [];

    submitted = false;
    editMode:string = 'no';

    selectedRfidMonitor: RfidMonitor;

    rfidMonitorForm = new FormGroup({
      monitorCode: new FormControl(),
      description: new FormControl()
    });


  entityId:number; // =23;
  private sub: any;


    constructor(private route: ActivatedRoute,
                private router:Router,
                private httpService:RfidMonitorService) {}

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
          this.entityId = +params['entityId']; // (+) converts string 'id' to a number
          //this.onGetRfidMonitor();
          this.httpService.getRfidMonitor(this.entityId)
            .subscribe(
              data => {this.rfidMonitors = data;
                console.log('getRFIDMonitor data');
                //JSON.stringify(data)
              },
              error => console.log(error), //alert(error.toString()),
              () => console.log('getRFIDMonitor Finished')
            )
        });
    }

    ngOnDestroy() {
      this.sub.unsubscribe();
    }


    onGetRfidMonitor() {

        console.log('entityId is ' + this.entityId.toString());
        this.httpService.getRfidMonitor(this.entityId)
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

        this.httpService.updateRfidMonitor(this.selectedRfidMonitor)
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
