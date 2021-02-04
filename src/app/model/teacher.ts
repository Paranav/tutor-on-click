export interface ITeacher{
 id:String,
 teacherName:String,
 email:String ,
 age:number,
 gender:String,
 expYear:number,
 rate:number,
 perHourFees:number,
 joiningDate:Date,
 status:boolean,
 address:{},
 sessions:[],
 phones:[]
}

export class Teacher implements ITeacher{
    id: String= "";
    teacherName: String= "";
    email: String="";
    age: number=0;
    gender: String="";
    expYear: number=0;
    rate: number = 0 ;
    perHourFees: number = 0;
    joiningDate: Date= new Date();
    status: boolean = false;
    address: {state:String, city:String}={state:"",city:""};
    sessions:[]=[];
    phones:any;

    constructor( 
        teacherName: String= "",
        email: String="",
        age: number=0,
        gender: String="",
        expYear: number=0,
        address: {state:String, city:String}={state:"",city:""},
        phones:any=[]
        ){
      this.teacherName = teacherName;
      this.email = email;
      this.age = age;
      this.gender = gender;
      this.expYear = expYear;
      this.address = address;
      this.phones = phones;
        }
}