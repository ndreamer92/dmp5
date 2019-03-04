<template>
    <div>
        <v-card height="400px">
        <v-img
          :src="game.imageLink"
          aspect-ratio="2.75"
        ></v-img>

        <v-card-title primary-title>
          <v-layout align-space-around justify-center column fill-height>
            <h3 class="headline mb-0">{{game.name}}</h3>
            <div> Genre: {{ game.description }} </div>
            <div > {{ game.full_desc }} </div>
          </v-layout>
        </v-card-title>
        
        <v-card-actions>
          <v-btn flat color="orange">Buy</v-btn>
          <v-btn flat color="orange">Info</v-btn>
          <v-spacer></v-spacer>
          <span title>Avg price: {{game.price_usd}} $</span>
        </v-card-actions>
      </v-card>
    </div>
</template>

<script>
export default {
    props: {
        game: {
            type: Object,
            required: true
        },
    }
    
}
</script>

<style scoped>
.cardBodySize {
  height: 120px;
}
</style>
