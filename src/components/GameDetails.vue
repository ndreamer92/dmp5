<template>
  <div>
    <h1 v-if="game">game details {{gameId}} {{game.title}}</h1>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: {
    gameId: {
      type: null,
      required: false
    }
  },
  data() {
    return {
      game: null,
    };
  },
  mounted() {},
  created() {
    axios
      .get(
        "http://84.201.130.111:8000/api/games/" + this.gameId + "/?format=json"
      )
      .then(response => {
        this.game = response.data;
        console.log(response.data);
      });
  }
};
</script>

<style scoped>
</style>
