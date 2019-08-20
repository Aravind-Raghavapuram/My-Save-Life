import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.css']
})
export class MedicineComponent implements OnInit {
  s:string="name";
  mdetails=['name','type', 'usage', 'company','quantity','price'];
  e:object={};
  
  name:string="";
  type:string="";
  usage:string="";
  company:string="";
  quantity:number;
  price:number;
  constructor(private ds:DataService,private hc:HttpClient,private route:Router) { }
  medi:Object[];
  ngOnInit() {
    this.ds.getMedicines().subscribe(a=>this.medi=a);
    
  }
  filterForeCasts(x)
  {
    this.s=x;
  }
  delete(i)
  {
    this.hc.delete('/app/medicine/'+i._id).subscribe(r=>{
      this.ds.getMedicines().subscribe(a=>this.medi=a);
    })
  }
  onSubmit(data)
  {
    console.log(data);
    this.hc.post('/app/medicine',data).subscribe(r=>{
      alert("successfully add..");
      this.route.navigate(['/app/medicine']);
      this.ds.getMedicines().subscribe(a=>this.medi=a);
    });
   

  }
  toEdit(data)
  {
    this.e=data;
  }
  save(data)
  {
    console.log(data);
    this.hc.put('/app/medicine',data).subscribe(r=>{
      this.ds.getMedicines().subscribe(a=>this.medi=a);
    });
  } 

}
