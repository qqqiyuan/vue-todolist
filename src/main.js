import Vue from 'vue';
// import VueRouter from 'vue-router';
import App from './App.vue';
// import detail from './components/detail.vue';
import flexible from './assets/util/flexible.js';

// Vue.use(VueRouter);

// var router = new VueRouter();
// router.map({
// 	'/detail': {component: detail} 
// });

// router.start(App, 'app');

new Vue({
  el: '#V_App',
  components: { 
  	App 
  }
});

