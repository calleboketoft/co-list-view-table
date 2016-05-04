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
var SearchInput = (function () {
    function SearchInput() {
        this.placeholder = 'Search';
        this.search = new core_1.EventEmitter();
    }
    SearchInput.prototype.valueChange = function ($event) {
        this.search.emit({
            field: this.field,
            value: $event.target.value
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SearchInput.prototype, "field", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SearchInput.prototype, "placeholder", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], SearchInput.prototype, "search", void 0);
    SearchInput = __decorate([
        core_1.Component({
            selector: 'search-input-cmp',
            styles: ["\n    .form-control {\n      max-width: 200px;\n      font-weight: 400;\n    }\n  "],
            template: "\n    <input type='text'\n      class='form-control'\n      (keyup)='valueChange($event)'\n      placeholder='{{placeholder}}'>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], SearchInput);
    return SearchInput;
}());
exports.SearchInput = SearchInput;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWlucHV0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2VhcmNoLWlucHV0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBcUQsZUFFckQsQ0FBQyxDQUZtRTtBQWlCcEU7SUFBQTtRQUVXLGdCQUFXLEdBQUcsUUFBUSxDQUFDO1FBQ3RCLFdBQU0sR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztJQVF4QyxDQUFDO0lBTlEsaUNBQVcsR0FBbEIsVUFBb0IsTUFBTTtRQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNmLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixLQUFLLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLO1NBQzNCLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFURDtRQUFDLFlBQUssRUFBRTs7OENBQUE7SUFDUjtRQUFDLFlBQUssRUFBRTs7b0RBQUE7SUFDUjtRQUFDLGFBQU0sRUFBRTs7K0NBQUE7SUFsQlg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixNQUFNLEVBQUUsQ0FBQyxvRkFLUixDQUFDO1lBQ0YsUUFBUSxFQUFFLHFJQUtUO1NBQ0YsQ0FBQzs7bUJBQUE7SUFZRixrQkFBQztBQUFELENBQUMsQUFYRCxJQVdDO0FBWFksbUJBQVcsY0FXdkIsQ0FBQSJ9