import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../services/course.service';
import { ICourse } from '../model/course';
import { ITeacher, Teacher } from '../model/teacher';
import { TeacherService } from '../services/teacher.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css']
})
export class AddTeacherComponent implements OnInit {
  //user form data
  @Input() user: any;
  //user binary data (profile picture)
  @Input() pp: any;
  //this variable stores all the courses available for which teacher can register as soon as 
  // component will be loaded
  courses: any;
  //this variable stores the teacher data from form before sending
  teacher: any;
  // this will store binary file (user - resume)
  selectedFiles: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _teacherservice: TeacherService,
    private _courseService: CourseService,
    private _userService: UserService
  ) { }
  ngOnInit(): void {
    this._courseService.getCourseList().subscribe(data => this.courses = data);
  }
  // load binary data(resume) to variable selectedFile
  onFileChanged(event: any) {
    console.log(event);
    this.selectedFiles = event.target.files[0];
  }

  // teacher form data getting collected and send to the data base using diff http service module
  // finally redirected to login component

  onSubmit(teacherData: NgForm) {
    let teacher1 = teacherData.value;
    console.log("courseId: " + teacher1.courseId);
    let phone = [];
    phone.push(teacher1.phone);
    let course: any;
    this.courses.forEach((element: ICourse) => {
      console.log(element.id);
      if (element.id == teacher1.courseId) {
        console.log("ele :" + element);
        course = element;
      }
    })
    this.user.role = "USER";

    // teacher object 
    let teacher: ITeacher = new Teacher(
      this.user.name,
      this.user.email,
      teacher1.age,
      this.user.gender,
      teacher1.expYear,
      { state: teacher1.state, city: teacher1.city },
      phone
    );

    // user service to save user data and teacher data via teacherService
    this._userService.saveUser(this.user, this.pp).subscribe(data => {
      this.user = JSON.parse(data);
      this._teacherservice.saveTeacher(this.selectedFiles, teacher, this.user.id)
        .subscribe(data1 => {
          let teacher = JSON.parse(data1);
          console.log(teacher.id);
          this._teacherservice.addCourseToTeacher(teacher.id, course)
            .subscribe(res => {
              this.router.navigate(["login"]);
            })
        });
    })

  }
}
