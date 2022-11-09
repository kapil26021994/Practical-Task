import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { UserService } from 'src/app/core/layout/services/user/user.service';
import { fromEvent } from 'rxjs';
import {
  debounceTime,
  map,
  distinctUntilChanged,
  filter
} from "rxjs/operators";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
public prouctList :any =[];
@ViewChild('movieSearchInput', { static: true }) movieSearchInput: ElementRef | any;
  constructor(public service:UserService) { }

  ngOnInit(): void {
    this.getProuctList();
    fromEvent(this.movieSearchInput.nativeElement, 'keyup').pipe(
      // get value
      map((event: any) => {
        return event.target.value;
      })
      // if character length greater then 2
      , filter(res => res.length > 0)

      // Time in milliseconds between key events
      , debounceTime(1000)

      // If previous query is diffent from current   
      , distinctUntilChanged()

      // subscription for response
    ).subscribe((text: string) => {
      this.service.searchProduct('products/search?q='+this.movieSearchInput.nativeElement.value).subscribe((res:any) => {
        this.prouctList  = res.products;
      }, (err) => {
        console.log('error', err);
      });
    });
  }


  getProuctList(){
    this.service.getDataByUrl('products').subscribe((data:any)=>{
      if(data.products.length>0){
        this.prouctList = data.products;
      }
    })
  }
}
