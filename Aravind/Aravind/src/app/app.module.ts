import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { RouteModule } from './/route.module';
import { LogComponent } from './log/log.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FunctionComponent } from './function/function.component';
import { HomeComponent } from './home/home.component';
import { MedicineComponent } from './medicine/medicine.component';
import { NewsaleComponent } from './newsale/newsale.component';
import { SalesComponent } from './sales/sales.component';
import { CartComponent } from './cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchPipe } from './search.pipe';
import { CompanyComponent } from './company/company.component'

@NgModule({
  declarations: [
    AppComponent,
    LogComponent,
    LoginComponent,
    RegisterComponent,
    FunctionComponent,
    HomeComponent,
    MedicineComponent,
    NewsaleComponent,
    SalesComponent,
    CartComponent,
    SearchPipe,
    CompanyComponent
  ],
  imports: [
    BrowserModule,
    RouteModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
