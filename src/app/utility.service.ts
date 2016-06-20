/**
 * Created by Tony Sykes on 30-Mar-2016.
 */
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Headers} from "@angular/http";
import {RequestOptions} from "@angular/http";
import {API_RFID_READER_TYPE_URL, API_USER_TYPE_URL, API_USER_STATUS_URL} from "./app.config";

@Injectable()
export class UtilityService {
    constructor (private _http: Http) {}

    getRfidReaderType(){

        let headers: Headers = new Headers();
        headers.append('Accept', 'text/json');

        let requestOptions: RequestOptions = new RequestOptions();
        requestOptions.headers = headers;

        return this._http.get(API_RFID_READER_TYPE_URL, requestOptions)
            .map(res => res.json());

    }

    getUserType(){

        let headers: Headers = new Headers();
        headers.append('Accept', 'text/json');

        let requestOptions: RequestOptions = new RequestOptions();
        requestOptions.headers = headers;

        return this._http.get(API_USER_TYPE_URL, requestOptions)
            .map(res => res.json());

    }

    getUserStatus(){

        let headers: Headers = new Headers();
        headers.append('Accept', 'text/json');

        let requestOptions: RequestOptions = new RequestOptions();
        requestOptions.headers = headers;

        return this._http.get(API_USER_STATUS_URL, requestOptions)
            .map(res => res.json());

    }

}


