<template>
  <div>
    <TriviaItems @next-trivia="nextTrivia" v-bind:trivias="fetchedTrivias" v-bind:index="index" />
  </div>
</template>

<script>
import axios from 'axios'
import TriviaItems from './TriviaItems.vue'

export default {
  name: 'TriviaContainer',
  components: {TriviaItems},
  data: () => ({
    fetchedTrivias: null,
    index: '0',
    correctAnswers: '0',
  }),
  mounted() {
    axios
     .get('https://opentdb.com/api.php?amount=10&category=16&difficulty=easy')
     .then(response => this.fetchedTrivias = response.data.results)
  },
  methods: {
    nextTrivia: function(answer) {
      if (this.fetchedTrivias[this.index].correct_answer === answer) {
        this.correctAnswers++;
      }
      console.log(this.fetchedTrivias[this.index].correct_answer);
      console.log('Number of correct answers: ' + this.correctAnswers);
      this.index++;
      if (this.index >= 10) {
        this.index = 0;
        this.testFunction();
      }
      console.log(answer);
      console.log(this.index);
    },
    testFunction: function() {
      this.$router.push('Score');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
