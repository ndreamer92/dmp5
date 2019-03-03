<template>
  <v-app>
    <AppHeader/>
    <v-content>
      <router-view/>
    </v-content>
    <AppFooter/>
  </v-app>
</template>

<script>
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";

export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter
  },
  data() {
    return {
      //
    };
  }
};
</script>
