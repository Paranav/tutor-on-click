import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url } from 'inspector';
import { Observable } from 'rxjs';
import { IStudent, Student } from '../model/student';
import { IUser } from '../model/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url1 = "http://localhost:8080/user/list";
  private url2 = "http://localhost:8080/user/";
  private url3 = "http://localhost:8080/user/veryfication";

  constructor(private http: HttpClient) { }
  // getUserDetail():Observable<IUser>{
  //   return this.http.get<IUser>(this.url1);
  // }

  // getting user by id
  getUserById(id:String){
    var temp_url2 = "http://localhost:8080/user/"+""+id;
    return this.http.get<IUser>(temp_url2);
  }

  // save user in user table
  saveUser(user:IUser, pp?:any){
    var url1= "http://localhost:8080/user/withPP";
    let url = "http://localhost:8080/user";
    const uploadData = new FormData();
    if(!!pp){
      uploadData.append("pp", pp);
      uploadData.append("user", JSON.stringify(user));
      return this.http.post(url1, uploadData, {responseType:"text"});
    }
    return this.http.post(url, user, {responseType: 'text'});
  }

  // veryfing user at time of loging
  verfyUser(user:IUser){
    return this.http.post<IUser>(this.url3, user);
  }

  // add new student to user
  addStudent(id:String, studentData:any){
    const uploadData = new FormData();
    let address = {city: studentData.city, state:studentData.state} 
    let phone = [];
    phone.push(studentData.phone);
    let student:IStudent = new Student(studentData.studentName, studentData.dob, studentData.email, studentData.gender, address, phone);
    uploadData.append("student", JSON.stringify(student));
    var url = this.url2+id+"/addStudent";
    return this.http.put(url, uploadData);
  }

  // to check wether user is loggedIn or Not
  loggedIn(){
    return !!localStorage.getItem("user");
  }
}
