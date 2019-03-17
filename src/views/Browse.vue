<template>
  <v-card>
    <v-card-title>Games
      <v-spacer></v-spacer>
      <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details></v-text-field>
    </v-card-title>
    <v-data-table :headers="headers" :items="games" :search="search" class="elevation-1">
      <template v-slot:items="games">
        <td>{{ games.item.title }}</td>
        <td class="text-xs-left">{{ games.item.id }}</td>
        <td class="text-xs-left">{{ games.item.image_link }}</td>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      error: null,
      search: "",
      headers: [
        {
          text: "Game title",
          align: "left",
          sortable: true,
          value: "title"
        },
        {
          text: "id",
          align: "left",
          sortable: true,
          value: "id"
        },
        {
          text: "Image",
          align: "left",
          value: "image_link"
        }
      ]
    };
  },
  mounted() {},
  computed: {
    games() {
      return this.$store.getters.getGames;
    }
  }
};
</script>

<style scoped>
</style>
// <p v-for="game in games" :key="game.id">{{game.title}}</p>