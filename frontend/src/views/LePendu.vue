<template>
  <div id="Pendu">
    <acces-menu></acces-menu>
    <h1>Pendu</h1>
    <div class="Background">
      <img src="../assets/img/pendu/backgroundPendu.jpg" alt="backgorund pendu">
    </div>
    <div class="MenuPendu">
      <div class="MenuPendu__categorie">
        <button v-for="categorie in this.$store.state.pendu.categories" :key="categorie" v-on:click="pickCategorie(categorie.words, categorie.title)">
          <p>{{categorie.title}}</p>
          <img :src="categorie.cover" alt="cover categorie">
        </button>
      </div>
      <div class="MenuPendu__display">
        <p>Nb de vie : {{ NbrOfLife }}</p>
        <p>Categorie : {{ CurrentCategorie }}</p>
        <p>Nb de coups : {{ NbrOfClick}}</p>
      </div>
    </div>
    <div class="GameAreaPendu">
      <div class="GameAreaPendu__informations">
        <div class="GameAreaPendu__informations__letters">
          <p>Letter use :</p>
          <div class="letter">
            <ul>
              <li  v-for="value in this.useLetter" :key="value">{{value}}</li> 
            </ul>
          </div>
        </div>
        <div class="GameAreaPendu__informations__input">
          <input id="inputLetter" type="text" v-model="this.currentLetter" maxlength="1" >
          <button v-on:click="play()">Send</button>
          <button v-on:click="Surrend()">Surrend</button>        
        </div> 
      </div>
      <div id="word"></div>             
    </div>
  </div>
</template>

<script>
import accesMenu from "../components/accesMenu.vue";
export default {
  name: "LePendu",
  components: {
    accesMenu,
  },
  data() {
    return {
      NbClique: 0,
      NbrOfLife: 10,

      word: null,
      ArrayWord: [],
      CurrentArray: [],
      currentLetter: null,
      CurrentCategorie: "",
      useLetter: [],
      NbrOfClick: 0,
      dictonnary: null,
    };
  },
  methods: {
    resetGame() {
      this.useLetter = []
      this.currentLetter = ""
      this.NbrOfClick = 0
      this.ArrayWord = []
      this.CurrentArray = []
      this.NbrOfLife = 10
      this.clearWord()
    },
    pickCategorie(words, title) {
      this.CurrentCategorie = title
      this.resetGame()
      this.dictonnary = words
      this.chooseWord()
    },
    chooseWord() {
      this.word =
        this.dictonnary[
          Math.floor(
            Math.random(this.dictonnary.length) * this.dictonnary.length
          )
        ];
      console.log(this.word);
      this.word.split("").forEach((el) => {
        this.ArrayWord.push(el.toUpperCase())
        this.CurrentArray.push(0)
      });
        this.ReplaceLetter()

    },
    clearWord() {
      const word = document.getElementById("word")
      while(word.hasChildNodes()) {
        word.removeChild(word.firstChild)
      }
    },
    ReplaceLetter() {
      for (let i = 0; i < this.ArrayWord.length; i++) {
        if(this.CurrentArray[i] == 0) {
          let NewUnderscore = document.createElement("div");
          NewUnderscore.style.width = "5%";
          NewUnderscore.style.height = "5px";
          NewUnderscore.style.backgroundColor = "black";
          NewUnderscore.style.margin = "0px 5px";
          NewUnderscore.style.borderRadius = "30%";
          NewUnderscore.style.opacity = "0.8"
          document.getElementById("word").appendChild(NewUnderscore);
          NewUnderscore.setAttribute("class", "hide")
            }
        else {
          let NewLetter = document.createElement("div")
          let newContent = document.createTextNode(this.ArrayWord[i])
          NewLetter.style.width = "5%";
          NewLetter.style.height = "35px";
          NewLetter.style.margin = "0px 5px";
          NewLetter.style.fontSize = "2em"
          NewLetter.style.textAlign = "center"
          NewLetter.style.fontFamily = "Colleged"
          NewLetter.appendChild(newContent)
          document.getElementById("word").appendChild(NewLetter)
        }
      }
    },
    play() {
      if(this.word) {
        let find = false
        if(this.currentLetter.match(/[a-zA-Z]/)) {
          for(const i in this.useLetter) {
            if(this.currentLetter.toUpperCase() == this.useLetter[i]) {
              window.alert("you already take this letter ! Pick an other one")
              return
            }
          }
          for(const i in this.ArrayWord) {
            if(this.CurrentArray[i] == 0) {
              if(this.currentLetter.toUpperCase() == this.ArrayWord[i]) {
                this.CurrentArray[i] = 1
                find = true
              }
            }
          }
          if(!find) {
            this.NbrOfLife--
            if(this.NbrOfLife === 0){
              window.alert("vous avez perdu")
              for(let i = 0; i < this.CurrentArray.length; i++) {
                this.CurrentArray[i] = 1
              }
              this.clearWord()
              this.ReplaceLetter()
              return
            }
          }
          this.clearWord()
          this.ReplaceLetter()
          this.NbrOfClick++
          this.useLetter.push(this.currentLetter.toUpperCase())
          this.currentLetter = ""   
          if(find) {
            for(let i = 0; i < this.ArrayWord.length; i++) {
              if(this.CurrentArray[i] == 0) {
                return
              }
            }
            window.alert("vous avez gagné en " + (this.NbrOfClick) + " coup")
            return
          }
        }
        else{
            window.alert("choose a correct charactere")
            return
        }
      }
      else {
        window.alert("Choose a categorie")
      }
      
    },
    Surrend() {
      if(!this.word) {
        window.alert("begin a game before")
      }
      else {
        for(let i = 0; i < this.CurrentArray.length; i++) {
          this.CurrentArray[i] = 1

        }
        this.clearWord()
        this.ReplaceLetter()
        window.alert("vous avez perdu, cliquer sur une categorie pour rejouer")
      }
    }
  },
};
</script>

