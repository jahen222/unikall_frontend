import Vue from 'vue'
import App from './App.vue'
import VueApollo from "vue-apollo";
import apolloClient from "./vue-apollo";
import VueRouter from "vue-router";
// bootstrap & bootstrapvue
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
// styles
import './assets/oapee/css/style.css';
import './assets/oapee/css/responsive.css';
// icons
import './assets/oapee/css/oapee-icons.css';
import './assets/oapee/css/fontawesome-all.min.css';
// wizard
import VueFormWizard from 'vue-form-wizard';
import 'vue-form-wizard/dist/vue-form-wizard.min.css';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(VueApollo);
Vue.use(VueRouter);
Vue.use(VueFormWizard)

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      components: require("./containers/Home.vue")
    },
    {
      path: "/journey",
      components: require("./containers/Journey.vue")
    },
    {
      path: "/aboutus",
      components: require("./containers/AboutUs.vue")
    }
  ]
});

new Vue({
  apolloProvider,
  router,
  render: h => h(App)
}).$mount("#app");
