import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private ds:DataService) { }
  cdata:any[]=[];
  ta:number=0;
  l:number=0;
  cuname:string="";
  cuno:string="";
  cuemail:string="";

  ngOnInit() {
    this.cdata=this.ds.getCartData();
    console.log(this.cdata);
    this.l=this.cdata.length;
    this.cdata.forEach(e => {
      this.ta=this.ta+e.rq * e.price;
    });

  }

  cs:any={};
  
}
