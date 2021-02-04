import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from '../model/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  user:any;
  // this section include binary file porfile pic of user if any
  pp:any;
  showUserForm:boolean = true;
  showTeacherForm:boolean = false;
  constructor(
    private _userService: UserService,
    private rouer: Router
    ) {

      console.log("inside usr registration");
     }

  ngOnInit(): void {
  }
// this function will take profile pic (binary data from form and store it in pp)
  onSelect(event:any){
    this.pp = event.target.files[0];
  }

  /* this method will collect data from user form space and will check for wether user are registering
       for teacher porfile or student profile 
    if teacher porfile then it will hide user form and show teacher form and also pass user form data to addTeacger
    documnt via input */
  collectUserData(formvalue:NgForm){
    var user = formvalue.value;
    if(user.profile.match("TEACHER")){
      this.user = user;
      this.user.pp= undefined;
      this.showUserForm = false;
      this.showTeacherForm = true;
    }
    else{
     user.role ="USER";
     this.user = user;
     this.user.pp = undefined;
    this._userService.saveUser(this.user, this.pp)
    .subscribe(data=>console.log(data));
    this.rouer.navigate(["login"]);
    }
  }
}
