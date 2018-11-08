import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import firebase from "firebase/app";
let app;
import firebaseConfig from "./config/firebase";

import EventBus from "./plugins/event-bus";

firebase.initializeApp(firebaseConfig);
firebase.auth().onAuthStateChanged(user => {
  // eslint-disable-next-line
  EventBus.$emit("userActived", user);
  if (!app) {
    new Vue({
      router,
      render: h => h(App)
    }).$mount("#app");
  }
});
Vue.config.productionTip = false;
