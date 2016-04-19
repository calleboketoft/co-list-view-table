import {Pipe} from 'angular2/core'

@Pipe({
  name: 'search'
})
export class SearchPipe {
  transform (value, [searchParams]) {
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
          resultArr.push(item[columnDef.field].toLowerCase().includes(field.searchTerm.toLowerCase()))
        }
      })
      return resultArr.every(i => i)
    })
  }
}
