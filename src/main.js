import Vue from 'vue'
import PrismicVue from 'prismic-vue';
import App from './App.vue'
import router from './router'
import store from './store'
import linkResolver from './link-resolver'

Vue.config.productionTip = false

const accessToken = 'MC5YaGlBeXhVQUFDUUFHZ0Ew.Kgbvv70TUu-_vX7vv73vv73vv73vv73vv73vv73vv73vv70cNO-_vTgL77-977-9LhXvv71gJUbvv71A77-9aA';

Vue.use(PrismicVue, {
  endpoint: window.prismic.endpoint,
  linkResolver,
  apiOptions: {
    accessToken
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
