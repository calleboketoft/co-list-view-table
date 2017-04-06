"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var dynamic_directive_1 = require("./dynamic.directive");
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var ng2_table_component_1 = require("./ng2-table.component");
var filter_pipe_1 = require("./filter.pipe");
var filter_input_component_1 = require("./filter-input.component");
var dynamic_component_1 = require("./dynamic.component");
var Ng2TableModule = (function () {
    function Ng2TableModule() {
    }
    return Ng2TableModule;
}());
Ng2TableModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule],
        declarations: [
            ng2_table_component_1.Ng2TableComponent,
            filter_input_component_1.FilterInputComponent,
            filter_pipe_1.FilterPipe,
            dynamic_component_1.DynamicComponent,
            dynamic_directive_1.DynamicDirective
        ],
        exports: [ng2_table_component_1.Ng2TableComponent]
    })
], Ng2TableModule);
exports.Ng2TableModule = Ng2TableModule;
//# sourceMappingURL=ng2-table.module.js.map