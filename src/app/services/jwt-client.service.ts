import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtClientService {

  receivedToken ="";

  constructor(private http:HttpClient) { }

  public generateToken(request){
    return this.http.post("http://localhost:8080/authenticate",request, {responseType: 'text' as 'json'});
  }
  public welcome(token){
    sessionStorage.setItem("token",token);
    let tokenStr = "Bearer "+token;
    const headers = new HttpHeaders().set("Authorization", tokenStr);
    this.receivedToken = token;
    return this.http.get("http://localhost:8080/",{headers, responseType: 'text' as 'json'});
  }

  public getToken(){
    // if(this.receivedToken == ""){
    //   this.receivedToken = sessionStorage.getItem("token");
      
    // }
    return this.receivedToken;
    // return localStorage.getItem("token");
  }
}
