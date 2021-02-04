import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  loggedIn:boolean = !!localStorage.getItem("user");

  constructor(
    private router: Router
  ) { }

  ngOnInit(
    
  ): void {
  }
 
  logOut(){
    localStorage.removeItem("user")
    this.router.navigate(["/dashboard"])
  }

  contactUs(){
    this.router.navigate(["/contactUs"])
  }
  

}
