import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { count } from 'console';
import { StudentServiceService } from '../services/student-service.service';
import { TeacherService } from '../services/teacher.service';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
  // store sutent with respective id
  // == can take sudent_id from input making student detail component as child component of student list
  student:any;
  // store list of teacher for selected subj
  teachers:any;
  displayteachers:any;
  indexCount = 1;
  showHiredTeacher:any = false;
  showTeacherList:any = true;
  searcheSubject:String= new String();
  constructor(
    private router: Router,
    private route:ActivatedRoute,
    private _studentService: StudentServiceService,
    private _teacherService: TeacherService
  ) { 
    console.log("inside studentDetail constr")
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(param=>{
      this._studentService.getStudentById(param.id).subscribe(data=>{this.student = data});
    })
  }

  // will find all teachers for the mentioned subject with help of teacherService
  getTeachers(formref:NgForm){
    var subject = formref.value.subject;
    this.searcheSubject = subject;
    
    this._teacherService.getTeachersBySubjectAndAdd(subject, this.student.location.state,this.student.location.city)
          .subscribe(data=>{this.teachers = data;
          this.displayteachers = [this.teachers[0], this.teachers[1]];
          this.indexCount = 1;
          });
          this.showTeacherList = true;
          this.showHiredTeacher = false;
  }

  nextOnlist(){
    this.indexCount = this.indexCount+2;
    this.displayteachers = [];
    for(let i = this.indexCount-1; i<=this.indexCount && i<this.teachers.length; i++){
      this.displayteachers.push(this.teachers[i]);
    }
  }

  previous(){
    this.indexCount = this.indexCount-4;
    this.displayteachers = [];
    for(let i = this.indexCount+1; i<=this.indexCount+2 && i>=0; i++){
      this.displayteachers.push(this.teachers[i]);
    }
  }

  // add teacher to student
  hireTeacher(teacherId:String){
   this._studentService.addTeacher(teacherId, this.student.id, this.searcheSubject)
  }

  HiredTeacher(){
    this.showHiredTeacher = true;
    this.showTeacherList =false;
  }

}
