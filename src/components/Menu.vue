<template>
  <div>
    <h3>Main Menu</h3>
    <button v-on:click="startGame()">Start Game</button>
  </div>
</template>

<script>
export default {
  name: "Menu",
  methods: {
    startGame() {
      this.$router.push("Game");
    },
  },
};
</script>

<style>
</style>