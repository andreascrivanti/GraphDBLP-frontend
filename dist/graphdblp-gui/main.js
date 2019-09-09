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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\" class=\"mb-3\">\n  <img alt=\"GraphDBLP Logo\" src=\"../assets/images/graphdblp_logo.png\">\n  <h1>\n      A Graph-based instance of DBLP\n  </h1>\n\n  <a href=\"https://github.com/fabiomercorio/GraphDBLP\">Shared on GIT</a>\n\n</div>\n<div class=\"container\">\n  <app-input-form></app-input-form>\n</div>"

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
        this.title = 'graphdblp-gui';
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _input_form_input_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./input-form/input-form.component */ "./src/app/input-form/input-form.component.ts");
/* harmony import */ var _results_view_results_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./results-view/results-view.component */ "./src/app/results-view/results-view.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _result_view_result_view_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./result-view/result-view.component */ "./src/app/result-view/result-view.component.ts");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_12__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_8__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faSearch"]);
_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_8__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faArrowsAltH"]);
_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_8__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faUser"]);
_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_8__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faUsers"]);
_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_8__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faSyncAlt"]);



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _input_form_input_form_component__WEBPACK_IMPORTED_MODULE_4__["InputFormComponent"],
                _results_view_results_view_component__WEBPACK_IMPORTED_MODULE_5__["ResultsViewComponent"],
                _result_view_result_view_component__WEBPACK_IMPORTED_MODULE_11__["ResultViewComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_12__["Ng4LoadingSpinnerModule"].forRoot(),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"].forRoot()
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/graphdblp-api.service.ts":
/*!******************************************!*\
  !*** ./src/app/graphdblp-api.service.ts ***!
  \******************************************/
/*! exports provided: GraphdblpApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphdblpApiService", function() { return GraphdblpApiService; });
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


var GraphdblpApiService = /** @class */ (function () {
    function GraphdblpApiService(http) {
        this.http = http;
    }
    GraphdblpApiService.prototype.executeQuery = function (queryNumber, params) {
        var queryString = '';
        var neo4jAuth = '';
        var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Accept': 'application/json; charset=UTF-8',
            'Content-Type': 'application/json; charset=UTF-8',
            'Authorization': neo4jAuth
        });
        switch (queryNumber) {
            case 1:
                queryString = 'MATCH (k:keyword)-[s:has_research_topic]-(a:author) WHERE k.key = {key}  WITH k,a,s ORDER BY ' +
                    's.relevance desc, s.score desc limit {limit} ' +
                    'MATCH path=(k)-[:contains]-(p:publication)-[t:authored]-(a)-[:contributed_to]-(v:venue) WHERE t.venue = v.name ' +
                    'RETURN k.key,a.name,count(path) as freq,s.score,s.relevance, collect(distinct v.name) as venues ' +
                    'ORDER BY s.relevance desc, s.score desc, freq desc limit {limit}';
                // params is like {'key':'database','limit':10}
                return this.http.post('http://149.132.150.72:7171/db/data/transaction/commit', {
                    'statements': [{
                            'statement': queryString,
                            'parameters': params
                        }]
                }, { headers: httpHeaders });
            case 2:
                var authorNameForlabels = params.author_name.split(' ').join('_');
                queryString = 'MATCH (b:author)-[l:has_research_topic]->(k:keyword)<-[r:has_research_topic]-(a:author) ' +
                    'WHERE lower(a.name)={author_name} WITH b,k,l.score as sugg_author_score, l.relevance as sugg_author_relevance,' +
                    'r.score as author_score,r.relevance as author_relevance ' +
                    'ORDER BY sugg_author_relevance desc, sugg_author_score desc ' +
                    'WITH collect([b,author_relevance, author_score, sugg_author_relevance, sugg_author_score]) as researchers_data, k ' +
                    'UNWIND researchers_data[0..{limit}] AS r WITH k, (r[0]).name as name, r[3] as sugg_author_relevance, r[4] as sugg_author_score, ' +
                    'r[1] as author_relevance, r[2] as author_score OPTIONAL MATCH (k)-[s:similar_to]-(z:keyword_sim) ' +
                    'WHERE toFloat(s.score) >= {score_value}' +
                    'RETURN k.key as Key, name as B_name, sugg_author_relevance as B_rel, sugg_author_score as B_score,' +
                    'author_relevance as ' + authorNameForlabels + '_rel, author_score as ' + authorNameForlabels + '_score,' +
                    'collect(z.key+s.score) as Keys_Sim ' +
                    'ORDER BY ' + authorNameForlabels + '_score desc, ' + authorNameForlabels + '_rel desc, B_rel desc';
                // params is like {"author_name":author_name.lower(), "limit":limit, "score_value":score_value}
                return this.http.post('http://149.132.150.72:7171/db/data/transaction/commit', {
                    'statements': [{
                            'statement': queryString,
                            'parameters': params
                        }]
                }, { headers: httpHeaders });
            case 3:
                queryString = 'match (a:venue)-[s:similarity]-(b:venue) ' +
                    ' where lower(a.name) = {venue_name} and toFloat(s.jaccard_percent) >= {threshold_value} with a, b as neighbours ' +
                    'match (a)-[ll:similarity]-()-[r:similarity]-()-[rr:similarity]-(a) where id(a) <> id(neighbours) ' +
                    'and id(neighbours) <> 0 and toFloat(ll.jaccard_percent) >= {threshold_value} and toFloat(rr.jaccard_percent) >= {threshold_value} ' +
                    'with count(distinct neighbours) as n , count(distinct r) as r, collect(distinct neighbours.name) as nn ' +
                    'return n,r, r/(n*1.0*(n-1)/2) as lcc, nn';
                // params is like {"venue_name":venue_name.lower(), "threshold_value":threshold_value}
                return this.http.post('http://149.132.150.72:7171/db/data/transaction/commit', {
                    'statements': [{
                            'statement': queryString,
                            'parameters': params
                        }]
                }, { headers: httpHeaders });
        }
    };
    GraphdblpApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], GraphdblpApiService);
    return GraphdblpApiService;
}());



