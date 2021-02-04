import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
studentTeacher:any;
showHireRequest:boolean = false;
showApplications:boolean = false;
  constructor(
    
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  hireRequest(){
    if(this.showHireRequest === false){
      this.showHireRequest = true;
    }
    else {
      this.showHireRequest = false;
    }
  }
  newApplication(){
    if(this.showApplications === false){
      this.showApplications = true;
    }
    else {
      this.showApplications = false;
    }
  }

}
