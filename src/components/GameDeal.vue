<template>
  <v-layout>
    <v-flex>
      <v-card>
        <v-img class="white--text" height="200px" aspect-ratio="1.7" contain :src="deal.imageLink">
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline">{{deal.name}}</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-img>
        <v-card-title>
          <div>
            <span>Store: {{deal.store}}</span>
            <br>
            <span>Description: {{deal.dealDesc}}</span>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat color="orange">Buy</v-btn>
          <v-btn flat color="orange">Explore</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: {
    deal: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
</style>
