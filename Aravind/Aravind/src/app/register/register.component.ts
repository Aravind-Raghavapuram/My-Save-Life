import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { DataService } from '../data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private route:Router,private ds:DataService) { }
  uname:string=null;
  email:string=null;
  pwd:string=null;
  rpwd:string=null;
  gender:string=null;
  dfname:string=null;
  selectbg:string=null;
  selectgender;
  phone;
  bg = [ 'O-', 'O+', 'B-', 'B+', 'A-', 'A+', 'AB-', 'AB+']
  ngOnInit() {
  }
  register(data)
  {
    console.log(data);


    this.ds.regDB(data).subscribe(r=>{
      alert(r);
    });
    this.route.navigate(['/log']);


  }

}
