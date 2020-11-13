<template>
  <div>
    <h3>Scorescreen</h3>
    <h3>Score: {{ score }}</h3>
    <h3>UserAnswers: {{ userAnswers }}</h3>
    <button v-on:click="playAgain()">Play again</button>
  </div>
</template>

<script>
export default {
  name: "Scorescreen",
  data: () => ({
    trivias: null,
    correctAnswers: null,
    userAnswers: null,
    score: 0,
  }),
  mounted() {
    this.fetchedTrivias = this.$store.getters.fetchedTrivias;
    this.score = this.$store.getters.score;
    this.userAnswers = this.$store.getters.userAnswers;
  },
  methods: {
    playAgain() {
      this.$router.push("/");
    },
  },
};
</script>

<style>
</style>