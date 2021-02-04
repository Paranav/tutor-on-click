import { Component, ViewEncapsulation } from '@angular/core';
import { StudentServiceService } from './services/student-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class AppComponent {
  title = 'Welcome to tutorserach';
  serviceName="";
  navStyle:{} = {"display": "flex", "background-color": "aquamarine", "justify-content": "flex-end"};
  constructor(private service: StudentServiceService){

  }
  ngOnInit(){
  }
  
}
