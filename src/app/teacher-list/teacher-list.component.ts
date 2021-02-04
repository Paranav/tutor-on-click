import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeacherService } from '../services/teacher.service';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit {
  user:any;
  teachers:any;
  constructor(
    private route:ActivatedRoute,
    private router: Router,
    private _service: TeacherService
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(data=>{
      this.user = data;
      this._service.getTeachersByUserId(this.user.id)
      .subscribe(data1=>{this.teachers = data1;
        console.log(data1);}
        );
      });
  }

  showTeacherDetail(id:any){
    this.router.navigate(['user/teacherDetail'],{queryParams:{id:id}, replaceUrl:true})
  }

}
