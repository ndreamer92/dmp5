<template>
  <v-flex v-if="headerText">
    <v-card color="blue-grey darken-2" class="white--text">
      <v-card-title primary-title>
        <div>
          <div class="headline">{{headerText}}</div>
          <span>{{description}}</span>
        </div>
      </v-card-title>
      <v-card-actions>
        <v-btn flat dark >Смотреть</v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  props: {
    headerText: {
      type: String,
      required: false
    },
    description: {
      type: String,
      required: false
    }
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    navigateToGame(gameId) {
      this.$router.push({ name: "game", params: { gameId: gameId } });
    }
  }
};
</script>

<style scoped>
</style>
