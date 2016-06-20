export class UserProfile {

  constructor(
    public user_profile_id: number,
    public user_status_id: number,
    public user_type_id: number,
    public first_name: string,
    public last_name: string,
    public phone: string,
    public mobile_phone: string,
    public email: string,
    public country_id: number,
    public username: string,
    public password: string,
    public is_send_booking_email: boolean,
    public insert_user_id: number,
    public update_user_id: number,
    public entity_id: number,
    public user_group_id: number

  ) {  }

}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/