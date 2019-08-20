(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid bi\">\r\n    <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'pro';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _route_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! .//route.module */ "./src/app/route.module.ts");
/* harmony import */ var _log_log_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./log/log.component */ "./src/app/log/log.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _function_function_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./function/function.component */ "./src/app/function/function.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _medicine_medicine_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./medicine/medicine.component */ "./src/app/medicine/medicine.component.ts");
/* harmony import */ var _newsale_newsale_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./newsale/newsale.component */ "./src/app/newsale/newsale.component.ts");
/* harmony import */ var _sales_sales_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sales/sales.component */ "./src/app/sales/sales.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _search_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./search.pipe */ "./src/app/search.pipe.ts");
/* harmony import */ var _company_company_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./company/company.component */ "./src/app/company/company.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _log_log_component__WEBPACK_IMPORTED_MODULE_5__["LogComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"],
                _function_function_component__WEBPACK_IMPORTED_MODULE_8__["FunctionComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _medicine_medicine_component__WEBPACK_IMPORTED_MODULE_10__["MedicineComponent"],
                _newsale_newsale_component__WEBPACK_IMPORTED_MODULE_11__["NewsaleComponent"],
                _sales_sales_component__WEBPACK_IMPORTED_MODULE_12__["SalesComponent"],
                _cart_cart_component__WEBPACK_IMPORTED_MODULE_13__["CartComponent"],
                _search_pipe__WEBPACK_IMPORTED_MODULE_15__["SearchPipe"],
                _company_company_component__WEBPACK_IMPORTED_MODULE_16__["CompanyComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _route_module__WEBPACK_IMPORTED_MODULE_4__["RouteModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cart/cart.component.css":
/*!*****************************************!*\
  !*** ./src/app/cart/cart.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/cart/cart.component.html":
/*!******************************************!*\
  !*** ./src/app/cart/cart.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-8 offset-md-2 col-xs-12\">\n    <div class=\"jumbotron\">\n      <ul class=\"list-group\">\n        <li class=\"list-group-item\">\n          <div class=\"row\">\n            <div class=\"col-sm-4\">\n              <div class=\"form-group\">\n                <label for=\"1\">Customer Name</label>\n                <input type=\"text\" name=\"cuname\" id=\"1\" class=\"form-control\"[(ngModel)]=\"cuname\">\n              </div>\n            </div>\n            <div class=\"col-sm-4\">\n              <div class=\"form-group\">\n                <label for=\"2\">Customer Ph.No</label>\n                <input type=\"text\" name=\"cuno\" id=\"2\" class=\"form-control\"[(ngModel)]=\"cuno\">\n              </div>\n            </div>\n            <div class=\"col-sm-4\">\n              <div class=\"form-group\">\n                <label for=\"3\">Customer Email</label>\n                <input type=\"email\" name=\"cuemail\" id=\"3\" class=\"form-control\"[(ngModel)]=\"cuemail\">\n              </div>\n            </div>\n          </div>\n        </li>\n        <li class=\"list-group-item\" *ngFor=\"let i of cdata\">\n          <div class=\"row\">\n            <div class=\"col\">\n              <p>MedicineName : {{i.name}}</p>\n              <p>Quantity : {{i.rq}}</p>\n              <p>Price : {{i.price}}</p>\n            </div>\n            <div class=\"col\">\n              <div class=\"row\">\n                <div class=\"col text-right\" align=\"right\">\n                  <p>d</p>\n                </div>\n              </div>\n              <p>{{i.rq}} X {{i.price}}</p>\n              <h5 class=\"text-warning\">{{i.rq*i.price}}</h5>\n            </div>\n          </div>\n        </li>\n        <li class=\"list-group-item\">\n          <div class=\"row\">\n            <div class=\"col-sm-4 col-xs-6\">\n              <p>No.of Items : {{l}}</p>\n            </div>\n            <div class=\"col-sm-4 col-xs-6\">\n              <p>Total : {{ta}}</p>\n            </div>\n            <div class=\"col-sm-4 col-xs-12\">\n                <button type=\"button\" class=\"btn btn-primary\">Make Payment</button>\n              </div>\n          </div>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/cart/cart.component.ts":
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CartComponent = /** @class */ (function () {
    function CartComponent(ds) {
        this.ds = ds;
        this.cdata = [];
        this.ta = 0;
        this.l = 0;
        this.cuname = "";
        this.cuno = "";
        this.cuemail = "";
        this.cs = {};
    }
    CartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cdata = this.ds.getCartData();
        console.log(this.cdata);
        this.l = this.cdata.length;
        this.cdata.forEach(function (e) {
            _this.ta = _this.ta + e.rq * e.price;
        });
    };
    CartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__(/*! ./cart.component.html */ "./src/app/cart/cart.component.html"),
            styles: [__webpack_require__(/*! ./cart.component.css */ "./src/app/cart/cart.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/company/company.component.css":
/*!***********************************************!*\
  !*** ./src/app/company/company.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/company/company.component.html":
/*!************************************************!*\
  !*** ./src/app/company/company.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"margin-top: 100px;\">\n  <div class='col-md-6 col-sm-12'>\n    <button type=\"button\" class=\"btn btn-warning \" data-toggle=\"modal\" data-target=\"#com\">Add\n      Company</button></div>\n  <div class=\"col-md-6 col-sm-12\" align=\"right\">\n    <input class=\"st\" type=\"text\" [(ngModel)]=\"searchTerm\" placeholder=\"Search Company Here\">\n    <button type=\"button\" class=\"bg-primary si\"><i class=\"icon ion-md-search\"></i></button>\n  </div>\n</div>\n\n<div class=\"modal fade\" id=\"com\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n\n      <div class=\"modal-body\">\n\n        <form #formRef=\"ngForm\" (ngSubmit)=\"add(formRef.value)\">\n          <div class=\"form-group\">\n            <label class=\" control-label\" for=\"comn\">Company Name</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"comn\" name=\"cname\" id=\"comn\" placeholder=\"Company Name\">\n          </div>\n          <div class=\"form-group\">\n            <label class=\"control-label\" for=\"location\">Location</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"location\" name=\"clocation\" id=\"location\" placeholder=\"location\">\n          </div>\n          <div class=\"form-group\">\n            <label class=\"control-label\" for=\"company\">Email id</label>\n            <input type=\"email\" class=\"form-control\" [(ngModel)]=\"email\" name=\"cemail\" id=\"email\" placeholder=\"Email\">\n          </div>\n          <div class=\"form-group\">\n            <label class=\"control-label\" for=\"contact\">Contact Number</label>\n            <input type=\"number\" class=\"form-control\" [(ngModel)]=\"contact\" name=\"cnumber\" id=\"contact\" placeholder=\"Contact Number \">\n          </div>\n          <div class=\"row\">\n            <div class=\"col \" align=\"center\">\n              <button type=\"submit\" class=\"btn btn-info\">Add</button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n<div class=\"row\">\n  <div class=\"col\">\n    <table class=\"table bg-dark text-light\">\n\n      <thead>\n        <th>Company Name</th>\n        <th>Location</th>\n        <th>Email-id</th>\n        <th>Contact Number</th>\n        <th>Delete</th>\n        <th>Edit</th>\n      </thead>\n\n      <tr *ngFor=\"let i of com | search:searchTerm:s\">\n        <td>{{i.cname}}</td>\n        <td>{{i.clocation}}</td>\n        <td>{{i.cemail}}</td>\n        <td>{{i.cnumber}}</td>\n        <td><button type=\"button\" class=\"btn btn-danger\" (click)=\"deletec(i)\"> X </button></td>\n        <td> <button type=\"button\" class=\"btn btn-success\" data-toggle=\"modal\" data-target=\"#edit\" (click)=\"toEdit(i)\">Edit</button></td>\n      </tr>\n    </table>\n  </div>\n</div>\n<!-- Modal -->\n<div class=\"modal fade\" id=\"edit\" role=\"dialog\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close text-danger\" data-dismiss=\"modal\" aria-label=\"Close\">X\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <form #formRef1=\"ngForm\" (ngSubmit)=\"save(formRef1.value)\">\n          <input type=\"hidden\" [(ngModel)]=\"e._id\" name=\"_id\" value=\"{{e._id}}\">\n          <div class=\"form-group\">\n            <label class=\"control-label\" for=\"comn\">Company Name</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"e.cname\" name=\"cname\" id=\"comn\" value=\"{{e.cname}}\">\n          </div>\n          <div class=\"form-group\">\n            <label class=\"control-label\" for=\"location\">Location</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"e.clocation\" name=\"clocation\" id=\"location\" value=\"{{e.clocation}}\">\n          </div>\n          <div class=\"form-group\">\n            <label class=\"control-label\" for=\"company\">Email id</label>\n            <input type=\"email\" class=\"form-control\" [(ngModel)]=\"e.cemail\" name=\"cemail\" id=\"email\" value=\"{{e.cemail}}\">\n          </div>\n          <div class=\"form-group\">\n            <label class=\"control-label\" for=\"contact\">Contact Number</label>\n            <input type=\"number\" class=\"form-control\" [(ngModel)]=\"e.cnumber\" name=\"cnumber\" id=\"contact\" value=\"{{e.cnumber}}\">\n          </div>\n          <div class=\"row\">\n            <div class=\"col \" align=\"center\">\n              <button type=\"submit\" class=\"btn btn-info\">Save</button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/company/company.component.ts":
/*!**********************************************!*\
  !*** ./src/app/company/company.component.ts ***!
  \**********************************************/
/*! exports provided: CompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyComponent", function() { return CompanyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CompanyComponent = /** @class */ (function () {
    function CompanyComponent(ds, hc) {
        this.ds = ds;
        this.hc = hc;
        this.e = {};
        this.s = "cname";
    }
    CompanyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ds.getCompanies().subscribe(function (a) { return _this.com = a; });
    };
    CompanyComponent.prototype.deletec = function (c) {
        var _this = this;
        this.hc.delete('/app/company/' + c._id).subscribe(function (r) {
            _this.ds.getCompanies().subscribe(function (a) { return _this.com = a; });
        });
    };
    CompanyComponent.prototype.add = function (data) {
        var _this = this;
        console.log(data);
        this.hc.post('/app/company', data).subscribe(function (a) {
            alert("company successfully added....");
        });
        this.ds.getCompanies().subscribe(function (a) { return _this.com = a; });
    };
    CompanyComponent.prototype.toEdit = function (data) {
        console.log(data);
        this.e = data;
    };
    CompanyComponent.prototype.save = function (data) {
        var _this = this;
        console.log(data);
        this.hc.put('/app/company', data).subscribe(function (r) {
            _this.ds.getCompanies().subscribe(function (a) { return _this.com = a; });
        });
    };
    CompanyComponent.prototype.identify = function (index, item) {
        return item.cname;
    };
    CompanyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-company',
            template: __webpack_require__(/*! ./company.component.html */ "./src/app/company/company.component.html"),
            styles: [__webpack_require__(/*! ./company.component.css */ "./src/app/company/company.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CompanyComponent);
    return CompanyComponent;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = /** @class */ (function () {
    function DataService(hc) {
        this.hc = hc;
        this.cartdata = [];
        this.c = 0;
    }
    DataService.prototype.getMedicines = function () {
        return this.hc.get('/app/medicine');
    };
    DataService.prototype.getCompanies = function () {
        return this.hc.get('/app/co');
    };
    DataService.prototype.sendToCart = function (data) {
        return this.hc.post('/app/newsale', data);
    };
    DataService.prototype.toCart = function (d) {
        for (var i = 0; i < this.cartdata.length; i++) {
            if (this.cartdata[i].name == d.name) {
                this.c++;
                console.log(this.cartdata[i].name);
                this.cartdata[i].rq = this.cartdata[i].rq + d.rq;
            }
        }
        if (this.c == 0) {
            this.cartdata.push(d);
        }
    };
    DataService.prototype.getCartData = function () {
        console.log(this.cartdata);
        return this.cartdata;
    };
    DataService.prototype.regDB = function (data) {
        return this.hc.post('/log/reg', data);
    };
    DataService.prototype.check = function (data) {
        return this.hc.post('/log', data);
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/function/function.component.css":
/*!*************************************************!*\
  !*** ./src/app/function/function.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/function/function.component.html":
/*!**************************************************!*\
  !*** ./src/app/function/function.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col\">\n      <nav class=\"nav navbar-expand-lg navbar-dark bg-dark fixed-top\">\n          <a routerLink=\"log\" class=\"navbar-brand\" ><img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHaeM73FWJY2ZMm1d8Ecraowhy_roUBdDOJ47K9gw4ZVxj9y0h\"  width=\"100px\" height=\"30px\"></a>\n          <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#cn\"\n              aria-expanded=\"false\" aria-label=\"Toggle navigation\" style=\"margin-left: auto;\"><span class=\"navbar-toggler-icon\"></span></button>\n          <div class=\"collapse navbar-collapse mr-0\" id=\"cn\" >\n            <ul class=\"navbar-nav mr-0\"style=\"margin-left: auto;\">\n\n                    <li class=\"nav-item active\"><a class=\"nav-link text-light\" routerLink=\"home\">Home</a></li>\n                    <li class=\"nav-item\"><a class=\"nav-link text-light\" routerLink=\"RequestBlood\">Request Blood</a></li>\n\n                    <li class=\"nav-item\"><a class=\"nav-link text-light\" routerLink=\"../log\">About Us</a></li>\n\n\n            </ul>\n\n          </div>\n          <a class=\"nav-link text-light\" routerLink=\"../log\">LogOut</a>\n        </nav>\n      <nav class=\"navbar bg-dark\">\n\n\n      </nav>\n    </div>\n  </div>\n  <router-outlet class=\"text-light\"></router-outlet>\n"

/***/ }),

/***/ "./src/app/function/function.component.ts":
/*!************************************************!*\
  !*** ./src/app/function/function.component.ts ***!
  \************************************************/
/*! exports provided: FunctionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FunctionComponent", function() { return FunctionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FunctionComponent = /** @class */ (function () {
    function FunctionComponent() {
    }
    FunctionComponent.prototype.ngOnInit = function () {
    };
    FunctionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-function',
            template: __webpack_require__(/*! ./function.component.html */ "./src/app/function/function.component.html"),
            styles: [__webpack_require__(/*! ./function.component.css */ "./src/app/function/function.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FunctionComponent);
    return FunctionComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row pt-5 pb-5\" style=\"background-image: linear-gradient(to right top,rgba(0, 0, 0, 0.308),rgba(0, 0, 0, 0.308))\">\n  <div class=\"col-md-8 offset-md-2 col-sm-12\">\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/log/log.component.css":
/*!***************************************!*\
  !*** ./src/app/log/log.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/log/log.component.html":
/*!****************************************!*\
  !*** ./src/app/log/log.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n  <div class=\"col\">\n    <nav class=\"navbar bg-dark\">\n      <a routerLink=\"log\" class=\"navbar-brand\" ><img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHaeM73FWJY2ZMm1d8Ecraowhy_roUBdDOJ47K9gw4ZVxj9y0h\"  width=\"100px\" height=\"30px\"></a>\n      <ul class=\"nav\">\n        <li class=\"nav-item\"><a class=\"nav-link text-light\" routerLink=\"../log\">Login</a></li>\n      </ul>\n    </nav>\n  </div>\n</div>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/log/log.component.ts":
/*!**************************************!*\
  !*** ./src/app/log/log.component.ts ***!
  \**************************************/
/*! exports provided: LogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogComponent", function() { return LogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LogComponent = /** @class */ (function () {
    function LogComponent() {
    }
    LogComponent.prototype.ngOnInit = function () {
    };
    LogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-log',
            template: __webpack_require__(/*! ./log.component.html */ "./src/app/log/log.component.html"),
            styles: [__webpack_require__(/*! ./log.component.css */ "./src/app/log/log.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LogComponent);
    return LogComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"background-image: linear-gradient(rgba(0, 0, 0, 0.514),#000)\">\n  <div class=\"col-8 offset-2 mb-5 pb-5\" style=\"background-image: url(https://png.pngtree.com/thumb_back/fh260/back_pic/00/02/92/70561bd49283afe.jpg);width: 100%;height: 400px;background-size: cover; background-repeat: no-repeat;margin-top: 100px;\">\n    <div class=\"row\">\n      <div class=\"col-md-6 col-sm-0\"></div>\n      <div class=\"col-md-6 col-sm-12 mt-3 pt-5 \">\n        <form class=\"form\" #lf=\"ngForm\" (ngSubmit)=\"login(lf.value)\">\n          <div class=\"form-group\">\n            <label for=\"un\">USERNAME :*</label>\n            <input type=\"text\" class=\"form-control\" name=\"un\" id=\"un\" placeholder=\"Enter User Name\" [(ngModel)]=name #u=\"ngModel\" required>\n            <label class=\"text-danger\" *ngIf=\"u.touched && u.pristine\">\n              Username required\n            </label>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"pw\">Password :*</label>\n            <input type=\"password\" class=\"form-control\" name=\"pwd\" id=\"pw\" placeholder=\"Enter Password\" [(ngModel)]=pass #p=\"ngModel\" required>\n            <div class=\"form-check form-check-inline\">\n              <label class=\"form-check-label\" >\n                <input type=\"checkbox\" onchange=\"document.getElementById('pw').type = this.checked ? 'text' : 'password'\"\n                  class=\"form-check-input\" name=\"sp\" id=\"sp\" value=\"checkedValue\">\n                Show Password\n              </label>\n              \n            </div>\n            <label class=\"text-danger\" *ngIf=\"p.touched && p.pristine\">\n              Password required\n            </label>\n          </div>\n          <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"lf.invalid\" >Login</button>\n          <button type=\"button\" class=\"btn btn-warning\" routerLink=\"reg\" style=\"margin-left: 63%;\">Register</button>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(route, ds) {
        this.route = route;
        this.ds = ds;
        this.name = null;
        this.pass = null;
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.login = function (data) {
        var _this = this;
        console.log(data);
        this.ds.check(data).subscribe(function (r) {
            if (r) {
                alert("Logged in Successfully");
                _this.route.navigate(["/app/RequestBlood"]);
            }
            else {
                alert("Invalid ahtuentication");
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-login",
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/medicine/medicine.component.css":
/*!*************************************************!*\
  !*** ./src/app/medicine/medicine.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".st{\r\n    width: 50%;\r\n    height: 30px;\r\n    margin: 0px;\r\n    border: 0px;\r\n}\r\n.sb{\r\n    width: 20%;\r\n    height: 30px;\r\n    margin: 0px;\r\n    border: 0px;\r\n}\r\n.si{\r\n    width: 5%;\r\n    height: 30px;\r\n    margin: 0px;\r\n    border: 0px;\r\n}\r\n@media only screen and(max-width :660px)\r\n{\r\n    font-size: 8px;\r\n    table{\r\n        -webkit-column-width: 70%;\r\n                column-width: 70%;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/medicine/medicine.component.html":
/*!**************************************************!*\
  !*** ./src/app/medicine/medicine.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-10 offset-md-1 col-sm-12\">\n    <div class=\"row\" style=\"margin-top: 100px;\">\n\n      <div class=\"col-md-6 col-xs-7\" align=\"right\">\n        <!-- <select class=\"sb bg-primary\" (change)=\"filterForeCasts($event.target.value)\">\n          <option *ngFor=\"let details of mdetails\" value={{details}}>\n            {{details}}\n          </option>\n        </select> -->\n        <input class=\"st\" type=\"text\" placeholder=\"Search Blood Group\" [(ngModel)]=\"searchTerm\">\n        <button type=\"button\" class=\"bg-primary si\"><i class=\"icon ion-md-search\"></i></button>\n      </div>\n    </div>\n    <table class=\"table bg-dark text-light mx-auto\">\n      <thead>\n        <tr>\n          <th> Donor Name</th>\n          <th>Phone</th>\n          <th>Email</th>\n          <th>Blood Group</th>\n          <th>Gender</th>\n\n      </thead>\n      <tbody>\n\n        <tr *ngFor=\"let i of medi | search:searchTerm\">\n          <td scope=\"row\">{{i.dfn}}</td>\n          <td>{{i.phone}}</td>\n\n          <td>{{i.em}}</td>\n\n          <td>{{i.selectbg}}</td>\n         <td>{{i.gender}}</td>\n\n        </tr>\n      </tbody>\n    </table>\n\n  </div>\n</div>\n\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"addm\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modelTitleId\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n\n      </div>\n      <div class=\"modal-body\">\n        <form #formRef=\"ngForm\" (ngSubmit)=\"onSubmit(formRef.value)\">\n          <div class=\"form-group\">\n            <label class=\" control-label\" for=\"medicine\">Medicine Name</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"medicine\" name=\"name\" id=\"medicine\" placeholder=\"Medicine Name\">\n\n          </div>\n\n          <div class=\"form-group\">\n            <label class=\" control-label\" for=\"type\">Medicine type</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"type\" name=\"type\" id=\"type\" placeholder=\"Medicine Type\">\n\n          </div>\n          <div class=\"form-group\">\n            <label class=\" control-label\" for=\"use\">Medicine Usage</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"use\" name=\"usage\" id=\"use\" placeholder=\"Medicine Use\">\n\n          </div>\n          <div class=\"form-group\">\n            <label class=\"control-label\" for=\"company2\">Medicine Company</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"company\" name=\"company\" id=\"company2\" placeholder=\"Medicine Company\">\n\n          </div>\n          <div class=\"form-group\">\n            <label class=\"control-label\" for=\"quantity2\">Medicine Quantity</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"quantity\" name=\"quantity\" id=\"quantity2\" placeholder=\"Medicine Quantity\">\n          </div>\n          <div class=\"form-group\">\n            <label class=\" control-label\" for=\"price2\">Medicine Price</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"price\" name=\"price\" id=\"price2\" placeholder=\"Medicine Price\">\n\n          </div>\n          <div class=\"row\">\n            <div class=\"col\" align=\"center\">\n              <button type=\"submit\" class=\"btn btn-success\">Save</button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"edit\" role=\"dialog\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close text-danger\" data-dismiss=\"modal\" aria-label=\"Close\">X\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <form #eref=\"ngForm\" (ngSubmit)=\"save(eref.value)\">\n            <input type=\"hidden\" [(ngModel)]=\"e._id\" name=\"_id\" value=\"{{e._id}}\">\n          <div class=\"form-group\">\n            <label class=\" control-label\" for=\"medi\">Medicine Name</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"e.name\" name=\"name\" id=\"medi\" value=\"{{e.name}}\">\n\n          </div>\n\n          <div class=\"form-group\">\n            <label class=\" control-label\" for=\"type2\">Medicine type</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"e.type\" name=\"type\" id=\"type2\" value=\"{{e.type}}\">\n\n          </div>\n          <div class=\"form-group\">\n            <label class=\" control-label\" for=\"use2\">Medicine Usage</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"e.usage\" name=\"usage\" id=\"use2\" value=\"{{e.usage}}\">\n\n          </div>\n          <div class=\"form-group\">\n            <label class=\"control-label\" for=\"company\">Medicine Company</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"e.company\" name=\"company\" id=\"company\" value=\"{{e.company}}\">\n\n          </div>\n          <div class=\"form-group\">\n            <label class=\"control-label\" for=\"quantity\">Medicine Quantity</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"e.quantity\" name=\"quantity\" id=\"quantity\" value=\"{{e.quantity}}\">\n          </div>\n          <div class=\"form-group\">\n            <label class=\" control-label\" for=\"price\">Medicine Price</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"e.price\" name=\"price\" id=\"price\" value=\"{{e.price}}\">\n\n          </div>\n          <div class=\"row\">\n            <div class=\"col\" align=\"center\">\n              <button type=\"submit\" class=\"btn btn-success\" >Save</button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/medicine/medicine.component.ts":
/*!************************************************!*\
  !*** ./src/app/medicine/medicine.component.ts ***!
  \************************************************/
/*! exports provided: MedicineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicineComponent", function() { return MedicineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MedicineComponent = /** @class */ (function () {
    function MedicineComponent(ds, hc, route) {
        this.ds = ds;
        this.hc = hc;
        this.route = route;
        this.s = "name";
        this.mdetails = ['name', 'type', 'usage', 'company', 'quantity', 'price'];
        this.e = {};
        this.name = "";
        this.type = "";
        this.usage = "";
        this.company = "";
    }
    MedicineComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ds.getMedicines().subscribe(function (a) { return _this.medi = a; });
    };
    MedicineComponent.prototype.filterForeCasts = function (x) {
        this.s = x;
    };
    MedicineComponent.prototype.delete = function (i) {
        var _this = this;
        this.hc.delete('/app/medicine/' + i._id).subscribe(function (r) {
            _this.ds.getMedicines().subscribe(function (a) { return _this.medi = a; });
        });
    };
    MedicineComponent.prototype.onSubmit = function (data) {
        var _this = this;
        console.log(data);
        this.hc.post('/app/medicine', data).subscribe(function (r) {
            alert("successfully add..");
            _this.route.navigate(['/app/medicine']);
            _this.ds.getMedicines().subscribe(function (a) { return _this.medi = a; });
        });
    };
    MedicineComponent.prototype.toEdit = function (data) {
        this.e = data;
    };
    MedicineComponent.prototype.save = function (data) {
        var _this = this;
        console.log(data);
        this.hc.put('/app/medicine', data).subscribe(function (r) {
            _this.ds.getMedicines().subscribe(function (a) { return _this.medi = a; });
        });
    };
    MedicineComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-medicine',
            template: __webpack_require__(/*! ./medicine.component.html */ "./src/app/medicine/medicine.component.html"),
            styles: [__webpack_require__(/*! ./medicine.component.css */ "./src/app/medicine/medicine.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], MedicineComponent);
    return MedicineComponent;
}());



/***/ }),

/***/ "./src/app/newsale/newsale.component.css":
/*!***********************************************!*\
  !*** ./src/app/newsale/newsale.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-control-clear {\r\n    z-index: 10;\r\n    pointer-events: auto;\r\n    cursor: pointer;\r\n  }"

/***/ }),

/***/ "./src/app/newsale/newsale.component.html":
/*!************************************************!*\
  !*** ./src/app/newsale/newsale.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-10 offset-md-1 col-sm-12\">\n        <div class=\"row\" style=\"margin-top: 100px;\">\n            <div class='col-md-4 col-xs-5'>\n                <div class=\"form-group  has-feedback has-clear\">\n                    <label for=\"sm\">Select Medicine :</label>\n\n                    <div class=\"dropdown\">\n                        <a class=\"\" id=\"triggerId\" data-toggle=\"dropdown\"><input class=\"form-control\" id=\"sm\" type=\"text\"\n                                [(ngModel)]=\"searchTerm\"><span class=\"form-control-clear close form-control-feedback hidden\">X</span></a>\n                        <div class=\"dropdown-menu\" aria-labelledby=\"triggerId\">\n                            <li class=\"dropdown-item\" *ngFor=\"let i of medi | search:searchTerm:s\" (click)=\" display(i)\">{{i.name}}</li>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-4 col-xs-7\">\n                <div class=\"form-group\">\n                    <label for=\"quant\">Quantity :</label>\n                    <input type=\"number\" name=\"quant\" id=\"quant\" class=\"form-control\" placeholder=\"Enter Quantity here ....\" [(ngModel)]=rq (keyup)=\"check()\">\n                    <label class=\"text-danger\" *ngIf=\"b\">Insufficient Quantity</label>\n                </div>\n            </div>\n            <div class=\"col-md-4 col-xs-7 mx-auto\" align=\"center\">\n                \n                <button type=\"button\" class=\"btn btn-info\" (click)=\"addtocart()\">Add to Cart</button>\n            </div>\n        </div>\n        <table class=\"table bg-dark text-light mx-auto\">\n            <thead>\n                <tr>\n                    <th>Medicine Name</th>\n                    <th>Type</th>\n                    <th>Usage</th>\n                    <th>Company</th>\n                    <th>Quantity</th>\n                    <th>Price</th>\n\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td scope=\"row\">{{i.name}}</td>\n                    <td>{{i.type}}</td>\n                    <td>{{i.usage}}</td>\n                    <td>{{i.company}}</td>\n                    <td class=\"{{i.quantity <= 10 ? 'text-danger':'text-light'}}\">{{i.quantity}}</td>\n                    <td>{{i.price}}</td>\n                </tr>\n            </tbody>\n        </table>\n\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/newsale/newsale.component.ts":
/*!**********************************************!*\
  !*** ./src/app/newsale/newsale.component.ts ***!
  \**********************************************/
/*! exports provided: NewsaleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsaleComponent", function() { return NewsaleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewsaleComponent = /** @class */ (function () {
    function NewsaleComponent(ds, hc) {
        this.ds = ds;
        this.hc = hc;
        this.cart = [];
        this.i = {};
        this.b = false;
        this.s = "name";
        this.d = {};
        this.bd = {};
    }
    NewsaleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ds.getMedicines().subscribe(function (a) { return _this.medi = a; });
    };
    NewsaleComponent.prototype.display = function (data) {
        console.log(data);
        this.i = data;
        this.searchTerm = data.name;
        this.aq = data.quantity;
    };
    NewsaleComponent.prototype.check = function () {
        if (this.rq > this.i.quantity) {
            this.b = true;
        }
        else {
            this.b = false;
        }
    };
    NewsaleComponent.prototype.addtocart = function () {
        var d = this.i;
        if (this.rq <= this.i.quantity) {
            d = this.i;
            d.rq = this.rq;
            this.i.quantity = this.i.quantity - this.rq;
            console.log(d);
            this.ds.toCart(d);
            this.bd._id = this.i._id;
            this.bd.quantity = this.i.quantity;
            console.log(this.bd);
            this.hc.put('/app/newsale', this.bd).subscribe(function (r) { });
        }
    };
    NewsaleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-newsale',
            template: __webpack_require__(/*! ./newsale.component.html */ "./src/app/newsale/newsale.component.html"),
            styles: [__webpack_require__(/*! ./newsale.component.css */ "./src/app/newsale/newsale.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], NewsaleComponent);
    return NewsaleComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"background-image: linear-gradient(rgba(0, 0, 0, 0.281),#000); height: 100%;overflow:hidden;\">\n  <div class=\"col\" style=\"margin-bottom: 10%;\">\n    <div class=\"row\">\n      <div class=\"col-4 offset-4 mt-md-5 mb-md-5  pt-md-5 text-light\" style=\" background-image: url(https://supsystic-42d7.kxcdn.com/_assets/forms/img/bg/bg_support_form.jpg);background-size: cover;margin-top:20%;padding: auto;\">\n        <div class=\"container\">\n          <form #rf=\"ngForm\" (ngSubmit)=\"register(rf.value)\">\n            <div class=\"form-group\">\n              <label for=\"pn\">Phone :</label>\n              <input type=\"text\" class=\"form-control\" name=\"phone\" id=\"pn\" placeholder=\"Enter Phone\"  [(ngModel)]=phone  #pn=\"ngModel\" required>\n              <label class=\"text-danger\" *ngIf=\"pn.touched && (pn.pristine || pn.value=='')\">\n              Phone Required\n              </label>\n\n            </div>\n            <div class=\"form-group\">\n              <label for=\"em\">Email :</label>\n              <input type=\"email\" class=\"form-control\" name=\"em\" id=\"em\" placeholder=\"Enter Email\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\" [(ngModel)]=email #e=\"ngModel\" required>\n              <label class=\"text-danger\" *ngIf=\"e.touched && (e.pristine || e.value=='')\">\n                Email Required\n              </label>\n              <label class=\"text-danger\" *ngIf=\"e.invalid && e.dirty && rp.value!=''\">\n                Enter valid Email\n              </label>\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"un\">Donors Full Name :</label>\n              <input type=\"text\" class=\"form-control\" name=\"dfn\" id=\"dfn\" placeholder=\"Enter Full Name\" [(ngModel)]=dfname\n                required #fn=\"ngModel\">\n              <label class=\"text-danger\" *ngIf=\"fn.touched && (fn.pristine || fn.value=='')\">\n                Donors Full Name  Required\n              </label>\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"exampleSelect1\">Blood Group</label>\n              <select name=\"selectbg\" [(ngModel)]=\"selectbg\" class=\"form-control\" id=\"exampleSelect1\">\n                <option *ngFor=\"let item of bg\" [value]=\"item\">{{item}}</option>\n              </select>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"un\">USERNAME :</label>\n              <input type=\"text\" class=\"form-control\" name=\"un\" id=\"un\" placeholder=\"Enter User Name\" [(ngModel)]=uname\n                required #u=\"ngModel\">\n              <label class=\"text-danger\" *ngIf=\"u.touched && (u.pristine || u.value=='')\">\n                UserName Required\n              </label>\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"pw\">Password :</label>\n              <input type=\"password\" class=\"form-control\" name=\"pwd\" id=\"pw\" placeholder=\"Enter Password\" [(ngModel)]=pwd #p=\"ngModel\" required>\n              <div class=\"text-danger\" *ngIf=\"p.touched && (p.pristine || p.value=='')\">\n                Password Required\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"rp\">ReEnter Password :</label>\n              <input type=\"password\" class=\"form-control\" name=\"cpw\" id=\"rp\" placeholder=\"Re-Enter Password\"  [(ngModel)]=rpwd #rp=\"ngModel\"  required>\n              <div class=\"text-danger\" *ngIf=\"rp.touched && (rp.pristine || rp.value=='')\">\n                Password Required\n              </div>\n              <div class=\"text-danger\" *ngIf=\"rp.dirty && ( rp.value!=p.value) && rp.value!=''\">\n                Password not Matched\n              </div>\n            </div>\n            <div class=\"form-check form-check-inline\">\n              <label class=\"form-check-label\">\n                <input class=\"form-check-input\" type=\"radio\" name=\"gender\" value=\"male\" [(ngModel)]=gender required> Male\n              </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n              <label class=\"form-check-label\">\n                <input class=\"form-check-input\" type=\"radio\" name=\"gender\" value=\"female\" [(ngModel)]=gender> Female\n              </label>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"offset-sm-4 col-sm-4\">\n                <button type=\"submit\" class=\"btn btn-success mt-3\" [disabled]=\"rf.invalid || ( rp.value!=p.value)\">Register</button>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n<select [(ngModel)]=\"selectbg\">\n  <option *ngFor=\"let item of bg\" [value]=\"item\">{{item}}</option>\n</select>\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(route, ds) {
        this.route = route;
        this.ds = ds;
        this.uname = null;
        this.email = null;
        this.pwd = null;
        this.rpwd = null;
        this.gender = null;
        this.dfname = null;
        this.selectbg = null;
        this.bg = ['O-', 'O+', 'B-', 'B+', 'A-', 'A+', 'AB-', 'AB+'];
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function (data) {
        console.log(data);
        this.ds.regDB(data).subscribe(function (r) {
            alert(r);
        });
        this.route.navigate(['/log']);
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/route.module.ts":
/*!*********************************!*\
  !*** ./src/app/route.module.ts ***!
  \*********************************/
/*! exports provided: RouteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteModule", function() { return RouteModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _log_log_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./log/log.component */ "./src/app/log/log.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _function_function_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./function/function.component */ "./src/app/function/function.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _medicine_medicine_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./medicine/medicine.component */ "./src/app/medicine/medicine.component.ts");
/* harmony import */ var _sales_sales_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sales/sales.component */ "./src/app/sales/sales.component.ts");
/* harmony import */ var _newsale_newsale_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./newsale/newsale.component */ "./src/app/newsale/newsale.component.ts");
/* harmony import */ var _company_company_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./company/company.component */ "./src/app/company/company.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var RouteModule = /** @class */ (function () {
    function RouteModule() {
    }
    RouteModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot([
                    { path: "", redirectTo: "/log", pathMatch: "full" },
                    { path: "log", component: _log_log_component__WEBPACK_IMPORTED_MODULE_2__["LogComponent"], children: [
                            { path: "", component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
                            { path: "reg", component: _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] },
                        ] },
                    { path: "app", component: _function_function_component__WEBPACK_IMPORTED_MODULE_5__["FunctionComponent"], children: [
                            { path: "home", component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
                            { path: "RequestBlood", component: _medicine_medicine_component__WEBPACK_IMPORTED_MODULE_7__["MedicineComponent"] },
                            { path: "company", component: _company_company_component__WEBPACK_IMPORTED_MODULE_10__["CompanyComponent"] },
                            { path: "sales", component: _sales_sales_component__WEBPACK_IMPORTED_MODULE_8__["SalesComponent"] },
                            { path: "newsale", component: _newsale_newsale_component__WEBPACK_IMPORTED_MODULE_9__["NewsaleComponent"] },
                            { path: "cart", component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_11__["CartComponent"] },
                        ] }
                ])
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], RouteModule);
    return RouteModule;
}());



/***/ }),

/***/ "./src/app/sales/sales.component.css":
/*!*******************************************!*\
  !*** ./src/app/sales/sales.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/sales/sales.component.html":
/*!********************************************!*\
  !*** ./src/app/sales/sales.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "Search<input type=\"text\" class=\"form-control\" [(ngModel)]=\"searchTerm\">\n<div class=\"container mt-5\">\n    <table class=\"table\" border=\"2\">\n        <thead class=\"thead-dark\">\n            <th>Sno</th>\n            <th>Name</th>\n            <th>Age</th>\n        </thead>\n        <tr *ngFor=\"let i of data | search:searchTerm\">\n            <td>{{i.sno}}</td>\n            <td>{{i.name}}</td>\n            <td>{{i.age}}</td>\n        </tr>\n    </table>\n</div>"

/***/ }),

/***/ "./src/app/sales/sales.component.ts":
/*!******************************************!*\
  !*** ./src/app/sales/sales.component.ts ***!
  \******************************************/
/*! exports provided: SalesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesComponent", function() { return SalesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SalesComponent = /** @class */ (function () {
    function SalesComponent() {
    }
    SalesComponent.prototype.ngOnInit = function () {
    };
    SalesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sales',
            template: __webpack_require__(/*! ./sales.component.html */ "./src/app/sales/sales.component.html"),
            styles: [__webpack_require__(/*! ./sales.component.css */ "./src/app/sales/sales.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SalesComponent);
    return SalesComponent;
}());



/***/ }),

/***/ "./src/app/search.pipe.ts":
/*!********************************!*\
  !*** ./src/app/search.pipe.ts ***!
  \********************************/
/*! exports provided: SearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPipe", function() { return SearchPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchPipe = /** @class */ (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (data, searchTerm, s) {
        console.log(data);
        console.log("s value" + "   " + s);
        if (!data || !searchTerm) {
            return data;
        }
        else if (s == "price") {
            return data.filter(function (x) { return x.price.indexOf(searchTerm) !== -1; });
        }
        else {
            return data.filter(function (x) { return x['selectbg'].toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1; });
        }
    };
    SearchPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: "search"
        })
    ], SearchPipe);
    return SearchPipe;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/indriyn/Downloads/ref/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map