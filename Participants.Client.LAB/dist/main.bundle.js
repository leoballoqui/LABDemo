webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-common/app-common.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppCommonModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout__ = __webpack_require__("./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppCommonModule = /** @class */ (function () {
    function AppCommonModule() {
    }
    AppCommonModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["o" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["q" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["u" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["m" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["t" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["s" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["v" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatDividerModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatSelectModule */],
            ],
            declarations: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["o" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["q" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["u" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["m" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["t" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["s" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["v" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatDividerModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatSelectModule */],
            ]
        })
    ], AppCommonModule);
    return AppCommonModule;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app-toolbar/app-toolbar.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MenuItem */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppToolbarService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MenuItem = /** @class */ (function () {
    function MenuItem() {
    }
    return MenuItem;
}());

var AppToolbarService = /** @class */ (function () {
    function AppToolbarService(router, titleService) {
        var _this = this;
        this.router = router;
        this.titleService = titleService;
        this.activeMenuItem$ = this.router.events
            .filter(function (e) { return e instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* NavigationEnd */]; })
            .map(function (_) { return _this.router.routerState.root; })
            .map(function (route) {
            var active = _this.lastRouteWithMenuItem(route.root);
            _this.titleService.setTitle(active.title);
            return active;
        });
    }
    AppToolbarService.prototype.getMenuItems = function () {
        return this.router.config
            .filter(function (route) { return route.data && route.data.nav; }) //only add a menu item for routes with a "nav" property set.
            .map(function (route) {
            return {
                path: route.path,
                title: route.data.nav,
                icon: route.data.icon
            };
        });
    };
    AppToolbarService.prototype.lastRouteWithMenuItem = function (route) {
        var lastMenu = undefined;
        do {
            lastMenu = this.extractMenu(route) || lastMenu;
        } while ((route = route.firstChild));
        return lastMenu;
    };
    AppToolbarService.prototype.extractMenu = function (route) {
        var cfg = route.routeConfig;
        return cfg && cfg.data && cfg.data.title
            ? { path: cfg.path, title: cfg.data.title, icon: cfg.data.icon }
            : undefined;
    };
    AppToolbarService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["f" /* Title */]])
    ], AppToolbarService);
    return AppToolbarService;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".alert {\r\n    padding: 1rem;\r\n    margin-bottom: 1rem;\r\n    border: 1px solid transparent;\r\n    border-radius: 5px; }\r\n  \r\n  .alert-heading {\r\n    color: inherit; }\r\n  \r\n  .alert-link {\r\n    font-weight: bold; }\r\n  \r\n  .alert-dismissible {\r\n    padding-right: 2rem; }\r\n  \r\n  .alert-dismissible .close {\r\n      position: relative;\r\n      top: -.125rem;\r\n      right: -1rem;\r\n      color: inherit; }\r\n  \r\n  .alert-success {\r\n    background-color: #dff0d8;\r\n    border-color: #d0e9c6;\r\n    color: #3c763d; }\r\n  \r\n  .alert-success hr {\r\n      border-top-color: #c1e2b3; }\r\n  \r\n  .alert-success .alert-link {\r\n      color: #2b542c; }\r\n  \r\n  .alert-info {\r\n    background-color: #3f51b5;\r\n    border-color: #293685;\r\n    color: white; }\r\n  \r\n  .alert-info hr {\r\n      border-top-color: #a6d5ec; }\r\n  \r\n  .alert-info .alert-link {\r\n      color: #245269; }\r\n  \r\n  .alert-warning {\r\n    background-color: #fcf8e3;\r\n    border-color: #faf2cc;\r\n    color: #8a6d3b; }\r\n  \r\n  .alert-warning hr {\r\n      border-top-color: #f7ecb5; }\r\n  \r\n  .alert-warning .alert-link {\r\n      color: #66512c; }\r\n  \r\n  .alert-danger {\r\n    background-color: #f2dede;\r\n    border-color: #ebcccc;\r\n    color: #a94442; }\r\n  \r\n  .alert-danger hr {\r\n      border-top-color: #e4b9b9; }\r\n  \r\n  .alert-danger .alert-link {\r\n      color: #843534; }"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div style=\"height:2000px\"> -->\n<div fxLayout=\"column\" fxFlex  [class.dark-theme]=\"isDarkTheme\">\n  <mat-sidenav-container>\n      <mat-sidenav #mainSideNav mode=\"side\" opened>\n          <mat-toolbar>\n              <img src=\"../assets/logo.png\" style=\"height:80%\"> {{appName}}\n          </mat-toolbar>\n          <mat-nav-list>\n              <a *ngFor=\"let navItem of mainMenuItems\" \n                 mat-list-item\n                 mat-ripple\n                 [style.position]=\"'relative'\"\n                 routerLinkActive=\"selected\"\n                 [routerLink]=\"[navItem.path]\">\n                  <!-- <mat-icon *ngIf=\"navItem.icon\">{{navItem.icon}}</mat-icon> -->\n                  <span>{{navItem.title}}</span>\n              </a>\n          </mat-nav-list>\n      </mat-sidenav>\n      <mat-toolbar color=\"primary\">\n        <button mat-icon-button (click)=\"mainSideNav.toggle()\">\n            <mat-icon *ngIf=\"mainSideNav.opened\">chevron_left</mat-icon>\n            <mat-icon *ngIf=\"!mainSideNav.opened\">menu</mat-icon>\n        </button>\n        <!-- <mat-icon *ngIf=\"navItem.icon\">{{navItem.icon}}</mat-icon> -->\n        {{(activeMenuItem$ | async)?.title}}\n        <span fxFlex></span>\n\n        <button mat-icon-button [matMenuTriggerFor]=\"themeMenu\">\n            <mat-icon>more_vert</mat-icon>\n        </button>\n    </mat-toolbar>\n    <router-outlet></router-outlet>\n  </mat-sidenav-container> \n  <mat-menu #themeMenu x-position=\"before\">\n      <button mat-menu-item (click)=\"isDarkTheme = !isDarkTheme\">Toggle Theme</button>\n  </mat-menu>\n</div>\n<!-- </div> -->\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_toolbar_app_toolbar_service__ = __webpack_require__("./src/app/app-toolbar/app-toolbar.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(toolbarService) {
        this.toolbarService = toolbarService;
        this.title = 'app';
        this.appName = 'Participants';
        this.isDarkTheme = true;
        this.mainMenuItems = this.toolbarService.getMenuItems();
        this.activeMenuItem$ = this.toolbarService.activeMenuItem$;
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_toolbar_app_toolbar_service__["a" /* AppToolbarService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_common_app_common_module__ = __webpack_require__("./src/app/app-common/app-common.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_toolbar_app_toolbar_service__ = __webpack_require__("./src/app/app-toolbar/app-toolbar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_module__ = __webpack_require__("./src/app/home/home.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home_routing_module__ = __webpack_require__("./src/app/home/home-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__participants_participants_module__ = __webpack_require__("./src/app/participants/participants.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__participants_participants_routing_module__ = __webpack_require__("./src/app/participants/participants-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__doctors_doctors_module__ = __webpack_require__("./src/app/doctors/doctors.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__doctors_doctors_routing_module__ = __webpack_require__("./src/app/doctors/doctors-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__calendar_calendar_module__ = __webpack_require__("./src/app/calendar/calendar.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__calendar_calendar_routing_module__ = __webpack_require__("./src/app/calendar/calendar-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__login_login_module__ = __webpack_require__("./src/app/login/login.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__login_login_routing_module__ = __webpack_require__("./src/app/login/login-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__participants_participants_service__ = __webpack_require__("./src/app/participants/participants.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__calendar_calendar_service__ = __webpack_require__("./src/app/calendar/calendar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__doctors_doctors_service__ = __webpack_require__("./src/app/doctors/doctors.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_common_app_common_module__["a" /* AppCommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_8__home_home_module__["a" /* HomeModule */],
                __WEBPACK_IMPORTED_MODULE_9__home_home_routing_module__["a" /* HomeRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_10__participants_participants_module__["a" /* ParticipantsModule */],
                __WEBPACK_IMPORTED_MODULE_11__participants_participants_routing_module__["a" /* ParticipantsRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_12__doctors_doctors_module__["a" /* DoctorsModule */],
                __WEBPACK_IMPORTED_MODULE_13__doctors_doctors_routing_module__["a" /* DoctorsRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_14__calendar_calendar_module__["a" /* CalendarModule */],
                __WEBPACK_IMPORTED_MODULE_15__calendar_calendar_routing_module__["a" /* CalendarRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_16__login_login_module__["a" /* LoginModule */],
                __WEBPACK_IMPORTED_MODULE_17__login_login_routing_module__["a" /* LoginRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_19__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_19__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_router__["c" /* RouterModule */].forRoot([{
                        path: '', redirectTo: '/login', pathMatch: 'full'
                    }])
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__app_toolbar_app_toolbar_service__["a" /* AppToolbarService */], __WEBPACK_IMPORTED_MODULE_20__participants_participants_service__["a" /* ParticipantsService */], __WEBPACK_IMPORTED_MODULE_21__calendar_calendar_service__["a" /* CalendarService */], __WEBPACK_IMPORTED_MODULE_22__doctors_doctors_service__["a" /* DoctorsService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/calendar/calendar-index/calendar-index.component.css":
/***/ (function(module, exports) {

module.exports = ".btn_date{\r\n    margin-right: 5px;\r\n}\r\n\r\n.date_calendar{\r\n    margin-left: 10px;\r\n    margin-right: 15px;\r\n}\r\n\r\n.div-TimeSeparator{\r\n    padding-bottom: 5px;\r\n    padding-top: 5px;\r\n}\r\n\r\n.div-TimeSeparator label, .div-TimeSeparator mat-progress-bar{\r\n    margin:auto;\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/calendar/calendar-index/calendar-index.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content\" fxLayout=\"row\" fxLayout.sm=\"column\" fxLayout.xs=\"column\" fxLayoutGap=\"16px\">\n  <mat-card fxFlex=\"80\" style=\"padding:0\">\n    <div class=\"content\" fxLayout=\"column\" fxLayout.sm=\"column\" fxLayout.xs=\"column\" fxLayoutGap=\"16px\" style=\"padding:0; background-color: #303030\">\n      <mat-card>\n        <div class=\"content\" fxLayout=\"row\" fxLayout.sm=\"row\" fxLayout.xs=\"row\" fxLayoutGap=\"20px\">\n          <div fxFlex=\"55\" style=\"text-align: left\">\n            <button mat-raised-button class=\"btn_side btn_date\" (click)=\"goToDay(1)\">Last Week</button>\n            <mat-form-field class=\"date_calendar\" color=\"accent\">\n                <input matInput [matDatepicker]=\"picker\" placeholder=\"Week Selector\" name=\"dp_Date\" [(ngModel)]=\"selectedDate\" (dateChange)=\"changeDates()\">\n                <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                <mat-datepicker #picker></mat-datepicker>\n            </mat-form-field>\n            <button mat-raised-button class=\"btn_side btn_date\" (click)=\"goToDay(2)\">Next Week</button>\n          </div>\n          <div fxFlex=\"45\">\n            <mat-chip-list style=\"display:block; margin-top: 13px;\">\n                <mat-chip [selectable]=\"false\" selected=\"false\">From: </mat-chip>\n                <mat-chip [selectable]=\"false\" selected=\"true\" color=\"accent\">{{fromDate | date}}</mat-chip>\n                <mat-chip [selectable]=\"false\" selected=\"false\" style=\"margin-left: 30px\">To: </mat-chip>\n                <mat-chip [selectable]=\"false\" selected=\"true\" color=\"accent\">{{toDate | date}}</mat-chip>\n            </mat-chip-list>\n          </div>\n        </div>\n        <div class=\"content\" fxLayout=\"row\" fxLayout.sm=\"row\" fxLayout.xs=\"row\" fxLayoutGap=\"30px\">\n          <mat-form-field fxFlex=\"30\" color=\"accent\">\n            <mat-select name=\"ddl_Doctor\" placeholder=\"Doctor\" [(ngModel)]=\"selectedDoctor\" (change)=\"doctorSelected()\">\n                <mat-option [value]=\"0\" selected>All</mat-option>\n                <mat-option *ngFor=\"let doctor of doctors\" [value]=\"doctor.ID\">\n                    {{ doctor.FullName }}\n                </mat-option>\n            </mat-select>\n          </mat-form-field>\n        </div>\n      </mat-card>\n      <mat-card class=\"div-week-calendar-container\" *ngIf=\"state=='week'\" >\n        <div *ngFor=\"let item of weekData; let i = index\">\n          <div class=\"div-TimeSeparator\" style=\"vertical-align: middle\" >\n            <div class=\"content\" fxLayout=\"row\" fxLayout.sm=\"row\" fxLayout.xs=\"row\" fxLayoutGap=\"15px\">\n              <label fxFlex=\"25\">{{item.Period}}</label>\n              <mat-progress-bar mode=\"determinate\" [value]=\"item.Percentage\"></mat-progress-bar>\n              <mat-icon (click)=\"selectDay(i)\" matTooltip=\"See Day Details\" style=\"font-size: 2em\">date_range</mat-icon>\n              <mat-icon (click)=\"seeAppointments(i, -1)\" matTooltip=\"See Appointments\" style=\"font-size: 2em\">assignment_ind</mat-icon>\n            </div>\n          </div>\n          <mat-divider></mat-divider>\n        </div>\n      </mat-card>\n      <mat-card class=\"div-week-calendar-container\" *ngIf=\"state=='day'\" >\n        <div>\n            <div class=\"content\" fxLayout=\"row\" fxLayout.sm=\"row\" fxLayout.xs=\"row\" fxLayoutGap=\"0\">\n              <div fxFlex=\"20\">\n                <mat-icon (click)=\"changeDates()\" matTooltip=\"Back to week view\" style=\"font-size: 2em\">reply</mat-icon>\n              </div>\n              <div fxFlex=\"80\">\n                <mat-chip [selectable]=\"true\" selected=\"true\" style=\"margin-right:70px;  font-size: 1.05em\">{{selectedDate | date:'EEEE, MM/dd/yyyy'}} </mat-chip>\n                <mat-chip-list style=\"display:inline-block;\">\n                  <mat-chip [selectable]=\"true\" [selected]=\"dayTime == 'AM'\" color=\"accent\" (click)=\"dayTime = 'AM'\">AM</mat-chip>\n                  <mat-chip [selectable]=\"true\" [selected]=\"dayTime == 'Noon'\" color=\"accent\" (click)=\"dayTime = 'Noon'\">Noon</mat-chip>\n                  <mat-chip [selectable]=\"true\" [selected]=\"dayTime == 'PM'\" color=\"accent\" (click)=\"dayTime = 'PM'\">PM</mat-chip>\n                </mat-chip-list>\n              </div>\n            </div>\n            <mat-divider></mat-divider>\n        </div>\n        <div *ngFor=\"let item of dayData; let i = index\" [hidden]=\"(dayTime == 'AM' && i > 3) || (dayTime == 'Noon' && (i < 4 || i > 7)) || (dayTime == 'PM' && i < 8)\">\n          <div class=\"div-TimeSeparator\" style=\"vertical-align: middle\" ng-show=\"\">\n            <div class=\"content\" fxLayout=\"row\" fxLayout.sm=\"row\" fxLayout.xs=\"row\" fxLayoutGap=\"15px\">\n              <label fxFlex=\"20\">{{item.Period}}</label>\n              <mat-progress-bar mode=\"determinate\" [value]=\"item.Percentage\"></mat-progress-bar>\n              <mat-icon (click)=\"goToAppointment(i)\" matTooltip=\"Add Appointment\" style=\"font-size: 2em\">event</mat-icon>\n              <mat-icon (click)=\"seeAppointments(-1, i)\" matTooltip=\"See Appointments\" style=\"font-size: 2em\">assignment_ind</mat-icon>\n            </div>\n          </div>\n          <mat-divider></mat-divider>\n        </div>\n      </mat-card>\n      <mat-card class=\"div-week-calendar-container\" *ngIf=\"state=='newAppointment'\" >\n        <div class=\"content\" fxLayout=\"row\" fxLayout.sm=\"row\" fxLayout.xs=\"row\" fxLayoutGap=\"0\">\n          <div fxFlex=\"20\">\n            <mat-icon (click)=\"goBackToDay()\" matTooltip=\"Back to day view\" style=\"font-size: 2em\">reply</mat-icon>\n          </div>\n          <div fxFlex=\"60\" style=\"text-align: center\">\n              <mat-chip [selectable]=\"true\" [selected]=\"true\" style=\"margin: 0 auto; font-size: 1.05em\">{{selectedDate | date:'EEEE, MM/dd/yyyy'}} </mat-chip>\n          </div>\n          <div fxFlex=\"20\">\n          </div>\n        </div>\n        <mat-divider></mat-divider>\n        <div class=\"content\" fxLayout=\"row\" fxLayout.sm=\"row\" fxLayout.xs=\"row\" fxLayoutGap=\"30px\">\n          <mat-form-field fxFlex=\"30\" color=\"accent\">\n            <mat-select name=\"ddl_AppDoctor\" placeholder=\"Doctor\" [(ngModel)]=\"selectedAppDoctor\">\n                <mat-option [value]=\"0\" selected>Please Select</mat-option>\n                <mat-option *ngFor=\"let doctor of doctors\" [value]=\"doctor.ID\">\n                    {{ doctor.FullName }}\n                </mat-option>\n            </mat-select>\n          </mat-form-field>\n          <mat-form-field fxFlex=\"30\" color=\"accent\">\n            <mat-select name=\"ddl_AppParticipant\" placeholder=\"Participant\" [(ngModel)]=\"selectedAppParticipant\">\n                <mat-option [value]=\"0\" selected>Please Select</mat-option>\n                <mat-option *ngFor=\"let participant of participants\" [value]=\"participant.ID\">\n                    {{ participant.FullName }}\n                </mat-option>\n            </mat-select>\n          </mat-form-field>\n          <mat-form-field fxFlex=\"30\" color=\"accent\">\n            <mat-select name=\"ddl_AppTime\" placeholder=\"Time Slot\" [(ngModel)]=\"selectedSlot\">\n                <mat-option [value]=\"-1\" selected>Please Select</mat-option>\n                <mat-option *ngFor=\"let item of dayData, let i = index\" [value]=\"i\">\n                    {{ item.Period }}\n                </mat-option>\n            </mat-select>\n          </mat-form-field>\n        </div>\n        <div class=\"content\" fxLayout=\"row\" fxLayout.sm=\"row\" fxLayout.xs=\"row\" fxLayoutGap=\"30px\">\n          <button mat-raised-button class=\"btn_side\" (click)=\"addAppointment()\">Save</button>\n          <button mat-raised-button class=\"btn_side\" (click)=\"goBackToDay()\">Cancel</button>\n        </div>\n      </mat-card>\n    </div>\n  </mat-card>\n  \n  <mat-card fxFlex fxLayout=\"column\" fxLayoutGap=\"14px\">\n    <button mat-raised-button class=\"btn_side\" (click)=\"goToAppointment(0)\">Add New Appointment</button>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./src/app/calendar/calendar-index/calendar-index.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarIndexComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dialogs_dialogs_service__ = __webpack_require__("./src/app/dialogs/dialogs.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__calendar_service__ = __webpack_require__("./src/app/calendar/calendar.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var CalendarIndexComponent = /** @class */ (function () {
    function CalendarIndexComponent(router, http, dialogsService, snackBar, calendarService) {
        this.router = router;
        this.http = http;
        this.dialogsService = dialogsService;
        this.snackBar = snackBar;
        this.selectedDoctor = 0;
        this.state = 'week';
        this.dayTime = 'AM';
        this.selectedSlot = 0;
        this.selectedAppDoctor = 0;
        this.selectedAppParticipant = 0;
        this.calendarService = calendarService;
    }
    CalendarIndexComponent.prototype.ngOnInit = function () {
        this.selectedDate = new Date();
        this.getDoctors();
        this.getParticipants();
        this.changeDates();
    };
    CalendarIndexComponent.prototype.goToDay = function (value) {
        //this.selectedDate = new Date(this.selectedDate);
        if (value == 1) {
            this.selectedDate = new Date(this.selectedDate.setDate(this.selectedDate.getDate() - 7));
        }
        if (value == 2) {
            this.selectedDate = new Date(this.selectedDate.setDate(this.selectedDate.getDate() + 7));
        }
        this.changeDates();
    };
    CalendarIndexComponent.prototype.getDoctors = function () {
        var _this = this;
        this.http.get('http://localhost:23049/api/Doctors/GetDoctors')
            .subscribe(function (data) {
            _this.doctors = data.json();
        }, function (err) {
            console.error(err);
        });
    };
    CalendarIndexComponent.prototype.getParticipants = function () {
        var _this = this;
        this.http.get('http://localhost:23049/api/Participants/GetParticipants')
            .subscribe(function (data) {
            _this.participants = data.json();
        }, function (err) {
            console.error(err);
        });
    };
    CalendarIndexComponent.prototype.doctorSelected = function () {
        this.selectedAppDoctor = this.selectedDoctor;
        this.refreshData();
    };
    CalendarIndexComponent.prototype.refreshData = function () {
        if (this.state == "week")
            this.getWeekData();
        else if (this.state == "day")
            this.getDayData();
    };
    CalendarIndexComponent.prototype.getWeekData = function () {
        var _this = this;
        var link = 'http://localhost:23049/api/Appointments/GetAppointmentsByWeek';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var data = JSON.stringify({
            DoctorID: this.selectedDoctor,
            Date: this.selectedDate,
        });
        this.http.post(link, data, options)
            .subscribe(function (data) {
            _this.weekData = data.json();
        }, function (err) {
            console.error(err);
        });
    };
    CalendarIndexComponent.prototype.getDayData = function () {
        var _this = this;
        var link = 'http://localhost:23049/api/Appointments/GetAppointmentsByDay';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var data = JSON.stringify({
            DoctorID: this.selectedDoctor,
            Date: this.selectedDate,
        });
        this.http.post(link, data, options)
            .subscribe(function (data) {
            _this.dayData = data.json();
        }, function (err) {
            console.error(err);
        });
    };
    CalendarIndexComponent.prototype.changeDates = function () {
        var temp = new Date(this.selectedDate);
        var day = temp.getDay();
        var diff = temp.getDate() - day + (day == 0 ? -6 : 1); // adjust when day is sunday
        this.fromDate = new Date(temp.setDate(diff));
        this.toDate = new Date(temp.setDate(this.fromDate.getDate() + 6));
        this.days = new Array();
        for (var i = 0; i < 7; i++) {
            this.days[i] = new Date(temp.setDate(this.fromDate.getDate() + i));
        }
        this.state = 'week';
        this.getWeekData();
    };
    CalendarIndexComponent.prototype.selectDay = function (selecting) {
        this.state = 'day';
        this.dayTime = 'AM';
        this.selectedDate = new Date(this.selectedDate.setDate(this.fromDate.getDate() + selecting));
        this.getDayData();
    };
    CalendarIndexComponent.prototype.goToAppointment = function (slot) {
        this.state = 'newAppointment';
        this.selectedSlot = slot;
        this.selectedAppDoctor = this.selectedDoctor;
        this.getDayData();
    };
    CalendarIndexComponent.prototype.goBackToDay = function () {
        this.state = 'day';
        this.getDayData();
    };
    CalendarIndexComponent.prototype.addAppointment = function () {
        var _this = this;
        var link = 'http://localhost:23049/api/Appointments/AddAppointment';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var data = JSON.stringify({
            ParticipantID: this.selectedAppParticipant,
            DoctorID: this.selectedAppDoctor,
            Date: this.selectedDate,
            Time: this.selectedSlot
        });
        this.http.post(link, data, options)
            .subscribe(function (data) {
            _this.snackBar.open("Success!", "The appointment was successfully created.", {
                duration: 7000,
            });
            _this.goBackToDay();
        }, function (err) {
            _this.snackBar.open("Error!", "Sorry, an error ocurred while creating the appointment.", {
                duration: 7000,
            });
        });
    };
    CalendarIndexComponent.prototype.seeAppointments = function (day, slot) {
        if (day != -1)
            this.selectedDate = new Date(this.selectedDate.setDate(this.fromDate.getDate() + day));
        this.dialogsService.appointments(this.selectedDate, this.doctors, this.participants, slot, this.selectedDoctor);
    };
    CalendarIndexComponent.prototype.goTo = function (destination) {
        this.router.navigate(['/' + destination]);
    };
    CalendarIndexComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-calendar-index',
            template: __webpack_require__("./src/app/calendar/calendar-index/calendar-index.component.html"),
            styles: [__webpack_require__("./src/app/calendar/calendar-index/calendar-index.component.css")]
        }),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_5__calendar_service__["a" /* CalendarService */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__dialogs_dialogs_service__["a" /* DialogsService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["r" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_5__calendar_service__["a" /* CalendarService */]])
    ], CalendarIndexComponent);
    return CalendarIndexComponent;
}());



/***/ }),

