import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import _lodash from 'lodash';
import App from './App.vue';
import router from './router';

import './styles/main.css';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(_lodash);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
