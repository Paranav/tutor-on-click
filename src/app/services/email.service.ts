import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {


  constructor(
    private _http: HttpClient
  ) { }

// send email
  sendEmail(emailData: any) {
    console.log("inside send Email "+emailData)
    let url = "http://localhost:8080/email/sendEmail";
    const uploadData = new FormData();
    uploadData.append("emailData", JSON.stringify(emailData));
    return this._http.post(url, uploadData);
  }
}
