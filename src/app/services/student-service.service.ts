import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IStudent } from '../model/student';
import { TeacherService } from './teacher.service';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  private url1 = "http://localhost:8080/student/list";
  private url2 = "http://localhost:8080/student/";
  private url3 = "http://localhost:8080/student/user/";

  constructor(
    private http: HttpClient,
    private teacherService: TeacherService
  ) { }

  // getStudentDetail(): Observable<IStudent[]> {
  //   return this.http.get<IStudent[]>(this.url1);
  // }

  // add new  student to student table
  // saveStudent(student: {}) {
  //   return this.http.post(this.url2, student);
  // }

 // getting student by id from student table
  getStudentById(id: String) {
    var temp_url2 = this.url2 + "" + id;
    return this.http.get<IStudent>(temp_url2);
  }

  // getting student by user id i.e. all those student who is associated with user havind id 
  getStudentByUserId(id: String) {
    var temp_url = this.url3 + "" + id;
    return this.http.get(temp_url);
  }

  //add teacher for student as per student request
  async addTeacher(teacherId: String, StudentId: String, courseName: String) {
    let url = "http://localhost:8080/student/addTeacher/" + StudentId;
    var teacherCourse;
    await this.teacherService.getTeacherCourse(teacherId, courseName)
      .subscribe(data => {
        this.http.post(url, data).subscribe(st => { return st });
      });

  }

}
