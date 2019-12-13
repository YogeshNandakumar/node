import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppserviceService } from '../appservice.service';
import { FileUploader } from 'ng2-file-upload';
// import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginObj:any={
    username: "",
    password: ""
  };

  array = ["a b c d e f g h i j k l m n o p q r s t u v w x y z a b c d e f g h i j k l"];
  count = 0;
  string = "cat dog mouse cat snake sss yyy nnn jjjj kkkk sssss cat snake";
  a1 = [1,2,3,4,5,6];
  a2 = [3,5,4];

  farray = [1, 2, 6, 10, 14, 16, 18, 7];
  length = 0;

  sumArray = [1,2,3,6,7,4,8,4];
  sequenceArray = [1,1,2,3,5,5,7,9,9,9];
  tempArray=[];
  // public uploader:FileUploader = new FileUploader({
  //   url:"http://localhost:80/api/uploads",
  //   itemAlias:'image'
  // })
  eventArray = [
    {id:218, st:60, et:150},
    {id:219, st:540, et:570},
    {id:220, st:555, et:600},
    {id:221, st:585, et:660}
  ]

  constructor(
    private router:Router,
    private appService:AppserviceService,
    // private toastr: ToastrService
    // public fileUploader: FileUploader
  ) { }

  ngOnInit() {
    // console.log("it is array", this.array);
    // console.log("it is array length", this.array[0].length, this.array[0][2]);
    // for(let i=0; i< this.array[0].length; i++){
    //   if(this.array[0][i] != ' '){
    //     this.count ++;
    //     if(this.count > 25){
    //       break;
    //     }
    //   }
    // }
    // console.log("it is count", this.count);
    
    // let words = this.string.split(" ");
    // console.log("these are words", words);
    // for(let i=0;i<words.length;i++){
    //   let count = 1;
    //   for(let j=i+1; j<words.length;j++){
    //     if(words[i] == words[j]){
    //       count++;
    //       words[j] = '0';
    //     }
    //   }
    //   if(count > 1 && words[i] !='0'){
    //     console.log("it is repeated",words[i]);
    //   }
    // }
    // this.length = this.farray.length;
    // this.call();

    // this.uploader.onAfterAddingFile = (file) => {
    //   file.withCredentials = false;
    // };
    // this.uploader.onCompleteItem = (item: any, status: any) => {
    //   console.log('Uploaded File Details:', item);
    //   // this.toastr.success('File successfully uploaded!');
    // };

    
    // this.findSum();
    // this.findSequence();
  }

  // findSum(){
  //   console.log("function called");
  //   let sum = 9;
  //   let length = this.sumArray.length;
  //   for(let i=0;i<length-1 ;i++){
  //     for(let j=i+1;j<length;j++){
  //       if(this.sumArray[i] + this.sumArray[j] == sum){
  //         console.log("pair which is equal to sum : ("+ this.sumArray[i], this.sumArray[j] +")");
  //       }
  //     }
  //   }
  // }

  // findSequence(){
  //   // let max = Math.max(...this.sequenceArray);
  //   // let min = Math.min(...this.sequenceArray);
  //   // for(let i=min;i<=max;i++){
  //   //   this.tempArray.push(0);
  //   // }
  //   // for(let j=0; j<this.sequenceArray.length; j++){
  //   //   this.tempArray[this.sequenceArray[j]] = 1;
  //   // }
  //   // for(let k=min;k<this.tempArray.length;k++){
  //   //   if(this.tempArray[k] == 0){
  //   //     console.log("missing items", k);
  //   //   }
  //   // }
  //   let min = this.sequenceArray[0];
  //   let max = min;
  //   this.sequenceArray.forEach(ele => {
  //     if(min > ele){
  //       min = ele;
  //     }
  //     if(max < ele){
  //       max = ele;
  //     }
  //   })
  //   console.log("these are min and max", min, max);
  //   for(let j=1;j<this.sequenceArray.length;j++){
  //     for(let i=min;i<=max;i++){
  //       if(this.sequenceArray[j-1] < i && this.sequenceArray[j]>i){
  //         console.log("missing items",i);
  //         break;
  //       }
  //     }
  //   }
  // }

  // call(){
  //   if(this.farray[this.count] > 10){
  //     console.log("element", this.farray[this.count]);
  //   }
  //   if(this.length > this.count){
  //     this.count++;
  //     this.call();
  //   }
  // }

  login(){
    console.log("called login", this.loginObj);
    this.appService.checkLogin(this.loginObj).subscribe(data => {
      console.log("it is successfully response in con", data);
      if(data['success']) {
        localStorage.setItem('token', data['data'].token);
        localStorage.setItem('Userdata', JSON.stringify(data['data'].userData));
        this.router.navigate(['home']);
      }
    })
    // this.router.navigate(['home']);
  }

  // uploadAll() {
   
  //   this.uploader.options.additionalParameter = this.loginObj;
  //   this.uploader.uploadAll();
  //   // this.appService.upload(this.loginObj).subscribe(res => {
  //   //   console.log(res);
  //   // })
  // }
}
