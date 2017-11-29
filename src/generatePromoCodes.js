import { GenerateBatch } from './lib/PromoCode'
import fs from 'fs'

const promoCodes = GenerateBatch(1000)
const codes = `export default [${promoCodes.map((c) => { return `'${c}'` }).join(', ')}]`
const path = './src/PromoCodes.js'

fs.writeFile(path, codes, () => {})

console.log(`Codes generated and stored in "${path}"`)
