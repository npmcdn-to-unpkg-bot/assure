import {Component, OnInit, OnDestroy} from '@angular/core';
import {Router, ActivatedRoute } from "@angular/router";

import {RfidReader}    from './rfid-reader';
import {RfidReaderService} from "./rfid-reader.service";
import {REACTIVE_FORM_DIRECTIVES, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'rfid-reader-form',
  templateUrl: 'app/rfid-reader-form.component.html',
  directives: [REACTIVE_FORM_DIRECTIVES],
  providers: [RfidReaderService]
})
export class RfidReaderFormComponent implements OnInit, OnDestroy{

    rfidReaders = [];

    submitted = false;
    editMode:string = 'no';

    selectedRfidReader: RfidReader;

  rfidReaderForm = new FormGroup({
      readerCode: new FormControl(),
      description: new FormControl()
    });

  entityId:number=23;
  private sub: any;


  constructor(private route: ActivatedRoute,
              private router:Router,
              private httpService:RfidReaderService) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = +params['id']; // (+) converts string 'id' to a number
      //this.onGetRfidMonitor();
      this.httpService.getRfidReader(id)
        .subscribe(
          data => {this.rfidReaders = data;
            console.log('getRFIDReader data');
            //JSON.stringify(data)
          },
          error => console.log(error), //alert(error.toString()),
          () => console.log('getRFIDReader Finished')
        )
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onGetRfidReader() {

        console.log('entityId is ' + this.entityId.toString());
        this.httpService.getRfidReader(this.entityId)
            .subscribe(
                data => {this.rfidReaders = data;
                    console.log('getRFIDReader data');
                    //JSON.stringify(data)
                    },
                error => console.log(error), //alert(error.toString()),
                () => console.log('getRFIDReader Finished')
            )
    }

    onSubmit() {
        this.submitted = true;
        console.log(JSON.stringify(this.selectedRfidReader));

        this.httpService.updateRfidReader(this.selectedRfidReader)
            .subscribe(
                data => {
                    this.editMode = 'no';
                    this.onGetRfidReader()}, //JSON.stringify(data),
                error => console.log(error), //alert(error.toString()),
                () => console.log('updateRFIDReader Finished')
            )
    }

    onNewReader() {
            this.selectedRfidReader = new RfidReader(0,'', 0,'','','','','','','','','','',0,this.entityId,0,0);
            this.editMode = 'insert';
    }

    onSelect(rfidReader: RfidReader) {
        this.selectedRfidReader = rfidReader;
        this.editMode = 'update';

    }

    onCancelReaderEdit(){
        //this.selectedRfidReader = new RfidReader(0,'','',0);
        this.editMode = 'no';
    }

}
