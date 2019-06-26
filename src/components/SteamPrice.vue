<template>
  <div>
    <!-- Discounted exists -->
    <v-layout
      align-center
      justify-center
      column
      fill-height
      v-if="!(game.store_price_duscount == 0.0)"
    >
      <p>Steam:</p>
      <h4>Текущая цена: {{game.store_price_current}} &#8381;</h4>
      <h3>Обычная цена:</h3>
      <h3 class="strikethrough">{{game.store_price_initial}} &#8381;</h3>
      <p>Размер скидки: {{game.store_price_duscount}} %</p>
    </v-layout>
    <!-- No discount -->
    <v-layout
      align-center
      justify-center
      column
      fill-height
      v-if="(game.store_price_duscount == 0.0)"
    >
      <p>Steam:</p>
      <h4>Текущая цена: {{game.store_price_current}} &#8381;</h4>
    </v-layout>
  </div>
</template>

<script>
export default {
  props: {
    game: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.strikethrough {
  position: relative;
  font-size: 25px;
}

.strikethrough:before {
  border-bottom: 3px solid red;
  position: absolute;
  content: "";
  width: 100%;
  height: 50%;
  transform: rotate(-7deg);
}
</style>
