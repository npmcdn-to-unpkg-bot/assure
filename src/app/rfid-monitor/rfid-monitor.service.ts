/**
 * Created by Tony Sykes on 25-Jan-2016.
 */
import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import {RfidMonitor} from "./rfid-monitor";
import {API_RFID_MONITOR_URL} from "../app.config";

@Injectable()
export class RfidMonitorService {
    constructor (private _http: Http) {}

    getRfidMonitor(entityId:number){

        let headers: Headers = new Headers();
        headers.append('Accept', 'text/json');

        let requestOptions: RequestOptions = new RequestOptions();
        requestOptions.headers = headers;

        let url:string = `${API_RFID_MONITOR_URL}/${entityId}`;
        console.log(url);

        return this._http.get(url, requestOptions)
            .map(res => res.json()); //console.log(res)); //res.json()

    }

    updateRfidMonitor(rfidMonitor:RfidMonitor){

        let headers: Headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');

        let requestOptions: RequestOptions = new RequestOptions();
        requestOptions.headers = headers;

        let body: string = JSON.stringify(rfidMonitor);

        //console.log(body);

        return this._http.post(API_RFID_MONITOR_URL, body, requestOptions)
            .map(res => res.json()); //console.log(res)); //

    }

 }


