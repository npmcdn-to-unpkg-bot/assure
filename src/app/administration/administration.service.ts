/**
 * Created by Tony Sykes on 25-Jan-2016.
 */
import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {Headers} from "@angular/http";
import {RequestOptions} from "@angular/http";
import {API_ENTITY_URL} from "../app.config";


@Injectable()
export class AdministrationService {
    constructor (private http: Http) {}

    getEntity(){

        let headers: Headers = new Headers();
        headers.append('Accept', 'text/json');

        let requestOptions: RequestOptions = new RequestOptions();
        requestOptions.headers = headers;

        let url:string = `${API_ENTITY_URL}`;
        console.log(url);

        return this.http.get(url, requestOptions)
          .map(res => res.json()); //console.log(res)); //res.json()

    }

}


