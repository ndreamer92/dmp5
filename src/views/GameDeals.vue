<template>
  <v-container>
    <v-layout align-center justify-start column fill-height ma-3>
      <p class="headline">{{game.name}}</p>
    </v-layout>
    
      <v-layout align-start justify-start row fill-height>
        <v-flex v-for="gameDeal in getGameDealsById(game.id)" :key="gameDeal.id" pa-2 lg3>
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
    game: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      page: 1
    };
  },
  computed: {},
  methods: {
    getGameDealsById(gameId) {
      var game = this.$store.getters.getGameDealsById(gameId);
      return game.deals;
    },
    created() {}
  },
  components: {
    GameDeal
  }
};
</script>

<style scoped>
</style>
