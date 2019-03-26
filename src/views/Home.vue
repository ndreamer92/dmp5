<template>
  <v-container>
    
    <v-layout align-center justify-center column fill-height>
      <v-flex xs4 offset-xs-4>
        <h1>Добро пожаловать</h1>
      </v-flex>
    </v-layout>
    <v-layout align-center justify-center column fill-height>
      <v-flex >
        <news-block></news-block>
      </v-flex>
    </v-layout>
    <v-layout align-center justify-center column fill-height>
      <v-flex xs4 offset-xs-4 pa-4>
        <h1>Популярные предложения</h1>
      </v-flex>
    </v-layout>
    <v-layout align-center justify-space-around row fill-height>
      <v-flex xs2>
        <game-card-mini :game="1"></game-card-mini>
      </v-flex>
      <v-flex xs2>
        <game-card-mini :game="1"></game-card-mini>
      </v-flex>
      <v-flex xs2>
        <game-card-mini :game="1"></game-card-mini>
      </v-flex>
      <v-flex xs2>
        <game-card-mini :game="1"></game-card-mini>
      </v-flex>
      <v-flex xs2>
        <game-card-mini :game="1"></game-card-mini>
      </v-flex>
    </v-layout>
    <v-layout align-center justify-center column fill-height>
      <v-flex xs4 offset-xs-4 pa-4>
        <h1>Новые поступления</h1>
      </v-flex>
    </v-layout>
    <v-layout align-center justify-space-around row fill-height>
      <v-flex xs2>
        <game-card-mini :game="1"></game-card-mini>
      </v-flex>
      <v-flex xs2>
        <game-card-mini :game="1"></game-card-mini>
      </v-flex>
      <v-flex xs2>
        <game-card-mini :game="1"></game-card-mini>
      </v-flex>
      <v-flex xs2>
        <game-card-mini :game="1"></game-card-mini>
      </v-flex>
      <v-flex xs2>
        <game-card-mini :game="1"></game-card-mini>
      </v-flex>
    </v-layout>
    <v-layout align-center justify-center column fill-height>
      <v-flex xs4 offset-xs-4 pa-4>
        <h1>Скидки</h1>
      </v-flex>
    </v-layout>
    <v-layout align-center justify-space-around row fill-height>
      <v-flex xs2>
        <game-card-mini :game="1"></game-card-mini>
      </v-flex>
      <v-flex xs2>
        <game-card-mini :game="1"></game-card-mini>
      </v-flex>
      <v-flex xs2>
        <game-card-mini :game="1"></game-card-mini>
      </v-flex>
      <v-flex xs2>
        <game-card-mini :game="1"></game-card-mini>
      </v-flex>
      <v-flex xs2>
        <game-card-mini :game="1"></game-card-mini>
      </v-flex>
    </v-layout>
  </v-container>
</template>



<script>
import GameCardMini from "../components/GameCardMini";
import NewsBlock from "../components/NewsBlock";

export default {
  data() {
    return {};
  },
  components: {
    GameCardMini,
    NewsBlock
  }
};
</script>
