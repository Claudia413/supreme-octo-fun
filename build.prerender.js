
const axios = require('axios');
const path = require('path');

module.exports = (api, options) => {
    const accessToken = process.env.VUE_APP_PRISMIC_API_KEY;
    api.registerCommand('build:prerender', async (args) => {
        const PrerenderSPAPlugin = require('prerender-spa-plugin')
        const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;
        const {
            data
        } = await axios.get('https://claudiaengelsman-com.prismic.io/api/v2/documents/search?ref=XnkbdBIAACoAldtt&access_token=' + accessToken + '#format=json')
        const blogs = data
        api.chainWebpack(config => {
            config.plugin('prerender').use(PrerenderSPAPlugin, [{
                // Required - The path to the webpack-outputted app to prerender.
                staticDir: path.join(__dirname, 'dist'),
                // Required - Routes to render.
                routes: ['/', '/about', '/blog'].concat(blogs.results.map(blog => `/blog/${blog.uid}`)),
                renderer: new Renderer({
                    renderAfterDocumentEvent: 'render-event'
                })
            }])
        })

        await api.service.run('build', args)
    })
}

module.exports.defaultModes = {
    'build:prerender': 'production'
}