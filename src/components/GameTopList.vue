<template>
    <v-flex v-if="games">
      <v-card >
        <v-list subheader>
          <v-subheader>{{headerText}}</v-subheader>
          <v-list-tile
            v-for="game in games"
            :key="game.title"
            avatar
            @click="navigateToGame(game.id)"
          >
            <v-list-tile-avatar>
              <img :src="game.header_image">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title v-html="game.title"></v-list-tile-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-icon :color="game.active ? 'teal' : 'grey'">add_shopping_cart</v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-flex>

</template>

<script>
export default {
  props: {
    games: {
      type: Object,
      required: true
    },
    headerText: {
      type: String,
      required: false
    }
  },
  data () {
      return {
      }
    },
  methods: {
    navigateToGame(gameId){
      this.$router.push({ name: "game", params: { gameId: gameId } });
    }
  }
};
</script>

<style scoped>
</style>
