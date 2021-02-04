import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import { AdminService } from '../services/admin.service';
import { TeacherService } from '../services/teacher.service';

@Component({
  selector: 'app-job-applications',
  templateUrl: './job-applications.component.html',
  styleUrls: ['./job-applications.component.css']
})
export class JobApplicationsComponent implements OnInit {
  // it will contain all those new teacher who is register himself as teacher
  teachers:any;
  // where teacher register himself for new course or course
  teacherCourse:any;
  constructor(
    private _teacherService : TeacherService,
    private adminService: AdminService
  ) { }

  ngOnInit(): void {
    this._teacherService.getTeacherListWithStatusIsFalse()
        .subscribe(data=>this.teachers=data);
        this.adminService.getTeacherCourseWhereStatusIsFalse()
        .subscribe(data=>{
            this.teacherCourse = data;
            console.log(this.teacherCourse);
        })
  }

  // will confirm teacher status
  confirmStatus(id:any){
    console.log(id);
    this._teacherService.confirmTeacherStatus(id).subscribe(data=>{this.teachers = data});
  }
  // reject teacher status
  reject(id:any){
    this._teacherService.removeTeacherById(id).subscribe(data=>this.teachers = data);
  }

  // confirm teacher course status
  confirmTeacherCourseStatus(id:any){
    this.adminService.confirmTeacherCourseStatus(id).subscribe(data=>{
      console.log("confirmed"+data)
    })
  }
  // reject teacher course status 
  rejectTeacherCourse(id:any){
    this.adminService.rejectTeacherCourse(id).subscribe(data=>{
      console.log("confirmed"+data);
    })
  }

}
