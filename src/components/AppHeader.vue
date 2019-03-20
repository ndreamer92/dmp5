<template>
  <div>
    <v-navigation-drawer v-model="drawer" fixed clipped class="grey lighten-4" app>
      <v-list dense class="grey lighten-4">
        <template v-for="(item, i) in nav_items">
          <v-layout v-if="item.heading" :key="i" row align-center>
            <v-flex xs6>
              <v-subheader v-if="item.heading">{{ item.heading }}</v-subheader>
            </v-flex>
          </v-layout>
          <v-divider v-else-if="item.divider" :key="i" dark class="my-3"></v-divider>
          <v-list-tile v-else :key="i" @click.prevent :to="item.route">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title class="grey--text">{{ item.text }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="amber" app absolute clipped-left>
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <span class="title ml-3 mr-5">
        dmp&nbsp;
        <span class="font-weight-light">alpha</span>
      </span>
      <!-- <v-text-field solo-inverted flat hide-details label="Search" prepend-inner-icon="search"></v-text-field> -->
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
          <v-list-tile-avatar>
            <img :src="item.image_link">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title" v-on:click="onSearchClick(item.id)"></v-list-tile-title>
            <v-list-tile-sub-title v-text="item.id"></v-list-tile-sub-title>
          </v-list-tile-content>
        </template>
      </v-autocomplete>
      <v-spacer></v-spacer>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    nav_items: [
      { icon: "search", text: "Search", route: "/Search", title: "test1" },
      { icon: "whatshot", text: "Top Deals", route: "/Top", title: "test2" },
      { icon: "list", text: "Browse", route: "/Browse", title: "test3" },
      { divider: true },
      { icon: "delete", text: "Info", route: "/info", title: "test4" }
    ],
    loading: false,
    games: [],
    search: null,
    select: null
  }),
  props: {
    source: String
  },
  computed: {
    // games() {
    //   return this.$store.getters.getGames;
    // }
  },
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
      this.$router.push({ name: "gameDetailedView", params: { gameId: gameId } });
    }
  }
};
</script>

<style lang="stylus">
#keep {
  .v-navigation-drawer__border {
    display: none;
  }
}
</style>