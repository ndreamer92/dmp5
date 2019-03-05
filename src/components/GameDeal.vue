<template>
  <v-layout>
    <v-card>
      <v-img class="white--text" height="200px" aspect-ratio="1.7" contain :src="deal.imageLink">
        <v-flex xs12 align-end flexbox>
          <span class="headline">{{deal.name}}</span>
        </v-flex>
      </v-img>
      <v-card-title>
        <div>
          <span>Store: {{deal.store}}</span>
          <br>
          <span>Description: {{deal.dealDesc}}</span>
        </div>
      </v-card-title>
      <v-card-actions>
        <v-btn flat color="orange" ><v-icon>add_shopping_cart</v-icon>Buy</v-btn>
        <v-btn flat color="orange"><v-icon>save</v-icon>Save deal</v-btn>
      </v-card-actions>
    </v-card>
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
