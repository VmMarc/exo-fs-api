const fs = require('fs')

if (process.argv.length !== 4) {
  console.log('Usage: node cp.js oldFile newFile')
  process.exit(1)
  } else if (!fs.existsSync(process.argv[2])) {
  console.log(`Error "${process.argv[2]}" not found.`)
  process.exit(1)
  }
  fs.copyFileSync(`${process.argv[2]}`, `${process.argv[3]}`)
  console.log(`${process.argv[2]} successfully copied to ${process.argv[3]}.`)