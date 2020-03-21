const PrerenderSpaPlugin = require('prerender-spa-plugin')
// const Renderer = PrerenderSpaPlugin.PuppeteerRenderer
const path = require('path')

module.exports = {
    runtimeCompiler: true,

    configureWebpack: {
        plugins: [
            new PrerenderSpaPlugin({
                // Absolute path to compiled SPA
                staticDir: path.join(__dirname, 'dist'),
                indexPath: path.join(__dirname, 'dist', 'index.html'),
                // List of routes to prerender
                routes: ['/', '/about', '/blog'],
        }),
        ]
    }
}