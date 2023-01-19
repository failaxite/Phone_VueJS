import { createStore } from 'vuex'
import fs from 'fs'

export default createStore({
  state: {
    personnages: [],
  },
  mutations: {
    ajoutPerso(state, personnage) {
      state.personnages.push(personnage)
    }
  },
  actions: {
    ajoutPerso({commit}, personnage) {
      // Commit la mutation pour ajouter le personnage à l'état personnages
      commit('ajoutPerso', personnage)
      // utilisez la méthode fs.readFile pour lire le fichier existant
      fs.readFile('personnages.json', 'utf8', (err, data) => {
        if (err) throw err;
        // Parsez les données en objet JSON
        const jsonData = JSON.parse(data);
        // Ajoutez les nouvelles données au tableau
        jsonData.personnages.push(personnage);
        // Utilisez la méthode fs.writeFile pour écrire les données mises à jour dans le fichier
        fs.writeFile('personnages.json', JSON.stringify(jsonData), (err) => {
          if (err) throw err;
          console.log('Les données ont été ajoutées au fichier!');
        });
      });
    }
  },
  modules: {
  }
})