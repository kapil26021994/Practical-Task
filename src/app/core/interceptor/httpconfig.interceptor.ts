import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import{map} from 'rxjs/operators';
import { finalize } from "rxjs/operators";
import{Router} from '@angular/router';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
    constructor(public router:Router){
    }
    
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        var userId :any;
        console.log(request);
        const token = localStorage.getItem('token');
        if(token) {
            request = request.clone({
                setHeaders: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
         }
        return next.handle(request).pipe(map((event: HttpEvent<any>) => {
            if(event instanceof HttpResponse) {
            }
            return event;
        }));
    }
}
  