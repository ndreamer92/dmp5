<template>
  <v-container>
    <!-- <v-layout align-center justify-center column fill-height>
      <v-flex xl4 offset-xl-4>
        <h1>Добро пожаловать</h1>
      </v-flex>
    </v-layout>-->

    <v-layout align-center justify-center row fill-height>
      <v-flex xl12>
        <v-card>
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline">Добро пожаловать!</span>
              </v-flex>
            </v-layout>
          </v-container>
          <v-card-title>
            <v-container>
              <v-layout lign-center justify-space-around row fill-height pa-5>
                <v-flex xl2 align-center justify-center>
                  <div class="item elevation-0">
                    <h2>Всего игр:</h2>
                    <h5>XXXX</h5>
                  </div>
                </v-flex>
                <v-flex xl2 align-center justify-center>
                  <div class="item elevation-0">
                    <h2>Всего предложений:</h2>
                    <h5>XXXX</h5>
                  </div>
                </v-flex>
                <v-flex xl2 align-center justify-center>
                  <div class="item elevation-0">
                    <h2>Всего скидок:</h2>
                    <h5>XXXX</h5>
                  </div>
                </v-flex>
                <v-flex xl2 align-center justify-center>
                  <div class="item elevation-0">
                    <h2>Всего площадок:</h2>
                    <h5>XXXX</h5>
                  </div>
                </v-flex>
              </v-layout>
              <v-layout align-center justify-center pa-3>
                <v-flex xl12 >
                  <h2>Лучшие предложения на сегодня:</h2>
                </v-flex>
              </v-layout>
              <v-layout align-center justify-space-around row fill-height>
                <div v-if="topGames">
                  <v-tabs centered color="amber" icons-and-text>
                    <v-tabs-slider color="black"></v-tabs-slider>

                    <v-tab href="#tab-1">
                      PC
                      <!-- <v-icon>phone</v-icon> -->
                    </v-tab>

                    <v-tab href="#tab-2">
                      PS4
                      <!-- <v-icon>favorite</v-icon> -->
                    </v-tab>

                    <v-tab href="#tab-3">
                      Other
                      <!-- <v-icon>account_box</v-icon> -->
                    </v-tab>

                    <v-tab-item :value="'tab-1'">
                      <v-layout align-center justify-space-around row fill-height>
                        <span v-if="topGames">
                          <game-top-list :games="topGames" :headerText="'Popular Games'"></game-top-list>
                        </span>
                        <span v-if="recentAdded">
                          <game-top-list :games="recentAdded" :headerText="'Recently Added'"></game-top-list>
                        </span>
                        <span v-if="recentAdded">
                          <game-top-list :games="topGames" :headerText="'Yet another top'"></game-top-list>
                        </span>
                      </v-layout>
                    </v-tab-item>

                    <v-tab-item :value="'tab-2'">
                      <v-layout align-center justify-space-around row fill-height>
                        <span v-if="topGames">
                          <game-top-list :games="topGames" :headerText="'Popular Games'"></game-top-list>
                        </span>
                        <span v-if="topGames">
                          <game-top-list :games="recentAdded" :headerText="'Recently Added'"></game-top-list>
                        </span>
                        <span v-if="topGames">
                          <game-top-list :games="topGames" :headerText="'Yet another top'"></game-top-list>
                        </span>
                      </v-layout>
                    </v-tab-item>

                    <v-tab-item :value="'tab-3'">
                      <v-layout align-center justify-space-around row fill-height>
                        <span v-if="topGames">
                          <game-top-list :games="topGames" :headerText="'Popular Games'"></game-top-list>
                        </span>
                        <span v-if="topGames">
                          <game-top-list :games="recentAdded" :headerText="'Recently Added'"></game-top-list>
                        </span>
                        <span v-if="topGames">
                          <game-top-list :games="topGames" :headerText="'Yet another top'"></game-top-list>
                        </span>
                      </v-layout>
                    </v-tab-item>
                  </v-tabs>
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

    <v-layout align-space-between justify-center column fill-height>
      <v-flex xl6 offset-xl-3 pa-3>
        <news-block></news-block>
      </v-flex>
    </v-layout>
    <v-spacer></v-spacer>
  </v-container>
</template>



<script>
import NewsBlock from "../components/NewsBlock";
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
    NewsBlock,
    GameTopList
  }
};
</script>
