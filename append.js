const fs = require('fs')


if (process.argv.length === 2) {
  console.log('Error: No file to read.')
  process.exit(1)
}
  
if (!fs.existsSync(process.argv[2])) {
  console.log(`Error "${process.argv[2]}" not found.`)
  process.exit(1)
}

let txt = ''
for (let i = 2; i < process.argv.length - 1; ++i) {
  txt += fs.readFileSync(process.argv[i]) + '\n' + '\n'
}
fs.writeFileSync(process.argv[process.argv.length - 1], txt)