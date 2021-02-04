import {IStudent} from "./student"
export interface IUser{
    id:number,
    name: String,
    email:String,
    password:String,
    gender: String,
    role: String
    students:IStudent[],
    teachers:[],
    profile:String
}