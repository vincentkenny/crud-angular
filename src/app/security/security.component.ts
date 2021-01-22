import { Component, OnInit } from '@angular/core';
import { AuthRequest } from '../objects/authRequest';
import { JwtClientService } from '../services/jwt-client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {

  authRequest : AuthRequest = new AuthRequest("","");
  message : any;


  constructor(private service: JwtClientService, private router : Router) { }

  ngOnInit(): void {
    
  }

  public getAccessToken(){
    let res = this.service.generateToken(this.authRequest);
    res.subscribe(data => {this.accessApi(data); });
  }

  public accessApi(token){
    let res = this.service.welcome(token);
    res.subscribe(data => {this.message = data; this.router.navigate(['/users'])});
  }

}
