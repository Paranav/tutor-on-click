import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IUser } from '../model/user';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any;
  loginErrorMessage: any;
  constructor(
    private _userService: UserService,
    private router: Router
  ) {
    console.log("inside login const")
  }

  ngOnInit(): void {
  }
  onSubmit(formData: NgForm) {
    var user: IUser = formData.value;
    this._userService.verfyUser(user)
      .subscribe((data) => {
        this.user = <IUser>data
        if (this.user != null) {
          console.log(this.user);
          if (this.user.role.match("ADMIN")) {
            localStorage.setItem("user", JSON.stringify(this.user));
            localStorage.setItem("role", "ADMIN");
            this.router.navigate(["admin"], { queryParams: this.user });
          }
          else {
            if (this.user.profile.match("TEACHER")) {
              localStorage.setItem("user", JSON.stringify(this.user));
              localStorage.setItem("role", "TEACHER");
              this.router.navigate(["teacher"], { queryParams: this.user })
            }
            else {
              localStorage.setItem("user", JSON.stringify(this.user));
              localStorage.setItem("role", "STUDENT");
              this.router.navigate(["user"], { queryParams: this.user })
            }
          }
        }
      },(error)=>{
          this.loginErrorMessage = error;
          console.log(error);
      });

  }
}
