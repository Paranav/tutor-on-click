import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmailService } from '../services/email.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  emailData:any;

  constructor(
    private emailService: EmailService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(messageData:NgForm){
    console.log("inside on submit")
    this.emailData = messageData.value;
    this.emailService.sendEmail(this.emailData)
         .subscribe(data=>console.log(data));
  }

}
