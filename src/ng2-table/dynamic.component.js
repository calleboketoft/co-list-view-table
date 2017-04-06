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
var dynamic_directive_1 = require("./dynamic.directive");
var core_1 = require("@angular/core");
var DynamicComponent = (function () {
    function DynamicComponent(resolver) {
        this.resolver = resolver;
        this.change = new core_1.EventEmitter();
    }
    DynamicComponent.prototype.ngOnChanges = function () {
        var _this = this;
        // Create the component factory
        var componentFactory = this.resolver.resolveComponentFactory(this.component);
        var viewRef = this.dynamicHost.viewContainerRef;
        // Clear the current component from the view
        viewRef.clear();
        this.clearSubscription();
        // Create a new component and attach it to the view
        var componentRef = viewRef.createComponent(componentFactory);
        componentRef.instance.data = this.rowData;
        if (componentRef.instance.change) {
            this.changeSubscription = componentRef.instance.change.subscribe(function (change) { return _this.change.next(change); });
        }
    };
    DynamicComponent.prototype.ngOnDestroy = function () {
        this.clearSubscription();
    };
    DynamicComponent.prototype.clearSubscription = function () {
        if (this.changeSubscription) {
            this.changeSubscription.unsubscribe();
        }
    };
    return DynamicComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", core_1.Type)
], DynamicComponent.prototype, "component", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DynamicComponent.prototype, "rowData", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], DynamicComponent.prototype, "change", void 0);
__decorate([
    core_1.ViewChild(dynamic_directive_1.DynamicDirective),
    __metadata("design:type", dynamic_directive_1.DynamicDirective)
], DynamicComponent.prototype, "dynamicHost", void 0);
DynamicComponent = __decorate([
    core_1.Component({
        selector: 'dynamic-component',
        template: "\n    <ng-template dynamic-host></ng-template>\n  ",
    }),
    __metadata("design:paramtypes", [core_1.ComponentFactoryResolver])
], DynamicComponent);
exports.DynamicComponent = DynamicComponent;
//# sourceMappingURL=dynamic.component.js.map