/***/ }),

/***/ "./src/app/input-form/input-form.component.css":
/*!*****************************************************!*\
  !*** ./src/app/input-form/input-form.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2lucHV0LWZvcm0vaW5wdXQtZm9ybS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/input-form/input-form.component.html":
/*!******************************************************!*\
  !*** ./src/app/input-form/input-form.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng4-loading-spinner [timeout]=\"300000\"> </ng4-loading-spinner>\n<ngb-accordion [closeOthers]=\"true\" activeIds=\"static-1\">\n  <ngb-panel id=\"static-1\" title=\"Q1 - Keywords Discovery\">\n    <ng-template ngbPanelContent>\n        <p><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://github.com/fabiomercorio/GraphDBLP/blob/master/images/graphdblp_q1.jpeg\"><img src=\"https://github.com/fabiomercorio/GraphDBLP/raw/master/images/graphdblp_q1.jpeg\" alt=\"Q1: Keywords Discovery\" style=\"max-width:100%;\"></a></p>\n        <p>This allows users to identify the most prolific authors in the DBLP community for a given keyword. \n          This requires to specify also the keyword to be used and the limit value for results. \n          Example: <i>keyword 'multimedia' with limit 10</i> will perform this query using multimedia as keyword and collecting top 10 \n          results. The meaning of 'relevance', 'score' and 'prolificness' are discussed in the paper.\n          A list of current keywords stored in GraphDBLP (inheridted from FacetedDBLP project!) can be found \n          <a href=\"https://github.com/fabiomercorio/GraphDBLP/blob/master/keywords.csv\">here</a></p>  \n      <form class=\"mt-3\">\n        <div class=\"form-group\">\n          <div class=\"input-group mb-3\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\" id=\"q1-basic-addon1\"><fa-icon [icon]=\"['fas','search']\"></fa-icon></span>\n            </div>\n            <input name=\"q1Keyword\" [(ngModel)]=\"q1Keyword\" type=\"text\" class=\"form-control\" placeholder=\"Keyword\" [editable]=\"false\" [ngbTypeahead]=\"searchKeyword\" [resultFormatter]=\"simpleStringFormatter\" [inputFormatter]=\"simpleStringFormatter\" aria-label=\"Keyword\" aria-describedby=\"q1-basic-addon1\">\n            <div *ngIf=\"keywordLoading\" class=\"input-group-append\">\n              <span class=\"input-group-text\">\n                <fa-icon [icon]=\"['fas', 'sync-alt']\" [spin]=\"true\"></fa-icon>\n              </span>\n            </div>\n          </div>\n\n        </div>\n        \n        <div class=\"form-group\">\n          <div class=\"input-group mb-3\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\" id=\"q1-basic-addon2\"><fa-icon [icon]=\"['fas','arrows-alt-h']\"></fa-icon></span>\n            </div>\n            <input name=\"q1Limit\" [(ngModel)]=\"q1Limit\" type=\"number\" class=\"form-control\" placeholder=\"Result Limit\" aria-label=\"Result Limit\" aria-describedby=\"q1-basic-addon2\">\n          </div>\n        </div>\n\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"executeQuery(1,{'key': q1Keyword.name,'limit': q1Limit})\" [disabled]=\"!q1Keyword || !q1Limit\">Run</button>\n      </form>\n\n    </ng-template>\n  </ngb-panel>\n  <ngb-panel id=\"static-2\" title=\"Q2 - Author Publication Records Comparison\">\n      <ng-template ngbPanelContent>\n        <p><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://github.com/fabiomercorio/GraphDBLP/blob/master/images/graphdblp_q2.jpeg\"><img src=\"https://github.com/fabiomercorio/GraphDBLP/raw/master/images/graphdblp_q2.jpeg\" alt=\"Q2: Author Publication Records Comparison\" style=\"max-width:100%;\"></a></p>\n        <p>This query starts from the keywords describing an author’s research activity i.e., the keywords connected through \n          the <code>has_research_topic</code> relationship. For each keyword, the most proficient author in the field is identified, \n          and the related data are retrieved: (prolific) author name, score, relevance, and related keywords. \n          This requires to specify also the keyword to be used, the max number of researchers to be considered for each keyword \n          and the similarity threshold value for similar keywords. Example: Author 'John von Neumann' with result limit 3 and threshold 0.4 \n          will perform this query profiling the publication record of John von Neumann and retrieving up to 3 top researchers \n          for each keyword appearing the in profile of John von Neumann. In addition, for each keyword, only keywords with a similarity \n          value grater than 0.4 will be returned</p>\n        <form class=\"mt-3\">\n          <div class=\"form-group\">\n            <div class=\"input-group mb-3\">\n              <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\" id=\"q2-basic-addon1\"><fa-icon [icon]=\"['fas','user']\"></fa-icon></span>\n              </div>\n              <input name=\"q2AuthorName\" [(ngModel)]=\"q2AuthorName\" type=\"text\" class=\"form-control\" placeholder=\"Author\" [editable]=\"false\" [ngbTypeahead]=\"searchAuthor\" [resultFormatter]=\"simpleStringFormatter\" [inputFormatter]=\"simpleStringFormatter\" aria-label=\"Author\" aria-describedby=\"q2-basic-addon1\">\n              <div *ngIf=\"authorLoading\" class=\"input-group-append\">\n                <span class=\"input-group-text\">\n                  <fa-icon [icon]=\"['fas', 'sync-alt']\" [spin]=\"true\"></fa-icon>\n                </span>\n              </div>\n            </div>\n          </div>\n          \n          <div class=\"form-group\">\n            <div class=\"input-group mb-3\">\n              <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\" id=\"q2-basic-addon2\"><fa-icon [icon]=\"['fas','arrows-alt-h']\"></fa-icon></span>\n              </div>\n              <input name=\"q2Limit\" [(ngModel)]=\"q2Limit\" type=\"number\" class=\"form-control\" placeholder=\"Result Limit\" aria-label=\"Result Limit\" aria-describedby=\"q2-basic-addon2\">\n            </div>\n          </div>\n  \n          <div class=\"form-group\">\n            <div class=\"input-group mb-3\">\n              <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\" id=\"q2-basic-addon3\"><fa-icon [icon]=\"['fas','users']\"></fa-icon></span>\n              </div>\n              <input name=\"q2Threshold\" [(ngModel)]=\"q2Threshold\" type=\"number\" class=\"form-control\" placeholder=\"Similarity Threshold\" aria-label=\"Similarity Threshold\" aria-describedby=\"q2-basic-addon3\">\n            </div>\n          </div>\n\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"executeQuery(2,{'author_name': q2AuthorName.name.toLowerCase(),'limit': q2Limit, 'score_value': q2Threshold})\" [disabled]=\"!q2AuthorName || !q2Limit || !q2Threshold\">Run</button>\n        </form>\n  \n      </ng-template>\n    </ngb-panel>\n    <ngb-panel id=\"static-3\" title=\"Q3 - Local Clustering Coefficient (SNA)\">\n        <ng-template ngbPanelContent>\n            <p><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://github.com/fabiomercorio/GraphDBLP/blob/master/images/graphdblp_q3.jpeg\"><img src=\"https://github.com/fabiomercorio/GraphDBLP/raw/master/images/graphdblp_q3.jpeg\" alt=\"Q3: Author Publication Records Comparison\" style=\"max-width:100%;\"></a></p>\n            <p>Use this query to run <strong>COMPUTING LOCAL CLUSTERING COEFFICIENT ON RESEARCH COMMUNITIES</strong>. \n            This requires to specify the venue name and a threshold value for computing the similarity.\n            Example: <i>conference 'ijcai' with threshold 10 percent</i> will perform this query computing the community \n            starting from <i>ijcai</i> and considering venue with a similarity value with at least 10 percent.</p>  \n          <form class=\"mt-3\">\n            <div class=\"form-group\">\n              <div class=\"input-group mb-3\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\" id=\"q3-basic-addon1\"><fa-icon [icon]=\"['fas','search']\"></fa-icon></span>\n                </div>\n                <input name=\"q3Venue\" [(ngModel)]=\"q3Venue\" type=\"text\" class=\"form-control\" placeholder=\"Venue\" [editable]=\"false\" [ngbTypeahead]=\"searchVenue\" [resultFormatter]=\"simpleStringFormatter\" [inputFormatter]=\"simpleStringFormatter\" aria-label=\"Venue\" aria-describedby=\"q3-basic-addon1\">\n                <div *ngIf=\"venueLoading\" class=\"input-group-append\">\n                  <span class=\"input-group-text\">\n                    <fa-icon [icon]=\"['fas', 'sync-alt']\" [spin]=\"true\"></fa-icon>\n                  </span>\n                </div>\n              </div>\n            </div>\n            \n            <div class=\"form-group\">\n              <div class=\"input-group mb-3\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\" id=\"q3-basic-addon3\"><fa-icon [icon]=\"['fas','users']\"></fa-icon></span>\n                </div>\n                <input name=\"q3Threshold\" [(ngModel)]=\"q3Threshold\" type=\"number\" class=\"form-control\" placeholder=\"Similarity Threshold\" aria-label=\"Similarity Threshold\" aria-describedby=\"q3-basic-addon3\">\n              </div>\n            </div>\n    \n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"executeQuery(3,{'venue_name': q3Venue.name,'threshold_value': q3Threshold})\" [disabled]=\"!q3Venue || !q3Threshold\">Run</button>\n          </form>\n    \n        </ng-template>\n      </ngb-panel>\n</ngb-accordion>\n\n<app-results-view [tableData]=\"queryResults\"></app-results-view>"

/***/ }),

