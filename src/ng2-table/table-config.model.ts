export interface TableConfigModel {
  columnDefs: TableColModel[]
  tableNgClass?: any
  rowNgStyle?: any
  rowNgStylePredicate?: any
  rowNgClass?: any
  rowNgClassPredicate?: any
}

export interface TableColModel {
  field?: string
  width?: string
  search?: boolean
  sortDefault?: boolean
  sortDefaultReverse?: boolean
  headerTitle?: string
  headerNgStyle?: any
  headerNgClass?: any
  cellNgStyle?: any
  cellNgStylePredicate?: any
  cellNgClass?: any
  cellNgClassPredicate?: any
  cellItem?: {
    elementType: string // 'button' or 'div'
    staticContent?: string // otherwise just wraps field value
    cellItemNgStyle?: any
    cellItemNgStylePredicate?: any
    cellItemNgClass?: any
    cellItemNgClassPredicate?: any
  }
}
