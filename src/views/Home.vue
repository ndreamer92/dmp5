<template>
  <v-container fluid>
    <!-- <v-layout align-center justify-center column fill-height>
      <v-flex lg4 offset-lg-4>
        <h1>Добро пожаловать</h1>
      </v-flex>
    </v-layout>-->

    <v-layout align-center justify-center row fill-height>
      <v-flex lg12>
        <v-card>
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12>
                <span class="headline">Добро пожаловать!</span>
              </v-flex>
            </v-layout>
          </v-container>
          <v-card-title>
            <v-container>
              <v-layout lign-center justify-space-around row fill-height pa-2>
                <v-flex lg2 align-center justify-center>
                  <div class="item elevation-0">
                    <h2>Всего игр:</h2>
                    <h4>4269</h4>
                  </div>
                </v-flex>
                <v-flex lg2 align-center justify-center>
                  <div class="item elevation-0">
                    <h2>Всего предложений:</h2>
                    <h4>7746</h4>
                  </div>
                </v-flex>
                <v-flex lg2 align-center justify-center>
                  <div class="item elevation-0">
                    <h2>Всего скидок:</h2>
                    <h4>1978</h4>
                  </div>
                </v-flex>
                <v-flex lg2 align-center justify-center>
                  <div class="item elevation-0">
                    <h2>Всего площадок:</h2>
                    <h4>3</h4>
                  </div>
                </v-flex>
              </v-layout>
              <v-layout row justify-space-between pa-3>
                <v-spacer></v-spacer>
                <v-flex>
                  <h2>Лучшие предложения:</h2>
                </v-flex>
              </v-layout>
              <v-layout align-center justify-space-around row fill-height>
                <div v-if="topGames">
                  <v-layout
                    align-center
                    justify-space-between
                    row
                    fill-height
                    v-if="$vuetify.breakpoint.lgAndUp"
                  >
                    <v-flex lg4 pa-2>
                      <game-top-list :games="topGames" :headerText="'Популярное'"></game-top-list>
                    </v-flex>
                    <v-flex lg4 pa-2>
                      <game-top-list :games="recentAdded" :headerText="'Недавно добавлено'"></game-top-list>
                    </v-flex>
                    <v-flex lg4 pa-2>
                      <game-top-list :games="topGames" :headerText="'Новые скидки'"></game-top-list>
                    </v-flex>
                  </v-layout>
                  <v-layout
                    align-space-around
                    justify-space-around
                    column
                    fill-height
                    v-if="$vuetify.breakpoint.mdAndDown"
                  >
                    <v-flex lg4 pa-4>
                      <game-top-list :games="topGames" :headerText="'Популярное'"></game-top-list>
                    </v-flex>
                    <v-flex lg4 pa-4>
                      <game-top-list :games="recentAdded" :headerText="'Недавно добавлено'"></game-top-list>
                    </v-flex>
                    <v-flex lg4 pa-4>
                      <game-top-list :games="topGames" :headerText="'Новые скидки'"></game-top-list>
                    </v-flex>
                  </v-layout>
                </div>
                <div v-if="!topGames">
                  <v-progress-circular :size="70" :width="7" color="orange" indeterminate></v-progress-circular>
                </div>
              </v-layout>
            </v-container>
          </v-card-title>
          <v-card-actions>
            <!-- <v-btn flat color="orange">Share</v-btn>
            <v-btn flat color="orange">Explore</v-btn>-->
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>

    <!-- <v-layout align-space-between justify-center column fill-height>
      <v-flex lg6 offset-lg-3 pa-3>
        <news-block></news-block>
      </v-flex>
    </v-layout>-->
    <v-spacer></v-spacer>
  </v-container>
</template>



<script>
// import NewsBlock from "../components/NewsBlock";
import GameTopList from "../components/GameTopList";

export default {
  data() {
    return {
      loaded: false
    };
  },
  created() {
    //this.topGames = this.$store.getters.getTopGames;
  },
  computed: {
    topGames: function() {
      var temp = this.$store.getters.getTopGames;
      var result;
      if (temp) {
        result = temp.slice(0, 5);
      }
      return result;
    },
    recentAdded: function() {
      var temp = this.$store.getters.getRecentAddedGames;
      var result;
      if (temp) {
        result = temp.slice(0, 5);
      }
      return result;
    }
  },

  components: {
    // NewsBlock,
    GameTopList
  }
};
</script>
