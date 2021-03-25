
if (process.argv.length === 2) {
  console.log(`Error: nothing to echo.`)
  process.exit(1)
}

tab = ''
for (let i = 2; i < process.argv.length; ++i){
  tab += `${process.argv[i]} `
}
  console.log(tab)

