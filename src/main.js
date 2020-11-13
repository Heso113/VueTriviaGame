import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

import Menu from './components/Menu.vue'
import TriviaContainer from './components/TriviaContainer.vue'
import Scorescreen from './components/Scorescreen.vue'

const routes = [
  { 
    path: '/',
    name: 'Menu', 
    component: Menu 
  },
  { 
    path: '/Game',
    name: 'Game', 
    component: TriviaContainer 
  },
  {
    path: '/Score',
    name: 'Scorescreen',
    component: Scorescreen
  }
]

const router = new VueRouter({routes});

Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