/***/ "./src/app/calendar/calendar-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__calendar_index_calendar_index_component__ = __webpack_require__("./src/app/calendar/calendar-index/calendar-index.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{
        path: 'calendar',
        component: __WEBPACK_IMPORTED_MODULE_2__calendar_index_calendar_index_component__["a" /* CalendarIndexComponent */],
        data: {
            title: 'Calendar',
            nav: 'Calendar'
        }
    },
];
var CalendarRoutingModule = /** @class */ (function () {
    function CalendarRoutingModule() {
    }
    CalendarRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], CalendarRoutingModule);
    return CalendarRoutingModule;
}());



/***/ }),

/***/ "./src/app/calendar/calendar.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_common_app_common_module__ = __webpack_require__("./src/app/app-common/app-common.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__calendar_routing_module__ = __webpack_require__("./src/app/calendar/calendar-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__calendar_index_calendar_index_component__ = __webpack_require__("./src/app/calendar/calendar-index/calendar-index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dialogs_dialogs_module__ = __webpack_require__("./src/app/dialogs/dialogs.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var CalendarModule = /** @class */ (function () {
    function CalendarModule() {
    }
    CalendarModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_common_app_common_module__["a" /* AppCommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__calendar_routing_module__["a" /* CalendarRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__dialogs_dialogs_module__["a" /* DialogsModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__calendar_index_calendar_index_component__["a" /* CalendarIndexComponent */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_5__calendar_index_calendar_index_component__["a" /* CalendarIndexComponent */],
            ]
        })
    ], CalendarModule);
    return CalendarModule;
}());



/***/ }),

/***/ "./src/app/calendar/calendar.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarService; });
var CalendarService = /** @class */ (function () {
    function CalendarService() {
    }
    return CalendarService;
}());



/***/ }),

