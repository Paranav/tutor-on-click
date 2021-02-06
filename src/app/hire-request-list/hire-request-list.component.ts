import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-hire-request-list',
  templateUrl: './hire-request-list.component.html',
  styleUrls: ['./hire-request-list.component.css']
})
export class HireRequestListComponent implements OnInit {

  // it containe list which student requested for which teacher
  studentTeacher:any;
  constructor(
    private _adminService: AdminService
  ) { 
  }
  ngOnInit(): void {
    this._adminService.getAllNewStudentTeacher().subscribe(data=>{this.studentTeacher = data
      console.log(data)
    });
 
  }

  // admin will confirm the requested pair of student and teacher
  conformStatus(id:String){
    this._adminService.confirmStudentTeacherStatus(id)
    .subscribe(data=>this.studentTeacher = data);

  }

}
