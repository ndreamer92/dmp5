
import axios from 'axios'

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
                .get("http://84.201.130.111:8000/api/gameList?format=json")
                .then(response => (commit('SET_GAMES',response)));
        }
    },
    getters: {
        getGames: (state) => state.games,

    }

})