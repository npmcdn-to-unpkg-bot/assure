import {Component} from '@angular/core';
import {NgForm}    from '@angular/common';
import { UserProfile }    from './user-profile';
import {UserProfileService} from "./user-profile.service";
import {OnInit} from "@angular/core";
import {Router, RouteParams} from "@angular/router-deprecated";
import {REACTIVE_FORM_DIRECTIVES, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'user-profile-form',
  templateUrl: 'app/user-profile-form.component.html',
  directives: [REACTIVE_FORM_DIRECTIVES],
  providers: [UserProfileService]
})
export class UserProfileFormComponent implements OnInit{

    UserProfiles = [];
    //hospitals = [];

    submitted = false;
    //hospitalSelect = false;
    editMode:string = 'no';

    selectedUserProfile: UserProfile;

    userProfileForm = new FormGroup({
      firstName:      new FormControl(),
      lastName:       new FormControl(),
      email:          new FormControl(),
      sendEmail:      new FormControl(),
      userName:       new FormControl()
    });

    entityId:number;

    constructor(private _router:Router,
                private _routeParams: RouteParams,
                private _httpService:UserProfileService) {

    }

    ngOnInit() {
        this.entityId = +this._routeParams.get('entityId');
        this.onGetUserProfile();
    }

    goBack() {
        window.history.back();
    }


    onGetUserProfile() {

        this._httpService.getUserProfile(this.entityId, 0)
            .subscribe(
                data => this.UserProfiles = data, //JSON.stringify(data),
                error => console.log(error), //alert(error.toString()),
                () => console.log('getUserProfile Finished')
            )
    }

    onSubmit() {
        this.submitted = true;
        console.log('onSubmit = ' + JSON.stringify(this.selectedUserProfile));

        this._httpService.updateUserProfile(this.selectedUserProfile)
            .subscribe(
                data => {
                    this.editMode = 'no';
                    this.onGetUserProfile()}, //JSON.stringify(data),
                error => console.log(error), //alert(error.toString()),
                () => console.log('updateUserProfile Finished')
            )
    }

    onNewUserProfile() {
            this.selectedUserProfile = new UserProfile(0,0,0,'','','','','',0,'','',false,0,0,this.entityId, 0);
            this.editMode = 'insert';

    }

    onSelect(UserProfile: UserProfile) {
        this._httpService.getUserProfile(this.entityId, UserProfile.user_profile_id)
            .subscribe(
                data => {
                    this.selectedUserProfile = data[0];
                    this.selectedUserProfile.insert_user_id = 1;
                    this.selectedUserProfile.update_user_id = 1;
                    this.selectedUserProfile.entity_id = this.entityId;
                    this.selectedUserProfile.user_group_id = 2;
                    this.editMode = 'update';
                    console.log('onSelect = ' + JSON.stringify(data));
                },
                error => console.log(error), //alert(error.toString()),
                () => console.log('onSelect Finished')
            )
        //this.selectedUserProfile = UserProfile;
        // TODO Temp - search does not get password etc
        //this.selectedUserProfile.password = '';
        //this.selectedUserProfile.is_send_booking_email = false;
        //this.selectedUserProfile.insert_user_id = 1;
        //this.selectedUserProfile.update_user_id = 1;
        //this.editMode = 'update';

    }

    onCancelUserProfileEdit(){
        //this.selectedUserProfile = new UserProfile(0,'','',0);
        this.editMode = 'no';
    }

}
