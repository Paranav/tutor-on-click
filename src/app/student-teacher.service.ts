import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentTeacherService {

  constructor(
    private http : HttpClient
  ) { }

  getTeacherCourse(teacherId:String, courseName:String){
    let url = "http://localhost:8080/teacherCourse/"+teacherId+"/"+courseName;
    return this.http.get(url);
  }
   async addTeacher(teacherId:String, StudentId:String, courseName:String){
    let url = "http://localhost:8080/student/addTeacher/"+StudentId;
    var teacherCourse ;
    await this.getTeacherCourse(teacherId, courseName)
    .subscribe(data=>{
      this.http.post(url, data).subscribe(st=> {return st});
    });
  
  }

  getAllNewStudentTeacher(){
    let url = "http://localhost:8080/studentTeacher/list";
    return this.http.get(url);
  }

  confirmStatus(id:String){
    let url = "http://localhost:8080/studentTeacher/updatestatus/"+id;
    return this.http.get(url);
  }

}
