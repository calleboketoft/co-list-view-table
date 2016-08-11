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
var core_1 = require('@angular/core');
var SearchInputComponent = (function () {
    function SearchInputComponent() {
        this.placeholder = 'Search';
        this.search = new core_1.EventEmitter();
    }
    SearchInputComponent.prototype.valueChange = function ($event) {
        this.search.emit({
            field: this.field,
            value: $event.target.value
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SearchInputComponent.prototype, "field", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SearchInputComponent.prototype, "placeholder", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], SearchInputComponent.prototype, "search", void 0);
    SearchInputComponent = __decorate([
        core_1.Component({
            selector: 'search-input-cmp',
            styles: ["\n    .form-control {\n      max-width: 200px;\n      font-weight: 400;\n    }\n  "],
            template: "\n    <input type='text'\n      class='form-control'\n      (keyup)='valueChange($event)'\n      placeholder='{{placeholder}}'>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], SearchInputComponent);
    return SearchInputComponent;
}());
exports.SearchInputComponent = SearchInputComponent;
//# sourceMappingURL=search-input.component.js.map