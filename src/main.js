// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueSweetalert2 from 'vue-sweetalert2';
import VeeValidate from 'vee-validate';

Vue.use(VeeValidate);
Vue.use(VueSweetalert2);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
