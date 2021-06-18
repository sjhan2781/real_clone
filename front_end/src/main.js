import Vue from 'vue'
import App from './App.vue'
// import vuetify from './plugins/vuetify'
import router from "./router";
import store from "./store";

import axios from 'axios'
// import VueRouter from 'vue-router';

let url = "http://220.94.233.221:38000/"; // 장고 서버 주소

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");


axios.defaults.baseURL = 'http://220.94.233.221:38000/';
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
axios.get(url)
.then(function(response){
  console.log(response)

  if(response.status == 203){
    console.log("goto signin")
  }
  else if(response.status == 200){
    console.log("goto home")

  }
})
.catch(function(response){
  console.log(response)
})
