import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import firebase from "firebase/app";
let app;
import firebaseConfig from "./config/firebase";

firebase.initializeApp(firebaseConfig);
firebase.auth().onAuthStateChanged(user => {
  // eslint-disable-next-line
  console.log({user})
  if (!app) {
    new Vue({
      router,
      render: h => h(App)
    }).$mount("#app");
  }
});
Vue.config.productionTip = false;
