import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  com:Object[];
  e:object={};
  s:string="cname"
  constructor(private ds:DataService,private hc:HttpClient) { }

  ngOnInit() {
    this.ds.getCompanies().subscribe(a=>this.com=a);
    

  }
  deletec(c)
  {
    this.hc.delete('/app/company/'+c._id).subscribe(r=>{
      this.ds.getCompanies().subscribe(a=>this.com=a);
    });
  }
  add(data)
  {
    console.log(data);
    this.hc.post('/app/company',data).subscribe(a=>{
      alert("company successfully added....");
    });
    this.ds.getCompanies().subscribe(a=>this.com=a);
  }
  toEdit(data)
  {
     console.log(data)
    this.e=data;
  }
  save(data)
  {
    console.log(data);
    this.hc.put('/app/company',data).subscribe(r=>{
      this.ds.getCompanies().subscribe(a=>this.com=a);
    });
  }

  identify(index, item){
    return item.cname; 
 }
}
