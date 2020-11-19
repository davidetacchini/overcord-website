import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// Styling
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import '@/assets/main.scss';
// Third Parties
import axios from 'axios';
import VueProgressBar from 'vue-progressbar';
import VueDragscroll from 'vue-dragscroll';

const options = {
  color: 'rgb(0, 113, 227)',
  failedColor: 'rgb(255,102,102)',
  thickness: '1.5px',
  transition: {
    speed: '0.2s',
    opacity: '1',
    termination: 300,
  },
  autoRevert: true,
  location: 'top',
  inverse: false,
};

Vue.use(axios);
Vue.use(Buefy);
Vue.use(VueProgressBar, options);
Vue.use(VueDragscroll);

axios.defaults.baseURL = process.env.VUE_APP_OVERBOT_API_URL;
axios.defaults.headers.common['Authorization'] =
  process.env.VUE_APP_SECRET_ACCESS_TOKEN;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
