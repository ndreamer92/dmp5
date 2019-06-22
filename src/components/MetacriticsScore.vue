<template>
      <div>
      <v-layout align-center justify-center column fill-height :v-if="game">
        <p>Metacritics:</p>
        <v-progress-circular
          :rotate="360"
          :size="100"
          :width="15"
          :value="game.metacritic_score"
          :color="mt_color(game.metacritic_score)"
        >{{ game.metacritic_score }}</v-progress-circular>
      </v-layout>
    </div>
</template>

<script>
export default {
  props: {
    game: {
      type: Object,
      required: true
    }},
    data() {
      return {

      }
    },
    methods: {
      mt_color(score) {
        if (score < 50) {
            return "deep-orange "
        }
        else if (score > 50 & score < 70 ) {
            return "lime darken-3"
        }
        else if (score> 70){
            return "light-green lighten-1"
        }
      }
    }
  
};
</script>

<style scoped>
</style>
