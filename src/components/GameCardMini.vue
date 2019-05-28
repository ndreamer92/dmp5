<template>
  <v-layout>
    <v-flex>
      <v-card height="300px">
        <v-img
          class="white--text"
          height="150px"
          aspect-ratio="1.7"
          contain
          :src="game.header_image"
        >
          <v-container fill-height fluid>
            <v-layout fill-height>

            </v-layout>
          </v-container>
        </v-img>
        <v-card-title>
          <div>
            <span>{{game.title}}</span>
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
