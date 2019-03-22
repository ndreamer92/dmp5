<template>
  <v-container>
    <game-details :gameId="gameId" :key="gameId"></game-details>
    <!-- <game-deals></game-deals> -->
  </v-container>
</template>

<script>
import GameDetails from "../components/GameDetails";

export default {
  props: {
    gameId: {
      type: null,
      required: true
    }
  },
  components: {
    GameDetails
  }
};
</script>

<style scoped>
</style>


