import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-addStudent',
  templateUrl: './addStudent.component.html',
  styleUrls: ['./addStudent.component.css']
})
export class AddStudentComponent implements OnInit {
  id:String="";
  // getting user data as query param from user component 
  user:any;
  constructor(
    private route: ActivatedRoute,
    private _userService:UserService,
    private router:Router
    ) { }

  ngOnInit(): void {
    let user:string = <string>localStorage.getItem('user')
    this.user = JSON.parse(user);
  }

  onSubmit(studentData:NgForm){
    var student= studentData.value;
     this._userService.addStudent(this.user.id, student)
         .subscribe((data)=>{
          // ======look into this section need to change
          // == i think no need to calll user component again
           this.router.navigate(['user'],{queryParams:this.user});
         }); 
  }
}