/***/ "./src/app/dialogs/appointments-dialog/appointments-dialog.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n.div_actionsContainer button{\r\n    width: 30px;\r\n    height: 30px;\r\n}\r\n\r\n.div_actionsContainer button mat-icon{\r\n    vertical-align: text-bottom;\r\n    margin:0;\r\n}\r\n\r\n.status_Canceled{\r\n    color: brown;\r\n}\r\n\r\n.status_Missed{\r\n    color: #FFC000;\r\n}\r\n\r\n.status_Completed{\r\n    color:#03a9f4;\r\n}\r\n\r\n.status_Confirmed{\r\n    color:#3F51B5;\r\n}\r\n"

/***/ }),

/***/ "./src/app/dialogs/appointments-dialog/appointments-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"appointmentsDialog\" class=\"dialog\" style=\"min-width:900px\">\n    <div class=\"content\" fxLayout=\"row\" fxLayout.sm=\"row\" fxLayout.xs=\"row\" fxLayoutGap=\"30px\">\n        <div fxFlex=\"20\">\n            <mat-chip-list></mat-chip-list>\n            <mat-chip [selectable]=\"true\" [selected]=\"true\" style=\"margin-top: 15px; font-size: 1.05em; background-color: #3f51b5\">{{selectedDate | date:'EE, MM/dd/yyyy'}} </mat-chip>\n        </div>\n        <mat-form-field fxFlex=\"30\">\n          <mat-select name=\"ddl_DialogAppDoctor\" placeholder=\"Doctor\" [(ngModel)]=\"selectedDoctor\" (change)=\"filertAppointments()\">\n              <mat-option [value]=\"0\" selected>See All</mat-option>\n              <mat-option *ngFor=\"let doctor of doctors\" [value]=\"doctor.ID\">\n                  {{ doctor.FullName }}\n              </mat-option>\n          </mat-select>\n        </mat-form-field>\n        <mat-form-field fxFlex=\"30\">\n          <mat-select name=\"ddl_DialogAppParticipant\" placeholder=\"Participant\" [(ngModel)]=\"selectedParticipant\" (change)=\"filertAppointments()\">\n              <mat-option [value]=\"0\" selected>See All</mat-option>\n              <mat-option *ngFor=\"let participant of participants\" [value]=\"participant.ID\">\n                  {{ participant.FullName }}\n              </mat-option>\n          </mat-select>\n        </mat-form-field>\n        <mat-form-field fxFlex=\"20\">\n          <mat-select name=\"ddl_DialogAppTime\" placeholder=\"Time Slot\" [(ngModel)]=\"selectedSlot\" (change)=\"filertAppointments()\">\n              <mat-option [value]=\"-1\" selected>See All</mat-option>\n              <mat-option *ngFor=\"let slot of slots, let i = index\" [value]=\"i\">\n                  {{ slot }}\n              </mat-option>\n          </mat-select>\n        </mat-form-field>\n    </div>\n    <mat-divider></mat-divider>\n\n    <div class=\"example-container mat-elevation-z8\">\n        <mat-table #table [dataSource]=\"appointments\">\n        \n            <ng-container matColumnDef=\"id\">\n            <mat-header-cell *matHeaderCellDef></mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.ID}} </mat-cell>\n            </ng-container>\n    \n            <ng-container matColumnDef=\"doctor\">\n            <mat-header-cell *matHeaderCellDef fxFlex=\"19\"> Doctor </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\" fxFlex=\"19\"> {{element.DoctorName}} </mat-cell>\n            </ng-container>\n        \n            <ng-container matColumnDef=\"participant\">\n            <mat-header-cell *matHeaderCellDef fxFlex=\"23\"> Participant </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\" fxFlex=\"23\" [matTooltip]=\"element.ParticipantContactInfo\" style=\"cursor: pointer\"> {{element.ParticipantName}} </mat-cell>\n            </ng-container>\n        \n            <ng-container matColumnDef=\"time\">\n            <mat-header-cell *matHeaderCellDef fxFlex=\"18\"> Time </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\" fxFlex=\"18\"> {{element.Period}} </mat-cell>\n            </ng-container>\n\n            <ng-container matColumnDef=\"status\">\n            <mat-header-cell *matHeaderCellDef fxFlex=\"10\"> Status </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\" fxFlex=\"10\" class=\"status_{{element.StatusName}}\"> {{element.StatusName}} </mat-cell>\n            </ng-container>\n    \n            <ng-container matColumnDef=\"actions\">\n            <mat-header-cell *matHeaderCellDef style=\"text-align: center\"> Actions </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\" class=\"div_actionsContainer\" style=\"text-align: center\">\n                <button (click)=\"notify(element, 'sms')\" matTooltip=\"Notify participant via sms\" mat-icon-button>\n                    <mat-icon>chat</mat-icon>\n                </button>\n                <button (click)=\"notify(element, 'EMail')\" matTooltip=\"Notify participant via EMail\" mat-icon-button>\n                    <mat-icon>mail</mat-icon>\n                </button>\n                <button (click)=\"confirm(element)\" matTooltip=\"Appointment confirmed\" mat-icon-button [disabled]=\"element.Status >= 3\" >\n                    <mat-icon>done</mat-icon>\n                </button>\n                <button (click)=\"complete(element)\" matTooltip=\"Appointment completed\" mat-icon-button [disabled]=\"element.Status >= 4\" >\n                    <mat-icon>done_all</mat-icon>\n                </button>\n                <button (click)=\"miss(element)\" matTooltip=\"Appointment missed\" mat-icon-button [disabled]=\"element.Status >= 5\" >\n                    <mat-icon>report_problem</mat-icon>\n                </button>\n                <button (click)=\"cancel(element)\" matTooltip=\"Appointment missed\" mat-icon-button [disabled]=\"element.Status >= 6\" >\n                    <mat-icon>delete</mat-icon>\n                </button>\n                <button (click)=\"reset(element)\" matTooltip=\"Reset status\" mat-icon-button [disabled]=\"element.Status <= 2\" >\n                    <mat-icon>replay</mat-icon>\n                </button>\n            </mat-cell>\n            </ng-container>\n        \n            <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n            <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n        </mat-table>\n    </div>\n\n    <div style=\"margin-top: 15px\">\n        <button type=\"button\" mat-raised-button  class=\"dialog_button\"\n            (click)=\"dialogRef.close(true)\">OK</button>\n        <button type=\"button\" mat-raised-button class=\"dialog_button\"\n            (click)=\"dialogRef.close()\">Cancel</button>\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/dialogs/appointments-dialog/appointments-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppointmentsDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppointmentsDialogComponent = /** @class */ (function () {
    function AppointmentsDialogComponent(http, snackBar, dialogRef) {
        this.http = http;
        this.snackBar = snackBar;
        this.dialogRef = dialogRef;
        this.selectedSlot = 0;
        this.selectedDoctor = 0;
        this.selectedParticipant = 0;
        this.displayedColumns = ['doctor', 'participant', 'time', 'status', 'actions'];
    }
    AppointmentsDialogComponent.prototype.ngOnInit = function () {
        this.getAppointments();
    };
    AppointmentsDialogComponent.prototype.getAppointments = function () {
        var _this = this;
        var link = 'http://localhost:23049/api/Appointments/GetAppointmentsDetailsByDay';
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.http.post(link, this.selectedDate, options)
            .subscribe(function (data) {
            _this.allAppointments = data.json().appointments;
            _this.filertAppointments();
            _this.slots = data.json().slots;
        }, function (err) {
            console.error(err);
        });
    };
    AppointmentsDialogComponent.prototype.notify = function (app, via) {
        if (app.Status < 2) {
            app.Status = 2;
            app.StatusName = "Notified";
        }
        this.snackBar.open("Success!", "The user was notified via " + via + ".", {
            duration: 5000,
        });
    };
    AppointmentsDialogComponent.prototype.confirm = function (app) {
        app.Status = 3;
        app.StatusName = "Confirmed";
        this.snackBar.open("Success!", "The appointment is confirmed.", {
            duration: 5000,
        });
    };
    AppointmentsDialogComponent.prototype.complete = function (app) {
        app.Status = 4;
        app.StatusName = "Completed";
        this.snackBar.open("Success!", "The appointment is completed.", {
            duration: 5000,
        });
    };
    AppointmentsDialogComponent.prototype.miss = function (app) {
        app.Status = 5;
        app.StatusName = "Missed";
        this.snackBar.open("Success!", "The appointment was marked as 'missed'.", {
            duration: 5000,
        });
    };
    AppointmentsDialogComponent.prototype.cancel = function (app) {
        app.Status = 6;
        app.StatusName = "Canceled";
        this.snackBar.open("Success!", "The appointment was canceled.", {
            duration: 5000,
        });
    };
    AppointmentsDialogComponent.prototype.reset = function (app) {
        app.Status = 1;
        app.StatusName = "Created";
        this.snackBar.open("Success!", "The appointment satus was reset.", {
            duration: 5000,
        });
    };
    AppointmentsDialogComponent.prototype.filertAppointments = function () {
        var _this = this;
        this.appointments = this.allAppointments;
        if (this.selectedDoctor > 0)
            this.appointments = this.appointments.filter(function (app) { return app.DoctorID === _this.selectedDoctor; });
        if (this.selectedParticipant > 0)
            this.appointments = this.appointments.filter(function (app) { return app.ParticipantID === _this.selectedParticipant; });
        if (this.selectedSlot > -1)
            this.appointments = this.appointments.filter(function (app) { return app.Slot === _this.selectedSlot; });
    };
    AppointmentsDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-appointments-dialog',
            template: __webpack_require__("./src/app/dialogs/appointments-dialog/appointments-dialog.component.html"),
            styles: [__webpack_require__("./src/app/dialogs/appointments-dialog/appointments-dialog.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDialogRef */]])
    ], AppointmentsDialogComponent);
    return AppointmentsDialogComponent;
}());



/***/ }),

/***/ "./src/app/dialogs/confirm-dialog/confirm-dialog.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n"

/***/ }),

/***/ "./src/app/dialogs/confirm-dialog/confirm-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"confirmDialog\" class=\"dialog\">\n    <p class=\"lbl_title\">{{ title }}</p>\n    <div class=\"div_content\">\n        <p>{{ message }}</p>\n    </div>\n    \n    <button type=\"button\" mat-raised-button  class=\"dialog_button\"\n        (click)=\"dialogRef.close(true)\">OK</button>\n    <button type=\"button\" mat-raised-button class=\"dialog_button\"\n        (click)=\"dialogRef.close()\">Cancel</button>\n</div>"

/***/ }),

/***/ "./src/app/dialogs/confirm-dialog/confirm-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfirmDialogComponent = /** @class */ (function () {
    function ConfirmDialogComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    ConfirmDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-confirm-dialog',
            template: __webpack_require__("./src/app/dialogs/confirm-dialog/confirm-dialog.component.html"),
            styles: [__webpack_require__("./src/app/dialogs/confirm-dialog/confirm-dialog.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDialogRef */]])
    ], ConfirmDialogComponent);
    return ConfirmDialogComponent;
}());



/***/ }),

/***/ "./src/app/dialogs/dialogs.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_common_app_common_module__ = __webpack_require__("./src/app/app-common/app-common.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__confirm_dialog_confirm_dialog_component__ = __webpack_require__("./src/app/dialogs/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__appointments_dialog_appointments_dialog_component__ = __webpack_require__("./src/app/dialogs/appointments-dialog/appointments-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dialogs_service__ = __webpack_require__("./src/app/dialogs/dialogs.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var DialogsModule = /** @class */ (function () {
    function DialogsModule() {
    }
    DialogsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_common_app_common_module__["a" /* AppCommonModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* FormsModule */],
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__confirm_dialog_confirm_dialog_component__["a" /* ConfirmDialogComponent */], __WEBPACK_IMPORTED_MODULE_4__appointments_dialog_appointments_dialog_component__["a" /* AppointmentsDialogComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_3__confirm_dialog_confirm_dialog_component__["a" /* ConfirmDialogComponent */], __WEBPACK_IMPORTED_MODULE_4__appointments_dialog_appointments_dialog_component__["a" /* AppointmentsDialogComponent */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_3__confirm_dialog_confirm_dialog_component__["a" /* ConfirmDialogComponent */], __WEBPACK_IMPORTED_MODULE_4__appointments_dialog_appointments_dialog_component__["a" /* AppointmentsDialogComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_6__dialogs_service__["a" /* DialogsService */]]
        })
    ], DialogsModule);
    return DialogsModule;
}());



/***/ }),

/***/ "./src/app/dialogs/dialogs.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__confirm_dialog_confirm_dialog_component__ = __webpack_require__("./src/app/dialogs/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__appointments_dialog_appointments_dialog_component__ = __webpack_require__("./src/app/dialogs/appointments-dialog/appointments-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DialogsService = /** @class */ (function () {
    function DialogsService(dialog) {
        this.dialog = dialog;
    }
    DialogsService.prototype.confirm = function (title, message) {
        var dialogRef;
        dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_1__confirm_dialog_confirm_dialog_component__["a" /* ConfirmDialogComponent */]);
        dialogRef.componentInstance.title = title;
        dialogRef.componentInstance.message = message;
        return dialogRef.afterClosed();
    };
    DialogsService.prototype.appointments = function (selectedDate, doctors, participants, slot, selectedDoctor) {
        var dialogRef;
        dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__appointments_dialog_appointments_dialog_component__["a" /* AppointmentsDialogComponent */]);
        dialogRef.componentInstance.selectedDate = selectedDate;
        dialogRef.componentInstance.doctors = doctors;
        dialogRef.componentInstance.participants = participants;
        dialogRef.componentInstance.selectedSlot = slot;
        dialogRef.componentInstance.selectedDoctor = selectedDoctor;
        return dialogRef.afterClosed();
    };
    DialogsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MatDialog */]])
    ], DialogsService);
    return DialogsService;
}());



