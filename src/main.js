import './assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createPrismic } from "@prismicio/vue";

import App from './App.vue'
import router from './router'
import  linkResolver  from './link-resolver';

const app = createApp(App)

app.use(createPinia())
app.use(router)

const accessToken = import.meta.env.VUE_APP_PRISMIC_API_KEY;

app.use(createPrismic, {
  endpoint: 'https://claudiaengelsman-com.prismic.io/api/v2',
  linkResolver,
  apiOptions: {
    accessToken,
  },
});

app.mount('#app')
