<template>
<div>
      <img id="backgroundAwale" src="../assets/img/awale/backgroundAwale1.jpg" alt="background Awale">
      <acces-menu></acces-menu>
      <Victory-table v-if="this.finalScore.active"
        v-bind:VictoryMessage="this.finalScore.VictoryMessage"
        v-bind:Winner="this.finalScore.winner"
        v-bind:Point="this.finalScore.nbrPoint"
        v-bind:typePoint="this.finalScore.typePoint"
        v-bind:Game="this.finalScore.Game"></Victory-table>
        
  <div>
    <div id="Awale">
      <div class="joueur__title">
        <img :src="this.generateSeed()" alt="Pierre Awale" v-if="this.repereJoueur === 0">
        
        <button class="NameDisplay" 
          v-if="this.nameOnChange0 == false"
          v-on:click="ChangeName(0)">
          <p>{{this.terrain[0].name}}</p>
        </button>
        <div class="joueur__title__input" v-if="this.nameOnChange0 == true">
          <input type="text" v-model="this.terrain[0].name" maxlength="10" minlength="1">
          <button v-on:click="ChangeName(0)">modify</button>
        </div>
        <img :src="this.generateSeed()" alt="Pierre Awale" v-if="this.repereJoueur === 0">
      </div>
      <div class="joueur1">
        <div
          class="joueur1__jeu"
          v-for="item in this.terrain[0].jeux"
          :key="item"
        >
          <button
            :disabled="this.repereJoueur != 0 || item.nbBille == 0"
            class="joueur1__jeu__pioche pioches"
            v-on:click="moveTurn(0, item.NumPioche)"
          >
            <div class="bille" v-for="value in item.nbBille" :key="value"><img :src="this.generateSeed()" alt="Pierre awale"></div>
          </button>
        </div>
        <div class="joueur1__reserve">
          <div
            class="bille"
            v-for="value in this.terrain[0].boque"
            :key="value"
          ><img :src="this.generateSeed()" alt="Pierre awale"></div>
        </div>
      </div>
      <button v-on:click="beginGame()" id="tasCailloux">
        <img src="../assets/img/awale/pierre/tasCailloux.png" alt="Button beging tas de cailloux">
        <p>New Game</p>
      </button>
      <div class="joueur2">
        <div
          class="joueur2__jeu"
          v-for="item in this.terrain[1].jeux"
          :key="item"
        >
          <button
            :disabled="this.repereJoueur != 1 || item.nbBille == 0"
            class="joueur2__jeu__pioche pioches"
            v-on:click="moveTurn(1, item.NumPioche)"
          >
            <div class="bille" v-for="value in item.nbBille" :key="value"><img :src="this.generateSeed()" alt="Pierre awale"></div>
          </button>
        </div>
        <div class="joueur2__reserve">
          <div
            class="bille"
            v-for="value in this.terrain[1].boque"
            :key="value"
          ><img :src="this.generateSeed()" alt="Pierre awale"></div>
        </div>
      </div>
      <div class="joueur__title">
        <img :src="this.generateSeed()" alt="Pierre Awale" v-if="this.repereJoueur === 1">
        <button class="NameDisplay" 
          v-if="this.nameOnChange1 == false"
          v-on:click="ChangeName(1)">
          <p>{{this.terrain[1].name}}</p>
        </button>
        <div class="joueur__title__input" v-if="this.nameOnChange1 == true">
          <input type="text" v-model="this.terrain[1].name" max="10" min="1">
          <button v-on:click="ChangeName(1)">modify</button>
        </div>
        <img :src="this.generateSeed()" alt="Pierre Awale" v-if="this.repereJoueur === 1">
      </div>
    </div> 
    <div id="Rules">
      <h2>Regles du jeu :</h2>
      <div class="Présentation">
        <h3>L'awale</h3>
        <div class="Presentation__container">
          <div class="Presentation__container__photo">
            <img src="../assets/img/awale/JoueurAwale.jpg" alt="Joueur d'awalé">
            <p class="credits">(Photography by Anna. C)</p>          
          </div>
          <ul class="Presentation__container__regles">
            <li><span>But du jeu</span> : Manger le plus de billes de l'adversaire</li>
            <li><span>Nombre de joueur</span> : 2 Joueurs</li>
            <li><span>Preparation</span> : La partie commence avec quatres cailloux dans chaque trous </li>
          </ul>
        </div>
      </div>
      <div class="Deroulement">
        <h3>Deroulement d'une partie</h3>
        <ul class="Deroulement__regles">
          <li><span>Greniers</span> : Situés à chaque extrémité droite du joueur</li>
          <li><span>Jouer un coup</span> : Lejoueur prend toutes les cailloux de l’un de ses trous et en dépose une dans chaque trou suivant celui qu’il a vidé.</li>
          <li><span>Sens de la partie</span> : antihoraire</li>
          <li><span>Capture</span> : Quand le dernier caillou déposé tombe dans un trou adverse ayant 1 ou 2 cailloux, le joueur capture les 2 ou 3 cailloux resultantes. les graines gagné vont dans le grenier.</li>
          <li><span>Rafle </span>: En cas de capture si la case précedente contient également 2 ou 3 cailloux, elles sont aussi capturées et ainsi de suite.</li>
          <li><span>Boucle </span>: Si la joueur à plus de douze cailloux dans le trou choisi, lors de son tour, il ne repasse jamais sur son trou initial.</li>
          <li><span>Affamer</span> : Un joueur n'a pas le droit de jouer un coup qui prennes toutes les grain,es du camp adverse.</li>
          <li><span>Fin du jeu</span>: Le jeu se termine lorsque q'un joueur ne peut plus jouer, l'adversaire remporte alors le reste des graines restantes.</li>
        </ul>
      </div>

    </div>
  </div>
