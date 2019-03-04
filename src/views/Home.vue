<template>
  <v-layout lign-start justify-start row fill-height>
    <v-flex v-for="game in mockDeal" :key="game.name" xs6 sm3 ma-3>
      <game-card :game="game"></game-card>
    </v-flex>
  </v-layout>
  
</template>



<script>
import GameCard from "../components/GameCard";

export default {
  data: () => ({
    show: false,
    mockDeal: [{
        name: 'Witcher 3: the Wild Hunt',
        description: 'Action RPG',
        full_desc: 'Open World. In the open world of Wild Hunt, you chart your own path to adventure. You play as a bounty hunter, a man of the road.',
        imageLink: 'https://cdn.maximonline.ru/08/d3/ac/08d3ace29340d6ca95fad1f708f933ff/665x374_1_8821b17a1b9ab98357e628f0d6f0b53b@1476x830_0xac120005_13927478591529043572.jpg',
        buyLink: 'http://plati.ru/itm/ved-mak-3-cd-key-witcher-3-gog-ru-cis-16-dlc/1944458',
        infoLink: 'http://plati.ru/games/ved-mak-3-dikaja-okhota-the-witcher-3-wild-hunt/467',
        price_usd: '~10.0',
      },
      {
        name: 'Grand Theft Auto V',
        description: 'Action, Adventure',
        full_desc: 'Los Santos is a city of bright lights, long nights and dirty secrets, and they don’t come brighter, longer or dirtier than in GTA Online: After Hours. The party starts now.',
        imageLink: 'https://hb.imgix.net/ad3f96dfd21531e24ab72c3821a01049c8484982.jpg?auto=compress,format&fit=crop&h=353&w=616&s=9fc123b4c723d329d164b8ab02af5284',
        buyLink: 'http://plati.ru/itm/ved-mak-3-cd-key-witcher-3-gog-ru-cis-16-dlc/1944458',
        infoLink: 'http://plati.ru/games/ved-mak-3-dikaja-okhota-the-witcher-3-wild-hunt/467',
        price_usd: '~20.0',
      },
      {
        name: 'Assassins Creed® Odyssey',
        description: 'Action, Adventure, RPG',
        full_desc: 'Choose your fate in Assassins Creed® Odyssey. From outcast to living legend, embark on an odyssey to uncover the secrets of your past and change the fate of Ancient Greece.',
        imageLink: 'https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcgYerhHN8ypBd6xv_1dkpFdTHTvUZp6Vnm30aitt.KV4zHlYuvVOQXjKC8LQGlrgSm70uPIxmzvLPL.uh_y5oNg98nSpcOw1ljhWky1W.GqusH9_KZ.UOPZU4BPAstuk0dvY01wnNaUuZR9EjYifuMEEuBYeLP2xNSdKFTAdb9To-&h=1080&w=1920&format=jpg',
        buyLink: 'http://plati.ru/itm/ved-mak-3-cd-key-witcher-3-gog-ru-cis-16-dlc/1944458',
        infoLink: 'http://plati.ru/games/ved-mak-3-dikaja-okhota-the-witcher-3-wild-hunt/467',
        price_usd: '~15.0',
      },
      {
        name: 'Hearts of Iron IV',
        description: 'Simulation, Strategy',
        full_desc: 'Victory is at your fingertips! Your ability to lead your nation is your supreme weapon, the strategy game Hearts of Iron IV lets you take command of any nation in World War II',
        imageLink: 'https://hb.imgix.net/610fd4bab647a5736b311f6addb43f7c689386c1.jpg?auto=compress,format&fit=crop&h=353&w=616&s=ec65b4deb756973fdab054d2be89705b',
        buyLink: 'http://plati.ru/itm/ved-mak-3-cd-key-witcher-3-gog-ru-cis-16-dlc/1944458',
        infoLink: 'http://plati.ru/games/ved-mak-3-dikaja-okhota-the-witcher-3-wild-hunt/467',
        price_usd: '~30.0',
      },
      ]
  }),
  components: {
    GameCard
  }
};
</script>
