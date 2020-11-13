<template>
  <div id="app">
    <div :is="currentComponent"></div>
    
    <Menu @start-game="startGame" />
    <TriviaContainer />
  </div>
</template>

<script>
import TriviaContainer from './components/TriviaContainer.vue'
import Menu from './components/Menu.vue'

export default {
  name: 'App',
  currentComponent: Menu,
  componentArray: [Menu, TriviaContainer],
  components: {
    Menu,
    // TriviaContainer
  },
  methods: {
    startGame: function() {

      this.components = {TriviaContainer};
      this.currentComponent = this.componentArray[1];
      console.log("Game should start!");
      console.log(this.components);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
