/*
const fs = require('fs')

if (process.argv.length === 2) {
  console.log('Error: No file to read.')
  process.exit(1)
}

if (process.argv.length >= 4) {
  console.log('Error: Too many arguments.')
  process.exit(1)
}


if (!fs.existsSync(process.argv[2])) {
  console.log(`Error "${process.argv[2]}" not found.`)
  process.exit(1)
}

let txt = fs.readFileSync(`${process.argv[2]}`, 'utf-8')
  console.log(txt)
  */

const fs = require('fs')


if (process.argv.length === 2) {
  console.log('Error: No file to read.')
  process.exit(1)
}
  
if (!fs.existsSync(process.argv[2])) {
  console.log(`Error "${process.argv[2]}" not found.`)
  process.exit(1)
}

for (let i = 2; i < process.argv.length; ++i) {
  let txt = fs.readFileSync(`${process.argv[i]}`, 'utf-8')
  console.log(txt)
}