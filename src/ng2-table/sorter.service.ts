// https://github.com/thelgevold/angular-2-samples
export class Sorter {
  direction: number
  key: string

  constructor() {
    this.direction = 1
  }

  sort(key: string, data: any[], dontToggle) {
    let dataCopy = data.map(i => Object.assign({}, i))
    if (this.key === key && !dontToggle) {
      this.direction = -this.direction
    } else {
      this.direction = 1
    }

    this.key = key

    dataCopy.sort((a, b) => {
      let aTmp = (a[key] + '').toLowerCase()
      let bTmp = (b[key] + '').toLowerCase()
      if (aTmp === bTmp) {
        return 0
      } else if (aTmp > bTmp) {
        return this.direction
      } else {
        return -this.direction
      }
    })

    return dataCopy
  }
}
