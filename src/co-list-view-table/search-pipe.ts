import {Pipe} from 'angular2/core'

@Pipe({
  name: 'search'
})
export class SearchPipe {
  transform (value, [key, term]) {
    return value.filter((item) => {
      return item[value].contains(term)
    })
  }
}
