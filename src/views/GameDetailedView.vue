<template>
  <v-container>
    <game-details :gameId="gameId" :key="gameId"></game-details>
    <game-deals :gameId="gameId" :key="gameId+1"></game-deals>
  </v-container>
</template>

<script>
import GameDetails from "../components/GameDetails";
import GameDeals from "../components/GameDeals";

export default {
  props: {
    gameId: {
      type: null,
      required: true
    }
  },
  components: {
    GameDetails,
    GameDeals
  }
};
</script>

<style scoped>
</style>


