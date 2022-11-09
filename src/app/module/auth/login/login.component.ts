import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/layout/services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginData ={
    'username':'',
    'password':''
  };
  constructor(public _service: UserService,
    public router:Router) { }

  ngOnInit(): void {
  }

  doLogin() {
    //sent post data here...
      let postData	 = {
        "username"      :this.loginData.username,
      "password"      : this.loginData.password
    }
  
    //below we call postData function for get data...
    this._service.storeDataToDb(postData,'auth/login').subscribe(data=>{
        if(data.token){
          localStorage.setItem('token',data.token);
          this.router.navigate(['/user'])
        }
      })
   }
}
