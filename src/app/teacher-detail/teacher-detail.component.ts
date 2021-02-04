import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IStudent } from '../model/student';
import { StudentServiceService } from '../services/student-service.service';
import { TeacherService } from '../services/teacher.service';

@Component({
  selector: 'app-teacher-detail',
  templateUrl: './teacher-detail.component.html',
  styleUrls: ['./teacher-detail.component.css']
})
export class TeacherDetailComponent implements OnInit {
  user:any;
  teacher:any;
  students:any;
  student:IStudent = <IStudent>{};
  showStudentList = false;
  showNewJob = false;
  newJob:any;
  imageData:any;
  constructor(
    private route:ActivatedRoute,
    private router: Router,
    private _teacherService: TeacherService,
    private _studentService: StudentServiceService,
    // private _sessionService: SessionService
  ) { }
  ngOnInit(): void {
    this.route.queryParams.subscribe(data=>{
      let user:string = <string>localStorage.getItem('user')
      this.user = JSON.parse(user);
      this.imageData = `data:${this.user.ppType};base64,${this.user.pp}`;
      this._teacherService.getTeachersByUserId(this.user.id)
      .subscribe(data =>{this.teacher = data; });
    });
  }

  registerForCourse(course:any){

  }
  seeJobs(){

  }
  getSessionsList(){
    this._teacherService.getAllSessions(this.teacher[0].id).subscribe(data=>{}, error=>{
      console.log("error message")
    });
  }
  removeStduent(studentId:any){
    this._teacherService.removeStudent(studentId, this.teacher[0].id).subscribe(data=>{}, error=>{
      console.log("error message")
    });
  }
  rejectJob(){

  }

  // detail of particular student from least
  studentDetail(studentId:any){
   this._studentService.getStudentById(studentId).subscribe(data=>{
     this.student = data;
   }, error=>{
     console.log("error message")
   })
  }

// list of all student associated with teacher this teacher
  studentList(){
    this._teacherService.getStudentList(this.teacher[0].id).subscribe(data=>{
      this.students = data;
      this.showNewJob = false;
      this.showStudentList = true;
    }, error=>{
      console.log("error message")
    })
  }

  //get new request for the teacher with teacher id passed in method
  studentListNewJob(){
    this._teacherService.getStudentListNewJob(this.teacher[0].id).subscribe(data=>{
      this.newJob = data;
      this.showNewJob = true;
      this.showStudentList = false;
    }, error=>{
      console.log("error message")
    })
  }

  getNotice(){

  }
}
