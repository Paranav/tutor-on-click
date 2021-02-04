import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { TeacherService } from '../teacher.service';
import { UserService } from '../user.service';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthGuardService implements CanActivate {

  constructor(
    private _teacherService: TeacherService,
    private _adminService: AdminService,
    private _userService : UserService,
    private router: Router
  ) { }
  canActivate() {
    if(this._teacherService.loggedIn()){
      return this.router.navigate(["/teacher"]);
      return false;
    }
    
    else if(this._userService.loggedIn()){
      return this.router.navigate(["/user"]);
      return false;
    }

    else if(this._adminService.loggedIn()){
      return this.router.navigate(["/admin"]);
      return false;
    }
    else{
      console.log("in here");
      return true;
    }
  }
}
