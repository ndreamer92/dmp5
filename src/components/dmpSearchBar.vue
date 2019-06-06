<template>
<v-autocomplete
        v-model="select"
        :loading="loading"
        :items="games"
        :search-input.sync="search"
        :filter="customFilter"
        cache-items
        class="mx-3"
        flat
        hide-details
        label="Enter game name"
        solo-inverted
        item-text="title"
        item-value="title"
      >
        <template v-slot:no-data>
          <v-list-tile>
            <v-list-tile-title>Not found!</v-list-tile-title>
          </v-list-tile>
        </template>

        <template v-slot:item="{ item }">
          <v-list-tile-avatar v-on:click="onSearchClick(item.id)">
            <img :src="item.header_image">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title" v-on:click="onSearchClick(item.id)"></v-list-tile-title>
            <v-list-tile-sub-title v-text="item.id" v-on:click="onSearchClick(item.id)"></v-list-tile-sub-title>
          </v-list-tile-content>
        </template>
      </v-autocomplete>
</template>

<script>
export default {
  data: () => ({
    loading: false,
    games: [],
    search: null,
    select: null
  }),
  props: {},
  computed: {},
  watch: {
    search(val) {
      // Items have already been loaded
      if (this.games.length > 0) return;
      if (val) this.isLoading = true;

      // Lazily load input items

      this.games = this.$store.getters.getGames;

      this.isLoading = false;
    }
  },
  methods: {
    customFilter(item, queryText /*, itemText*/) {
      const textOne = item.title.toLowerCase();

      const searchText = queryText.toLowerCase();

      return textOne.indexOf(searchText) > -1;
    },
    onSearchClick(gameId) {
      this.$router.push({ name: "game", params: { gameId: gameId } });
    }
  }
};
</script>

<style scoped>
</style>
