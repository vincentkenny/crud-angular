import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/objects/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  user : User = new User("","","");
  message: any;
  listUser : any;

  constructor(private service : UsersService) { }

  ngOnInit(): void {
    let res = this.service.getAllUser();
    res.subscribe((data)=> {this.listUser = data; console.log(typeof(data))});
  }

  public registerUser(){
    let res = this.service.registerUser(this.user);
    res.subscribe((data) => {this.message = data; this.ngOnInit();});
  }

}
