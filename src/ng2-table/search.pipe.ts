import { Pipe } from '@angular/core'

@Pipe({
  name: 'search'
})
export class SearchPipe {
  transform (value, searchParams) {
    return value.filter((item) => {
      // each row
      let resultArr = [] // filter results per column
      searchParams.columnDefs.forEach(columnDef => {
        // each column
        let field = searchParams.columnDefs.find(colDef => {
          return colDef.field === columnDef.field
        })
        if (!field.search) {
          // the field doesn't support search, always include
          resultArr.push(true)
        } else {
          // searchable field,
          if (!field.searchTerm) {
            return true
          }
          let fieldValue = (item[columnDef.field] + '').toLowerCase()
          let searchTerm = (field.searchTerm + '').toLowerCase()

          resultArr.push(fieldValue.includes(searchTerm))
        }
      })
      return resultArr.every(i => i)
    })
  }
}
