import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { TeacherService } from '../teacher.service';

@Injectable({
  providedIn: 'root'
})
export class TeacherAuthGuardService implements CanActivate {

  constructor(
    private _teacherService: TeacherService,
    private router: Router
  ) { }
  canActivate() {
    var role;
    role = <string>localStorage.getItem("role");
    if (this._teacherService.loggedIn()) {
      return true;
    }
    else if (!!role) {
      if (role == "STUDENT") {
        this.router.navigate(["/user"]);    
      }
      else if (role == "ADMIN") {
        this.router.navigate(["/admin"]);
      }
      return false;
    }
    else {
      this.router.navigate(["/login"]);
      return false;
    }
  }
}
