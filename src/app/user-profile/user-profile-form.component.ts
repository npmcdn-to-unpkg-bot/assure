import {Component} from '@angular/core';
import { UserProfile }    from './user-profile';
import {UserProfileService} from "./user-profile.service";
import {OnInit} from "@angular/core";
import {Router, ActivatedRoute } from "@angular/router";
import {REACTIVE_FORM_DIRECTIVES, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'user-profile-form',
  templateUrl: 'app/user-profile/user-profile-form.component.html',
  directives: [REACTIVE_FORM_DIRECTIVES],
  providers: [UserProfileService]
})
export class UserProfileFormComponent implements OnInit{

    userProfiles = [];
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

  entityId:number; //=23;
  private sub: any;


  constructor(private route: ActivatedRoute,
              private router:Router,
              private httpService:UserProfileService) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.entityId = +params['entityId']; // (+) converts string 'id' to a number
      this.httpService.getUserProfile(this.entityId, 0)
        .subscribe(
          data => {this.userProfiles = data;
            console.log('getUserProfile data');
            //JSON.stringify(data)
          },
          error => console.log(error), //alert(error.toString()),
          () => console.log('getUserProfile Finished')
        )
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onGetUserProfile() {

      this.httpService.getUserProfile(this.entityId, 0)
          .subscribe(
              data => this.userProfiles = data, //JSON.stringify(data),
              error => console.log(error), //alert(error.toString()),
              () => console.log('getUserProfile Finished')
          )
  }

  onSubmit() {
      this.submitted = true;
      console.log('onSubmit = ' + JSON.stringify(this.selectedUserProfile));

      this.httpService.updateUserProfile(this.selectedUserProfile)
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
      this.httpService.getUserProfile(this.entityId, UserProfile.user_profile_id)
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
