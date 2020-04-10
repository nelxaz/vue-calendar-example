import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextAreaAutosize from 'vue-textarea-autosize'
import firebase from 'firebase/app';
import 'firebase/firestore'


Vue.use(VueTextAreaAutosize)
Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyCClIKtXcV8d52u62zTmocmevxa9zAPapU",
  authDomain: "vue-calendar-nxzs.firebaseapp.com",
  databaseURL: "https://vue-calendar-nxzs.firebaseio.com",
  projectId: "vue-calendar-nxzs",
  storageBucket: "vue-calendar-nxzs.appspot.com",
  messagingSenderId: "409872657722",
  appId: "1:409872657722:web:0a8e979a89d7c98437b403"
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
