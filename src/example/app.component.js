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
var example_data_1 = require('./example.data');
var AppComponent = (function () {
    function AppComponent() {
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
                },
                {
                    displayName: 'Delete',
                    type: 'button',
                    config: {
                        buttonName: 'X',
                        buttonClass: 'btn btn-sm btn-danger'
                    }
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
    AppComponent.prototype.selectedItem = function (item) {
        console.log('clicked item:', item);
    };
    AppComponent.prototype.buttonClicked = function (options) {
        console.log(options);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            template: "\n    <div style=\"height: 300px;\">\n      <ng2-table\n        [tableData]=\"myData\"\n        [tableConfig]=\"myConfig\"\n        (selected)=\"selectedItem($event)\"\n        (buttonClicked)=\"buttonClicked($event)\">\n      </ng2-table>\n    </div>\n\n    <br ><br >\n\n    <ng2-table\n      [tableData]=\"myData\"\n      [tableConfig]=\"minimalConfig\"\n      (selected)=\"selectedItem($event)\">\n    </ng2-table>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwQixlQUMxQixDQUFDLENBRHdDO0FBQ3pDLDZCQUE0QixnQkFFNUIsQ0FBQyxDQUYyQztBQXVCNUM7SUFBQTtRQUNTLFdBQU0sR0FBRywwQkFBVyxDQUFDO1FBQ3JCLGFBQVEsR0FBRztZQUNoQixVQUFVLEVBQUU7Z0JBQ1Y7b0JBQ0UsS0FBSyxFQUFFLFFBQVE7b0JBQ2YsV0FBVyxFQUFFLElBQUk7aUJBQ2xCO2dCQUNEO29CQUNFLEtBQUssRUFBRSxVQUFVO29CQUNqQixXQUFXLEVBQUUsTUFBTTtvQkFDbkIsTUFBTSxFQUFFLElBQUk7b0JBQ1osV0FBVyxFQUFFLElBQUk7aUJBQ2xCO2dCQUNEO29CQUNFLEtBQUssRUFBRSxVQUFVO29CQUNqQixXQUFXLEVBQUUsVUFBVTtvQkFDdkIsTUFBTSxFQUFFLElBQUk7aUJBQ2I7Z0JBQ0Q7b0JBQ0UsV0FBVyxFQUFFLFFBQVE7b0JBQ3JCLElBQUksRUFBRSxRQUFRO29CQUNkLE1BQU0sRUFBRTt3QkFDTixVQUFVLEVBQUUsR0FBRzt3QkFDZixXQUFXLEVBQUUsdUJBQXVCO3FCQUNyQztpQkFDRjthQUNGO1NBQ0YsQ0FBQztRQUVLLGtCQUFhLEdBQUc7WUFDckIsVUFBVSxFQUFFO2dCQUNWO29CQUNFLEtBQUssRUFBRSxRQUFRO2lCQUNoQjtnQkFDRDtvQkFDRSxLQUFLLEVBQUUsVUFBVTtpQkFDbEI7YUFDRjtTQUNGLENBQUE7SUFPSCxDQUFDO0lBTlEsbUNBQVksR0FBbkIsVUFBcUIsSUFBSTtRQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQTtJQUNwQyxDQUFDO0lBQ00sb0NBQWEsR0FBcEIsVUFBc0IsT0FBTztRQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQ3RCLENBQUM7SUFsRUg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLEtBQUs7WUFDZixRQUFRLEVBQUUsd2FBaUJUO1NBQ0YsQ0FBQzs7b0JBQUE7SUErQ0YsbUJBQUM7QUFBRCxDQUFDLEFBOUNELElBOENDO0FBOUNZLG9CQUFZLGVBOEN4QixDQUFBIn0=