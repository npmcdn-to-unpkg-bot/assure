/**
 * Created by Tony Sykes on 25-Jan-2016.
 */
import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {UserProfile} from "./user-profile";
import {API_USER_PROFILE_URL} from "./app.config";

@Injectable()
export class UserProfileService {
    constructor (private _http: Http) {}

    getUserProfile(entityId:number, userProfileId:number){

        let headers: Headers = new Headers();
        headers.append('Accept', 'text/json');

        let requestOptions: RequestOptions = new RequestOptions();
        requestOptions.headers = headers;

        let url:string = `${API_USER_PROFILE_URL}/searchParams?entityId=${entityId}&userProfileId=${userProfileId}`;
        //let url:string = this.urlUserProfileService + '/searchParams?entityId=' + entityId + '&userProfileId=' + userProfileId;
        console.log(url);

        return this._http.get(url, requestOptions)
            .map(res => res.json()); //console.log(res)); //res.json()

    }

    updateUserProfile(userProfile:UserProfile){

        let headers: Headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');

        let requestOptions: RequestOptions = new RequestOptions();
        requestOptions.headers = headers;

        let body: string = JSON.stringify(userProfile);

        //console.log(body);

        return this._http.post(API_USER_PROFILE_URL, body, requestOptions)
            .map(res => res.json()); //console.log(res)); //

    }
}


