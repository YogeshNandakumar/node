import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppserviceService {

  constructor(
    private http:HttpClient
  ) { }
  
  url = "http://localhost:80/routes/";

  checkLogin(obj:any){
    console.log("in service for login check", obj);
    return this.http.post(this.url+'login', obj);
  }

  getAllUsers(){
    return this.http.get(this.url+'allUsers');
  }
  upload(body) {
    return this.http.post('http://localhost:80/api/uploads', body);

  }
}
