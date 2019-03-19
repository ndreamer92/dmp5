<template>
  <div>
    <h1>Welcome to HomePage </h1>
    
    <v-layout align-space-around justify-center column fill-height>
      
      <!-- <v-carousel>
        <v-carousel-item lazy v-for="(item,i) in items" :key="i" :src="item.src"></v-carousel-item>
      </v-carousel> -->
      
    </v-layout>
  </div>
</template>



<script>
export default {
  data() {
    return {
      items: [
        {
          src:
            "https://static.cdprojektred.com/thewitcher.com/media/wallpapers/witcher3/full/witcher3_en_wallpaper_hearts_of_stone_olgierd_1920x1200_1446735934.png"
        },
        {
          src: "https://b1.gmbox.ru/c/139038.815xp.jpg"
        },
        {
          src:
            "https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_TheElderScrollsVSkyrim_image1600w.jpg"
        },
        {
          src:
            "https://cdn.igromania.ru/mnt/articles/2/0/6/5/d/2/29710/preview/595cc35973e05536_848x477.jpg"
        }
      ]
    };
  }
};
</script>
