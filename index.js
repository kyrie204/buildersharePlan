const build = require('esbuild')

const imageHandler = require('./plugins/plugin_imageHandle')

async function init() {
  const ctx = await build.context({
    entryPoints: ['app.js'],
    outfile: 'dist/out.js',
    bundle: true,
    external: ['lodash'],
    plugins: [imageHandler()],
    // loader: { '.jpg': 'binary' }
  })
  await ctx.watch()

}

init()