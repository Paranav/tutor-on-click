import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITeacher } from './model/teacher';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  
 
 
  baseUrl:String="http://localhost:8080/teacherCourse/teacher?";
  constructor(
    private _http: HttpClient
  ) { }

  getTeachersBySubjectAndAdd(subject:String, state:String, city:String):Observable<ITeacher[]>{
    let url = this.baseUrl+"courseName="+subject+"&state="+state+"&city="+city; 
    return this._http.get<ITeacher[]>(url);
  }
  getTeachersWhereStudentId(id:String):Observable<ITeacher[]>{
    let url="http://localhost:8080/studentTeacher/student/"+id;
    return this._http.get<ITeacher[]>(url);
  }
  removeTeacherWhereTeacherId(teacherId: String, studentId: String) {
   
    let url = "http://localhost:8080/studentTeacher/remove/teacher/"+teacherId+"/"+studentId;
    return this._http.get<String>(url);
  }
  saveTeacher(selectedFiles:any,teacherData:any, id:any){
    const uploadData = new FormData();
    uploadData.append("doc", selectedFiles);
    uploadData.append("teacherData", JSON.stringify(teacherData));
    let url = "http://localhost:8080/user/teacher/"+id;
    return this._http.post(url, uploadData, {responseType: 'text'});
  }
  addCourseToTeacher(id: any, course: any) {
    let uploadData = new FormData();
    uploadData.append("course", JSON.stringify(course));
    let url= "http://localhost:8080/teacher/addCourse/"+id;
    return this._http.post(url,uploadData, {responseType: 'text'});
  }

  getTeachersByUserId(id:any){
    console.log("iside "+ id)
    let url = "http://localhost:8080/teacher/list/user/"+id;
    return this._http.get(url);
  }
  findTeacherById(id:any){
    let url = "http://localhost:8080/teacher/"+id;
    return this._http.get(url);
  }

  getTeacherListWithStatusIsFalse(){
    let url= "http://localhost:8080/teacher/falseStatus";
    return this._http.get(url);
  }

  confirmTeacherStatus(id:any){
    console.log(id);
    let url = "http://localhost:8080/teacher/confirmTeacher/"+id;
    return this._http.get(url);
  }

  removeTeacherById(id:any){
    let url = "http://localhost:8080/teacher/remove/"+id;
    return this._http.get(url);
  }

  getStudentList(teacherId:any){
    let url = "http://localhost:8080/studentTeacher/studentList/"+teacherId;
    return this._http.get(url);
  }

  removeStudent(studentId:any, teacherId:any){
    let url = "http://localhost:8080/sutdentTeacher/removeStudent"+studentId+"/"+teacherId;
    return this._http.delete(url);
  }

  getAllSessions(teacherId:any) {
    let url = "http://localhost:8080/session/whereTeacherId/"+teacherId;
    return this._http.get(url);
  }

}