/***/ }),

/***/ "./src/app/doctors/doctors-details/doctors-details.component.css":
/***/ (function(module, exports) {

module.exports = ".spn_detailField{\r\n    font-style: italic;\r\n    font-size: 1.15em;\r\n}\r\n\r\n.div_detailRow{\r\n    margin-bottom: 25px;\r\n}"

/***/ }),

/***/ "./src/app/doctors/doctors-details/doctors-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content\" fxLayout=\"row\" fxLayout.sm=\"column\" fxLayout.xs=\"column\" fxLayoutGap=\"16px\">\n    <mat-card fxFlex=\"80\">\n     <form class=\"example-form\" >\n      <div class=\"div_detailRow\" layout-gt-sm=\"row\" layout-padding fxLayoutGap=\"16px\">\n        <div class=\"example-full-width\" fxFlex=\"100\">\n          <span>Name: </span><span class=\"spn_detailField\">{{doctor.FullName}}</span>\n        </div>\n      </div>\n        \n      <div class=\"div_detailRow\" layout-gt-sm=\"row\" layout-padding fxLayoutGap=\"16px\">\n        <div class=\"example-full-width\" fxFlex=\"30\">\n          <span>Phone Number: </span><span class=\"spn_detailField\">{{doctor.PhoneNumber | slice:0:3}}-{{doctor.PhoneNumber | slice:3:6}}-{{doctor.PhoneNumber| slice:6:10}}</span>\n        </div>\n      \n        <div class=\"example-full-width\" fxFlex=\"30\">\n          <span>Sec. Phone Number: </span><span class=\"spn_detailField\">{{doctor.SecPhoneNumber | slice:0:3}}-{{doctor.SecPhoneNumber | slice:3:6}}-{{doctor.SecPhoneNumber| slice:6:10}}</span>\n        </div>\n\n        <div class=\"example-full-width\" fxFlex=\"30\">\n          <span>EMail: </span><span class=\"spn_detailField\">{{doctor.EmailAddress}}</span>\n        </div>\n      </div>\n\n      <div class=\"div_detailRow\" layout-gt-sm=\"row\" layout-padding fxLayoutGap=\"16px\">\n        <div class=\"example-full-width\" fxFlex=\"30\">\n            <span>Graduated From: </span><span class=\"spn_detailField\">{{doctor.GraduatedFrom}}</span>\n        </div>\n        <div class=\"example-full-width\" fxFlex=\"70\">\n          <span>Address: </span><span class=\"spn_detailField\">{{doctor.Address}}</span>\n        </div>\n      </div>\n    </form>\n  </mat-card>\n\n  <mat-card fxFlex fxLayout=\"column\" fxLayoutGap=\"14px\">\n    <button mat-raised-button class=\"btn_side\" (click)=\"Save()\">Save</button>\n    <button mat-raised-button class=\"btn_side\" (click)=\"goTo('doctors')\">Back</button>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./src/app/doctors/doctors-details/doctors-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoctorsDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__doctors_service__ = __webpack_require__("./src/app/doctors/doctors.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var DoctorsDetailsComponent = /** @class */ (function () {
    function DoctorsDetailsComponent(router, http, pService) {
        this.router = router;
        this.http = http;
        this.doctorsService = pService;
    }
    DoctorsDetailsComponent.prototype.ngOnInit = function () {
        this.doctor = this.doctorsService.getSelected();
        if (this.doctor === null || this.doctor === undefined)
            this.goTo('doctors');
    };
    DoctorsDetailsComponent.prototype.goTo = function (destination) {
        this.router.navigate(['/' + destination]);
    };
    DoctorsDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-doctors-details',
            template: __webpack_require__("./src/app/doctors/doctors-details/doctors-details.component.html"),
            styles: [__webpack_require__("./src/app/doctors/doctors-details/doctors-details.component.css")]
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_3__doctors_service__["a" /* DoctorsService */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__doctors_service__["a" /* DoctorsService */]])
    ], DoctorsDetailsComponent);
    return DoctorsDetailsComponent;
}());



/***/ }),

/***/ "./src/app/doctors/doctors-edit/doctors-edit.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/doctors/doctors-edit/doctors-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content\" fxLayout=\"row\" fxLayout.sm=\"column\" fxLayout.xs=\"column\" fxLayoutGap=\"16px\">\n  <mat-card fxFlex=\"80\">\n   <form class=\"form_EditDoctor\">\n    <div layout-gt-sm=\"row\" layout-padding fxLayoutGap=\"16px\">\n      <mat-form-field>\n          <mat-select name=\"ddl_Suffix\" placeholder=\"Suffix\" [(ngModel)]=\"doctor.Suffix\" required>\n            <mat-option value=\"Dr.\" selected>Dr.</mat-option>\n            <mat-option value=\"MD.\">MD.</mat-option>\n            <mat-option value=\"MD PHD.\">MD PHD.</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n      <mat-form-field class=\"example-full-width\" >\n        <input matInput name=\"txt_FirstName\" placeholder=\"First Name\" [(ngModel)]=\"doctor.FirstName\" required>\n      </mat-form-field>\n    \n      <mat-form-field class=\"example-full-width\">\n        <input matInput name=\"txt_LastName\" placeholder=\"Last Name\" [(ngModel)]=\"doctor.LastName\" required>\n      </mat-form-field>\n    </div>\n      \n    <div layout-gt-sm=\"row\" layout-padding fxLayoutGap=\"16px\">\n      <mat-form-field class=\"example-full-width\" >\n        <input matInput name=\"txt_Phone\" placeholder=\"Phone Number\" [(ngModel)]=\"doctor.PhoneNumber\" type=\"tel\" required>\n      </mat-form-field>\n    \n      <mat-form-field class=\"example-full-width\" >\n          <input matInput name=\"txt_SecondPhone\" placeholder=\"Secondary Phone Number\" [(ngModel)]=\"doctor.SecPhoneNumber\" type=\"tel\">\n      </mat-form-field>\n\n      <mat-form-field class=\"example-full-width\">\n        <input matInput name=\"emailFormControl\" placeholder=\"Email\" [(ngModel)]=\"doctor.EmailAddress\" [formControl]=\"emailFormControl\"\n               [errorStateMatcher]=\"matcher\" required>\n        <mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">\n          Please enter a valid email address\n        </mat-error>\n        <mat-error *ngIf=\"emailFormControl.hasError('required')\">\n          Email is <strong>required</strong>\n        </mat-error>\n      </mat-form-field>\n    </div> \n\n    <div layout-gt-sm=\"row\" layout-padding fxLayoutGap=\"16px\">\n        <mat-form-field class=\"example-full-width\" style=\"width:30%\">\n            <input matInput placeholder=\"Graduated From\" name=\"txt_graduatedFrom\" [(ngModel)]=\"doctor.GraduatedFrom\">\n          </mat-form-field>\n\n          <mat-form-field class=\"example-full-width\" style=\"width:60%\">\n            <input matInput placeholder=\"Address\" name=\"txt_address\" [(ngModel)]=\"doctor.Address\">\n          </mat-form-field>\n    </div>\n  </form>\n</mat-card>\n\n<mat-card fxFlex fxLayout=\"column\" fxLayoutGap=\"14px\">\n  <button mat-raised-button class=\"btn_side\" (click)=\"save()\">Save</button>\n  <button mat-raised-button class=\"btn_side\" (click)=\"goTo('doctors')\">Back</button>\n</mat-card>\n\n</div>"

/***/ }),

/***/ "./src/app/doctors/doctors-edit/doctors-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MyErrorStateMatcher */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoctorsEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__doctors_service__ = __webpack_require__("./src/app/doctors/doctors.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());

var DoctorsEditComponent = /** @class */ (function () {
    function DoctorsEditComponent(router, http, snackBar, pService) {
        this.router = router;
        this.http = http;
        this.snackBar = snackBar;
        this.emailFormControl = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["j" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["j" /* Validators */].email,
        ]);
        this.matcher = new MyErrorStateMatcher();
        this.doctorsService = pService;
    }
    DoctorsEditComponent.prototype.ngOnInit = function () {
        this.doctor = this.doctorsService.getSelected();
        if (this.doctor === null || this.doctor === undefined)
            this.goTo('doctors');
    };
    DoctorsEditComponent.prototype.save = function () {
        var _this = this;
        var link = 'http://localhost:23049/api/Doctors/UpdateDoctor';
        var data = JSON.stringify(this.doctor);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.http.post(link, data, options)
            .subscribe(function (data) {
            _this.snackBar.open("Success!", "The doctor was successfully inserted.", {
                duration: 10000,
            });
        }, function (error) {
            _this.snackBar.open("Error!", "Sorry, an error ocurred while trying to update the doctor.", {
                duration: 10000,
            });
        });
    };
    DoctorsEditComponent.prototype.goTo = function (destination) {
        this.router.navigate(['/' + destination]);
    };
    DoctorsEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-doctors-edit',
            template: __webpack_require__("./src/app/doctors/doctors-edit/doctors-edit.component.html"),
            styles: [__webpack_require__("./src/app/doctors/doctors-edit/doctors-edit.component.css")]
        }),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_3__doctors_service__["a" /* DoctorsService */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["r" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_3__doctors_service__["a" /* DoctorsService */]])
    ], DoctorsEditComponent);
    return DoctorsEditComponent;
}());



/***/ }),

/***/ "./src/app/doctors/doctors-index/doctors-index.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/doctors/doctors-index/doctors-index.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content\" fxLayout=\"row\" fxLayout.sm=\"column\" fxLayout.xs=\"column\" fxLayoutGap=\"16px\">\n  <mat-card fxFlex=\"80\">\n    <div class=\"example-container mat-elevation-z8\">\n      <mat-table #table [dataSource]=\"dataSource\">\n    \n        <!--- Note that these columns can be defined in any order.\n              The actual rendered columns are set as a property on the row definition\" -->\n    \n        <ng-container matColumnDef=\"id\">\n          <mat-header-cell *matHeaderCellDef></mat-header-cell>\n          <mat-cell *matCellDef=\"let element\"> {{element.ID}} </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"fullName\">\n          <mat-header-cell *matHeaderCellDef fxFlex=\"30\"> Name </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\" fxFlex=\"30\"> {{element.FullName}} </mat-cell>\n        </ng-container>\n    \n        <ng-container matColumnDef=\"phone\">\n          <mat-header-cell *matHeaderCellDef fxFlex=\"20\"> Phone Number </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\" fxFlex=\"20\"> {{element.PhoneNumber | slice:0:3}}-{{element.PhoneNumber | slice:3:6}}-{{element.PhoneNumber| slice:6:10}}</mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"secphone\">\n          <mat-header-cell *matHeaderCellDef fxFlex=\"20\"> Sec Phone Number </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\" fxFlex=\"20\"> {{element.SecPhoneNumber | slice:0:3}}-{{element.SecPhoneNumber | slice:3:6}}-{{element.SecPhoneNumber| slice:6:10}}</mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"email\">\n          <mat-header-cell *matHeaderCellDef fxFlex=\"25\"> EMail </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\" fxFlex=\"25\"> {{element.EmailAddress}} </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"actions\">\n          <mat-header-cell *matHeaderCellDef style=\"text-align: center\" fxFlex=\"15\"> Actions </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\"  style=\"text-align: center\" fxFlex=\"15\"> \n              <mat-icon (click)=\"goToAction('doctordetails', element)\" matTooltip=\"Details\">description</mat-icon>\n              <mat-icon (click)=\"goToAction('editdoctor', element)\" matTooltip=\"Edit\">edit</mat-icon>\n              <mat-icon (click)=\"deleteEntry(element.ID)\" matTooltip=\"Delete\">delete</mat-icon>\n          </mat-cell>\n        </ng-container>\n    \n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n      </mat-table>\n    </div>\n    <!-- <div class=\"alert alert-info\" role=\"alert\"><b>Sorry!</b> No contributions were processed for that plan/plans during the selected period.</div> -->\n    <mat-progress-bar *ngIf=\"loading\" mode=\"indeterminate\"></mat-progress-bar>\n  </mat-card>\n  \n  <mat-card fxFlex fxLayout=\"column\" fxLayoutGap=\"14px\">\n        <!-- (click)=\"isDarkTheme = !isDarkTheme\" -->\n    <button mat-raised-button class=\"btn_side\" (click)=\"goTo('newdoctor')\">Add New Doctor</button>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./src/app/doctors/doctors-index/doctors-index.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoctorsIndexComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dialogs_dialogs_service__ = __webpack_require__("./src/app/dialogs/dialogs.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__doctors_service__ = __webpack_require__("./src/app/doctors/doctors.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var DoctorsIndexComponent = /** @class */ (function () {
    function DoctorsIndexComponent(router, http, dialogsService, snackBar, doctorService) {
        this.router = router;
        this.http = http;
        this.dialogsService = dialogsService;
        this.snackBar = snackBar;
        this.displayedColumns = ['fullName', 'phone', 'secphone', 'email', 'actions'];
        this.dataSource = null;
        this.loading = false;
        this.doctorsService = doctorService;
    }
    DoctorsIndexComponent.prototype.ngOnInit = function () {
        this.refreshData();
    };
    DoctorsIndexComponent.prototype.deleteEntry = function (id) {
        var _this = this;
        this.dialogsService
            .confirm('Please Confirm', 'Are you sure you want to delete this doctor?')
            .subscribe(function (res) {
            if (res == true) {
                var link = 'http://localhost:23049/api/Doctors/DeleteDoctor';
                var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
                var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
                _this.http.post(link, id, options)
                    .subscribe(function (data) {
                    console.log("All Ok!");
                    _this.refreshData();
                    _this.snackBar.open("Success!", "The doctor was successfully deleted.", {
                        duration: 100000,
                    });
                }, function (error) {
                    console.log("Oooops!");
                });
            }
        });
    };
    DoctorsIndexComponent.prototype.refreshData = function () {
        var _this = this;
        this.loading = true;
        this.http.get('http://localhost:23049/api/Doctors/GetDoctors')
            .subscribe(function (data) {
            _this.dataSource = data.json();
            _this.loading = false;
        }, //For Success Response
        function (//For Success Response
            err) {
            console.error(err);
            _this.loading = false;
        } //For Error Response
        );
    };
    DoctorsIndexComponent.prototype.goTo = function (destination) {
        this.router.navigate(['/' + destination]);
    };
    DoctorsIndexComponent.prototype.goToAction = function (destination, iteme) {
        this.doctorsService.setSelected(iteme);
        this.goTo(destination);
    };
    DoctorsIndexComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-doctors-index',
            template: __webpack_require__("./src/app/doctors/doctors-index/doctors-index.component.html"),
            styles: [__webpack_require__("./src/app/doctors/doctors-index/doctors-index.component.css")]
        }),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_5__doctors_service__["a" /* DoctorsService */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__dialogs_dialogs_service__["a" /* DialogsService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["r" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_5__doctors_service__["a" /* DoctorsService */]])
    ], DoctorsIndexComponent);
    return DoctorsIndexComponent;
}());



