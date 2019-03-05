<template>
  <div>
    <v-layout align-center justify-start column fill-height ma-3>
      <p class="headline">{{game.name}}</p>
    </v-layout>
    <v-container fluid>
      <v-layout align-space-around justify-center column fill-height>
        <v-layout v-for="gameDeal in getGameDealsById(game.id)" :key="gameDeal.id" pa-2>
          <game-deal :deal="gameDeal"></game-deal>
        </v-layout>
      </v-layout>
    </v-container>
    <v-layout align-center justify-start column fill-height ma-3>
      <v-pagination v-model="page" :length="6"></v-pagination>
    </v-layout>
  </div>
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
