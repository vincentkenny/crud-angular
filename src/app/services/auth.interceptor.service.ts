import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable} from 'rxjs';
import { JwtClientService } from './jwt-client.service';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
  private jwtService : JwtClientService){
    
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        'Content-Type' : 'application/json; charset=utf-8',
        'Accept'       : 'application/json',
        Authorization  : `Bearer ${this.jwtService.getToken()}`,
      },
    });

    return next.handle(req);
  }
}