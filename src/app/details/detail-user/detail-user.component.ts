import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/objects/user';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.css']
})
export class DetailUserComponent implements OnInit {

  fetchedUser : any;
  modifiedUser : User = new User("","","");
  message : any;

  constructor(private service:UsersService, private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    let paramId = this.activatedRoute.snapshot.paramMap.get('id');
    let res = this.service.getUserById(paramId);
    res.subscribe((data)=> this.fetchedUser = data);
  }

  public updateUser(){
    let paramId = this.activatedRoute.snapshot.paramMap.get('id');
    let res = this.service.updateUser(paramId,this.modifiedUser);
    res.subscribe((data)=> {this.message = data; this.ngOnInit();});
  }

  public deleteUser(){
    let paramId = this.activatedRoute.snapshot.paramMap.get('id');
    let res = this.service.deleteUser(paramId);
    res.subscribe((data)=> this.router.navigate(['users']));
  }

}
