import Vue from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.css";

import store from "./store";
import GAuth from 'vue-google-oauth2'
const gauthOption = {
  clientId: '357079003361-8f0u4qh77ojhg378dvju1fbntbc18mu7.apps.googleusercontent.com',
  scope: 'profile email',
  prompt: 'consent',
  fetch_basic_profile: true
}
Vue.use(GAuth, gauthOption)

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