<style lang="scss" scoped>

@font-face {
  font-family: "Sketchzone";
  src: url("../style/font/pendu/Sketchzone.otf");
}

@font-face {
  font-family: "Colleged";
  src: url("../style/font/pendu/Colleged.ttf");
}


#Pendu {
  height: 100%;
  width: 100%;
  h1 {
    text-align: center;
    font-family: "Colleged", sans-serif;
    font-size: 5em
  }
  p {
    font-family: "Sketchzone", sans-serif;
  }
  .Background {
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -10;
    filter: sepia(75%);
  }
  .MenuPendu {
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;
    margin: 10px 0;
    &__categorie {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      text-align: center;
      flex-wrap: wrap;
      width: 100%;
      @media (max-width: 750px) {
        overflow: scroll;
        max-height: 400px;
      }
      button {
        border: none;
        
        border-radius: 5px;
        width: 20%;
        height: 210px;
        min-width: 300px;
        margin: 10px 0;
        background-color: transparent;
        
      }
      button:hover > img {
        filter: sepia(0)

      }
      img{
        width: 100%;
        height: 200px;
        position: relative;
        top: -80px;
        filter: sepia(80%);
        transition: 0.2s;
        border-radius: 25px;
        box-shadow: 2px 2px 5px 2px rgba(255,255,255,0.35);
      }
      p {
        position: relative;
        top: 60px;
        font-weight: 500;
        font-size: 2em;
        z-index: 2;
        color: #FFFFFF;
        text-shadow: #474747 3px 5px 2px;
      }
    }
    &__display {
      width: 100%;
      display: flex;
      justify-content: space-evenly;
      margin: 20px 0 0 0;
    }
  }
  .GameAreaPendu {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    &__informations {
      display: flex;
      width: 100%;
      margin: 0 50px;
      align-items: center;
      justify-content: space-around;
      &__letters {
        width: 40%;
        margin: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        .letter {
          display: flex;
          ul {
            display: flex;
            li {
              list-style: none;
              font-size: 2em;
              margin: 0 10px;
              font-family: "Colleged", sans-serif;
            }          
          }          
        }
      }
      &__input {
        width: 40%;
        margin: 15px;
        display: flex;
        justify-content: center;
        input {
          width: 50px;
          height: 50px;
          text-align: center;
          background-color: #F2D7AB;
          border: none;
          font-size: 2em;
          border-radius: 5%;
          font-family: "Colleged";
          opacity: 0.8;
        }
        button {
          height: 50px;
          margin: 0 5px;
          font-family: "Sketchzone", sans-serif;
          border: ridge 2px #F2D7AB;
          border-radius: 5%;
          background-color: transparent;
        }
      }
    }
  }


  #word {
    margin: 150px auto;
    width: 80%;
    display: flex;
    justify-content: space-evenly;
    align-items: flex-end;
  }
}
</style>