/***/ }),

/***/ "./src/app/doctors/doctors-new/doctors-new.component.css":
/***/ (function(module, exports) {

module.exports = ".btn_side{\r\n    background-color: #3f51b5;\r\n  }"

/***/ }),

/***/ "./src/app/doctors/doctors-new/doctors-new.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content\" fxLayout=\"row\" fxLayout.sm=\"column\" fxLayout.xs=\"column\" fxLayoutGap=\"16px\">\n    <mat-card fxFlex=\"80\">\n     <form class=\"form_NewDoctor\">\n      <div layout-gt-sm=\"row\" layout-padding fxLayoutGap=\"16px\">\n        <mat-form-field>\n          <mat-select name=\"ddl_Suffix\" placeholder=\"Suffix\" [(ngModel)]=\"suffix\" required>\n            <mat-option value=\"Dr.\" selected>Dr.</mat-option>\n            <mat-option value=\"MD.\">MD.</mat-option>\n            <mat-option value=\"MD PHD.\">MD PHD.</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n        <mat-form-field class=\"example-full-width\" >\n          <input matInput name=\"txt_FirstName\" placeholder=\"First Name\" [(ngModel)]=\"firstName\" required>\n        </mat-form-field>\n      \n        <mat-form-field class=\"example-full-width\">\n          <input matInput name=\"txt_LastName\" placeholder=\"Last Name\" [(ngModel)]=\"lastName\" required>\n        </mat-form-field>\n      </div>\n        \n      <div layout-gt-sm=\"row\" layout-padding fxLayoutGap=\"16px\">\n        <mat-form-field class=\"example-full-width\" >\n          <input matInput name=\"txt_Phone\" placeholder=\"Phone Number\" [(ngModel)]=\"phone\" type=\"tel\" required>\n        </mat-form-field>\n      \n        <mat-form-field class=\"example-full-width\" >\n            <input matInput name=\"txt_SecondPhone\" placeholder=\"Secondary Phone Number\" [(ngModel)]=\"secondaryPhone\" type=\"tel\">\n        </mat-form-field>\n\n        <mat-form-field class=\"example-full-width\">\n          <input matInput name=\"emailFormControl\" placeholder=\"Email\" [(ngModel)]=\"email\" [formControl]=\"emailFormControl\"\n                 [errorStateMatcher]=\"matcher\" required>\n          <mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">\n            Please enter a valid email address\n          </mat-error>\n          <mat-error *ngIf=\"emailFormControl.hasError('required')\">\n            Email is <strong>required</strong>\n          </mat-error>\n        </mat-form-field>\n      </div> \n\n      <div layout-gt-sm=\"row\" layout-padding fxLayoutGap=\"16px\">\n          <mat-form-field class=\"example-full-width\" style=\"width:30%\">\n            <input matInput placeholder=\"Graduated From\" name=\"txt_graduatedFrom\" [(ngModel)]=\"graduatedFrom\">\n          </mat-form-field>\n\n          <mat-form-field class=\"example-full-width\" style=\"width:60%\">\n            <input matInput placeholder=\"Address\" name=\"txt_address\" [(ngModel)]=\"address\">\n          </mat-form-field>\n      </div>\n    </form>\n  </mat-card>\n\n  <mat-card fxFlex fxLayout=\"column\" fxLayoutGap=\"14px\">\n    <button mat-raised-button class=\"btn_side\" (click)=\"save()\">Save</button>\n    <button mat-raised-button class=\"btn_side\" (click)=\"goTo('doctors')\">Back</button>\n  </mat-card>\n\n</div>\n"

/***/ }),

/***/ "./src/app/doctors/doctors-new/doctors-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MyErrorStateMatcher */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoctorsNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());

var DoctorsNewComponent = /** @class */ (function () {
    function DoctorsNewComponent(router, http, snackBar) {
        this.router = router;
        this.http = http;
        this.snackBar = snackBar;
        this.emailFormControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].email,
        ]);
        this.matcher = new MyErrorStateMatcher();
    }
    DoctorsNewComponent.prototype.ngOnInit = function () {
        this.firstName = "Yo D";
        this.lastName = "Yo D";
        this.email = "yod@yo.yo";
        this.phone = "123";
    };
    DoctorsNewComponent.prototype.save = function () {
        var _this = this;
        var link = 'http://localhost:23049/api/Doctors/AddDoctor';
        var data = JSON.stringify({
            FirstName: this.firstName,
            LastName: this.lastName,
            Suffix: this.suffix,
            PhoneNumber: this.phone,
            SecPhoneNumber: this.secondaryPhone,
            EMailAddress: this.email,
            Address: this.address,
            GraduatedFrom: this.graduatedFrom,
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.http.post(link, data, options)
            .subscribe(function (data) {
            _this.snackBar.open("Success!", "The doctor was successfully inserted.", {
                duration: 10000,
            });
            _this.clearComponents();
        }, function (error) {
            _this.snackBar.open("Error!", "Sorry, an error ocurred while trying to add the doctor.", {
                duration: 10000,
            });
        });
    };
    DoctorsNewComponent.prototype.goTo = function (destination) {
        this.router.navigate(['/' + destination]);
    };
    DoctorsNewComponent.prototype.clearComponents = function () {
        this.firstName = "";
        this.lastName = "";
        this.suffix = null;
        this.phone = "";
        this.secondaryPhone = "";
        this.email = "";
        this.address = "";
        this.graduatedFrom = "";
    };
    DoctorsNewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-doctors-new',
            template: __webpack_require__("./src/app/doctors/doctors-new/doctors-new.component.html"),
            styles: [__webpack_require__("./src/app/doctors/doctors-new/doctors-new.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["r" /* MatSnackBar */]])
    ], DoctorsNewComponent);
    return DoctorsNewComponent;
}());



/***/ }),

/***/ "./src/app/doctors/doctors-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoctorsRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__doctors_index_doctors_index_component__ = __webpack_require__("./src/app/doctors/doctors-index/doctors-index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__doctors_new_doctors_new_component__ = __webpack_require__("./src/app/doctors/doctors-new/doctors-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__doctors_details_doctors_details_component__ = __webpack_require__("./src/app/doctors/doctors-details/doctors-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__doctors_edit_doctors_edit_component__ = __webpack_require__("./src/app/doctors/doctors-edit/doctors-edit.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [{
        path: 'doctors',
        component: __WEBPACK_IMPORTED_MODULE_2__doctors_index_doctors_index_component__["a" /* DoctorsIndexComponent */],
        data: {
            title: 'Participants2',
            nav: 'Participants2'
        }
    },
    {
        path: 'newdoctor',
        component: __WEBPACK_IMPORTED_MODULE_3__doctors_new_doctors_new_component__["a" /* DoctorsNewComponent */],
        data: {
            title: 'New Doctor'
        }
    },
    {
        path: 'doctordetails',
        component: __WEBPACK_IMPORTED_MODULE_4__doctors_details_doctors_details_component__["a" /* DoctorsDetailsComponent */],
        data: {
            title: 'Doctor details'
        }
    },
    {
        path: 'editdoctor',
        component: __WEBPACK_IMPORTED_MODULE_5__doctors_edit_doctors_edit_component__["a" /* DoctorsEditComponent */],
        data: {
            title: 'Edit Doctor'
        }
    }
];
var DoctorsRoutingModule = /** @class */ (function () {
    function DoctorsRoutingModule() {
    }
    DoctorsRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], DoctorsRoutingModule);
    return DoctorsRoutingModule;
}());



/***/ }),

/***/ "./src/app/doctors/doctors.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoctorsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_common_app_common_module__ = __webpack_require__("./src/app/app-common/app-common.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__doctors_routing_module__ = __webpack_require__("./src/app/doctors/doctors-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__doctors_index_doctors_index_component__ = __webpack_require__("./src/app/doctors/doctors-index/doctors-index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__doctors_new_doctors_new_component__ = __webpack_require__("./src/app/doctors/doctors-new/doctors-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__doctors_details_doctors_details_component__ = __webpack_require__("./src/app/doctors/doctors-details/doctors-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__doctors_edit_doctors_edit_component__ = __webpack_require__("./src/app/doctors/doctors-edit/doctors-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dialogs_dialogs_module__ = __webpack_require__("./src/app/dialogs/dialogs.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var DoctorsModule = /** @class */ (function () {
    function DoctorsModule() {
    }
    DoctorsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_common_app_common_module__["a" /* AppCommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__doctors_routing_module__["a" /* DoctorsRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_9__dialogs_dialogs_module__["a" /* DialogsModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__doctors_index_doctors_index_component__["a" /* DoctorsIndexComponent */],
                __WEBPACK_IMPORTED_MODULE_6__doctors_new_doctors_new_component__["a" /* DoctorsNewComponent */],
                __WEBPACK_IMPORTED_MODULE_7__doctors_details_doctors_details_component__["a" /* DoctorsDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_8__doctors_edit_doctors_edit_component__["a" /* DoctorsEditComponent */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_5__doctors_index_doctors_index_component__["a" /* DoctorsIndexComponent */],
                __WEBPACK_IMPORTED_MODULE_6__doctors_new_doctors_new_component__["a" /* DoctorsNewComponent */],
                __WEBPACK_IMPORTED_MODULE_7__doctors_details_doctors_details_component__["a" /* DoctorsDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_8__doctors_edit_doctors_edit_component__["a" /* DoctorsEditComponent */],
            ]
        })
    ], DoctorsModule);
    return DoctorsModule;
}());



/***/ }),

/***/ "./src/app/doctors/doctors.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoctorsService; });
var DoctorsService = /** @class */ (function () {
    function DoctorsService() {
    }
    DoctorsService.prototype.getSelected = function () {
        return this.selectedDoctor;
    };
    DoctorsService.prototype.setSelected = function (doctor) {
        this.selectedDoctor = doctor;
    };
    return DoctorsService;
}());



/***/ }),

