<template>
  <div >
    <v-navigation-drawer v-model="drawer" fixed clipped class="grey lighten-4" app >
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
    </v-navigation-drawer >
    <v-toolbar color="amber" app absolute clipped-left >
      <v-toolbar-side-icon @click="drawer = !drawer" ></v-toolbar-side-icon>

      <router-link to="/" tag="span" style="cursor:pointer">
        <v-toolbar-title v-text="'DMP alpha'"></v-toolbar-title>
      </router-link>


      <dmp-search-bar></dmp-search-bar>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn v-for="(item,i) in nav_items" flat :key="`nav_items${i}`" :to="item.route">
          <v-icon left v-html="item.icon"></v-icon>
          {{item.text}}
        </v-btn>
      </v-toolbar-items>
      <v-btn flat>
        <v-icon left>exit_to_app</v-icon>Login
      </v-btn>
    </v-toolbar>
  </div>
</template>

<script>
import dmpSearchBar from "../components/dmpSearchBar";
export default {
  data: () => ({
    drawer: false,
    nav_items: [
      // { icon: "home", text: "Homepage", route: "/", title: "test1" },
      { icon: "whatshot", text: "Top Deals", route: "/Top", title: "test2" },
      { icon: "list", text: "Browse", route: "/Browse", title: "test3" },
      { icon: "search", text: "Search", route: "/Search", title: "test1" },
      // { divider: true },
      { icon: "delete", text: "Info", route: "/info", title: "test4" }
    ],
    loading: false,
    games: []
  }),
  props: {},
  computed: {},
  watch: {},
  methods: {},
  components: {
    dmpSearchBar
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