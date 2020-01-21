function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<style>\r\n  :host {\r\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\r\n    font-size: 18px;\r\n    box-sizing: border-box;\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n  }\r\n\r\n  .toolbar {\r\n    height: 60px;\r\n    margin: -8px;\r\n    display: flex;\r\n    align-items: center;\r\n    background-color: darkred;\r\n    color: lightslategray;\r\n    font-weight: 600;\r\n  }\r\n\r\n  .card {\r\n    margin: 0 8px 16px;\r\n    padding: 16px;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n    transition: all 0.2s ease-in-out;\r\n    line-height: 24px;\r\n  }\r\n\r\n  .card.card-small {\r\n    height: 16px;\r\n    width: 168px;\r\n  }\r\n\r\n  .card.highlight-card {\r\n    background-color: lightskyblue;\r\n    color: darkslategray;\r\n    font-weight: 600;\r\n    border: none;\r\n    width: auto;\r\n    min-width: 30%;\r\n    position: relative;\r\n  }\r\n\r\n  svg#rocket {\r\n    width: 80px;\r\n    position: absolute;\r\n    left: -10px;\r\n    top: -24px;\r\n  }\r\n\r\n  svg#rocket-smoke {\r\n    height: 100vh;\r\n    position: absolute;\r\n    top: 10px;\r\n    left: -45px;\r\n    z-index: -10;\r\n    transform: rotate(-45deg);\r\n  }\r\n</style>\r\n\r\n<!-- Toolbar -->\r\n<div class=\"toolbar\" role=\"banner\">\r\n  <img\r\n    width=\"100\"\r\n  />\r\n  <span>Elia Gaggini:</span>\r\n</div>\r\n\r\n<div class=\"content\" role=\"main\">\r\n\r\n  <!-- Highlight Card -->\r\n  <div class=\"card highlight-card card-small\">\r\n\r\n    <svg id=\"rocket\" alt=\"Rocket Ship\" xmlns=\"http://www.w3.org/2000/svg\" width=\"101.678\" height=\"101.678\" viewBox=\"0 0 101.678 101.678\">\r\n      <g id=\"Group_83\" data-name=\"Group 83\" transform=\"translate(-141 -696)\">\r\n        <circle id=\"Ellipse_8\" data-name=\"Ellipse 8\" cx=\"50.839\" cy=\"50.839\" r=\"50.839\" transform=\"translate(141 696)\" fill=\"black\"/>\r\n        <g id=\"Group_47\" data-name=\"Group 47\" transform=\"translate(165.185 720.185)\">\r\n          <path id=\"Path_33\" data-name=\"Path 33\" d=\"M3.4,42.615a3.084,3.084,0,0,0,3.553,3.553,21.419,21.419,0,0,0,12.215-6.107L9.511,30.4A21.419,21.419,0,0,0,3.4,42.615Z\" transform=\"translate(0.371 3.363)\" fill=\"lightskyblue\"/>\r\n          <path id=\"Path_34\" data-name=\"Path 34\" d=\"M53.3,3.221A3.09,3.09,0,0,0,50.081,0,48.227,48.227,0,0,0,18.322,13.437c-6-1.666-14.991-1.221-18.322,7.218A33.892,33.892,0,0,1,9.439,25.1l-.333.666a3.013,3.013,0,0,0,.555,3.553L23.985,43.641a2.9,2.9,0,0,0,3.553.555l.666-.333A33.892,33.892,0,0,1,32.647,53.3c8.55-3.664,8.884-12.326,7.218-18.322A48.227,48.227,0,0,0,53.3,3.221ZM34.424,9.772a6.439,6.439,0,1,1,9.106,9.106,6.368,6.368,0,0,1-9.106,0A6.467,6.467,0,0,1,34.424,9.772Z\" transform=\"translate(0 0.005)\" fill=\"darkslategray\"/>\r\n        </g>\r\n      </g>\r\n    </svg>\r\n\r\n    <span>Il mio bellissimo sito! </span>\r\n\r\n    <svg id=\"rocket-smoke\" alt=\"Rocket Ship Smoke\" xmlns=\"http://www.w3.org/2000/svg\" width=\"516.119\" height=\"1083.632\" viewBox=\"0 0 516.119 1083.632\">\r\n      <path id=\"Path_40\" data-name=\"Path 40\" d=\"M644.6,141S143.02,215.537,147.049,870.207s342.774,201.755,342.774,201.755S404.659,847.213,388.815,762.2c-27.116-145.51-11.551-384.124,271.9-609.1C671.15,139.365,644.6,141,644.6,141Z\" transform=\"translate(-147.025 -140.939)\" fill=\"lightskyblue\"/>\r\n    </svg>\r\n    \r\n  </div>\r\n    \r\n</div>\r\n<!-- Toolbar -->\r\n<!-- <mat-toolbar color=\"primary\" class=\"header\">\r\n  <div>Material Theme</div>\r\n  <span class=\"nav-tool-items\">\r\n    <mat-icon (click)=\"sidenav.toggle()\" class=\"hamburger\">menu</mat-icon>\r\n  </span>\r\n</mat-toolbar>\r\n\r\n<mat-sidenav-container> -->\r\n  <!-- Sidenav -->\r\n  <!-- <mat-sidenav #sidenav [mode]=\"isBiggerScreen() ? 'over' : 'side'\" [(opened)]=\"opened\" [fixedInViewport]=\"true\"\r\n    [fixedTopGap]>\r\n    <mat-nav-list>\r\n      <a mat-list-item>\r\n        <mat-icon>dashboard</mat-icon> Dashboard\r\n      </a>\r\n      <a mat-list-item>\r\n        <mat-icon>person</mat-icon> User Profile\r\n      </a>\r\n      <a mat-list-item>\r\n        <mat-icon>content_paste</mat-icon> Table List\r\n      </a>\r\n      <a mat-list-item>\r\n        <mat-icon>library_books</mat-icon> Typography\r\n      </a>\r\n      <a mat-list-item>\r\n        <mat-icon>location_on</mat-icon> Maps\r\n      </a>\r\n      <a mat-list-item>\r\n        <mat-icon>calendar_today</mat-icon> Calendar\r\n      </a>\r\n    </mat-nav-list>\r\n  </mat-sidenav> -->\r\n\r\n  <!-- Main content -->\r\n  <!-- <mat-sidenav-content> -->\r\n\r\n    <!-- Applying the mat-tyography class adds styles for native elements. -->\r\n    <!-- <section class=\"mat-typography title-group\">\r\n      <h1>Heading Goes Here</h1>\r\n      <mat-divider></mat-divider>\r\n    </section> -->\r\n\r\n    <!-- Angular material cards -->\r\n    <!-- <div class=\"productCards\">\r\n      <mat-grid-list cols=\"4\" rowHeight=\"200px\">\r\n        <mat-grid-tile [colspan]=\"3\" [rowspan]=\"1\">1\r\n        </mat-grid-tile>\r\n        <mat-grid-tile [colspan]=\"1\" [rowspan]=\"2\">2\r\n        </mat-grid-tile>\r\n        <mat-grid-tile [colspan]=\"1\" [rowspan]=\"1\">3\r\n        </mat-grid-tile>\r\n        <mat-grid-tile [colspan]=\"2\" [rowspan]=\"1\">4\r\n        </mat-grid-tile>\r\n      </mat-grid-list>\r\n    </div>\r\n\r\n  </mat-sidenav-content>\r\n</mat-sidenav-container> -->\r\n<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/elia-gaggini/elia-gaggini.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/elia-gaggini/elia-gaggini.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsEliaGagginiEliaGagginiComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<table style=\"width:100%\">\r\n    <tr>\r\n        <th rowspan=\"2\">Indirizzo:</th>\r\n        <td>Via Dino Col, 26/4</td>\r\n    </tr>\r\n    <tr>\r\n        <td>16149, Genova</td>\r\n    </tr>\r\n    <tr>\r\n        <th>Email:</th>\r\n        <td>elia.gaggi95@gmail.com</td>\r\n    </tr>\r\n    <tr>\r\n        <th>Telefono:</th>\r\n        <td>342 6661261</td>\r\n    </tr>\r\n    <tr>\r\n        <th>Sesso:</th>\r\n        <td>maschio</td>\r\n    </tr>\r\n    <tr>\r\n        <th>Data di nascita:</th>\r\n        <td>11 marzo 1995</td>\r\n    </tr>\r\n    <tr>\r\n        <th>Nazionalità:</th>\r\n        <td>italiana</td>\r\n    </tr>\r\n</table>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/instruction/instruction.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/instruction/instruction.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsInstructionInstructionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h2>2014</h2>\n        <h3>Diploma da perito per l'elettronica e le telecomunicazioni</h3>\n        <p> presso I.I.C. Italo Calvino, via Borzoli 21, 16153, Genova.</p>\n    <h2>da novembre 2019 a gennaio 2020:</h2>\n        <h3>Corso tecnico programmazione .NET e Angular</h3>\n        <p> presso Axia Formazione & Consulenza s.r.l. - ente di formazione accreditato con Regione Liguria.</p>\n    \n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/nav/nav.component.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/nav/nav.component.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsNavNavComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav>\n    <fa-icon [icon]=\"faDollarSign\"></fa-icon>\n    <h5 class=\"title secondary-font\">ProjectCrypto</h5>\n    <fa-icon [icon]=\"faLightbulb\" (click)=\"toggleTheme()\"></fa-icon>\n</nav>\n\n<div class=\"container\">\n    <h5 class=\"name\">{{ name }}</h5>\n    <h5 class=\"price\">\n        <fa-icon [icon]=\"currencyIcon\"></fa-icon>\n        {{ price | number }}\n    </h5>\n    <fa-icon [icon]=\"faHeart\" (click)=\"onToggleFavourite()\" class=\"favouriteIcon icon\"\n        [ngClass]=\"{ isFavourite: isFavourite }\"></fa-icon>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/other/other.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/other/other.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsOtherOtherComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<head>\n    <style>\n        table {\n            font-family: arial, sans-serif;\n            border-collapse: collapse;\n            width: 100%;\n        }\n\n        td,\n        th {\n            text-align: left;\n            padding: 8px;\n        }\n\n        tr:nth-child(even) {\n            background-color: lightgrey;\n        }\n    </style>\n</head>\n<table style=\"width:100%\">\n    <tr>\n        <th><h2>Altre conoscenze:</h2></th>\n    </tr>\n    <tr>\n        <td>Sistemi elettronici analogici e digitali</td>\n    </tr>\n    <tr>\n        <td>Apparato di iniezione dei veicoli diesel</td>\n    </tr>\n    <tr>\n        <td>Magazzino e conservazione merci alimentari</td>\n    </tr>\n    <tr>\n        <td>Patente di tipo KB</td>\n    </tr>\n    <tr>\n        <td>Basso elettrico e acustico</td>\n    </tr>\n    <div class=\"image\">\n        <a>\n            <img src=\"assets/img/Bass.jpg\" alt=\"\">\n        </a>\n    </div>\n</table>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/personal/personal.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/personal/personal.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsPersonalPersonalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<table>\n   \n    <tr>\n        <th>Lingua madre:</th>\n        <td>Italiana</td>\n    </tr>\n    <tr>\n        <th>Buon livello:</th>\n        <td>Inglese</td>\n    </tr>\n</table>\n    \n        <h3>Completenze relazionali:</h3>\n        <p>Ritengo di aver sviluppato buone competenze relazionali lavorando a contatto col pubblico.</p>\n    \n        <h3>Completenze organizzative e gestionali:</h3>\n        <p>Puntuale, preciso e motivato, capacità di lavorare individualmente o in gruppo sviluppata durante diversi laboratori. ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/professional/card/card.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/professional/card/card.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsProfessionalCardCardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"grid-container\">\n  <h1 class=\"mat-h1\">Dashboard</h1>\n  <mat-grid-list cols=\"2\" rowHeight=\"350px\">\n    <mat-grid-tile *ngFor=\"let card of cards | async\" [colspan]=\"card.cols\" [rowspan]=\"card.rows\">\n      <mat-card class=\"dashboard-card\">\n        <mat-card-header>\n          <mat-card-title>\n            {{card.title}}\n            <button mat-icon-button class=\"more-button\" [matMenuTriggerFor]=\"menu\" aria-label=\"Toggle menu\">\n              <mat-icon>more_vert</mat-icon>\n            </button>\n            <mat-menu #menu=\"matMenu\" xPosition=\"before\">\n              <button mat-menu-item>Expand</button>\n              <button mat-menu-item>Remove</button>\n            </mat-menu>\n          </mat-card-title>\n        </mat-card-header>\n        <mat-card-content class=\"dashboard-card-content\">\n          <div>Card Content Here</div>\n        </mat-card-content>\n      </mat-card>\n    </mat-grid-tile>\n  </mat-grid-list>\n</div>\n<h1>funge</h1>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/professional/professional.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/professional/professional.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsProfessionalProfessionalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h2>da marzo ad agosto 2015:</h2>\n<h3>Tirocino semestrale operaio meccanico</h3>\n<p>presso Autodiesel s.n.c., via Balleydier 12r, 16149, Genova\n    Autofficina specializzata nella revisione e riparazione degli impianti diesel.</p>\n<h2>da dicembre 2015 a giugno 2016:</h2>\n<h3>Tirocino semestrale addetto alle vendite</h3>\n<p> presso S.G.G. s.r.l., via Fabrizi 92r, 16148, Genova\n    Supermercati in franchising Carrefour Express.</p>\n<h2>da luglio 2016 ad agosto 2019:</h2>\n<h3>Apprendistato addetto alle vendite e banco gastronomia</h3>\n<p> presso S.G.G. s.r.l., via Fabrizi 92r, 16148, Genova\n    Supermercati in franchising Carrefour Express.</p>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/technology/technology.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/technology/technology.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsTechnologyTechnologyComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<head>\n    <style>\n        table {\n            font-family: arial, sans-serif;\n            border-collapse: collapse;\n            width: 100%;\n        }\n\n        td,\n        th {\n            text-align: left;\n            padding: 8px;\n        }\n\n        tr:nth-child(even) {\n            background-color: lightgrey;\n        }\n    </style>\n</head>\n<table style=\"width:100%\">\n    <tr>\n        <th><h2>Linguaggi di programmazione:</h2></th>\n    </tr>\n    <tr>\n        <td>C#</td>\n    </tr>\n    <tr>\n        <td>Piattaforma .NET Core</td>\n    </tr>\n    <tr>\n        <td>ASP .NET</td>\n    </tr>\n    <tr>\n        <td>Angular</td>\n    </tr>\n    <tr>\n        <th><h3>Altri:</h3></th>\n    </tr>\n    <tr>\n        <td>C++</td>\n    </tr>\n    <tr>\n        <td>PLC</td>\n    </tr>\n    <tr>\n        <td>Arduino</td>\n    </tr>\n    <tr>\n        <td><h3>Inoltre:</h3></td>\n    </tr>\n    <tr>\n        <td>conoscenza componenti hardware di un PC</td>\n    </tr>\n    <tr>\n        <td>capacità di assemblare un computer</td>\n    </tr>\n</table>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/welcome/welcome.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/welcome/welcome.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsWelcomeWelcomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!DOCTYPE html>\r\n<html>\r\n\r\n<head>\r\n    <style>\r\n        .siteHeader {\r\n            margin-top: 0%;\r\n            margin-left: 5%;\r\n            font-size: 200%;\r\n            font-weight: 800;\r\n        }\r\n\r\n        .image {\r\n            margin-left: 30%;\r\n        }\r\n    </style>\r\n</head>\r\n\r\n<body>\r\n    <h1 class=siteheader>HomePage</h1>\r\n    <table>\r\n        <tr>\r\n            <nav>\r\n                <h1><button routerLink=\"eliagaggini\">Anagrafica</button></h1>\r\n            </nav>\r\n        </tr>\r\n        <tr>\r\n            <nav>\r\n                <h1><button routerLink=\"professional\">Esperienza professionale</button></h1>\r\n            </nav>\r\n        </tr>\r\n        <tr>\r\n            <nav>\r\n                <h1><button routerLink=\"instruction\">Istruzione e formazione</button></h1>\r\n            </nav>\r\n        </tr>\r\n        <tr>\r\n            <nav>\r\n                <h1><button routerLink=\"personal\">Competenze personali</button></h1>\r\n            </nav>\r\n        </tr>\r\n        <tr>\r\n            <nav>\r\n                <h1><button routerLink=\"technology\">Competenze informatiche</button></h1>\r\n            </nav>\r\n        </tr>\r\n        <tr>\r\n            <nav>\r\n                <h1><button routerLink=\"other\">Altro</button></h1>\r\n            </nav>\r\n        </tr>\r\n    </table>\r\n\r\n    <div class=\"image\">\r\n        <a>\r\n            <img src=\"assets/img/MyPhoto.jpg\" alt=\"\" height=\"400\">\r\n        </a>\r\n    </div>\r\n</body>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/welcome/welcome.component */
    "./src/app/components/welcome/welcome.component.ts");
    /* harmony import */


    var _components_elia_gaggini_elia_gaggini_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/elia-gaggini/elia-gaggini.component */
    "./src/app/components/elia-gaggini/elia-gaggini.component.ts");
    /* harmony import */


    var _components_professional_professional_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/professional/professional.component */
    "./src/app/components/professional/professional.component.ts");
    /* harmony import */


    var _components_instruction_instruction_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/instruction/instruction.component */
    "./src/app/components/instruction/instruction.component.ts");
    /* harmony import */


    var _components_personal_personal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/personal/personal.component */
    "./src/app/components/personal/personal.component.ts");
    /* harmony import */


    var _components_technology_technology_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/technology/technology.component */
    "./src/app/components/technology/technology.component.ts");
    /* harmony import */


    var _components_other_other_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/other/other.component */
    "./src/app/components/other/other.component.ts");
    /* harmony import */


    var _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/nav/nav.component */
    "./src/app/components/nav/nav.component.ts");

    var routes = [{
      path: '',
      component: _components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__["WelcomeComponent"]
    }, {
      path: 'welcome',
      component: _components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__["WelcomeComponent"]
    }, {
      path: 'eliagaggini',
      component: _components_elia_gaggini_elia_gaggini_component__WEBPACK_IMPORTED_MODULE_4__["EliaGagginiComponent"]
    }, {
      path: 'professional',
      component: _components_professional_professional_component__WEBPACK_IMPORTED_MODULE_5__["ProfessionalComponent"]
    }, {
      path: 'instruction',
      component: _components_instruction_instruction_component__WEBPACK_IMPORTED_MODULE_6__["InstructionComponent"]
    }, {
      path: 'personal',
      component: _components_personal_personal_component__WEBPACK_IMPORTED_MODULE_7__["PersonalComponent"]
    }, {
      path: 'technology',
      component: _components_technology_technology_component__WEBPACK_IMPORTED_MODULE_8__["TechnologyComponent"]
    }, {
      path: 'other',
      component: _components_other_other_component__WEBPACK_IMPORTED_MODULE_9__["OtherComponent"]
    }, {
      path: 'nav',
      component: _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_10__["NavComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'eliagaggi';
        this.opened = true;
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log(window.innerWidth);

          if (window.innerWidth < 768) {
            this.sidenav.fixedTopGap = 55;
            this.opened = false;
          } else {
            this.sidenav.fixedTopGap = 55;
            this.opened = true;
          }
        }
      }, {
        key: "onResize",
        value: function onResize(event) {
          if (event.target.innerWidth < 768) {
            this.sidenav.fixedTopGap = 55;
            this.opened = false;
          } else {
            this.sidenav.fixedTopGap = 55;
            this.opened = true;
          }
        }
      }, {
        key: "isBiggerScreen",
        value: function isBiggerScreen() {
          var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

          if (width < 768) {
            return true;
          } else {
            return false;
          }
        }
      }]);

      return AppComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sidenav', {
      static: true
    })], AppComponent.prototype, "sidenav", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event'])], AppComponent.prototype, "onResize", null);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/welcome/welcome.component */
    "./src/app/components/welcome/welcome.component.ts");
    /* harmony import */


    var _components_elia_gaggini_elia_gaggini_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/elia-gaggini/elia-gaggini.component */
    "./src/app/components/elia-gaggini/elia-gaggini.component.ts");
    /* harmony import */


    var _components_professional_professional_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/professional/professional.component */
    "./src/app/components/professional/professional.component.ts");
    /* harmony import */


    var _components_instruction_instruction_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/instruction/instruction.component */
    "./src/app/components/instruction/instruction.component.ts");
    /* harmony import */


    var _components_personal_personal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/personal/personal.component */
    "./src/app/components/personal/personal.component.ts");
    /* harmony import */


    var _components_technology_technology_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/technology/technology.component */
    "./src/app/components/technology/technology.component.ts");
    /* harmony import */


    var _components_other_other_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/other/other.component */
    "./src/app/components/other/other.component.ts");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/esm2015/select.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/esm2015/radio.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/esm2015/card.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _components_professional_card_card_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./components/professional/card/card.component */
    "./src/app/components/professional/card/card.component.ts");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/esm2015/grid-list.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/esm2015/menu.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/esm2015/layout.js");
    /* harmony import */


    var _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./components/nav/nav.component */
    "./src/app/components/nav/nav.component.ts");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
    /* Angular material */
    // import { AngularMaterialModule } from './angular-material.module';


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_6__["WelcomeComponent"], _components_elia_gaggini_elia_gaggini_component__WEBPACK_IMPORTED_MODULE_7__["EliaGagginiComponent"], _components_professional_professional_component__WEBPACK_IMPORTED_MODULE_8__["ProfessionalComponent"], _components_instruction_instruction_component__WEBPACK_IMPORTED_MODULE_9__["InstructionComponent"], _components_personal_personal_component__WEBPACK_IMPORTED_MODULE_10__["PersonalComponent"], _components_technology_technology_component__WEBPACK_IMPORTED_MODULE_11__["TechnologyComponent"], _components_other_other_component__WEBPACK_IMPORTED_MODULE_12__["OtherComponent"], _components_professional_card_card_component__WEBPACK_IMPORTED_MODULE_19__["CardComponent"], _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_24__["NavComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__["MatRadioModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_17__["MatCardModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_20__["MatGridListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__["MatMenuModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__["MatIconModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_23__["LayoutModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_25__["FontAwesomeModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
      schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/elia-gaggini/elia-gaggini.component.css":
  /*!********************************************************************!*\
    !*** ./src/app/components/elia-gaggini/elia-gaggini.component.css ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsEliaGagginiEliaGagginiComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZWxpYS1nYWdnaW5pL2VsaWEtZ2FnZ2luaS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/elia-gaggini/elia-gaggini.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/elia-gaggini/elia-gaggini.component.ts ***!
    \*******************************************************************/

  /*! exports provided: EliaGagginiComponent */

  /***/
  function srcAppComponentsEliaGagginiEliaGagginiComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EliaGagginiComponent", function () {
      return EliaGagginiComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var EliaGagginiComponent =
    /*#__PURE__*/
    function () {
      function EliaGagginiComponent() {
        _classCallCheck(this, EliaGagginiComponent);

        this.title = 'eliagaggini';
      }

      _createClass(EliaGagginiComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return EliaGagginiComponent;
    }();

    EliaGagginiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-elia-gaggini',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./elia-gaggini.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/elia-gaggini/elia-gaggini.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./elia-gaggini.component.css */
      "./src/app/components/elia-gaggini/elia-gaggini.component.css")).default]
    })], EliaGagginiComponent);
    /***/
  },

  /***/
  "./src/app/components/instruction/instruction.component.css":
  /*!******************************************************************!*\
    !*** ./src/app/components/instruction/instruction.component.css ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsInstructionInstructionComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW5zdHJ1Y3Rpb24vaW5zdHJ1Y3Rpb24uY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/instruction/instruction.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/instruction/instruction.component.ts ***!
    \*****************************************************************/

  /*! exports provided: InstructionComponent */

  /***/
  function srcAppComponentsInstructionInstructionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InstructionComponent", function () {
      return InstructionComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var InstructionComponent =
    /*#__PURE__*/
    function () {
      function InstructionComponent() {
        _classCallCheck(this, InstructionComponent);
      }

      _createClass(InstructionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return InstructionComponent;
    }();

    InstructionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-instruction',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./instruction.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/instruction/instruction.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./instruction.component.css */
      "./src/app/components/instruction/instruction.component.css")).default]
    })], InstructionComponent);
    /***/
  },

  /***/
  "./src/app/components/nav/nav.component.css":
  /*!**************************************************!*\
    !*** ./src/app/components/nav/nav.component.css ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsNavNavComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "nav {\r\n    height: 4rem;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    padding-left: 1rem;\r\n    padding-right: 1rem;\r\n    background-color: var(--background-tertiary);\r\n    color: var(--foreground-quaternary);\r\n    font-size: 1rem;\r\n  }\r\n  \r\n  nav .title {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n  }\r\n  \r\n  .container {\r\n    display: grid;\r\n    grid-template-columns: 0.5fr 1fr 0.5fr;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    border-radius: 0.5rem;\r\n    background: var(--background-light);\r\n    color: var(--foreground-tertiary);\r\n    padding-left: 0.5rem;\r\n    padding-right: 0.5rem;\r\n    margin-bottom: 1rem;\r\n    min-height: 8rem;\r\n    box-shadow: var(--background-tertiary-shadow);\r\n  }\r\n  \r\n  .container .name {\r\n    justify-self: start;\r\n  }\r\n  \r\n  .container .price {\r\n    justify-self: center;\r\n  }\r\n  \r\n  .container .icon {\r\n    justify-self: end;\r\n  }\r\n  \r\n  .favouriteIcon {\r\n    font-size: 1.5rem;\r\n  }\r\n  \r\n  .isFavourite {\r\n    color: var(--primary-default);\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXYvbmF2LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osb0JBQWE7SUFBYixhQUFhO0lBQ2IseUJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLDRDQUE0QztJQUM1QyxtQ0FBbUM7SUFDbkMsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxhQUFhO0lBQ2Isc0NBQXNDO0lBQ3RDLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLG1DQUFtQztJQUNuQyxpQ0FBaUM7SUFDakMsb0JBQW9CO0lBQ3BCLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLDZDQUE2QztFQUMvQzs7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLDZCQUE2QjtFQUMvQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2L25hdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmF2IHtcclxuICAgIGhlaWdodDogNHJlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xyXG4gICAgcGFkZGluZy1yaWdodDogMXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtdGVydGlhcnkpO1xyXG4gICAgY29sb3I6IHZhcigtLWZvcmVncm91bmQtcXVhdGVybmFyeSk7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgfVxyXG4gIFxyXG4gIG5hdiAudGl0bGUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC41ZnIgMWZyIDAuNWZyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtbGlnaHQpO1xyXG4gICAgY29sb3I6IHZhcigtLWZvcmVncm91bmQtdGVydGlhcnkpO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgbWluLWhlaWdodDogOHJlbTtcclxuICAgIGJveC1zaGFkb3c6IHZhcigtLWJhY2tncm91bmQtdGVydGlhcnktc2hhZG93KTtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRhaW5lciAubmFtZSB7XHJcbiAgICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xyXG4gIH1cclxuICBcclxuICAuY29udGFpbmVyIC5wcmljZSB7XHJcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRhaW5lciAuaWNvbiB7XHJcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcclxuICB9XHJcbiAgXHJcbiAgLmZhdm91cml0ZUljb24ge1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5pc0Zhdm91cml0ZSB7XHJcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1kZWZhdWx0KTtcclxuICB9Il19 */";
    /***/
  },

  /***/
  "./src/app/components/nav/nav.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/components/nav/nav.component.ts ***!
    \*************************************************/

  /*! exports provided: NavComponent */

  /***/
  function srcAppComponentsNavNavComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavComponent", function () {
      return NavComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
    /* harmony import */


    var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @fortawesome/free-regular-svg-icons */
    "./node_modules/@fortawesome/free-regular-svg-icons/index.es.js");
    /* harmony import */


    var src_app_theme_theme_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/theme/theme.service */
    "./src/app/theme/theme.service.ts");

    var NavComponent =
    /*#__PURE__*/
    function () {
      function NavComponent(themeService) {
        _classCallCheck(this, NavComponent);

        this.themeService = themeService;
        this.faDollarSign = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faDollarSign"];
      }

      _createClass(NavComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.setLightbulb();
        }
      }, {
        key: "setLightbulb",
        value: function setLightbulb() {
          if (this.themeService.isDarkTheme()) {
            this.faLightbulb = _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faLightbulb"];
          } else {
            this.faLightbulb = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faLightbulb"];
          }
        }
      }, {
        key: "toggleTheme",
        value: function toggleTheme() {
          if (this.themeService.isDarkTheme()) {
            this.themeService.setLightTheme();
          } else {
            this.themeService.setDarkTheme();
          }

          this.setLightbulb();
        }
      }]);

      return NavComponent;
    }();

    NavComponent.ctorParameters = function () {
      return [{
        type: src_app_theme_theme_service__WEBPACK_IMPORTED_MODULE_4__["ThemeService"]
      }];
    };

    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-nav",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./nav.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/nav/nav.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./nav.component.css */
      "./src/app/components/nav/nav.component.css")).default]
    })], NavComponent);
    /***/
  },

  /***/
  "./src/app/components/other/other.component.css":
  /*!******************************************************!*\
    !*** ./src/app/components/other/other.component.css ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsOtherOtherComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvb3RoZXIvb3RoZXIuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/other/other.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/other/other.component.ts ***!
    \*****************************************************/

  /*! exports provided: OtherComponent */

  /***/
  function srcAppComponentsOtherOtherComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OtherComponent", function () {
      return OtherComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var OtherComponent =
    /*#__PURE__*/
    function () {
      function OtherComponent() {
        _classCallCheck(this, OtherComponent);
      }

      _createClass(OtherComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return OtherComponent;
    }();

    OtherComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-other',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./other.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/other/other.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./other.component.css */
      "./src/app/components/other/other.component.css")).default]
    })], OtherComponent);
    /***/
  },

  /***/
  "./src/app/components/personal/personal.component.css":
  /*!************************************************************!*\
    !*** ./src/app/components/personal/personal.component.css ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsPersonalPersonalComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGVyc29uYWwvcGVyc29uYWwuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/personal/personal.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/personal/personal.component.ts ***!
    \***********************************************************/

  /*! exports provided: PersonalComponent */

  /***/
  function srcAppComponentsPersonalPersonalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PersonalComponent", function () {
      return PersonalComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PersonalComponent =
    /*#__PURE__*/
    function () {
      function PersonalComponent() {
        _classCallCheck(this, PersonalComponent);
      }

      _createClass(PersonalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PersonalComponent;
    }();

    PersonalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-personal',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./personal.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/personal/personal.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./personal.component.css */
      "./src/app/components/personal/personal.component.css")).default]
    })], PersonalComponent);
    /***/
  },

  /***/
  "./src/app/components/professional/card/card.component.css":
  /*!*****************************************************************!*\
    !*** ./src/app/components/professional/card/card.component.css ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsProfessionalCardCardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".grid-container {\n  margin: 20px;\n}\n\n.dashboard-card {\n  position: absolute;\n  top: 15px;\n  left: 15px;\n  right: 15px;\n  bottom: 15px;\n}\n\n.more-button {\n  position: absolute;\n  top: 5px;\n  right: 10px;\n}\n\n.dashboard-card-content {\n  text-align: left;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9mZXNzaW9uYWwvY2FyZC9jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Byb2Zlc3Npb25hbC9jYXJkL2NhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmlkLWNvbnRhaW5lciB7XG4gIG1hcmdpbjogMjBweDtcbn1cblxuLmRhc2hib2FyZC1jYXJkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE1cHg7XG4gIGxlZnQ6IDE1cHg7XG4gIHJpZ2h0OiAxNXB4O1xuICBib3R0b206IDE1cHg7XG59XG5cbi5tb3JlLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1cHg7XG4gIHJpZ2h0OiAxMHB4O1xufVxuXG4uZGFzaGJvYXJkLWNhcmQtY29udGVudCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/professional/card/card.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/components/professional/card/card.component.ts ***!
    \****************************************************************/

  /*! exports provided: CardComponent */

  /***/
  function srcAppComponentsProfessionalCardCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardComponent", function () {
      return CardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/esm2015/layout.js");

    var CardComponent = function CardComponent(breakpointObserver) {
      _classCallCheck(this, CardComponent);

      this.breakpointObserver = breakpointObserver;
      /** Based on the screen size, switch from standard to one column per row */

      this.cards = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["Breakpoints"].Handset).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (_ref) {
        var matches = _ref.matches;

        if (matches) {
          return [{
            title: 'Card 1',
            cols: 1,
            rows: 1
          }, {
            title: 'Card 2',
            cols: 1,
            rows: 1
          }, {
            title: 'Card 3',
            cols: 1,
            rows: 1
          }, {
            title: 'Card 4',
            cols: 1,
            rows: 1
          }];
        }

        return [{
          title: 'Card 1',
          cols: 2,
          rows: 1
        }, {
          title: 'Card 2',
          cols: 1,
          rows: 1
        }, {
          title: 'Card 3',
          cols: 1,
          rows: 2
        }, {
          title: 'Card 4',
          cols: 1,
          rows: 1
        }];
      }));
    };

    CardComponent.ctorParameters = function () {
      return [{
        type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"]
      }];
    };

    CardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-card',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./card.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/professional/card/card.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./card.component.css */
      "./src/app/components/professional/card/card.component.css")).default]
    })], CardComponent);
    /***/
  },

  /***/
  "./src/app/components/professional/professional.component.css":
  /*!********************************************************************!*\
    !*** ./src/app/components/professional/professional.component.css ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsProfessionalProfessionalComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".grid-container {\r\n    margin: 20px;\r\n  }\r\n  \r\n  .dashboard-card {\r\n    position: absolute;\r\n    top: 15px;\r\n    left: 15px;\r\n    right: 15px;\r\n    bottom: 15px;\r\n  }\r\n  \r\n  .more-button {\r\n    position: absolute;\r\n    top: 5px;\r\n    right: 10px;\r\n  }\r\n  \r\n  .dashboard-card-content {\r\n    text-align: left;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9mZXNzaW9uYWwvcHJvZmVzc2lvbmFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFVBQVU7SUFDVixXQUFXO0lBQ1gsWUFBWTtFQUNkOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Byb2Zlc3Npb25hbC9wcm9mZXNzaW9uYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmlkLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5kYXNoYm9hcmQtY2FyZCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDE1cHg7XHJcbiAgICBsZWZ0OiAxNXB4O1xyXG4gICAgcmlnaHQ6IDE1cHg7XHJcbiAgICBib3R0b206IDE1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5tb3JlLWJ1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDVweDtcclxuICAgIHJpZ2h0OiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAuZGFzaGJvYXJkLWNhcmQtY29udGVudCB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/professional/professional.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/professional/professional.component.ts ***!
    \*******************************************************************/

  /*! exports provided: ProfessionalComponent */

  /***/
  function srcAppComponentsProfessionalProfessionalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfessionalComponent", function () {
      return ProfessionalComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ProfessionalComponent =
    /*#__PURE__*/
    function () {
      function ProfessionalComponent() {
        _classCallCheck(this, ProfessionalComponent);
      }

      _createClass(ProfessionalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProfessionalComponent;
    }();

    ProfessionalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-professional',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./professional.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/professional/professional.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./professional.component.css */
      "./src/app/components/professional/professional.component.css")).default]
    })], ProfessionalComponent);
    /***/
  },

  /***/
  "./src/app/components/technology/technology.component.css":
  /*!****************************************************************!*\
    !*** ./src/app/components/technology/technology.component.css ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsTechnologyTechnologyComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGVjaG5vbG9neS90ZWNobm9sb2d5LmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/technology/technology.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/technology/technology.component.ts ***!
    \***************************************************************/

  /*! exports provided: TechnologyComponent */

  /***/
  function srcAppComponentsTechnologyTechnologyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TechnologyComponent", function () {
      return TechnologyComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TechnologyComponent =
    /*#__PURE__*/
    function () {
      function TechnologyComponent() {
        _classCallCheck(this, TechnologyComponent);
      }

      _createClass(TechnologyComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TechnologyComponent;
    }();

    TechnologyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-technology',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./technology.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/technology/technology.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./technology.component.css */
      "./src/app/components/technology/technology.component.css")).default]
    })], TechnologyComponent);
    /***/
  },

  /***/
  "./src/app/components/welcome/welcome.component.css":
  /*!**********************************************************!*\
    !*** ./src/app/components/welcome/welcome.component.css ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsWelcomeWelcomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/welcome/welcome.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/welcome/welcome.component.ts ***!
    \*********************************************************/

  /*! exports provided: WelcomeComponent */

  /***/
  function srcAppComponentsWelcomeWelcomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function () {
      return WelcomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var WelcomeComponent =
    /*#__PURE__*/
    function () {
      function WelcomeComponent() {
        _classCallCheck(this, WelcomeComponent);
      }

      _createClass(WelcomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return WelcomeComponent;
    }();

    WelcomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-welcome',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./welcome.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/welcome/welcome.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./welcome.component.css */
      "./src/app/components/welcome/welcome.component.css")).default]
    })], WelcomeComponent);
    /***/
  },

  /***/
  "./src/app/theme/theme.service.ts":
  /*!****************************************!*\
    !*** ./src/app/theme/theme.service.ts ***!
    \****************************************/

  /*! exports provided: ThemeService */

  /***/
  function srcAppThemeThemeServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ThemeService", function () {
      return ThemeService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./theme */
    "./src/app/theme/theme.ts");

    var ThemeService =
    /*#__PURE__*/
    function () {
      function ThemeService() {
        _classCallCheck(this, ThemeService);

        this.active = _theme__WEBPACK_IMPORTED_MODULE_2__["light"];
        this.availableThemes = [_theme__WEBPACK_IMPORTED_MODULE_2__["light"], _theme__WEBPACK_IMPORTED_MODULE_2__["dark"]];
      }

      _createClass(ThemeService, [{
        key: "getAvailableThemes",
        value: function getAvailableThemes() {
          return this.availableThemes;
        }
      }, {
        key: "getActiveTheme",
        value: function getActiveTheme() {
          return this.active;
        }
      }, {
        key: "isDarkTheme",
        value: function isDarkTheme() {
          return this.active.name === _theme__WEBPACK_IMPORTED_MODULE_2__["dark"].name;
        }
      }, {
        key: "setDarkTheme",
        value: function setDarkTheme() {
          this.setActiveTheme(_theme__WEBPACK_IMPORTED_MODULE_2__["dark"]);
        }
      }, {
        key: "setLightTheme",
        value: function setLightTheme() {
          this.setActiveTheme(_theme__WEBPACK_IMPORTED_MODULE_2__["light"]);
        }
      }, {
        key: "setActiveTheme",
        value: function setActiveTheme(theme) {
          var _this = this;

          this.active = theme;
          Object.keys(this.active.properties).forEach(function (property) {
            document.documentElement.style.setProperty(property, _this.active.properties[property]);
          });
        }
      }]);

      return ThemeService;
    }();

    ThemeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], ThemeService);
    /***/
  },

  /***/
  "./src/app/theme/theme.ts":
  /*!********************************!*\
    !*** ./src/app/theme/theme.ts ***!
    \********************************/

  /*! exports provided: light, dark */

  /***/
  function srcAppThemeThemeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "light", function () {
      return light;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "dark", function () {
      return dark;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var light = {
      name: "light",
      properties: {
        "--foreground-default": "#08090A",
        "--foreground-secondary": "#41474D",
        "--foreground-tertiary": "#797C80",
        "--foreground-quaternary": "#F4FAFF",
        "--foreground-light": "#41474D",
        "--background-default": "#F4FAFF",
        "--background-secondary": "#A3B9CC",
        "--background-tertiary": "#5C7D99",
        "--background-light": "#FFFFFF",
        "--primary-default": "#5DFDCB",
        "--primary-dark": "#24B286",
        "--primary-light": "#B2FFE7",
        "--error-default": "#EF3E36",
        "--error-dark": "#800600",
        "--error-light": "#FFCECC",
        "--background-tertiary-shadow": "0 1px 3px 0 rgba(92, 125, 153, 0.5)"
      }
    };
    var dark = {
      name: "dark",
      properties: {
        "--foreground-default": "#5C7D99",
        "--foreground-secondary": "#A3B9CC",
        "--foreground-tertiary": "#F4FAFF",
        "--foreground-quaternary": "#E5E5E5",
        "--foreground-light": "#FFFFFF",
        "--background-default": "#797C80",
        "--background-secondary": "#41474D",
        "--background-tertiary": "#08090A",
        "--background-light": "#41474D",
        "--primary-default": "#5DFDCB",
        "--primary-dark": "#24B286",
        "--primary-light": "#B2FFE7",
        "--error-default": "#EF3E36",
        "--error-dark": "#800600",
        "--error-light": "#FFCECC",
        "--background-tertiary-shadow": "0 1px 3px 0 rgba(8, 9, 10, 0.5)"
      }
    };
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\Desktop\eliagaggi\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map