/***/ "./src/app/home/home-index/home-index.component.css":
/***/ (function(module, exports) {

module.exports = ".div_content{\r\n    padding:0; \r\n    background-color: #303030; \r\n    margin: 12px;\r\n}\r\n\r\n.status_Canceled{\r\n    color: #ff8800;\r\n    font-size: 1.05em;\r\n}\r\n\r\n.status_Missed{\r\n    color: #FFC000;\r\n}\r\n\r\n.status_Completed{\r\n    color:#03a9f4;\r\n}\r\n\r\n.status_Confirmed{\r\n    color:#23C35D;\r\n}\r\n\r\n.mat-table .mat-column-participant{\r\n    cursor: pointer;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/home/home-index/home-index.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content div_content\" fxLayout=\"column\" fxLayout.sm=\"column\" fxLayout.xs=\"column\" fxLayoutGap=\"16px\">\n  <mat-card>\n    <div class=\"content\" fxLayout=\"row\" fxLayout.sm=\"row\" fxLayout.xs=\"row\" fxLayoutGap=\"20px\">\n      <div fxFlex=\"50\" style=\"text-align: left\">\n        <button mat-raised-button class=\"btn_side btn_date\" (click)=\"goToPreviousDay()\" style=\"margin-right: 20px\">Last Day</button>\n        <mat-form-field class=\"date_calendar\" color=\"accent\">\n            <input matInput [matDatepicker]=\"picker\" placeholder=\"Week Selector\" name=\"dp_Date\" [(ngModel)]=\"selectedDate\" (dateChange)=\"getAppointments()\">\n            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n            <mat-datepicker #picker></mat-datepicker>\n        </mat-form-field>\n        <button mat-raised-button class=\"btn_side btn_date\" (click)=\"goToNextDay()\" style=\"margin-left: 20px\">Next Day</button>\n      </div>\n      <div fxFlex=\"25\">\n        <mat-form-field color=\"accent\">\n          <mat-select name=\"ddl_Doctor\" placeholder=\"Doctor\" [(ngModel)]=\"selectedDoctor\" (change)=\"filertAppointments()\">\n              <mat-option [value]=\"0\" selected>All</mat-option>\n              <mat-option *ngFor=\"let doctor of doctors\" [value]=\"doctor.ID\">\n                  {{ doctor.FullName }}\n              </mat-option>\n          </mat-select>\n        </mat-form-field>\n      </div>\n      <div fxFlex=\"25\">\n        <mat-form-field class=\"example-full-width\" color=\"accent\">\n          <input matInput name=\"txt_participant\" placeholder=\"Search by participant\" [(ngModel)]=\"participant\" (keyup)=\"filertAppointments()\">\n        </mat-form-field>\n      </div>\n    </div>\n  </mat-card>\n  <mat-card class=\"div-week-calendar-container\">\n      <div class=\"example-container mat-elevation-z8\" *ngIf=\"!loading\">\n          <mat-table #table [dataSource]=\"appointments\" *ngIf=\"appointments.length > 0\">\n          \n              <ng-container matColumnDef=\"id\">\n              <mat-header-cell *matHeaderCellDef></mat-header-cell>\n              <mat-cell *matCellDef=\"let element\"> {{element.ID}} </mat-cell>\n              </ng-container>\n      \n              <ng-container matColumnDef=\"doctor\">\n              <mat-header-cell *matHeaderCellDef fxFlex=\"19\"> Doctor </mat-header-cell>\n              <mat-cell *matCellDef=\"let element\" fxFlex=\"19\"> {{element.DoctorName}} </mat-cell>\n              </ng-container>\n          \n              <ng-container matColumnDef=\"participant\">\n                <mat-header-cell *matHeaderCellDef fxFlex=\"28\"> Participant </mat-header-cell>\n                <mat-cell *matCellDef=\"let element\" fxFlex=\"28\"  [matTooltip]=\"element.ParticipantContactInfo\"> \n                  <span *ngIf=\"!element.info\">{{element.ParticipantName}}</span>\n                  <span *ngIf=\"element.info\">{{element.ParticipantContactInfo}}</span>\n                  <mat-icon (click)=\"element.info = !element.info\" style=\"vertical-align: middle\">contact_phone</mat-icon>\n                </mat-cell>\n              </ng-container>\n          \n              <ng-container matColumnDef=\"time\">\n              <mat-header-cell *matHeaderCellDef fxFlex=\"15\"> Time </mat-header-cell>\n              <mat-cell *matCellDef=\"let element\" fxFlex=\"15\"> {{element.Period}} </mat-cell>\n              </ng-container>\n  \n              <ng-container matColumnDef=\"status\">\n              <mat-header-cell *matHeaderCellDef fxFlex=\"7\"> Status </mat-header-cell>\n              <mat-cell *matCellDef=\"let element\" fxFlex=\"7\" class=\"status_{{element.StatusName}}\"> {{element.StatusName}} </mat-cell>\n              </ng-container>\n      \n              <ng-container matColumnDef=\"actions\">\n              <mat-header-cell *matHeaderCellDef style=\"text-align: center\"> Actions </mat-header-cell>\n              <mat-cell *matCellDef=\"let element\" class=\"div_actionsContainer\" style=\"text-align: center\">\n                  <button (click)=\"notify(element, 'sms')\" matTooltip=\"Notify participant via sms\" mat-icon-button>\n                      <mat-icon>chat</mat-icon>\n                  </button>\n                  <button (click)=\"notify(element, 'EMail')\" matTooltip=\"Notify participant via EMail\" mat-icon-button>\n                      <mat-icon>mail</mat-icon>\n                  </button>\n                  <button (click)=\"confirm(element)\" matTooltip=\"Appointment confirmed\" mat-icon-button [disabled]=\"element.Status >= 3\" >\n                      <mat-icon>done</mat-icon>\n                  </button>\n                  <button (click)=\"complete(element)\" matTooltip=\"Appointment completed\" mat-icon-button [disabled]=\"element.Status >= 4\" >\n                      <mat-icon>done_all</mat-icon>\n                  </button>\n                  <button (click)=\"miss(element)\" matTooltip=\"Appointment missed\" mat-icon-button [disabled]=\"element.Status >= 5\" >\n                      <mat-icon>report_problem</mat-icon>\n                  </button>\n                  <button (click)=\"cancel(element)\" matTooltip=\"Appointment missed\" mat-icon-button [disabled]=\"element.Status >= 6\" >\n                      <mat-icon>delete</mat-icon>\n                  </button>\n                  <button (click)=\"reset(element)\" matTooltip=\"Reset status\" mat-icon-button [disabled]=\"element.Status <= 2\" >\n                      <mat-icon>replay</mat-icon>\n                  </button>\n              </mat-cell>\n              </ng-container>\n          \n              <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n              <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n          </mat-table>\n          <div class=\"alert alert-info\" role=\"alert\" *ngIf=\"appointments.length == 0\"><b>Sorry!</b> No contributions were processed for that plan/plans during the selected period.</div>\n      </div>\n      <mat-progress-bar *ngIf=\"loading\" mode=\"indeterminate\"></mat-progress-bar>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home-index/home-index.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeIndexComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeIndexComponent = /** @class */ (function () {
    function HomeIndexComponent(http, snackBar) {
        this.http = http;
        this.snackBar = snackBar;
        this.selectedDoctor = 0;
        this.participant = "";
        this.displayedColumns = ['doctor', 'participant', 'time', 'status', 'actions'];
    }
    HomeIndexComponent.prototype.ngOnInit = function () {
        this.selectedDate = new Date();
        this.getDoctors();
        this.getAppointments();
    };
    HomeIndexComponent.prototype.getDoctors = function () {
        var _this = this;
        this.http.get('http://localhost:23049/api/Doctors/GetDoctors')
            .subscribe(function (data) {
            _this.doctors = data.json();
        }, function (err) {
            console.error(err);
        });
    };
    HomeIndexComponent.prototype.getAppointments = function () {
        var _this = this;
        var link = 'http://localhost:23049/api/Appointments/GetAppointmentsDetailsByDay';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.loading = true;
        this.http.post(link, this.selectedDate, options)
            .subscribe(function (data) {
            _this.allAppointments = data.json().appointments;
            _this.filertAppointments();
            _this.loading = false;
        }, function (err) {
            console.error(err);
            _this.loading = false;
        });
    };
    HomeIndexComponent.prototype.notify = function (app, via) {
        if (app.Status < 2) {
            app.Status = 2;
            app.StatusName = "Notified";
        }
        this.snackBar.open("Success!", "The user was notified via " + via + ".", {
            duration: 5000,
        });
    };
    HomeIndexComponent.prototype.confirm = function (app) {
        app.Status = 3;
        app.StatusName = "Confirmed";
        this.snackBar.open("Success!", "The appointment is confirmed.", {
            duration: 5000,
        });
    };
    HomeIndexComponent.prototype.complete = function (app) {
        app.Status = 4;
        app.StatusName = "Completed";
        this.snackBar.open("Success!", "The appointment is completed.", {
            duration: 5000,
        });
    };
    HomeIndexComponent.prototype.miss = function (app) {
        app.Status = 5;
        app.StatusName = "Missed";
        this.snackBar.open("Success!", "The appointment was marked as 'missed'.", {
            duration: 5000,
        });
    };
    HomeIndexComponent.prototype.cancel = function (app) {
        app.Status = 6;
        app.StatusName = "Canceled";
        this.snackBar.open("Success!", "The appointment was canceled.", {
            duration: 5000,
        });
    };
    HomeIndexComponent.prototype.reset = function (app) {
        app.Status = 1;
        app.StatusName = "Created";
        this.snackBar.open("Success!", "The appointment satus was reset.", {
            duration: 5000,
        });
    };
    HomeIndexComponent.prototype.filertAppointments = function () {
        var _this = this;
        this.appointments = this.allAppointments;
        var participantText = this.participant.trim().toLowerCase();
        if (this.selectedDoctor > 0)
            this.appointments = this.appointments.filter(function (app) { return app.DoctorID === _this.selectedDoctor; });
        if (participantText != "")
            this.appointments = this.appointments.filter(function (app) { return app.ParticipantName.toLowerCase().includes(participantText); });
    };
    HomeIndexComponent.prototype.goToPreviousDay = function () {
        this.selectedDate = new Date(this.selectedDate.setDate(this.selectedDate.getDate() - 1));
        this.getAppointments();
    };
    HomeIndexComponent.prototype.goToNextDay = function () {
        this.selectedDate = new Date(this.selectedDate.setDate(this.selectedDate.getDate() + 1));
        this.getAppointments();
    };
    HomeIndexComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home-index',
            template: __webpack_require__("./src/app/home/home-index/home-index.component.html"),
            styles: [__webpack_require__("./src/app/home/home-index/home-index.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["r" /* MatSnackBar */]])
    ], HomeIndexComponent);
    return HomeIndexComponent;
}());



/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_index_home_index_component__ = __webpack_require__("./src/app/home/home-index/home-index.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_2__home_index_home_index_component__["a" /* HomeIndexComponent */],
        data: {
            title: 'Home',
            nav: 'Home'
        }
    },
];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "./src/app/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_common_app_common_module__ = __webpack_require__("./src/app/app-common/app-common.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_routing_module__ = __webpack_require__("./src/app/home/home-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_index_home_index_component__ = __webpack_require__("./src/app/home/home-index/home-index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_common_app_common_module__["a" /* AppCommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__home_routing_module__["a" /* HomeRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* FormsModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__home_index_home_index_component__["a" /* HomeIndexComponent */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__home_index_home_index_component__["a" /* HomeIndexComponent */],
            ]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/login/login-index/login-index.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login-index/login-index.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content div_content\" fxLayout=\"column\" fxLayout.sm=\"column\" fxLayout.xs=\"column\" fxLayoutGap=\"16px\">\n  <mat-card *ngIf=\"isLogging\">\n    <div class=\"content\" fxLayout=\"row\" fxLayout.sm=\"row\" fxLayout.xs=\"row\" fxLayoutGap=\"20px\">\n      <div fxFlex=\"25\">\n        <mat-form-field class=\"example-full-width\" color=\"accent\">\n            <input matInput name=\"txt_participant\" placeholder=\"Email\" [(ngModel)]=\"userID\">\n          </mat-form-field>\n      </div>\n      <div fxFlex=\"25\">\n        <mat-form-field class=\"example-full-width\" color=\"accent\">\n          <input matInput name=\"txt_participant\" placeholder=\"Password\" [(ngModel)]=\"password\" type=\"password\">\n        </mat-form-field>\n      </div>\n      <div fxFlex=\"50\" style=\"text-align: left\">\n        <button mat-raised-button class=\"btn_side btn_date\" (click)=\"login()\" style=\"margin-right: 20px\">Login</button>\n        <button mat-raised-button class=\"btn_side btn_date\" (click)=\"isLogging = false\" style=\"margin-left: 20px\">Register</button>\n      </div>\n    </div>\n  </mat-card>\n  <mat-card *ngIf=\"!isLogging\">\n    <div class=\"content\" fxLayout=\"row\" fxLayout.sm=\"row\" fxLayout.xs=\"row\" fxLayoutGap=\"20px\">\n      <div fxFlex=\"25\">\n        <mat-form-field class=\"example-full-width\" color=\"accent\">\n            <input matInput name=\"txt_participant\" placeholder=\"Email\" [(ngModel)]=\"userID\">\n          </mat-form-field>\n      </div>\n      <div fxFlex=\"25\">\n        <mat-form-field class=\"example-full-width\" color=\"accent\">\n          <input matInput name=\"txt_participant\" placeholder=\"Password\" [(ngModel)]=\"password\" type=\"password\">\n        </mat-form-field>\n      </div>\n      <div fxFlex=\"25\">\n        <mat-form-field class=\"example-full-width\" color=\"accent\">\n          <input matInput name=\"txt_participant\" placeholder=\"Confirm Password\" [(ngModel)]=\"confirmPassword\" type=\"password\">\n        </mat-form-field>\n      </div>\n      <div fxFlex=\"25\" style=\"text-align: left\">\n        <button mat-raised-button class=\"btn_side btn_date\" (click)=\"register()\" style=\"margin-right: 20px\">Register</button>\n        <button mat-raised-button class=\"btn_side btn_date\" (click)=\"isLogging = true\" style=\"margin-left: 20px\">Login</button>\n      </div>\n    </div>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login-index/login-index.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginIndexComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginIndexComponent = /** @class */ (function () {
    function LoginIndexComponent(http, snackBar) {
        this.http = http;
        this.snackBar = snackBar;
        this.isLogging = true;
        this.userID = 'leoballoqui@leo.com';
        this.password = 'Sponsor123!';
    }
    LoginIndexComponent.prototype.ngOnInit = function () {
    };
    LoginIndexComponent.prototype.register = function () {
        var _this = this;
        var link = 'http://localhost:23049/api/Account/Register';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var data = JSON.stringify({
            Email: this.userID,
            Password: this.password,
            ConfirmPassword: this.confirmPassword,
        });
        this.http.post(link, data, options)
            .subscribe(function (data) {
            _this.snackBar.open("Success!", "The user was successfully created.", {
                duration: 7000,
            });
        }, function (err) {
            _this.snackBar.open("Error!", "Sorry, an error ocurred while creating the user.", {
                duration: 7000,
            });
        });
    };
    LoginIndexComponent.prototype.login = function () {
        var _this = this;
        var link = 'http://localhost:23049/Token';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var data = JSON.stringify({
            grant_type: 'password',
            client_id: 'web',
            username: this.userID,
            password: this.password
        });
        this.http.post(link, data, options)
            .subscribe(function (data) {
            _this.snackBar.open("Success!", "The user was successfully created." + data.json().access_token, {
                duration: 7000,
            });
        }, function (err) {
            alert(err.json());
            _this.snackBar.open("Error!", "Sorry, an error ocurred while creating the user.", {
                duration: 7000,
            });
        });
    };
    LoginIndexComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login-index',
            template: __webpack_require__("./src/app/login/login-index/login-index.component.html"),
            styles: [__webpack_require__("./src/app/login/login-index/login-index.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["r" /* MatSnackBar */]])
    ], LoginIndexComponent);
    return LoginIndexComponent;
}());



