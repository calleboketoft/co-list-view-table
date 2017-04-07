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
var core_1 = require("@angular/core");
var ExampleDynamicComponent = (function () {
    function ExampleDynamicComponent() {
        this.change = new core_1.EventEmitter();
        this.toggle = true;
    }
    ExampleDynamicComponent.prototype.buttonClicked = function ($event) {
        $event.stopPropagation();
        this.toggle = !this.toggle;
        this.change.next(this.toggle);
    };
    return ExampleDynamicComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ExampleDynamicComponent.prototype, "data", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ExampleDynamicComponent.prototype, "change", void 0);
ExampleDynamicComponent = __decorate([
    core_1.Component({
        selector: 'example-dynamic-component',
        template: "\n    <button (click)=\"buttonClicked($event)\">{{ toggle ? 'Hello' : 'Goodbye' }} {{ data.userName }}</button>\n  "
    })
], ExampleDynamicComponent);
exports.ExampleDynamicComponent = ExampleDynamicComponent;
//# sourceMappingURL=example-dynamic.component.js.map