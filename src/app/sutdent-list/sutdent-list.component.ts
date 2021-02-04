import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentServiceService } from '../services/student-service.service';

@Component({
  selector: 'app-sutdent-list',
  templateUrl: './sutdent-list.component.html',
  styleUrls: ['./sutdent-list.component.css']
})
export class SutdentListComponent implements OnInit {
  // user data from query param via UserComponent
  user:any;
  students:any;
  constructor(
    private route : ActivatedRoute,
    private router: Router,
    private _studentService: StudentServiceService
  ) { 
    console.log("inside student list const")
  }

  ngOnInit(): void {
    let user:string = <string>localStorage.getItem('user')
    this.user = JSON.parse(user);
    // fetching student list related user
    this._studentService.getStudentByUserId(this.user.id)
        .subscribe(data=>{this.students = data;
        });  
  }
  getStudentDetail(id:String){   
    // === no need to rout simeply made sudentDetail as child component of studentLIst  
        this.router.navigate(['user/studentDetail'],{queryParams:{id:id}, replaceUrl:true});
  }

}
