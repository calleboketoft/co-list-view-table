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
var co_list_view_table_1 = require('../co-list-view-table/co-list-view-table');
var AppCmp = (function () {
    function AppCmp() {
        this.myData = [
            { userId: '1', userName: 'Calle' },
            { userId: '2', userName: 'Nisse' }
        ];
        this.myConfig = {
            columnDefs: [
                { field: 'userId', displayName: 'ID' },
                { field: 'userName', displayName: 'Name' }
            ]
        };
    }
    AppCmp.prototype.selectedItem = function (item) {
        console.log('clicked item:', item);
    };
    AppCmp = __decorate([
        core_1.Component({
            selector: 'app',
            directives: [co_list_view_table_1.ListViewTableCmp],
            template: "\n    <list-view-table-cmp\n      [tableData]='myData'\n      [tableConfig]='myConfig'\n      (selected)='selectedItem($event)'>\n    </list-view-table-cmp>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppCmp);
    return AppCmp;
}());
exports.AppCmp = AppCmp;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWNtcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC1jbXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF3QixlQUN4QixDQUFDLENBRHNDO0FBQ3ZDLG1DQUErQiwwQ0FFL0IsQ0FBQyxDQUZ3RTtBQWF6RTtJQUFBO1FBQ1MsV0FBTSxHQUFHO1lBQ2QsRUFBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUM7WUFDaEMsRUFBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUM7U0FDakMsQ0FBQztRQUNNLGFBQVEsR0FBRztZQUNqQixVQUFVLEVBQUU7Z0JBQ1YsRUFBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUM7Z0JBQ3BDLEVBQUMsS0FBSyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFDO2FBQ3pDO1NBQ0YsQ0FBQztJQUlKLENBQUM7SUFIUyw2QkFBWSxHQUFwQixVQUFzQixJQUFJO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFBO0lBQ3BDLENBQUM7SUF4Qkg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLEtBQUs7WUFDZixVQUFVLEVBQUUsQ0FBQyxxQ0FBZ0IsQ0FBQztZQUM5QixRQUFRLEVBQUUsa0tBTVQ7U0FDRixDQUFDOztjQUFBO0lBZUYsYUFBQztBQUFELENBQUMsQUFkRCxJQWNDO0FBZFksY0FBTSxTQWNsQixDQUFBIn0=