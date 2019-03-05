<template>
  <v-layout lign-start justify-start row fill-height>
    <v-flex v-for="game in topDeals" :key="game.name" xs6 sm3 ma-3>
      <game-card :game="game"></game-card>
    </v-flex>
  </v-layout>
  
</template>



<script>
import GameCard from "../components/GameCard";

export default {
  data: () => ({
    show: false,
     
  }),
  computed: {
    topDeals(){
      return this.$store.getters.getTopDeals;
    }
  },
  components: {
    GameCard
  }
};
</script>
