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
var co_list_view_table_cmp_1 = require('../co-list-view-table/co-list-view-table-cmp');
var AppCmp = (function () {
    function AppCmp() {
        this.myData = [
            {
                userId: '1',
                userName: 'Carl',
                nickName: 'Calle'
            },
            {
                userId: '2',
                userName: 'Boke',
                nickName: 'G'
            },
            {
                userId: '3',
                userName: 'Bubba',
                nickName: 'Bullen'
            }
        ];
        this.myConfig = {
            columnDefs: [
                {
                    field: 'userId',
                    displayName: 'ID'
                },
                {
                    field: 'userName',
                    displayName: 'Name',
                    search: true
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
            directives: [co_list_view_table_cmp_1.CoListViewTableCmp],
            template: "\n    <co-list-view-table\n      [tableData]='myData'\n      [tableConfig]='myConfig'\n      (selected)='selectedItem($event)'>\n    </co-list-view-table>\n\n    <br><br>\n\n    <co-list-view-table\n      [tableData]='myData'\n      [tableConfig]='minimalConfig'\n      (selected)='selectedItem($event)'>\n    </co-list-view-table>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppCmp);
    return AppCmp;
}());
exports.AppCmp = AppCmp;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWNtcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC1jbXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF3QixlQUN4QixDQUFDLENBRHNDO0FBQ3ZDLHVDQUFpQyw4Q0FFakMsQ0FBQyxDQUY4RTtBQXFCL0U7SUFBQTtRQUNTLFdBQU0sR0FBRztZQUNkO2dCQUNFLE1BQU0sRUFBRSxHQUFHO2dCQUNYLFFBQVEsRUFBRSxNQUFNO2dCQUNoQixRQUFRLEVBQUUsT0FBTzthQUNsQjtZQUNEO2dCQUNFLE1BQU0sRUFBRSxHQUFHO2dCQUNYLFFBQVEsRUFBRSxNQUFNO2dCQUNoQixRQUFRLEVBQUUsR0FBRzthQUNkO1lBQ0Q7Z0JBQ0UsTUFBTSxFQUFFLEdBQUc7Z0JBQ1gsUUFBUSxFQUFFLE9BQU87Z0JBQ2pCLFFBQVEsRUFBRSxRQUFRO2FBQ25CO1NBQ0YsQ0FBQztRQUNLLGFBQVEsR0FBRztZQUNoQixVQUFVLEVBQUU7Z0JBQ1Y7b0JBQ0UsS0FBSyxFQUFFLFFBQVE7b0JBQ2YsV0FBVyxFQUFFLElBQUk7aUJBQ2xCO2dCQUNEO29CQUNFLEtBQUssRUFBRSxVQUFVO29CQUNqQixXQUFXLEVBQUUsTUFBTTtvQkFDbkIsTUFBTSxFQUFFLElBQUk7aUJBQ2I7Z0JBQ0Q7b0JBQ0UsS0FBSyxFQUFFLFVBQVU7b0JBQ2pCLFdBQVcsRUFBRSxVQUFVO29CQUN2QixNQUFNLEVBQUUsSUFBSTtpQkFDYjthQUNGO1NBQ0YsQ0FBQztRQUVLLGtCQUFhLEdBQUc7WUFDckIsVUFBVSxFQUFFO2dCQUNWO29CQUNFLEtBQUssRUFBRSxRQUFRO2lCQUNoQjtnQkFDRDtvQkFDRSxLQUFLLEVBQUUsVUFBVTtpQkFDbEI7YUFDRjtTQUNGLENBQUE7SUFJSCxDQUFDO0lBSFMsNkJBQVksR0FBcEIsVUFBc0IsSUFBSTtRQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQTtJQUNwQyxDQUFDO0lBcEVIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxLQUFLO1lBQ2YsVUFBVSxFQUFFLENBQUMsMkNBQWtCLENBQUM7WUFDaEMsUUFBUSxFQUFFLGlWQWNUO1NBQ0YsQ0FBQzs7Y0FBQTtJQW1ERixhQUFDO0FBQUQsQ0FBQyxBQWxERCxJQWtEQztBQWxEWSxjQUFNLFNBa0RsQixDQUFBIn0=