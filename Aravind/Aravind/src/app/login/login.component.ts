import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { checkAndUpdateBinding } from "@angular/core/src/render3/instructions";
import { DataService } from "../data.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(private route: Router, private ds: DataService) {}
  name: string = null;
  pass: string = null;
  ngOnInit() {}
  login(data) {
    console.log(data);
    this.ds.check(data).subscribe(r => {
     if(r)
     {
      alert("Logged in Successfully");
      this.route.navigate(["/app/RequestBlood"]);
     }
     else{
       alert("Invalid ahtuentication");
     }
    });
  }
}
