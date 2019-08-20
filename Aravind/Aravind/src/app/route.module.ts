import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LogComponent } from './log/log.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FunctionComponent } from './function/function.component';
import { HomeComponent } from './home/home.component';
import { MedicineComponent } from './medicine/medicine.component';
import { SalesComponent } from './sales/sales.component';
import { NewsaleComponent } from './newsale/newsale.component';
import { CompanyComponent } from './company/company.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {path:"",redirectTo:"/log",pathMatch:"full"},
      {path:"log",component:LogComponent,children:[
        {path:"",component:LoginComponent},
        {path:"reg",component:RegisterComponent},
      ]},
      {path:"app",component:FunctionComponent,children:[
        {path:"home",component:HomeComponent},
        {path:"RequestBlood",component:MedicineComponent},
        {path:"company",component:CompanyComponent},
        {path:"sales",component:SalesComponent},
        {path:"newsale",component:NewsaleComponent},
        {path:"cart",component:CartComponent},
      ]}
    ])
  ],
  exports:[RouterModule]
})
export class RouteModule { }
