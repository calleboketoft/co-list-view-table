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
var ListViewTableCmp = (function () {
    function ListViewTableCmp() {
        this.selected = new core_1.EventEmitter();
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ListViewTableCmp.prototype, "tableData", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ListViewTableCmp.prototype, "tableConfig", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ListViewTableCmp.prototype, "selected", void 0);
    ListViewTableCmp = __decorate([
        core_1.Component({
            selector: 'list-view-table-cmp',
            template: "\n    <table class='table'>\n      <thead>\n        <tr>\n          <th *ngFor='#col of tableConfig.columnDefs'>\n            {{col.displayName}}\n          </th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor='#dataRow of tableData' (click)='selected.emit(dataRow)'>\n          <td *ngFor='#col of tableConfig.columnDefs'>\n            {{dataRow[col.field]}}\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], ListViewTableCmp);
    return ListViewTableCmp;
}());
exports.ListViewTableCmp = ListViewTableCmp;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY28tbGlzdC12aWV3LXRhYmxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY28tbGlzdC12aWV3LXRhYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBcUQsZUFFckQsQ0FBQyxDQUZtRTtBQTJCcEU7SUFBQTtRQUdZLGFBQVEsR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztJQUMxQyxDQUFDO0lBSEM7UUFBQyxZQUFLLEVBQUU7O3VEQUFBO0lBQ1I7UUFBQyxZQUFLLEVBQUU7O3lEQUFBO0lBQ1I7UUFBQyxhQUFNLEVBQUU7O3NEQUFBO0lBeEJYO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxxQkFBcUI7WUFDL0IsUUFBUSxFQUFFLDhiQWlCVDtTQUNGLENBQUM7O3dCQUFBO0lBS0YsdUJBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQztBQUpZLHdCQUFnQixtQkFJNUIsQ0FBQSJ9