const build = require('esbuild')

const imageHandler = require('./plugins/plugin-imageHandle')
const httpImport = require('./plugins/plugin-http-import-plugin')
const html = require('./plugins/plugin-html')

async function init() {
  // plugin-imageHandler
  // const ctx = await build.context({
  //   entryPoints: ['app.js'],
  //   outfile: 'dist/images_url/out.js',
  //   bundle: true,
  //   external: ['lodash'],
  //   plugins: [ 
  //     imageHandler(),
  //   ],
  //   loader: { '.jpg': 'base64' }
  // })
  // await ctx.watch()

  // plugin-http-url-handler
  // build.build({
  //   entryPoints: ['indexJsx.jsx'],
  //   outfile: 'dist/http_url/out.js',
  //   bundle: true,
  //   plugins: [
  //     httpImport()
  //   ],
  // }).then(() => {
  //   console.log("Build Finished!");
  // })

  // plugin-html
  // build.build({
  //   entryPoints: ['app.js'],
  //   outfile: 'dist/html/out.js',
  //   bundle: true,
  //   metafile: true,
  //   loader: { '.jpg': 'base64' },
  //   plugins: [
  //     html()
  //   ],
  // }).then(() => {
  //   console.log("Build Finished!");
  // })

}

init()