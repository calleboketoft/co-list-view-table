"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getNgThing(thingType, classOrStyle, tableConfig, rowData, rowIndex, activeRow, col) {
    switch (thingType + '-' + classOrStyle) {
        case 'table-class':
            return tableConfig['tableNgClass'] || 'table table-striped';
        case 'table-style':
            return tableConfig['tableNgStyle'] || '';
        case 'row-class':
            if (tableConfig['rowNgClassPredicate']) {
                return tableConfig['rowNgClassPredicate'](rowData, rowIndex, activeRow);
            }
            return tableConfig['rowNgClass'] || '';
        case 'row-style':
            if (tableConfig['rowNgStylePredicate']) {
                return tableConfig['rowNgStylePredicate'](rowData, rowIndex, activeRow);
            }
            return tableConfig['rowNgStyle'] || '';
        case 'cell-class':
            if (col['cellNgClassPredicate']) {
                return col['cellNgClassPredicate'](rowData, rowIndex, activeRow);
            }
            return col['cellNgClass'] || '';
        case 'cell-style':
            if (col['cellNgStylePredicate']) {
                return col['cellNgStylePredicate'](rowData, rowIndex, activeRow);
            }
            return col['cellNgStyle'] || '';
        case 'cellItemButton-class':
            if (col['cellItem']['cellItemNgClassPredicate']) {
                return col['cellItem']['cellItemNgClassPredicate'](rowData, rowIndex, activeRow);
            }
            return col['cellItem']['cellItemNgClass'] || '';
        case 'cellItemButton-style':
            if (col['cellItem']['cellItemNgStylePredicate']) {
                return col['cellItem']['cellItemNgStylePredicate'](rowData, rowIndex, activeRow);
            }
            return col['cellItem']['cellItemNgStyle'] || '';
        case 'cellItemDiv-class':
            if (col['cellItem']['cellItemNgClassPredicate']) {
                return col['cellItem']['cellItemNgClassPredicate'](rowData, rowIndex, activeRow);
            }
            return col['cellItem']['cellItemNgClass'] || '';
        case 'cellItemDiv-style':
            if (col['cellItem']['cellItemNgStylePredicate']) {
                return col['cellItem']['cellItemNgStylePredicate'](rowData, rowIndex, activeRow);
            }
            return col['cellItem']['cellItemNgStyle'] || '';
        case 'header-class':
            return col['headerNgClass'] || '';
        case 'header-style':
            return col['headerNgStyle'] || '';
    }
}
exports.getNgThing = getNgThing;
//# sourceMappingURL=style-and-class.service.js.map