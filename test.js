let js = 'module.exports = "test"'
let out = require('esbuild').transformSync(js, {
  format: 'esm',
})
process.stdout.write(out.code)