/***/ }),

/***/ "./src/app/login/login-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_index_login_index_component__ = __webpack_require__("./src/app/login/login-index/login-index.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_2__login_index_login_index_component__["a" /* LoginIndexComponent */],
        data: {
            title: 'Login',
            nav: 'Login'
        }
    },
];
var LoginRoutingModule = /** @class */ (function () {
    function LoginRoutingModule() {
    }
    LoginRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], LoginRoutingModule);
    return LoginRoutingModule;
}());



/***/ }),

/***/ "./src/app/login/login.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_common_app_common_module__ = __webpack_require__("./src/app/app-common/app-common.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_routing_module__ = __webpack_require__("./src/app/login/login-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_index_login_index_component__ = __webpack_require__("./src/app/login/login-index/login-index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_common_app_common_module__["a" /* AppCommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__login_routing_module__["a" /* LoginRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* FormsModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__login_index_login_index_component__["a" /* LoginIndexComponent */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__login_index_login_index_component__["a" /* LoginIndexComponent */],
            ]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

/***/ "./src/app/participants/participants-details/participants-details.component.css":
/***/ (function(module, exports) {

module.exports = ".spn_detailField{\r\n    font-style: italic;\r\n    font-size: 1.05em;\r\n}\r\n\r\n.div_detailRow{\r\n    margin-bottom: 25px;\r\n}"

/***/ }),

/***/ "./src/app/participants/participants-details/participants-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content\" fxLayout=\"row\" fxLayout.sm=\"column\" fxLayout.xs=\"column\" fxLayoutGap=\"16px\">\n    <mat-card fxFlex=\"80\">\n     <form class=\"example-form\" >\n      <div class=\"div_detailRow\" layout-gt-sm=\"row\" layout-padding fxLayoutGap=\"16px\">\n        <mat-chip-list style=\"display:none\"></mat-chip-list>\n        <div class=\"example-full-width\" fxFlex=\"30\">\n          <span>First Name: </span><mat-chip [selectable]=\"false\" selected=\"false\" class=\"spn_detailField\">{{participant.FirstName}}</mat-chip>\n        </div>\n      \n        <div class=\"example-full-width\" fxFlex=\"30\">\n          <span>Last Name: </span><mat-chip [selectable]=\"false\" selected=\"false\" class=\"spn_detailField\">{{participant.LastName}}</mat-chip>\n        </div>\n\n        <div class=\"example-full-width\" fxFlex=\"30\">\n          <span>Date of Birth: </span><mat-chip [selectable]=\"false\" selected=\"false\" class=\"spn_detailField\">{{participant.DOB | date}}</mat-chip>\n        </div>\n      </div>\n        \n      <div class=\"div_detailRow\" layout-gt-sm=\"row\" layout-padding fxLayoutGap=\"16px\">\n        <div class=\"example-full-width\" fxFlex=\"30\">\n          <span>Phone #: </span><mat-chip [selectable]=\"false\" selected=\"false\" class=\"spn_detailField\">{{participant.PhoneNumber | slice:0:3}}-{{participant.PhoneNumber | slice:3:6}}-{{participant.PhoneNumber| slice:6:10}}</mat-chip>  \n        </div>\n      \n        <div class=\"example-full-width\" fxFlex=\"30\">\n          <span>Sec. Phone #: </span><mat-chip [selectable]=\"false\" selected=\"false\" class=\"spn_detailField\">{{participant.SecPhoneNumber | slice:0:3}}-{{participant.SecPhoneNumber | slice:3:6}}-{{participant.SecPhoneNumber| slice:6:10}}</mat-chip>  \n        </div>\n\n        <div class=\"example-full-width\" fxFlex=\"30\">\n          <span>EMail: </span><mat-chip [selectable]=\"false\" selected=\"false\" class=\"spn_detailField\">{{participant.EmailAddress}}</mat-chip>\n        </div>\n      </div>\n\n      <div class=\"div_detailRow\" layout-gt-sm=\"row\" layout-padding fxLayoutGap=\"16px\">\n        <div class=\"example-full-width\" fxFlex=\"90\">\n          <span>Address: </span><mat-chip [selectable]=\"false\" selected=\"false\" class=\"spn_detailField\">{{participant.Address}}</mat-chip>\n        </div>\n      </div>\n    </form>\n  </mat-card>\n\n  <mat-card fxFlex fxLayout=\"column\" fxLayoutGap=\"14px\">\n    <button mat-raised-button class=\"btn_side\" (click)=\"Save()\">Save</button>\n    <button mat-raised-button class=\"btn_side\" (click)=\"goTo('participants')\">Back</button>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./src/app/participants/participants-details/participants-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParticipantsDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__participants_service__ = __webpack_require__("./src/app/participants/participants.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var ParticipantsDetailsComponent = /** @class */ (function () {
    function ParticipantsDetailsComponent(router, http, pService) {
        this.router = router;
        this.http = http;
        this.participantsService = pService;
    }
    ParticipantsDetailsComponent.prototype.ngOnInit = function () {
        this.participant = this.participantsService.getSelected();
        if (this.participant === null || this.participant === undefined)
            this.goTo('participants');
    };
    ParticipantsDetailsComponent.prototype.goTo = function (destination) {
        this.router.navigate(['/' + destination]);
    };
    ParticipantsDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-participants-details',
            template: __webpack_require__("./src/app/participants/participants-details/participants-details.component.html"),
            styles: [__webpack_require__("./src/app/participants/participants-details/participants-details.component.css")]
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_3__participants_service__["a" /* ParticipantsService */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__participants_service__["a" /* ParticipantsService */]])
    ], ParticipantsDetailsComponent);
    return ParticipantsDetailsComponent;
}());



/***/ }),

/***/ "./src/app/participants/participants-edit/participants-edit.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/participants/participants-edit/participants-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content\" fxLayout=\"row\" fxLayout.sm=\"column\" fxLayout.xs=\"column\" fxLayoutGap=\"16px\">\n  <mat-card fxFlex=\"80\">\n   <form class=\"form_EditParticipant\">\n    <div layout-gt-sm=\"row\" layout-padding fxLayoutGap=\"16px\">\n      <mat-form-field class=\"example-full-width\" >\n        <input matInput name=\"txt_FirstName\" placeholder=\"First Name\" [(ngModel)]=\"participant.FirstName\" required>\n      </mat-form-field>\n    \n      <mat-form-field class=\"example-full-width\">\n        <input matInput name=\"txt_LastName\" placeholder=\"Last Name\" [(ngModel)]=\"participant.LastName\" required>\n      </mat-form-field>\n\n      <mat-form-field>\n        <input matInput [matDatepicker]=\"picker\" placeholder=\"DOB\" name=\"dp_DOB\" [(ngModel)]=\"participant.DOB\" required>\n        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n        <mat-datepicker #picker></mat-datepicker>\n      </mat-form-field>\n    </div>\n      \n    <div layout-gt-sm=\"row\" layout-padding fxLayoutGap=\"16px\">\n      <mat-form-field class=\"example-full-width\" >\n        <input matInput name=\"txt_Phone\" placeholder=\"Phone Number\" [(ngModel)]=\"participant.PhoneNumber\" type=\"tel\" required>\n      </mat-form-field>\n    \n      <mat-form-field class=\"example-full-width\" >\n          <input matInput name=\"txt_SecondPhone\" placeholder=\"Secondary Phone Number\" [(ngModel)]=\"participant.SecPhoneNumber\" type=\"tel\">\n      </mat-form-field>\n\n      <mat-form-field class=\"example-full-width\">\n        <input matInput name=\"emailFormControl\" placeholder=\"Email\" [(ngModel)]=\"participant.EmailAddress\" [formControl]=\"emailFormControl\"\n               [errorStateMatcher]=\"matcher\" required>\n        <mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">\n          Please enter a valid email address\n        </mat-error>\n        <mat-error *ngIf=\"emailFormControl.hasError('required')\">\n          Email is <strong>required</strong>\n        </mat-error>\n      </mat-form-field>\n    </div> \n\n    <div layout-gt-sm=\"row\" layout-padding fxLayoutGap=\"16px\">\n        <mat-form-field class=\"example-full-width\" style=\"width:100%\" >\n          <input matInput placeholder=\"Address\" name=\"txt_address\" [(ngModel)]=\"participant.Address\">\n        </mat-form-field>\n    </div>\n  </form>\n</mat-card>\n\n<mat-card fxFlex fxLayout=\"column\" fxLayoutGap=\"14px\">\n  <button mat-raised-button class=\"btn_side\" (click)=\"save()\">Save</button>\n  <button mat-raised-button class=\"btn_side\" (click)=\"goTo('participants')\">Back</button>\n</mat-card>\n\n</div>"

/***/ }),

/***/ "./src/app/participants/participants-edit/participants-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MyErrorStateMatcher */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParticipantsEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__participants_service__ = __webpack_require__("./src/app/participants/participants.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());

var ParticipantsEditComponent = /** @class */ (function () {
    function ParticipantsEditComponent(router, http, snackBar, pService) {
        this.router = router;
        this.http = http;
        this.snackBar = snackBar;
        this.emailFormControl = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["j" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["j" /* Validators */].email,
        ]);
        this.matcher = new MyErrorStateMatcher();
        this.participantsService = pService;
    }
    ParticipantsEditComponent.prototype.ngOnInit = function () {
        this.participant = this.participantsService.getSelected();
        if (this.participant === null || this.participant === undefined)
            this.goTo('participants');
    };
    ParticipantsEditComponent.prototype.save = function () {
        var _this = this;
        var link = 'http://localhost:23049/api/Participants/UpdateParticipant';
        var data = JSON.stringify(this.participant);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.http.post(link, data, options)
            .subscribe(function (data) {
            _this.snackBar.open("Success!", "The participant was successfully inserted.", {
                duration: 10000,
            });
        }, function (error) {
            _this.snackBar.open("Error!", "Sorry, an error ocurred while trying to update the participant.", {
                duration: 10000,
            });
        });
    };
    ParticipantsEditComponent.prototype.goTo = function (destination) {
        this.router.navigate(['/' + destination]);
    };
    ParticipantsEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-participants-edit',
            template: __webpack_require__("./src/app/participants/participants-edit/participants-edit.component.html"),
            styles: [__webpack_require__("./src/app/participants/participants-edit/participants-edit.component.css")]
        }),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_3__participants_service__["a" /* ParticipantsService */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["r" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_3__participants_service__["a" /* ParticipantsService */]])
    ], ParticipantsEditComponent);
    return ParticipantsEditComponent;
}());



/***/ }),

