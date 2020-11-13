<template>
  <div>
    <h3>This is Game! HELLO!</h3>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Game",
  data: () => ({
    fetchedTrivias: null,
    answers: [],
    score: "0",
  }),
  mounted() {
    this.$store.commit("resetGame");
    axios
      .get("https://opentdb.com/api.php?amount=10&category=16&difficulty=easy")
      .then((response) => {
        this.fetchedTrivias = response.data.results;
        this.$store.commit("fillFetchedTrivias", this.fetchedTrivias);
        this.$router.push("/Gameround");
      });
  },
  methods: {},
};
</script>

<style>
</style>