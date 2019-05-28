
import axios from 'axios'
import Vue from 'vue'

export default ({

    state: {
        games: null,
        topGames: null,
        recentAddedGames: null
    },
    mutations: {
        SET_GAMES(state, payload) {
            state.games = payload.data
        },
        SET_TOP_GAMES(state, payload) {
            state.topGames = payload.data
        },
        SET_RECENT_ADDED(state, payload) {
            state.recentAddedGames = payload.data
        }
    },
    actions: {
        LOAD_GAMES({ commit }) {
            axios
                .get(Vue.$apiEndpoint + "/api/gameList?format=json")
                .then(response => (commit('SET_GAMES', response)));
        },
        LOAD_TOP_GAMES({ commit }) {
            axios
                .get(Vue.$apiEndpoint + "/api/getTopDeals?format=json")
                .then(response => (commit('SET_TOP_GAMES', response)));
        },
        LOAD_RECENT_ADDED({ commit }) {
            axios
                .get(Vue.$apiEndpoint + "/api/getMostRecentAdded?format=json")
                .then(response => (commit('SET_RECENT_ADDED', response)));
        }
    },
    getters: {
        getGames: (state) => state.games,
        getTopGames: (state) => state.topGames,
        getRecentAddedGames: (state) => state.recentAddedGames
    }

})