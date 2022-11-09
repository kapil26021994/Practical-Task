import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/layout/services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  public productTitle :string | undefined;
  constructor(public  _service:UserService,public router:Router) { }

  ngOnInit(){
  }

  addProduct() {
    //below we call postData function for get data...
    this._service.storeDataToDb({"title":this.productTitle},'products/add').subscribe(data=>{
        if(data.id){
          this.router.navigate(['/user']);
        }
      })
   }

}
