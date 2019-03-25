
import axios from 'axios'
import Vue from 'vue'

export default ({

    state: {
        games: null,
    },
    mutations: {
        SET_GAMES(state, payload) {
            state.games =  payload.data
        }
    },
    actions: {
        LOAD_GAMES({ commit }) {
            axios
                .get(Vue.$apiEndpoint + "/api/gameList?format=json")
                .then(response => (commit('SET_GAMES',response)));
        }
    },
    getters: {
        getGames: (state) => state.games,

    }

})