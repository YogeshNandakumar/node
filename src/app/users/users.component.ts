import { Component, OnInit } from '@angular/core';
import { AppserviceService } from '../appservice.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(
    private appService : AppserviceService
  ) { }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers(){
    this.appService.getAllUsers().subscribe(data => {
      console.log("it is all users", data);
    })
  }
}