/***/ "./src/app/input-form/input-form.component.ts":
/*!****************************************************!*\
  !*** ./src/app/input-form/input-form.component.ts ***!
  \****************************************************/
/*! exports provided: InputFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputFormComponent", function() { return InputFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _graphdblp_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../graphdblp-api.service */ "./src/app/graphdblp-api.service.ts");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _meta_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../meta-api.service */ "./src/app/meta-api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var InputFormComponent = /** @class */ (function () {
    function InputFormComponent(service, spinnerService, metaService) {
        var _this = this;
        this.service = service;
        this.spinnerService = spinnerService;
        this.metaService = metaService;
        this.keywordLoading = false;
        this.authorLoading = false;
        this.venueLoading = false;
        this.simpleStringFormatter = function (item) { return item.name; };
        this.searchKeyword = function (text$) {
            return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () { return _this.keywordLoading = true; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (term) {
                return _this.metaService.searchKeyword(term).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function () {
                    // this.searchFailed = true;
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])([]);
                }));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () { return _this.keywordLoading = false; }));
        };
        this.searchAuthor = function (text$) {
            return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () { return _this.authorLoading = true; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (term) {
                return _this.metaService.searchAuthor(term).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function () {
                    // this.searchFailed = true;
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])([]);
                }));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () { return _this.authorLoading = false; }));
        };
        this.searchVenue = function (text$) {
            return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () { return _this.venueLoading = true; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (term) {
                return _this.metaService.searchVenue(term).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function () {
                    // this.searchFailed = true;
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])([]);
                }));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () { return _this.venueLoading = false; }));
        };
    }
    InputFormComponent.prototype.ngOnInit = function () {
    };
    InputFormComponent.prototype.executeQuery = function (queryNumber, params) {
        var _this = this;
        this.spinnerService.show();
        this.service.executeQuery(queryNumber, params).subscribe(function (data) {
            console.log('JSON result ' + JSON.stringify(data));
            _this.queryResults = data;
            _this.spinnerService.hide();
        });
    };
    InputFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-input-form',
            template: __webpack_require__(/*! ./input-form.component.html */ "./src/app/input-form/input-form.component.html"),
            styles: [__webpack_require__(/*! ./input-form.component.css */ "./src/app/input-form/input-form.component.css")]
        }),
        __metadata("design:paramtypes", [_graphdblp_api_service__WEBPACK_IMPORTED_MODULE_1__["GraphdblpApiService"], ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_2__["Ng4LoadingSpinnerService"],
            _meta_api_service__WEBPACK_IMPORTED_MODULE_5__["MetaApiService"]])
    ], InputFormComponent);
    return InputFormComponent;
}());



