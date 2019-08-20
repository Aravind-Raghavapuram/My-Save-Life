import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-newsale',
  templateUrl: './newsale.component.html',
  styleUrls: ['./newsale.component.css']
})
export class NewsaleComponent implements OnInit {
  medi:Object[];
  cart:Object[]=[];
  searchTerm:string;
  constructor(private ds:DataService,private hc:HttpClient) { }
  i:any={};
  aq:number;
  rq:number;
  b:boolean=false;
  ngOnInit() {
    this.ds.getMedicines().subscribe(a=>this.medi=a);
  }
  s:string="name";
  display(data)
  {
    console.log(data);
    this.i=data;
    this.searchTerm=data.name;
    this.aq=data.quantity;
  }
  check()
  {
    if(this.rq>this.i.quantity)
    {
      this.b=true;
    }
    else
    {
      this.b=false;
    }
  }
  d:Object={};
  bd:any={};
  addtocart()
  {
    let d:any=this.i;
    
    if(this.rq<=this.i.quantity)
    {
      d=this.i;
      d.rq=this.rq;
      this.i.quantity=this.i.quantity-this.rq;
      console.log(d);
      this.ds.toCart(d);
      this.bd._id=this.i._id;
      this.bd.quantity=this.i.quantity;
      console.log(this.bd);
      this.hc.put('/app/newsale',this.bd).subscribe(r=>{});
    }
   
  }
}
