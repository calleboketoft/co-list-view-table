import { Pipe } from '@angular/core'

@Pipe({
  name: 'filter'
})
export class FilterPipe {
  transform (value, filterParams) {
    return value.filter((item) => {
      // each row
      let resultArr = [] // filter results per column
      filterParams.columnDefs.forEach(columnDef => {
        // each column
        let field = filterParams.columnDefs.find(colDef => {
          return colDef.field === columnDef.field
        })
        if (!field.filterEnabled) {
          // the field doesn't support search, always include
          resultArr.push(true)
        } else {
          // searchable field,
          if (!field.filterValue) {
            return true
          }
          let fieldValue = (item[columnDef.field] + '').toLowerCase()
          let filterValue = (field.filterValue + '').toLowerCase()

          resultArr.push(fieldValue.includes(filterValue))
        }
      })
      return resultArr.every(i => i)
    })
  }
}
