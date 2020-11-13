<template>
  <div>
    <h3>Scorescreen</h3>
    <h3>Your score: {{ score }}</h3>
    <table>
      <tr>
        <th>Question</th>
        <th>Correct Answer</th>
        <th>Your Answer</th>
      </tr>
      <tr>
        <td>{{fetchedTrivias[0].question}}</td>
        <td>{{fetchedTrivias[0].correct_answer}}</td>
        <td>{{userAnswers[0]}}</td>
      </tr>
      <tr>
        <td>{{fetchedTrivias[1].question}}</td>
        <td>{{fetchedTrivias[1].correct_answer}}</td>
        <td>{{userAnswers[1]}}</td>
      </tr>
      <tr>
        <td>{{fetchedTrivias[2].question}}</td>
        <td>{{fetchedTrivias[2].correct_answer}}</td>
        <td>{{userAnswers[2]}}</td>
      </tr>
      <tr>
        <td>{{fetchedTrivias[3].question}}</td>
        <td>{{fetchedTrivias[3].correct_answer}}</td>
        <td>{{userAnswers[3]}}</td>
      </tr>
      <tr>
        <td>{{fetchedTrivias[4].question}}</td>
        <td>{{fetchedTrivias[4].correct_answer}}</td>
        <td>{{userAnswers[4]}}</td>
      </tr>
      <tr>
        <td>{{fetchedTrivias[5].question}}</td>
        <td>{{fetchedTrivias[5].correct_answer}}</td>
        <td>{{userAnswers[5]}}</td>
      </tr>
      <tr>
        <td>{{fetchedTrivias[6].question}}</td>
        <td>{{fetchedTrivias[6].correct_answer}}</td>
        <td>{{userAnswers[6]}}</td>
      </tr>
      <tr>
        <td>{{fetchedTrivias[7].question}}</td>
        <td>{{fetchedTrivias[7].correct_answer}}</td>
        <td>{{userAnswers[7]}}</td>
      </tr>
      <tr>
        <td>{{fetchedTrivias[8].question}}</td>
        <td>{{fetchedTrivias[8].correct_answer}}</td>
        <td>{{userAnswers[8]}}</td>
      </tr>
      <tr>
        <td>{{fetchedTrivias[9].question}}</td>
        <td>{{fetchedTrivias[9].correct_answer}}</td>
        <td>{{userAnswers[9]}}</td>
      </tr>
    </table>
    <button v-on:click="playAgain()">Play again</button>
  </div>
</template>

<script>
export default {
  name: "Scorescreen",
  data: () => ({
    trivias: null,
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
  h3 {
    color: green;
  }
  table {
    border: solid 3px green;
    color: green;

  }
  th {
    border: solid 3px green;
  }
  td {
    border: solid 3px green;
  }
</style>