/***/ }),

/***/ "./src/app/meta-api.service.ts":
/*!*************************************!*\
  !*** ./src/app/meta-api.service.ts ***!
  \*************************************/
/*! exports provided: MetaApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetaApiService", function() { return MetaApiService; });
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


var MetaApiService = /** @class */ (function () {
    // private baseUrl = 'http://localhost:8081';
    function MetaApiService(http) {
        this.http = http;
        this.baseUrl = 'http://149.132.150.72:8081';
    }
    MetaApiService.prototype.searchKeyword = function (txt) {
        return this.search(txt, 'keyword');
    };
    MetaApiService.prototype.searchAuthor = function (txt) {
        return this.search(txt, 'author');
    };
    MetaApiService.prototype.searchVenue = function (txt) {
        return this.search(txt, 'venue');
    };
    MetaApiService.prototype.search = function (txt, searchType) {
        return this.http.get(this.baseUrl + '/graphdblp/meta/' + searchType, {
            'params': {
                txt: txt
            }
        });
    };
    MetaApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MetaApiService);
    return MetaApiService;
}());



/***/ }),

/***/ "./src/app/result-view/result-view.component.css":
/*!*******************************************************!*\
  !*** ./src/app/result-view/result-view.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc3VsdC12aWV3L3Jlc3VsdC12aWV3LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/result-view/result-view.component.html":
/*!********************************************************!*\
  !*** ./src/app/result-view/result-view.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"table-responsive-md\">\n    <table class=\"table table-striped table-hover\"> \n      <thead>\n        <tr>\n          <th *ngFor=\"let cell of rowData.columns\" scope=\"col\">{{cell}}</th>\n        </tr>\n      </thead>\n      <tbody>\n        <ng-container *ngFor=\"let r of rowData.data\">\n          <tr>  \n            <td *ngFor=\"let cell of r.row\" scope=\"col\">\n              <span *ngIf=\"isNumber(cell)\">{{cell | number}}</span>\n              <span *ngIf=\"!isNumber(cell)\">{{cell}}</span>\n            </td>\n          </tr>\n        </ng-container>\n    </tbody>\n  </table>\n</div>"

/***/ }),

