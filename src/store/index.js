import { createStore } from 'vuex'

export default createStore({
  state: {
    compteur: 0,
    personnages: [
      {
          pseudo: 'TuberculeP',
          age: 15
      },
      {
          pseudo: 'Shikamaru69',
          age: 16
      },
      {
          pseudo: 'Shikamaru69',
          age: 17
      }

      ],
      calls: [],
  },
  getters: {
    getPersonnages: state => state.personnages,
},
  mutations: {
    ajoutPerso(state, personnage) {
      state.personnages.push(personnage)
    },
    ajoutCall(state, call) {
      state.calls.push(call)
    },
  },
  actions: {
    // L'action ajoutPerso prends en paramètre le personnage à ajouter
    ajoutPerso({commit}, personnage) {
      // Commit la mutation pour ajouter le personnage à l'état personnages
      commit('ajoutPerso', personnage)
    },
    ajoutCall({commit}, call) {
      // Commit la mutation pour ajouter le call à l'état calls
      commit('ajoutCall', call)
    }
  },
  modules: {
  }
})