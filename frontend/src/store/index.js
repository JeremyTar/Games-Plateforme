import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      pendu: {
        life: [5, 10, 20],
        categories: {
          escalade: {
            title: "Escalade",
            cover: require('../assets/img/pendu/climbing.jpg'),
            words: ["Degaine", "Bloc", "Voie", "Crux", "Delayer", "Gaz", "Devers", "Diedre", "Dalle", "Dulfer", "Rappel","Relais", "Lolotte", "Yaniro", "Derviche", "Lunule", "Ravaler", "Surplomb", "Clipper", "Couenne", "Coinceur", "Flash", "Plaquette", "Goujon", "Broche", "Junar", "Mouflage", "Moulinette", "Tete", "Rechapppe", "Topo", "Steak"]
          },
          programmation: {
            title: "Programmation",
            cover: require("../assets/img/pendu/code.jpg"),
            words: ["Erreur", "Langage", "Javascript", "Frontend", "Backend", "Balise", "Protocole", "Librairie", "Ordinateur", "Programme", "Developpeur", "Instruction", "Condition", "Compiler", "Objet", "Variable", "Tableau", "Algorithme", "Modulo", "Concatenation", "Bibliotheque", "Framework", "Html", "CSS"]
          },
          MAO: {
            title: "Production musicale",
            cover: require("../assets/img/pendu/mao.jpg"),
            words: ["Synthetiseur", "Pad", "Monitoring", "Mixage", "Mastering", "Drums", "Sample", "Piste", "Compresseur", "Egaliseur", "Delay", "Decay", "Limiter", "Composition", "Potard", "MIDI", "Arppegiator", "Velocite", "Looper", "Phaser", "Saturateur", "Vocoder", "Reverb", "Kick", "Snare"]
          }
        }
      }
    }
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