</div>
</template>

<script>
import accesMenu from "../components/accesMenu.vue";
import VictoryTable from "../components/victoryTable.vue";

export default {
  name: "lAwale",
  components: {
    accesMenu,
    VictoryTable,
  },
  data() {
    return {
      terrain: [
        {
          name: "Joueur 1",
          boque: 0,
          jeux: [
            { nbBille: 0, NumPioche: 1 },
            { nbBille: 0, NumPioche: 2 },
            { nbBille: 0, NumPioche: 3 },
            { nbBille: 0, NumPioche: 4 },
            { nbBille: 0, NumPioche: 5 },
            { nbBille: 0, NumPioche: 6 },
          ],
        },
        {
          name: "Joueur 2",
          boque: 0,
          jeux: [
            { nbBille: 0, NumPioche: 1 },
            { nbBille: 0, NumPioche: 2 },
            { nbBille: 0, NumPioche: 3 },
            { nbBille: 0, NumPioche: 4 },
            { nbBille: 0, NumPioche: 5 },
            { nbBille: 0, NumPioche: 6 },
          ],
        },
      ],

      repereJoueur: null,
      repereAdversaire: null,

      nameOnChange0: false,
      nameOnChange1: false,

      finalScore: {
        VictoryMessage: "Victoire !",
        active: false,
        winner: null,
        nbrPoint: 0,
        typePoint: "cailloux",
        Game: "awale",
      }
    };
  },
  methods: {
    generateSeed() {
      let random = Math.floor(Math.random() * 4)
      let seed = require("../assets/img/awale/pierre/caillou" + random + ".png")
      return seed
    },
    beginGame() {
      for(const i in this.terrain) {
        this.terrain[i].boque = 0
        this.terrain[i].jeux.forEach((el) => {
          el.nbBille = 4
        })
      }
      this.repereJoueur = 0
      this.repereAdversaire = 1
      let pioches = document.querySelectorAll(".pioches")
      pioches.forEach((el) => {
        el.addEventListener('click', () => {
          if(this.repereJoueur == 0) {
            this.repereAdversaire--
            this.repereJoueur++
          }
          else {
            this.repereAdversaire++
            this.repereJoueur--
          }
        })
      })
      
    },
    moveTurn(NumJoueur, NumPioche) {
      let indexPioche = NumPioche - 1;
      let indexJoueur = NumJoueur;
      let reperePioche = NumPioche - 1
      let indexGraine = this.terrain[NumJoueur].jeux[indexPioche].nbBille;
      this.terrain[NumJoueur].jeux[indexPioche].nbBille = 0;

      while (indexGraine > 0) {
        // Condition changement coté plateau
        if (indexPioche == 5) {
          if (indexJoueur == 0) {
            indexJoueur++;
          } else {
            indexJoueur--;
          }
          indexPioche = 0;
        } else {
          indexPioche++;
        }
        if (indexJoueur == this.repereJoueur) {
            if(this.terrain[indexJoueur].jeux[indexPioche] != this.terrain[this.repereJoueur].jeux[reperePioche]) {
              this.terrain[indexJoueur].jeux[indexPioche].nbBille++
            }
            else {
              indexGraine++
            }
        }
        else {
            this.terrain[indexJoueur].jeux[indexPioche].nbBille++
            if (indexGraine == 1) {
                this.eat(indexJoueur, indexPioche, this.repereJoueur);
            }
        }
        indexGraine--;
        this.tchekVictoire()
      }
    },
    eat(indexJoueur, indexPioche, repereJoueur) {
        if ( this.terrain[indexJoueur].jeux[indexPioche].nbBille <= 3 && this.terrain[indexJoueur].jeux[indexPioche].nbBille > 1) {
          if(this.tchekPioche(indexJoueur, indexPioche)) {
            if (this.sommeEatBack(indexJoueur, indexPioche) != this.sommeBille(indexJoueur)) {
                this.terrain[repereJoueur].boque += this.terrain[indexJoueur].jeux[indexPioche].nbBille;
                this.terrain[indexJoueur].jeux[indexPioche].nbBille = 0;
                this.eatBack(indexJoueur, indexPioche, repereJoueur);
            }            
          }
          else {
            this.terrain[repereJoueur].boque += this.terrain[indexJoueur].jeux[indexPioche].nbBille;
            this.terrain[indexJoueur].jeux[indexPioche].nbBille = 0;
          }

        }
    },
    eatBack(indexJoueur, indexPioche, repereJoueur) {
      let i = this.terrain[indexJoueur].jeux[indexPioche].NumPioche - 1;
      while (i >= 1) {
        i--;
        if (i < 0) {
          return;
        }
        if (this.terrain[indexJoueur].jeux[i].nbBille <= 3 && this.terrain[indexJoueur].jeux[i].nbBille > 1) {
            this.terrain[repereJoueur].boque +=
            this.terrain[indexJoueur].jeux[i].nbBille;
            this.terrain[indexJoueur].jeux[i].nbBille = 0;
        } else {
            return ;
        }
      }
    },
    sommeEatBack(indexJoueur, indexPioche) {
        let sommeEat = 0;
        let i = this.terrain[indexJoueur].jeux[indexPioche].NumPioche - 1;
        while (i >= 0) {
            
            if (this.terrain[indexJoueur].jeux[i].nbBille <= 3 && this.terrain[indexJoueur].jeux[i].nbBille > 1) {
                sommeEat += this.terrain[indexJoueur].jeux[i].nbBille;
            } else {
                return sommeEat;
            }
            i--;
        }
        return sommeEat
    },
    eatAll(NumJoueur) {
      this.terrain[NumJoueur].jeux.forEach((el) => {
        this.terrain[NumJoueur].boque += el.nbBille
        el.nbBille = 0
      })
    },
    sommeBille(NumJoueur) {
      let sommeBille = 0;
      this.terrain[NumJoueur].jeux.forEach((element) => {
        sommeBille += element.nbBille;
      });
      return sommeBille;
    },
    tchekPioche(Adversaire, indexPioche) {
      for(const i in this.terrain[Adversaire].jeux) {
        if((this.terrain[Adversaire].jeux[i].NumPioche) - 1 != indexPioche) {
          if(this.terrain[Adversaire].jeux[i].nbBille != 0) {
            return true            
          }
        }
      }
      return false
    },
    tchekVictoire() {
      for(let i = 0; i < this.terrain.length; i++) {
        if(this.sommeBille(i) == 0) {
          if(i == 0) {
            this.eatAll(1)
            this.Victory()
            return
          }
          else {
            this.eatAll(0)
            this.Victory()
            return
          }
        }
      }
    },
    Victory() {
      this.finalScore.active = true;     
      if(this.terrain[0].boque > this.terrain[1].boque) {

        this.finalScore.winner = this.terrain[0].name
        this.finalScore.nbrPoint = this.terrain[0].boque
      }
      else if(this.terrain[0].boque == this.terrain[1].boque) {
      this.finalScore.winner = this.terrain[0].name + " et " + this.terrain[1].name
      this.finalScore.VictoryMessage = "Egalite"

      }
      else {
        this.finalScore.winner = this.terrain[1].name
        this.finalScore.nbrPoint = this.terrain[1].boque
      }
      
    },
    ChangeName(player) {
      if(player == 0) {
        if(this.nameOnChange0) {
          this.nameOnChange0 = false
        }
        else {
          this.nameOnChange0 = true
        }
      }
      else {
        if(this.nameOnChange1) {
          this.nameOnChange1 = false
        }
        else {
          this.nameOnChange1 = true
        }
      }
    }
  },
  mounted() {

  },
};
</script>

