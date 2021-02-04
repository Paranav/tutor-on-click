import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

 

  constructor(
    private http : HttpClient
    ) { }


    getTeacherCourseWhereStatusIsFalse(){
      let url = "http://localhost:8080/teacherCourse/newList"
      return this.http.get(url);
    }

    confirmTeacherCourseStatus(id:any) {
      let url = "http://localhost:8080/teacherCourse/confirmStatus/"+id;
      return this.http.get(url);
    }

    rejectTeacherCourse(id: any) {
     let url = "http://localhost:8080/teacherCourse/rejectStatus/"+id;
     return this.http.get(url);
    }
}
