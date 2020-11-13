<template>
  <div id="triviaBox">
    <h3>{{ trivias[index].question }}</h3>
    <button v-on:click="nextTrivia(trivias[index].correct_answer)">
      {{ trivias[index].correct_answer }}
    </button>
    <button v-on:click="nextTrivia(trivias[index].incorrect_answers[0])">
      {{ trivias[index].incorrect_answers[0] }}
    </button>
    <button
      v-if="trivias[index].type === 'multiple'"
      v-on:click="nextTrivia(trivias[index].incorrect_answers[1])"
    >
      {{ trivias[index].incorrect_answers[1] }}
    </button>
    <button
      v-if="trivias[index].type === 'multiple'"
      v-on:click="nextTrivia(trivias[index].incorrect_answers[2])"
    >
      {{ trivias[index].incorrect_answers[2] }}
    </button>
  </div>
</template>

<script>
export default {
  name: "TriviaItems",
  props: ["trivias", "index"],
  methods: {
    populateDetails() {
      this.$emit("populate-details");
    },
    nextTrivia(answer) {
      this.$emit("next-trivia", answer);
    },
  },
};
</script>

<style>
ul {
  list-style: none;
}
li {
  margin-bottom: 1rem;
}
.crossed {
  text-decoration: line-through;
}
button {
  background-color: black;
  color: green;
  width: 200px;
  height: 50px;
}
body {
  background-color: black;
}
#triviaBox {
  color: green;
}
</style>