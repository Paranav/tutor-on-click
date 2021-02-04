import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITeacher } from '../model/teacher';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {



  baseUrl: String = "http://localhost:8080/teacherCourse/teacher?";
  constructor(
    private _http: HttpClient
  ) { }

  // to search teacher for mentioned subject
  getTeachersBySubjectAndAdd(subject: String, state: String, city: String): Observable<ITeacher[]> {
    let url = this.baseUrl + "courseName=" + subject + "&state=" + state + "&city=" + city;
    return this._http.get<ITeacher[]>(url);
  }

  // all teacher assign to sudent with sudent id
  getTeachersWhereStudentId(studentId: String): Observable<ITeacher[]> {
    let url = "http://localhost:8080/studentTeacher/student/" + studentId;
    return this._http.get<ITeacher[]>(url);
  }

  // remove teacher student teacher -------- reject
  removeTeacherWhereTeacherId(teacherId: String, studentId: String) {
    let url = "http://localhost:8080/studentTeacher/removeStudentTeacher/" + teacherId + "/" + studentId;
    return this._http.get(url);
  }

  // save teacher in teacher table associated with user ..... used in addteacher component
  saveTeacher(selectedFiles: any, teacherData: any, userId: any) {
    const uploadData = new FormData();
    uploadData.append("doc", selectedFiles);
    uploadData.append("teacherData", JSON.stringify(teacherData));
    let url = "http://localhost:8080/user/teacher/" + userId;
    return this._http.post(url, uploadData, { responseType: 'text' });
  }

  // at time of registration or any time add new skill to teacher with this method
  addCourseToTeacher(teacherId: any, course: any) {
    let uploadData = new FormData();
    uploadData.append("course", JSON.stringify(course));
    let url = "http://localhost:8080/teacher/addCourse/" + teacherId;
    return this._http.post(url, uploadData, { responseType: 'text' });
  }

  // get list of teacher who is associalted with this user id
  getTeachersByUserId(userId: any) {
    console.log("iside " + userId)
    let url = "http://localhost:8080/teacher/list/user/" + userId;
    return this._http.get(url);
  }

  // find teacherById
  // findTeacherById(id: any) {
  //   let url = "http://localhost:8080/teacher/" + id;
  //   return this._http.get(url);
  // }

  // to check new application for teacher
  getTeacherListWithStatusIsFalse() {
    let url = "http://localhost:8080/teacher/falseStatus";
    return this._http.get(url);
  }

  //confirm new teacher as teacher
  confirmTeacherStatus(teacherId: any) {
    console.log(teacherId);
    let url = "http://localhost:8080/teacher/confirmTeacher/" + teacherId;
    return this._http.get(url);
  }

  // remove new teacher form database
  removeTeacherById(teacherId: any) {
    let url = "http://localhost:8080/teacher/remove/" + teacherId;
    return this._http.get(url);
  }

  //student list associated with teacher
  // teacher can check their sutdent 
  getStudentList(teacherId: any) {
    let url = "http://localhost:8080/studentTeacher/studentList/" + teacherId;
    return this._http.get(url);
  }
  getStudentListNewJob(teacherId: any) {
    let url = "http://localhost:8080/studentTeacher/studentList/newJob/" + teacherId;
    return this._http.get(url);
  }

  // remove studentTeacher pair from studenTeacherlist
  removeStudent(studentId: any, teacherId: any) {
    let url = "http://localhost:8080/sutdentTeacher/removeStudent" + studentId + "/" + teacherId;
    return this._http.delete(url);
  }

  // to get session arranged for teacher
  //== not yet implemented
  getAllSessions(teacherId: any) {
    let url = "http://localhost:8080/session/whereTeacherId/" + teacherId;
    return this._http.get(url);
  }

  //list of teacher course to add in student-teacher table
  getTeacherCourse(teacherId: String, courseName: String) {
    let url = "http://localhost:8080/teacherCourse/" + teacherId + "/" + courseName;
    return this._http.get(url);
  }

loggedIn(){
    return !!(localStorage.getItem("user") && <string>localStorage.getItem("role")== "TEACHER");
  }
}
