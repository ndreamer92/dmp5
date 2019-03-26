<template>
  <v-layout>
    <v-flex>
      <v-card>
        <v-img
          class="white--text"
          height="200px"
          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline">Game</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-img>
        <v-card-title>
          <div>
            <span>Whitehaven Beach</span>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat>buy</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: {
    game: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
</style>
