import { Address } from "./address";

export interface IStudent{
    id:String,
    studentName:String,
    dob:Date,
    email:String,
    gender:String,
    address:any,
    phone:any,
    courses:any,
    teachers:any,
    userName:any
}

export class Student implements IStudent {
    id:String="";
    studentName:String;
    dob:Date;
    email:String;
    gender:String;
    address:any;
    phone:any;
    courses:any;
    teachers:any;
    userName:any;
    constructor(
        studentName:String,
        dob:Date,
        email:String,
        gender:String,
        address:any,
        phone:any
    ){
        this.studentName = studentName;
        this.dob = dob;
        this.email = email;
        this.gender = gender;
        this.phone = phone;
        this.gender = gender;
        this.address = address;
    }
}