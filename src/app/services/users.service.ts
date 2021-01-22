import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtClientService } from './jwt-client.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient, private jwtService: JwtClientService) { }

  public getAuthorizationHeaders(){
    let tokenStr = "Bearer "+ this.jwtService.getToken();
    return new HttpHeaders().set("Authorization", tokenStr);
  }

  public registerUser(user){
    const headers = this.getAuthorizationHeaders();
    console.log(this.jwtService.getToken());
    return this.http.post("http://localhost:8080/api/v1/users", user, {headers, responseType: 'text' as 'json'});
  }

  public getAllUser(){
    const headers = this.getAuthorizationHeaders();
    return this.http.get("http://localhost:8080/api/v1/users");
  }

  public getUserById(id){
    return this.http.get("http://localhost:8080/api/v1/users/"+id);
  }

  public updateUser(id, user){
    return this.http.put("http://localhost:8080/api/v1/users/"+id, user, {responseType :'text' as 'json'});
  }

  public deleteUser(id){
    return this.http.delete("http://localhost:8080/api/v1/users/"+id);
  }
}