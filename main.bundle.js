webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".smoky-title {\n    font-size: 40px;\n    font-size: 8vmin;\n    text-align: center;\n    _width: 660px;\n    width: 100vw;\n}\n\n\nhtml, body { height: 100% }\n\n#wrapper {\n    width: 100%;\n    height: 100%;\n    _background-color: red;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n<table class=\"title\">\n    <tbody><tr><td>\n        <table>\n            <tbody>\n                <tr><td class=\"smoky-title\">{{title}}</td></tr>\n                <tr *ngFor=\"let rowData of readings\">\n                    <readingRow [readingData]=\"rowData\">Reading data here</readingRow>\n                </tr>\n            </tbody>\n        </table>\n    </td></tr></tbody>\n</table>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var database_1 = __webpack_require__("../../../../angularfire2/database/index.js");
var auth_1 = __webpack_require__("../../../../angularfire2/auth/index.js");
var Reading = (function () {
    function Reading() {
    }
    return Reading;
}());
exports.Reading = Reading;
var AppComponent = (function () {
    function AppComponent(afAuth, af) {
        this.afAuth = afAuth;
        this.af = af;
        this.title = 'Smoky';
        this.smoky = af.object('/latest/smoky/1').valueChanges();
        this.weather = af.object('/latest/weather').valueChanges();
        this.readings = [
            { title: 'Temperatur inne', value: af.object('/latest/smoky/1/inside/temperature').valueChanges(), unit: '°C', format: '1.1-1' },
            //          { title: 'Temperatur ute', value: af.object('/latest/weather/outTemp_C').valueChanges(), unit: '°C', format: '1.1-1' },
            { title: 'Temperatur ute', value: af.object('/latest/weather/outTemp_C').valueChanges(), unit: '°C', format: '1.1-1' },
            { title: 'Luftfuktighet inne', value: af.object('/latest/smoky/1/inside/humidity').valueChanges(), unit: '%', format: '1.0-0' },
            { title: 'Røyknivå', value: af.object('/latest/smoky/1/inside/smoke').valueChanges(), unit: '', format: '1.0-0' }
        ];
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [auth_1.AngularFireAuth, database_1.AngularFireDatabase])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
var app_component_1 = __webpack_require__("../../../../../src/app/app.component.ts");
var angularfire2_1 = __webpack_require__("../../../../angularfire2/index.js");
var database_1 = __webpack_require__("../../../../angularfire2/database/index.js");
var reading_component_1 = __webpack_require__("../../../../../src/app/reading.component.ts");
var auth_1 = __webpack_require__("../../../../angularfire2/auth/index.js");
exports.firebaseConfig = {
    apiKey: "AIzaSyDsmLLbMsyoRLbTVmi31MM_yjxlvKVfmtc",
    authDomain: "smoky-c9f1b.firebaseapp.com",
    databaseURL: "https://smoky-c9f1b.firebaseio.com/",
    storageBucket: "smoky-c9f1b.appspot.com",
    messagingSenderId: ""
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                reading_component_1.ReadingComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                angularfire2_1.AngularFireModule.initializeApp(exports.firebaseConfig),
                database_1.AngularFireDatabaseModule,
                auth_1.AngularFireAuthModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "../../../../../src/app/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("../../../../../src/app/app.component.ts"));
__export(__webpack_require__("../../../../../src/app/app.module.ts"));


/***/ }),

/***/ "../../../../../src/app/reading.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n.smoky-label {\n    font-size: 20px;\n    font-size: 4vmin;\n    width: 300px;\n    width: 40vw;\n    text-align: right;\n}\n\n.smoky-value {\n    font-size: 40px;\n    font-size: 8vmin;\n    width: 100px;\n    width: 20vw;\n    text-align: right;\n    color: yellow;\n}\n\n.smoky-unit {\n    font-size: 30px;\n    font-size: 5vmin;\n    width: 60px;\n    width: 40vw;\n    text-align: left;\n    padding-left: 15px;\n}\n\ntd{\n  vertical-align: middle;\n  white-space: nowrap;\n  text-align: right;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/reading.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<td class=\"smoky-label\">\n    {{readingData.title}}:\n</td>\n<td class=\"smoky-value\">\n    {{(readingData.value | async)?.$value | number : readingData.format}}\n</td>\n<td class=\"smoky-unit\">\n    {{readingData.unit}}\n</td>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/reading.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var app_component_1 = __webpack_require__("../../../../../src/app/app.component.ts");
var ReadingComponent = (function () {
    function ReadingComponent() {
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", app_component_1.Reading)
    ], ReadingComponent.prototype, "readingData", void 0);
    ReadingComponent = __decorate([
        core_1.Component({
            selector: 'readingRow',
            template: __webpack_require__("../../../../../src/app/reading.component.html"),
            styles: [__webpack_require__("../../../../../src/app/reading.component.css")]
        })
    ], ReadingComponent);
    return ReadingComponent;
}());
exports.ReadingComponent = ReadingComponent;


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__("../../../../../src/polyfills.ts");
var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
var _1 = __webpack_require__("../../../../../src/app/index.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(_1.AppModule);


/***/ }),

/***/ "../../../../../src/polyfills.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// This file includes polyfills needed by Angular 2 and is loaded before
// the app. You can add your own extra polyfills to this file.
__webpack_require__("../../../../core-js/es6/symbol.js");
__webpack_require__("../../../../core-js/es6/object.js");
__webpack_require__("../../../../core-js/es6/function.js");
__webpack_require__("../../../../core-js/es6/parse-int.js");
__webpack_require__("../../../../core-js/es6/parse-float.js");
__webpack_require__("../../../../core-js/es6/number.js");
__webpack_require__("../../../../core-js/es6/math.js");
__webpack_require__("../../../../core-js/es6/string.js");
__webpack_require__("../../../../core-js/es6/date.js");
__webpack_require__("../../../../core-js/es6/array.js");
__webpack_require__("../../../../core-js/es6/regexp.js");
__webpack_require__("../../../../core-js/es6/map.js");
__webpack_require__("../../../../core-js/es6/set.js");
__webpack_require__("../../../../core-js/es6/reflect.js");
__webpack_require__("../../../../core-js/es7/reflect.js");
__webpack_require__("../../../../zone.js/dist/zone.js");


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map