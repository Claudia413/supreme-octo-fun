import './assets/main.scss'

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createPrismic } from '@prismicio/vue';

import App from './App.vue';
import router from "./router";
import  linkResolver  from './link-resolver';

const app = createApp(App)
const accessToken = import.meta.env.VITE_VUE_APP_PRISMIC_API_KEY;

app.use(createPinia())
app.use(router)
app.use(createPrismic({
  endpoint: 'https://claudiaengelsman-com.prismic.io/api/v2',
  linkResolver,
  clientConfig: {
    accessToken,
  },
}))

app.mount("#app");
