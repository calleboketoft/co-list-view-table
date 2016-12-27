"use strict";
exports.exampleTableConfig = {
    // the following three properties create a "clickable row" look
    // and highlights the most recently clicked row in the table
    tableNgClass: 'table table-striped table-hover',
    rowNgStyle: { 'cursor': 'pointer' },
    rowNgClassPredicate: function (rowData, rowIndex, activeRow) {
        return rowIndex === activeRow ? ['table-active'] : '';
    },
    columnDefs: [
        {
            field: 'userId',
            headerText: 'ID',
            headerNgClass: 'text-muted',
            sortDefault: 'asc',
            width: '100px'
        },
        {
            field: 'pet',
            headerText: 'Pet',
            cellItem: {
                // elementType can be either 'div' or 'button'
                elementType: 'div',
                cellItemNgClassPredicate: function (rowData) {
                    return rowData.pet === 'beer' ? 'tag tag-warning' : 'tag tag-primary';
                }
            }
        },
        {
            field: 'userName',
            headerText: 'Name',
            filterEnabled: true,
            filterPlaceholder: 'test',
            cellNgStyle: { 'font-weight': 'bold' }
        },
        {
            field: 'nickName',
            headerText: 'Nickname',
            filterEnabled: true,
            cellItem: {
                elementType: 'div',
                cellItemNgStyle: { 'width': '120px' },
                cellItemNgClass: 'btn btn-sm btn-info'
            }
        },
        {
            // field isn't required when having a cellItem
            headerText: 'Delete',
            headerNgStyle: { 'text-align': 'center', 'color': 'red' },
            cellNgStyle: { 'text-align': 'center' },
            cellItem: {
                elementType: 'button',
                staticContent: 'Danger',
                cellItemNgClass: 'btn btn-sm btn-danger'
            }
        }
    ]
};
//# sourceMappingURL=example-table.config.js.map