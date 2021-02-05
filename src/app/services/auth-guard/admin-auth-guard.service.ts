import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { verify } from 'crypto';
import { Observable } from 'rxjs';
import { AdminService } from '../admin.service';


@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate {

  constructor(
    private _adminService: AdminService,
    private router: Router
  ) { }
  canActivate() {
    var role;
    role = <string>localStorage.getItem("role");
    if (this._adminService.loggedIn()) {
      return true;
    }
    else if(!!role) {
      if (role == "STUDENT") {
        this.router.navigate(["/user"]);    
      }
      else if (role == "TEACHER") {
        this.router.navigate(["/teacher"]);
      }
      return false;
    }
    else {
      this.router.navigate(["/login"]);
      return false;
    }
  }

}