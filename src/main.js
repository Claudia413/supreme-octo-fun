import Vue from 'vue'
import PrismicVue from 'prismic-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import linkResolver from './link-resolver'
import VueTypedJs from 'vue-typed-js'
import vueHeadful from 'vue-headful';

Vue.config.productionTip = false

const accessToken = process.env.VUE_APP_PRISMIC_API_KEY;

Vue.use(PrismicVue, {
  endpoint: window.prismic.endpoint,
  linkResolver,
  apiOptions: {
    accessToken
  }
});
Vue.use(VueTypedJs);

Vue.component('vue-headful', vueHeadful);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
