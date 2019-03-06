<template>
  <v-container>
    <v-layout align-center justify-start column fill-height ma-3>
      <p class="headline">{{getGameDealsById(gameId).name}}</p>
    </v-layout>
    
      <v-layout align-start justify-start row fill-height>
        <v-flex v-for="gameDeal in getGameDealsById(gameId).deals" :key="gameDeal.id" pa-2 lg3>
          <game-deal :deal="gameDeal"></game-deal>
        </v-flex>
      </v-layout>
    
    <v-layout align-center justify-start column fill-height ma-3>
      <v-pagination v-model="page" :length="6"></v-pagination>
    </v-layout>
  </v-container>
</template>

<script>
import GameDeal from "../components/GameDeal";

export default {
  props: {
    gameId: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      page: 1,
    };
  },
  computed: {},
  methods: {
    getGameDealsById(gameId) {
      var game = this.$store.getters.getGameDealsById(gameId);
      return game;
    },
    created() {
      
    }
  },
  components: {
    GameDeal
  }
};
</script>

<style scoped>
</style>
