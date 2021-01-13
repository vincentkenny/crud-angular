import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  public registerUser(user){
    return this.http.post("http://localhost:8080/api/v1/users", user, {responseType : 'text' as 'json'});
  }

  public getAllUser(){
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
