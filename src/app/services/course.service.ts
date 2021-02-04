import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(
    private _http: HttpClient
  ) { }

  // geting course list for form data
  getCourseList(){
    let url = "http://localhost:8080/course/list";
    return this._http.get(url);
  }
}
