const path = require('path')

module.exports = function imageHandler() {
  return {
    name: 'my-plugin',
    setup(build) {
      // build.onEnd(() => {
      //   console.log('watching...')
      // })

      // Redirect all paths starting with "images/" to "./public/images/"
      build.onResolve({ filter: /\.jpg$/ }, args => {
        console.log(args)
        return {
          path: path.join(args.resolveDir, 'public', args.path),
          external: true 
        }
      })
    },
  }
}