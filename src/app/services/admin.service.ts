import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

 

  constructor(
    private http : HttpClient
    ) { }

// it will fetch teacher course data from teacherCourse table where teacherCourse status is null
// i.e. new teacher
    getTeacherCourseWhereStatusIsFalse(){
      let url = "http://localhost:8080/teacherCourse/newList"
      return this.http.get(url);
    }
// to make status of teachercourse = true
// id is teacherCourse id
    confirmTeacherCourseStatus(id:any) {
      let url = "http://localhost:8080/teacherCourse/confirmStatus/"+id;
      return this.http.get(url);
    }
// it will remove data of register teacher-course form teacherCourse table
// id is teacher course id
    rejectTeacherCourse(id: any) {
     let url = "http://localhost:8080/teacherCourse/rejectStatus/"+id;
     return this.http.get(url);
    }
// confirm teacher for student who requsted for this teacher in studenTeacher table of database
// id: studendTeacher unique id
    confirmStudentTeacherStatus(id:String){
      let url = "http://localhost:8080/studentTeacher/updatestatus/"+id;
      return this.http.get(url);
    }
// get all studentTeacher from student Teacher table where satus = false i.e. new request
    getAllNewStudentTeacher(){
      let url = "http://localhost:8080/studentTeacher/list";
      return this.http.get(url);
    }

// admin loging
loggedIn(){
  return !!(localStorage.getItem("user") && <string>localStorage.getItem("role")== "ADMIN");
}
}
