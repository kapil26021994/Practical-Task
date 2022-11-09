import { Injectable } from '@angular/core';
import{HttpClient} from   '@angular/common/http';
import{Observable,Subject,forkJoin } from  'rxjs';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';    
// import { AppComponent } from '../../../app.component';
// import{AuthenticationService} from '../../../core/services/authentication/authentication.service';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  public sideMenuEmitter$ = new BehaviorSubject<any>(''); 
  public updatedValueEmitter$ = new BehaviorSubject<any>(''); 
  constructor(public http:HttpClient) { 
  }

  storeDataToDb(data:any,url:string): Observable<any> {
    return this.http.post(environment.baseUrl+url, data);
  }

  getDataByUrl(url:string){
     return this.http.get(environment.baseUrl+url);
  }

  deleteDataFromDb(value:any,url:string): Observable<any> {
   return this.http.request('delete',environment.baseUrl+url+'/'+value)
  }

  searchProduct(url:string){
    return this.http.get(environment.baseUrl+url);
  }
}
