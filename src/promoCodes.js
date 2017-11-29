import { GenerateBatch } from './lib/PromoCode'
import fs from 'fs'

const promoCodes = GenerateBatch(1000)

fs.writeFile('./promo-codes.txt', promoCodes.join('\n'), () => {})

console.log('Codes generated and stored in "promo-codes.txt"')