/***/ "./src/app/participants/participants-index/participants-index.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/participants/participants-index/participants-index.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content\" fxLayout=\"row\" fxLayout.sm=\"column\" fxLayout.xs=\"column\" fxLayoutGap=\"16px\">\n  <mat-card fxFlex=\"80\">\n    <div class=\"example-container mat-elevation-z8\" *ngIf=\"!loading\">\n      <mat-table #table [dataSource]=\"dataSource\">\n    \n        <!--- Note that these columns can be defined in any order.\n              The actual rendered columns are set as a property on the row definition\" -->\n    \n        <ng-container matColumnDef=\"id\">\n          <mat-header-cell *matHeaderCellDef></mat-header-cell>\n          <mat-cell *matCellDef=\"let element\"> {{element.ID}} </mat-cell>\n        </ng-container>\n\n        <!-- Position Column -->\n        <ng-container matColumnDef=\"firstName\">\n          <mat-header-cell *matHeaderCellDef fxFlex=\"19\"> First Name </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\" fxFlex=\"19\"> {{element.FirstName}} </mat-cell>\n        </ng-container>\n    \n        <!-- Name Column -->\n        <ng-container matColumnDef=\"lastName\">\n          <mat-header-cell *matHeaderCellDef fxFlex=\"20\"> Last Name </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\" fxFlex=\"20\"> {{element.LastName}} </mat-cell>\n        </ng-container>\n    \n        <!-- Weight Column -->\n        <ng-container matColumnDef=\"dob\">\n          <mat-header-cell *matHeaderCellDef fxFlex=\"13\"> DOB </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\" fxFlex=\"13\"> {{element.DOB | date}} </mat-cell>\n        </ng-container>\n    \n        <!-- Symbol Column -->\n        <ng-container matColumnDef=\"email\">\n          <mat-header-cell *matHeaderCellDef fxFlex=\"20\"> EMail </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\" fxFlex=\"20\"> {{element.EmailAddress}} </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"phone\">\n          <mat-header-cell *matHeaderCellDef fxFlex=\"15\"> Phone Number </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\" fxFlex=\"15\"> {{element.PhoneNumber | slice:0:3}}-{{element.PhoneNumber | slice:3:6}}-{{element.PhoneNumber| slice:6:10}}</mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"actions\">\n          <mat-header-cell *matHeaderCellDef fxFlex=\"13\" style=\"text-align: center\"> Actions </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\" fxFlex=\"13\" style=\"text-align: center\"> \n              <mat-icon (click)=\"goToAction('participantdetails', element)\" matTooltip=\"Details\">description</mat-icon>\n              <mat-icon (click)=\"goToAction('editparticipant', element)\" matTooltip=\"Edit\">edit</mat-icon>\n              <mat-icon (click)=\"deleteEntry(element.ID)\" matTooltip=\"Delete\">delete</mat-icon>\n          </mat-cell>\n        </ng-container>\n    \n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n      </mat-table>\n    </div>\n    <!-- <div class=\"alert alert-info\" role=\"alert\"><b>Sorry!</b> No contributions were processed for that plan/plans during the selected period.</div> -->\n    <mat-progress-bar *ngIf=\"loading\" mode=\"indeterminate\"></mat-progress-bar>\n  </mat-card>\n  \n  <mat-card fxFlex fxLayout=\"column\" fxLayoutGap=\"14px\">\n    <button mat-raised-button class=\"btn_side\" (click)=\"goTo('newparticipant')\">Add New Participant</button>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./src/app/participants/participants-index/participants-index.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParticipantsIndexComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dialogs_dialogs_service__ = __webpack_require__("./src/app/dialogs/dialogs.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__participants_service__ = __webpack_require__("./src/app/participants/participants.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var ParticipantsIndexComponent = /** @class */ (function () {
    function ParticipantsIndexComponent(router, http, dialogsService, snackBar, pService) {
        this.router = router;
        this.http = http;
        this.dialogsService = dialogsService;
        this.snackBar = snackBar;
        this.displayedColumns = ['firstName', 'lastName', 'dob', 'email', 'phone', 'actions'];
        this.dataSource = null;
        this.loading = false;
        this.participantsService = pService;
    }
    ParticipantsIndexComponent.prototype.ngOnInit = function () {
        this.refreshData();
    };
    ParticipantsIndexComponent.prototype.deleteEntry = function (id) {
        var _this = this;
        this.dialogsService
            .confirm('Please Confirm', 'Are you sure you want to delete this participant?')
            .subscribe(function (res) {
            if (res == true) {
                var link = 'http://localhost:23049/api/Participants/DeleteParticipant';
                var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
                var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
                _this.http.post(link, id, options)
                    .subscribe(function (data) {
                    console.log("All Ok!");
                    _this.refreshData();
                    _this.snackBar.open("Success!", "The participant was successfully deleted.", {
                        duration: 100000,
                    });
                }, function (error) {
                    console.log("Oooops!");
                });
            }
        });
    };
    ParticipantsIndexComponent.prototype.refreshData = function () {
        var _this = this;
        this.loading = true;
        //this.http.get('http://localhost:23049/api/Participants/GetParticipants')
        this.http.get('/LABDemoAPI/api/Participants/GetParticipants')
            .subscribe(function (data) {
            _this.dataSource = data.json();
            _this.loading = false;
        }, //For Success Response
        function (//For Success Response
            err) {
            console.error(err);
            _this.loading = false;
        } //For Error Response
        );
    };
    ParticipantsIndexComponent.prototype.goTo = function (destination) {
        this.router.navigate(['/' + destination]);
    };
    ParticipantsIndexComponent.prototype.goToAction = function (destination, /*id: string = ''*/ iteme) {
        /*this.dataSource.forEach(m => {
          if(m.ID == id)
            item = m;
        });*/
        this.participantsService.setSelected(iteme);
        this.goTo(destination);
    };
    ParticipantsIndexComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-participants-index',
            template: __webpack_require__("./src/app/participants/participants-index/participants-index.component.html"),
            styles: [__webpack_require__("./src/app/participants/participants-index/participants-index.component.css")]
        }),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_5__participants_service__["a" /* ParticipantsService */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__dialogs_dialogs_service__["a" /* DialogsService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["r" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_5__participants_service__["a" /* ParticipantsService */]])
    ], ParticipantsIndexComponent);
    return ParticipantsIndexComponent;
}());



/***/ }),

/***/ "./src/app/participants/participants-new/participants-new.component.css":
/***/ (function(module, exports) {

module.exports = ".btn_side{\r\n    background-color: #3f51b5;\r\n  }"

/***/ }),

/***/ "./src/app/participants/participants-new/participants-new.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content\" fxLayout=\"row\" fxLayout.sm=\"column\" fxLayout.xs=\"column\" fxLayoutGap=\"16px\">\n    <mat-card fxFlex=\"80\">\n     <form class=\"form_NewParticipant\">\n      <div layout-gt-sm=\"row\" layout-padding fxLayoutGap=\"16px\">\n        <mat-form-field class=\"example-full-width\" color=\"accent\">\n          <input matInput name=\"txt_FirstName\" placeholder=\"First Name\" [(ngModel)]=\"firstName\" required>\n        </mat-form-field>\n      \n        <mat-form-field class=\"example-full-width\" color=\"accent\">\n          <input matInput name=\"txt_LastName\" placeholder=\"Last Name\" [(ngModel)]=\"lastName\" required>\n        </mat-form-field>\n\n        <mat-form-field color=\"accent\">\n          <input matInput [matDatepicker]=\"picker\" placeholder=\"DOB\" name=\"dp_DOB\" [(ngModel)]=\"dob\" required>\n          <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n          <mat-datepicker #picker></mat-datepicker>\n        </mat-form-field>\n      </div>\n        \n      <div layout-gt-sm=\"row\" layout-padding fxLayoutGap=\"16px\">\n        <mat-form-field class=\"example-full-width\" color=\"accent\">\n          <input matInput name=\"txt_Phone\" placeholder=\"Phone Number\" [(ngModel)]=\"phone\" type=\"tel\" required>\n        </mat-form-field>\n      \n        <mat-form-field class=\"example-full-width\" color=\"accent\">\n            <input matInput name=\"txt_SecondPhone\" placeholder=\"Secondary Phone Number\" [(ngModel)]=\"secondaryPhone\" type=\"tel\">\n        </mat-form-field>\n\n        <mat-form-field class=\"example-full-width\" color=\"accent\">\n          <input matInput name=\"emailFormControl\" placeholder=\"Email\" [(ngModel)]=\"eMail\" [formControl]=\"emailFormControl\"\n                 [errorStateMatcher]=\"matcher\" required>\n          <mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">\n            Please enter a valid email address\n          </mat-error>\n          <mat-error *ngIf=\"emailFormControl.hasError('required')\">\n            Email is <strong>required</strong>\n          </mat-error>\n        </mat-form-field>\n      </div> \n\n      <div layout-gt-sm=\"row\" layout-padding fxLayoutGap=\"16px\">\n          <mat-form-field class=\"example-full-width\" style=\"width:100%\" color=\"accent\">\n            <input matInput placeholder=\"Address\" name=\"txt_address\" [(ngModel)]=\"address\">\n          </mat-form-field>\n      </div>\n    </form>\n  </mat-card>\n\n  <mat-card fxFlex fxLayout=\"column\" fxLayoutGap=\"14px\">\n    <button mat-raised-button class=\"btn_side\" (click)=\"save()\">Save</button>\n    <button mat-raised-button class=\"btn_side\" (click)=\"goTo('participants')\">Back</button>\n  </mat-card>\n\n</div>\n"

/***/ }),

/***/ "./src/app/participants/participants-new/participants-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MyErrorStateMatcher */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParticipantsNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());

var ParticipantsNewComponent = /** @class */ (function () {
    function ParticipantsNewComponent(router, http, snackBar) {
        this.router = router;
        this.http = http;
        this.snackBar = snackBar;
        this.emailFormControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].email,
        ]);
        this.matcher = new MyErrorStateMatcher();
    }
    ParticipantsNewComponent.prototype.ngOnInit = function () {
        this.firstName = "Yo";
        this.lastName = "Yo";
        this.eMail = "yo@yo.yo";
        this.phone = "123";
    };
    ParticipantsNewComponent.prototype.save = function () {
        var _this = this;
        var link = 'http://localhost:23049/api/Participants/AddParticipant';
        var data = JSON.stringify({
            FirstName: this.firstName,
            LastName: this.lastName,
            DOB: this.dob,
            PhoneNumber: this.phone,
            SecPhoneNumber: this.secondaryPhone,
            EMailAddress: this.eMail,
            Address: this.address,
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.http.post(link, data, options)
            .subscribe(function (data) {
            _this.snackBar.open("Success!", "The participant was successfully inserted.", {
                duration: 10000,
            });
            _this.clearComponents();
        }, function (error) {
            _this.snackBar.open("Error!", "Sorry, an error ocurred while trying to add the participant.", {
                duration: 10000,
            });
        });
    };
    ParticipantsNewComponent.prototype.goTo = function (destination) {
        this.router.navigate(['/' + destination]);
    };
    ParticipantsNewComponent.prototype.clearComponents = function () {
        this.firstName = "";
        this.lastName = "";
        this.dob = null;
        this.phone = "";
        this.secondaryPhone = "";
        this.eMail = "";
        this.address = "";
    };
    ParticipantsNewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-participants-new',
            template: __webpack_require__("./src/app/participants/participants-new/participants-new.component.html"),
            styles: [__webpack_require__("./src/app/participants/participants-new/participants-new.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["r" /* MatSnackBar */]])
    ], ParticipantsNewComponent);
    return ParticipantsNewComponent;
}());



/***/ }),

/***/ "./src/app/participants/participants-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParticipantsRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__participants_index_participants_index_component__ = __webpack_require__("./src/app/participants/participants-index/participants-index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__participants_new_participants_new_component__ = __webpack_require__("./src/app/participants/participants-new/participants-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__participants_details_participants_details_component__ = __webpack_require__("./src/app/participants/participants-details/participants-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__participants_edit_participants_edit_component__ = __webpack_require__("./src/app/participants/participants-edit/participants-edit.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [{
        path: 'participants',
        component: __WEBPACK_IMPORTED_MODULE_2__participants_index_participants_index_component__["a" /* ParticipantsIndexComponent */],
        data: {
            title: 'Participants',
            nav: 'Participants'
        }
    },
    {
        path: 'newparticipant',
        component: __WEBPACK_IMPORTED_MODULE_3__participants_new_participants_new_component__["a" /* ParticipantsNewComponent */],
        data: {
            title: 'New Participant'
        }
    },
    {
        path: 'participantdetails',
        component: __WEBPACK_IMPORTED_MODULE_4__participants_details_participants_details_component__["a" /* ParticipantsDetailsComponent */],
        data: {
            title: 'Participant details'
        }
    },
    {
        path: 'editparticipant',
        component: __WEBPACK_IMPORTED_MODULE_5__participants_edit_participants_edit_component__["a" /* ParticipantsEditComponent */],
        data: {
            title: 'Edit Participant'
        }
    }
];
var ParticipantsRoutingModule = /** @class */ (function () {
    function ParticipantsRoutingModule() {
    }
    ParticipantsRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], ParticipantsRoutingModule);
    return ParticipantsRoutingModule;
}());



/***/ }),

/***/ "./src/app/participants/participants.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParticipantsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_common_app_common_module__ = __webpack_require__("./src/app/app-common/app-common.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__participants_routing_module__ = __webpack_require__("./src/app/participants/participants-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__participants_index_participants_index_component__ = __webpack_require__("./src/app/participants/participants-index/participants-index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__participants_new_participants_new_component__ = __webpack_require__("./src/app/participants/participants-new/participants-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__participants_details_participants_details_component__ = __webpack_require__("./src/app/participants/participants-details/participants-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__participants_edit_participants_edit_component__ = __webpack_require__("./src/app/participants/participants-edit/participants-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dialogs_dialogs_module__ = __webpack_require__("./src/app/dialogs/dialogs.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var ParticipantsModule = /** @class */ (function () {
    function ParticipantsModule() {
    }
    ParticipantsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_common_app_common_module__["a" /* AppCommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__participants_routing_module__["a" /* ParticipantsRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_9__dialogs_dialogs_module__["a" /* DialogsModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__participants_index_participants_index_component__["a" /* ParticipantsIndexComponent */],
                __WEBPACK_IMPORTED_MODULE_6__participants_new_participants_new_component__["a" /* ParticipantsNewComponent */],
                __WEBPACK_IMPORTED_MODULE_7__participants_details_participants_details_component__["a" /* ParticipantsDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_8__participants_edit_participants_edit_component__["a" /* ParticipantsEditComponent */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_5__participants_index_participants_index_component__["a" /* ParticipantsIndexComponent */],
                __WEBPACK_IMPORTED_MODULE_6__participants_new_participants_new_component__["a" /* ParticipantsNewComponent */],
                __WEBPACK_IMPORTED_MODULE_7__participants_details_participants_details_component__["a" /* ParticipantsDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_8__participants_edit_participants_edit_component__["a" /* ParticipantsEditComponent */],
            ]
        })
    ], ParticipantsModule);
    return ParticipantsModule;
}());



/***/ }),

/***/ "./src/app/participants/participants.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParticipantsService; });
var ParticipantsService = /** @class */ (function () {
    function ParticipantsService() {
    }
    ParticipantsService.prototype.getSelected = function () {
        return this.selectedparticipant;
    };
    ParticipantsService.prototype.setSelected = function (participant) {
        this.selectedparticipant = participant;
    };
    return ParticipantsService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map