const build = require('esbuild')
const path = require('path')

const plugins = [{
  name: 'my-plugin',
  setup(build) {
    // Redirect all paths starting with "images/" to "./public/images/"
    build.onResolve({ filter: /\.jpg$/ }, args => {
      console.log(args)
      return { path: path.join(args.resolveDir, 'public', args.path), external: true}
    })
    build.onResolve({ filter: /.*/, namespace: 'myImage' }, args => {
      console.log({ args2: args })
    })
    // let count = 0;
    // build.onEnd(result => {
    // console.log('监听文件中...');
    // if (count++ === 0) console.log('first build:', result);
    // else console.log('subsequent build:', result);
    // });
  },
}];

async function init() {
  const ctx = await build.context({
    entryPoints: ['app.js'],
    outfile: 'dist/out.js',
    bundle: true,
    external: ['lodash'],
    plugins,
    loader: { '.jpg': 'binary' }
  })
  await ctx.watch()

  console.log('watching...')
}

init()