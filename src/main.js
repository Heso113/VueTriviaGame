import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

import Menu from './components/Menu.vue'
import TriviaContainer from './components/TriviaContainer.vue'

const routes = [
  { path: '/Menu', component: Menu },
  { path: '/TriviaContainer', component: TriviaContainer }
]

const router = new VueRouter({routes});

Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
