<template>
  <div>
    <TriviaItems
      @next-trivia="nextTrivia"
      v-bind:trivias="trivias"
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
    trivias: [],
    index: "0",
  }),
  mounted() {
    this.index = 0;
    this.fetchedTrivias = this.$store.getters.fetchedTrivias;
    let trivias = [];
    this.fetchedTrivias.forEach(t => {
      let newTrivia = {trivia: t.question, answers: [], type: t.type};
      let a = [];
      a.push(t.correct_answer);
      t.incorrect_answers.forEach(incorrect => {
        a.push(incorrect);
      })
      this.shuffleArray(a);
      newTrivia.answers = a;
      trivias.push(newTrivia); 
    });
    this.trivias = trivias;
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
    shuffleArray(array) {
      var currentIndex = array.length, temporaryValue, randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      } 
      return array;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
