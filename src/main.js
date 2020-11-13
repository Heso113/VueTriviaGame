import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

import Menu from './components/Menu.vue'
import TriviaContainer from './components/TriviaContainer.vue'
import Scorescreen from './components/Scorescreen.vue'
import Game from './components/Game.vue'

Vue.use(Vuex);
const storeProps = {
  state: {
    game: {
      fetchedTrivias: null,
      trivias: [],
      userAnswers: [],
      score: '0'
    }
  },
  getters: {
    fetchedTrivias: state => {
      return state.game.fetchedTrivias;
    },
    trivias: state => {
      return state.game.trivias;
    },
    userAnswers: state => {
      return state.game.userAnswers;
    },
    score: state => {
      return state.game.score;
    }
  },
  mutations: {
    fillFetchedTrivias(state, newTrivias) {
      state.game.fetchedTrivias = newTrivias;
    },
    addTriviaObject(state, newTrivia) {
      state.game.trivias.push(newTrivia);
    },
    addUserAnswer(state, answer) {
      state.game.userAnswers.push(answer);
    },
    setScore(state, score) {
      state.game.score = score;
    },
    resetGame(state) {
      state.game.fetchedTrivias = null;
      state.game.trivias = [];
      state.game.userAnswers = [];
      state.game.score = 0;
    }
  },
  actions: {}
}
const store = new Vuex.Store(storeProps);

Vue.use(VueRouter);

const routes = [
  { 
    path: '/',
    name: 'Menu', 
    component: Menu 
  },
  { 
    path: '/Game',
    name: 'Game', 
    component: Game 
  },
  {
    path: '/Gameround',
    name: 'Gameround',
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
  store,
  router,
  render: h => h(App),
}).$mount('#app')
