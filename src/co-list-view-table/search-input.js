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
var core_1 = require('angular2/core');
var SearchInput = (function () {
    function SearchInput() {
        this.term = new core_1.EventEmitter();
    }
    SearchInput.prototype.valueChange = function ($event) {
        this.term.emit({
            field: this.field,
            value: $event.target.value
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SearchInput.prototype, "field", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], SearchInput.prototype, "term", void 0);
    SearchInput = __decorate([
        core_1.Component({
            selector: 'search-input-cmp',
            template: "<input type='text' (keyup)='valueChange($event)'>"
        }), 
        __metadata('design:paramtypes', [])
    ], SearchInput);
    return SearchInput;
}());
exports.SearchInput = SearchInput;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWlucHV0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2VhcmNoLWlucHV0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBcUQsZUFFckQsQ0FBQyxDQUZtRTtBQU1wRTtJQUFBO1FBRVksU0FBSSxHQUFHLElBQUksbUJBQVksRUFBRSxDQUFDO0lBUXRDLENBQUM7SUFOUSxpQ0FBVyxHQUFsQixVQUFvQixNQUFNO1FBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ2IsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLEtBQUssRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDM0IsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQVJEO1FBQUMsWUFBSyxFQUFFOzs4Q0FBQTtJQUNSO1FBQUMsYUFBTSxFQUFFOzs2Q0FBQTtJQU5YO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsUUFBUSxFQUFFLG1EQUFtRDtTQUM5RCxDQUFDOzttQkFBQTtJQVdGLGtCQUFDO0FBQUQsQ0FBQyxBQVZELElBVUM7QUFWWSxtQkFBVyxjQVV2QixDQUFBIn0=