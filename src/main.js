import Vue from 'vue';
import VueComposition from '@vue/composition-api';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import VueTextAreaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { firebaseConfig } from './config/env';

Vue.use(VueTextAreaAutosize);
Vue.use(VueComposition);
Vue.config.productionTip = false;

firebase.initializeApp({
  ...firebaseConfig,
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App),
}).$mount('#app');