<style lang="scss" scoped>

$randomRockRotate: random($limit: 5);

@font-face {
  font-family: "African";
  src: url("../style/font/awale/african.ttf");
}

@font-face {
  font-family: "BaksoSapi";
  src: url("../style/font/awale/BaksoSapi.otf");
}

#backgroundAwale {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -10;
}
#Awale {
  height: 100%;
  width: 100%;
  object-fit: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px 0;
  .joueur__title {
    height: 75px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 50%;
    min-width: 300px;
    margin: auto;
    border-radius: 25px;
    border: 1px ridge #ab2c17;
    background: rgba(77,20,11,0.7);
    box-shadow: 2px 2px 25px 1px rgba($color: #000000, $alpha: 0.5);
    .NameDisplay {
      background-color: transparent;
      border: none;
      cursor: pointer;
    }
    &__input {
      height: 80%;
      display: flex;
      align-items: center;
      
      button {
        background-color: transparent;
        border: none;
        font-family: "African";
        color: #C4A173;
        cursor: pointer;
      }
      input {
      font-family: "African";
      font-size: 2.5em;
      color:#C4A173;
      max-width: 300px;
      border:#4d140b 2px inset;
      border-radius: 25px ;
      background-color: rgba(196,161,115,0.3);
      padding: 10px;
      text-align: center;

      }
    }
    p {
      height: 50px;
      font-size: 3em;
      color:#C4A173;
      height: 50px;
      font-family: "African";
      margin: 5px ;
    }
    img {
      width: 50px;
    }    
  }
  #tasCailloux {
    position: absolute;
    left: 5%;
    top: 5%;
    width: 150px;
    height: 150px;
    background-color: transparent;
    border: none;
    img {
      width: 100%;
    }
    p {
      position: relative;
      top: -100px;
      font-size: 2em;
      font-family: "BaksoSapi";
      color: #4d140b;
      transition: 1s;
    }
    p:hover {
      transform: rotate(10deg)
    }
    
  }
  .joueur1,
  .joueur2 {
    display: flex;
    justify-content: space-evenly;
    width: 65%;
    min-width: 900px;
    max-width: 1200px;
    height: 200px;
    margin: 50px;
    background-image: url("../assets/img/awale/textureBois.jpg");
    align-items: center;
    padding: 5px;
    border-radius: 50px;
    box-shadow: 0px 0px 20px 2px rgba(0,0,0,0.8);
    &__reserve {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      height: 90%;
      width: 260px;
      border-radius: 150px;
      background: #7c2011;
      box-shadow: inset 22px 22px 43px #4d140b, inset -22px -22px 43px #ab2c17;
    }
    &__jeu {
      &__pioche {
        cursor: pointer;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        border: #ab2c17 1px ridge;
        border-radius: 50%;
        width: 120px;
        height: 120px;
        background: #7c2011;
        box-shadow: inset 22px 22px 43px #4d140b, inset -22px -22px 43px #ab2c17;
      }
    }
  }
  .joueur1 {
    flex-direction: row-reverse;
  }
  .bille {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    transform: rotate(60deg);
    img {
      width: 100%;
      height: 100%;
    }
  }
}
#Rules {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url("../assets/img/awale/textureBois.jpg");
  width: 50%;
  max-width: 1240px;
  margin: auto;
  border-radius: 25px;
  border: 2px ridge #ab2c17;
  .Presentation {
    &__container {
      display: flex;
      justify-content: space-evenly;
      width: 80%;
      margin: auto;
      flex-wrap: wrap;
      &__photo {
        display: flex;
        flex-direction: column;
        text-align: center;
        width: 45%;
        min-width: 300px;
        img {
          width: 85%;
          border-radius: 25px;
          border: #4d140b 3px ridge;
          box-shadow: 2px 2px 25px 1px rgba($color: #000000, $alpha: 0.5);
          margin: 15px;
        }
        .credits {
          color: #F6E6D2;
          font-size: 0.8em;
          font-family: 'BaksoSapi';
          margin: 0;
        }
      }
      &__regles {
        width: 45%;      
        }
      }
    .Deroulement {
      &__regles {
        width: 80%;
      }
    }
  }
  h2, h3 {
    font-family: "African";
    text-align: center;
    color:#C4A173;
    text-shadow: 1px 1px 1px 
    rgba(0,0,0,0.4),
                -1px -1px 1px 
    rgba(255,255,255,0.4);

  }
  ul{
    padding: 0;
    margin: auto;
    li {
      list-style: none;
      text-align: center;
      font-family: "BaksoSapi";
      color: #F6E6D2;
      font-size: 1.2em;
      margin: 10px;
          text-shadow: 1px 1px 1px 
    rgba(0,0,0,0.4),
                -1px -1px 1px 
    rgba(255,255,255,0.4);
      span {
        font-weight: 500;
        font-size: 1.1em;
        color: #C4A173;
      }
    }    
  }
}

</style>