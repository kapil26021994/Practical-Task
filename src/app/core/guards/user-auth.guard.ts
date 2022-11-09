import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild,Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserAuthGuard implements CanActivate,CanActivateChild {
  constructor(public router:Router){
  }

  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot) {
    return this.checkUserIsLoggedInOrNot();
  }

  canActivateChild(route: ActivatedRouteSnapshot,state: RouterStateSnapshot) {
    return this.checkUserIsLoggedInOrNot();
  }

  checkUserIsLoggedInOrNot(){
    const isLogin = localStorage.getItem('token');
    if(isLogin){
      return  true;
    }else{
      this.router.navigate(['/auth']);
      return false;
    }
  }
}
