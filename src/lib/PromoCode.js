const GenerateBatch = (amount = 1) => {
  const batch = []

  while ((batch.length + 1) <= amount) {
    let promoCode = ''
    for (let j = 0; j < 9; j++) {
      const y = Math.floor(Math.random() * 10)
      promoCode = promoCode + y.toString()
    }

    if (Validate(promoCode) && batch.indexOf(promoCode) === -1) {
      batch.push(promoCode)
    }
  }

  return batch
}

const Validate = (promoCode) => {
  // Check 11-test
  const p1 = promoCode.substr(0, 1) * 9
  const p2 = promoCode.substr(1, 1) * 8
  const p3 = promoCode.substr(2, 1) * 7
  const p4 = promoCode.substr(3, 1) * 6
  const p5 = promoCode.substr(4, 1) * 5
  const p6 = promoCode.substr(5, 1) * 4
  const p7 = promoCode.substr(6, 1) * 3
  const p8 = promoCode.substr(7, 1) * 2
  const p9 = promoCode.substr(8, 1) * 1
  const total = p1 + p2 + p3 + p4 + p5 + p6 + p7 + p8 + p9
  const remainder = total % 11

  if (remainder === 0) {
    // check max occurrences of single digits
    for (let i = 0; i < promoCode.length; i++) {
      const re = new RegExp(promoCode[i], 'g')
      const count = (promoCode.match(re) || []).length
      if (count > 2) {
        return false
      }
    }

    return true
  }
}

export { GenerateBatch, Validate }
