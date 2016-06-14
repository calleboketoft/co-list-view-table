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
var co_list_view_table_component_1 = require('../co-list-view-table/co-list-view-table.component');
var example_data_1 = require('./example.data');
var AppCmp = (function () {
    function AppCmp() {
        this.myData = example_data_1.exampleData;
        this.myConfig = {
            columnDefs: [
                {
                    field: 'userId',
                    displayName: 'ID'
                },
                {
                    field: 'userName',
                    displayName: 'Name',
                    search: true,
                    sortDefault: true
                },
                {
                    field: 'nickName',
                    displayName: 'Nickname',
                    search: true
                }
            ]
        };
        this.minimalConfig = {
            columnDefs: [
                {
                    field: 'userId'
                },
                {
                    field: 'userName'
                }
            ]
        };
    }
    AppCmp.prototype.selectedItem = function (item) {
        console.log('clicked item:', item);
    };
    AppCmp = __decorate([
        core_1.Component({
            selector: 'app',
            directives: [co_list_view_table_component_1.CoListViewTableComponent],
            template: "\n    <div style='height: 250px;'>\n      <co-list-view-table-cmp\n        [tableData]='myData'\n        [tableConfig]='myConfig'\n        (selected)='selectedItem($event)'>\n      </co-list-view-table-cmp>\n    </div>\n\n    <br><br>\n\n    <co-list-view-table-cmp\n      [tableData]='myData'\n      [tableConfig]='minimalConfig'\n      (selected)='selectedItem($event)'>\n    </co-list-view-table-cmp>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppCmp);
    return AppCmp;
}());
exports.AppCmp = AppCmp;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF3QixlQUN4QixDQUFDLENBRHNDO0FBQ3ZDLDZDQUF1QyxvREFDdkMsQ0FBQyxDQUQwRjtBQUMzRiw2QkFBMEIsZ0JBRTFCLENBQUMsQ0FGeUM7QUF1QjFDO0lBQUE7UUFDUyxXQUFNLEdBQUcsMEJBQVcsQ0FBQztRQUNyQixhQUFRLEdBQUc7WUFDaEIsVUFBVSxFQUFFO2dCQUNWO29CQUNFLEtBQUssRUFBRSxRQUFRO29CQUNmLFdBQVcsRUFBRSxJQUFJO2lCQUNsQjtnQkFDRDtvQkFDRSxLQUFLLEVBQUUsVUFBVTtvQkFDakIsV0FBVyxFQUFFLE1BQU07b0JBQ25CLE1BQU0sRUFBRSxJQUFJO29CQUNaLFdBQVcsRUFBRSxJQUFJO2lCQUNsQjtnQkFDRDtvQkFDRSxLQUFLLEVBQUUsVUFBVTtvQkFDakIsV0FBVyxFQUFFLFVBQVU7b0JBQ3ZCLE1BQU0sRUFBRSxJQUFJO2lCQUNiO2FBQ0Y7U0FDRixDQUFDO1FBRUssa0JBQWEsR0FBRztZQUNyQixVQUFVLEVBQUU7Z0JBQ1Y7b0JBQ0UsS0FBSyxFQUFFLFFBQVE7aUJBQ2hCO2dCQUNEO29CQUNFLEtBQUssRUFBRSxVQUFVO2lCQUNsQjthQUNGO1NBQ0YsQ0FBQTtJQUlILENBQUM7SUFIUyw2QkFBWSxHQUFwQixVQUFzQixJQUFJO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFBO0lBQ3BDLENBQUM7SUF2REg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLEtBQUs7WUFDZixVQUFVLEVBQUUsQ0FBQyx1REFBd0IsQ0FBQztZQUN0QyxRQUFRLEVBQUUseVpBZ0JUO1NBQ0YsQ0FBQzs7Y0FBQTtJQW9DRixhQUFDO0FBQUQsQ0FBQyxBQW5DRCxJQW1DQztBQW5DWSxjQUFNLFNBbUNsQixDQUFBIn0=