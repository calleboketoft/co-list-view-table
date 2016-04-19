import {Pipe} from 'angular2/core'

@Pipe({
  name: 'search'
})
export class SearchPipe {
  transform (value, [searchParams]) {
    return value.filter((item) => {
      // each row
      let resultArr = [] // filter results per column
      Object.keys(item).forEach(fieldKey => {
        // each column
        let field = searchParams.columnDefs.find(colDef => {
          return colDef.field === fieldKey
        })
        if (!field.search) {
          // the field doesn't support search, always include
          resultArr.push(true)
        } else {
          // searchable field,
          if (!field.searchTerm) {
            return true
          }
          resultArr.push(item[fieldKey].toLowerCase().includes(field.searchTerm.toLowerCase()))
        }
      })
      return resultArr.every(i => i)
    })
  }
}
