<template>
  <div>
    <TriviaItems
      @next-trivia="nextTrivia"
      v-bind:trivias="fetchedTrivias"
      v-bind:index="index"
    />
  </div>
</template>

<script>
import TriviaItems from "./TriviaItems.vue";

export default {
  name: "TriviaContainer",
  components: { TriviaItems },
  data: () => ({
    fetchedTrivias: null,
    index: "0",
  }),
  mounted() {
    this.index = 0;
    this.fetchedTrivias = this.$store.getters.fetchedTrivias;
  },
  methods: {
    nextTrivia: function (answer) {
      //Store answer
      this.$store.commit("addUserAnswer", answer);
      //Increase index
      this.index++;
      if (this.index >= 10) {
        this.index = 0;
        this.calculateScore();
        this.$router.push("/score");
      }
    },
    calculateScore() {
      let userAnswers = this.$store.getters.userAnswers;
      let trivias = this.$store.getters.fetchedTrivias;
      let score = 0;
      let index = 0;
      userAnswers.forEach((answer) => {
        if (answer === trivias[index].correct_answer) {
          score += 100;
        }
        index++;
      });
      this.$store.commit("setScore", score);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
