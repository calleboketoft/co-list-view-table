
function sort<T> (a: T, b: T): number {
  if (a > b) {
    return 1
  }
  if (a < b) {
    return -1
  }

  return 0
}

// https://github.com/thelgevold/angular-2-samples
export function tableDataSort (key: string, data: any[], direction: number) {
  let dataCopy = data.map(i => Object.assign({}, i))

  dataCopy.sort((a, b) => {
    let sortResult: number
    let aTmp = a[key]
    let bTmp = b[key]
     
    if (typeof aTmp === 'number' && typeof bTmp === 'number') {
      sortResult = sort(aTmp, bTmp)
    } else {
      sortResult = sort((aTmp + '').toLowerCase(), (bTmp + '').toLowerCase())
    }

    return sortResult * direction
  })

  return dataCopy
}
