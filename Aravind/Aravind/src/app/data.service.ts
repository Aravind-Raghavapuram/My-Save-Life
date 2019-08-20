import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  cartdata:any[]=[];
  e:any;
  constructor(private hc:HttpClient) { }

  getMedicines():Observable<any>
  {
    return this.hc.get('/app/medicine')
  }
  getCompanies():Observable<any>
  {  
    return this.hc.get('/app/co')
  }
  sendToCart(data):Observable<any>
  {
    return this.hc.post('/app/newsale',data); 
  }
  c:number=0;
  toCart(d){

    for (let i = 0; i < this.cartdata.length; i++) {
      if(this.cartdata[i].name ==d.name)
      {
        this.c++;
        console.log(this.cartdata[i].name);
        this.cartdata[i].rq=this.cartdata[i].rq+d.rq;
      }
    }
    if(this.c==0)
    {
      this.cartdata.push(d);
    }
    
  }
  getCartData()
  {
    console.log(this.cartdata);
    return this.cartdata;
  }
  regDB(data):Observable<any>
  {
    return this.hc.post('/log/reg',data);
  }

  check(data):Observable<any>
  {
    return this.hc.post('/log',data);
  }

}
