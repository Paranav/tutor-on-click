import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from '../model/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  // user data from login component query param
  user: any;
  imageData: any;
  showStudentSection: boolean = false;
  showTeacherSection: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { console.log("user component") }
  ngOnInit(): void {
   let user:string = <string>localStorage.getItem('user')
    this.user = JSON.parse(user);
    this.imageData = `data:${this.user.ppType};base64,${this.user.pp}`;
  }

  // add student in user list
  addStudent() {
    this.router.navigate(['addStudent'], { relativeTo: this.route, queryParams: this.user, replaceUrl: true });
  }
  // to call student list component where it will show all those student who is register through this user
  getStudentList() {
    this.router.navigate(['user/studentList'], { queryParams: this.user, replaceUrl: true })
  }


  toggleSS() {
    if (this.showStudentSection === false) {
      this.showStudentSection = true;
      this.showTeacherSection = false;
    }
    else {
      this.showStudentSection = false;
    }
  }

  toggleTS() {
    if (this.showTeacherSection === false) {
      this.showTeacherSection = true;
      this.showStudentSection = false;
    }
    else {
      this.showTeacherSection = false;
    }
  }

}