/***/ "./src/app/result-view/result-view.component.ts":
/*!******************************************************!*\
  !*** ./src/app/result-view/result-view.component.ts ***!
  \******************************************************/
/*! exports provided: ResultViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultViewComponent", function() { return ResultViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ResultViewComponent = /** @class */ (function () {
    function ResultViewComponent(spinnerService) {
        this.spinnerService = spinnerService;
        console.log('constr');
    }
    ResultViewComponent.prototype.ngOnInit = function () { };
    ResultViewComponent.prototype.isNumber = function (val) {
        return typeof (val) === 'number';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ResultViewComponent.prototype, "rowData", void 0);
    ResultViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-result-view',
            template: __webpack_require__(/*! ./result-view.component.html */ "./src/app/result-view/result-view.component.html"),
            styles: [__webpack_require__(/*! ./result-view.component.css */ "./src/app/result-view/result-view.component.css")]
        }),
        __metadata("design:paramtypes", [ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_1__["Ng4LoadingSpinnerService"]])
    ], ResultViewComponent);
    return ResultViewComponent;
}());



/***/ }),

/***/ "./src/app/results-view/results-view.component.css":
/*!*********************************************************!*\
  !*** ./src/app/results-view/results-view.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc3VsdHMtdmlldy9yZXN1bHRzLXZpZXcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/results-view/results-view.component.html":
/*!**********************************************************!*\
  !*** ./src/app/results-view/results-view.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mt-5\" *ngIf='tableData'>\n  <app-result-view [rowData]=\"tableData.results[0]\"></app-result-view>        \n</div>\n"

/***/ }),

/***/ "./src/app/results-view/results-view.component.ts":
/*!********************************************************!*\
  !*** ./src/app/results-view/results-view.component.ts ***!
  \********************************************************/
/*! exports provided: ResultsViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultsViewComponent", function() { return ResultsViewComponent; });
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

var ResultsViewComponent = /** @class */ (function () {
    function ResultsViewComponent() {
    }
    ResultsViewComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ResultsViewComponent.prototype, "tableData", void 0);
    ResultsViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-results-view',
            template: __webpack_require__(/*! ./results-view.component.html */ "./src/app/results-view/results-view.component.html"),
            styles: [__webpack_require__(/*! ./results-view.component.css */ "./src/app/results-view/results-view.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ResultsViewComponent);
    return ResultsViewComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/andrea/Scrivania/graphdblp-gui/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map