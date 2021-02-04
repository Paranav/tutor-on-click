import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IStudent } from './model/student';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  private url1 = "http://localhost:8080/student/list";
  private url2 = "http://localhost:8080/student/";
  private url3 = "http://localhost:8080/student/user/";

  constructor(private http: HttpClient) { }
  
  getStudentDetail():Observable<IStudent[]>{
    return this.http.get<IStudent[]>(this.url1);
  }
  getStudentById(id:String){
    var temp_url2 = this.url2+""+id;
    return this.http.get<IStudent>(temp_url2);
  }
  saveStudent(student:{}){
    return this.http.post(this.url2, student);
  }
  getStudentByUserId(id:String){
    var temp_url = this.url3+""+id;
    return this.http.get(temp_url);
  }

}
