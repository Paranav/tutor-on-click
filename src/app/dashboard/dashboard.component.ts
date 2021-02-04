import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { element } from 'protractor';
import { IStudent } from '../model/student';
import { StudentServiceService } from '../services/student-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  // saveStudent:IStudent=<IStudent>{};
  // students:IStudent[]=[];
  // student1:IStudent=<IStudent>{};

  constructor(private _studentService: StudentServiceService){ }

  // ngOnInit(): void {
  // }
  // getStudentsDetail(){
  //   this._studentService.getStudentDetail()
  //   .subscribe(data=>this.students=data);
  //   console.log(this.students);
  // }
  // onSubmitId(formdata1:NgForm){
  //   this._studentService.getStudentById(formdata1.value.id)
  //         .subscribe(data=>this.student1 = data);
  // }
  // onSubmit(formdata2:NgForm){
  //   var student: IStudent = formdata2.value;
  //   this._studentService.saveStudent(student)
  //        .subscribe(data=>this.saveStudent = <IStudent>data);
  // }
}
