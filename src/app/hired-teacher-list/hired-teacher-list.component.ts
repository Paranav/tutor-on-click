import { Component, Input, OnInit } from '@angular/core';
import { ITeacher } from '../model/teacher';
import { TeacherService } from '../services/teacher.service';

@Component({
  selector: 'app-hired-teacher-list',
  templateUrl: './hired-teacher-list.component.html',
  styleUrls: ['./hired-teacher-list.component.css']
})
export class HiredTeacherListComponent implements OnInit {
  // child component of student Detail
  // it will get studentId from studentDetail
  @Input() studentId:any;

  // list of all teachers for this student
  teachers:ITeacher[] = [];
  constructor(
    private _teacherService: TeacherService,
   
  ) {  
  }

  ngOnInit(): void {
      this._teacherService.getTeachersWhereStudentId(this.studentId)
      .subscribe(data => this.teachers = data);
  }

  // it will get list of teacher for the sutdent id in student Detail
  getfrestList(){
    this._teacherService.getTeachersWhereStudentId(this.studentId)
    .subscribe(data => this.teachers = data);
  }

  // remove teacher form sutdent teacher list
  removeTeacher(teacherId:String){
    this._teacherService.removeTeacherWhereTeacherId(teacherId, this.studentId)
         .subscribe(data=>this.teachers = <ITeacher[]>data);
  }

  
}
