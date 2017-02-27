// https://github.com/thelgevold/angular-2-samples
export function tableDataSort (key: string, data: any[], direction: number) {
  let dataCopy = data.map(i => Object.assign({}, i))

  dataCopy.sort((a, b) => {
    let aTmp = (a[key] + '').toLowerCase()
    let bTmp = (b[key] + '').toLowerCase()
    if (aTmp === bTmp || direction === 0) {
      return 0
    } else if (aTmp > bTmp) {
      return direction
    } else {
      return -direction
    }
  })

  return dataCopy
}
