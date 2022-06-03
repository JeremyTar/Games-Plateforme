<template>
    <div id="VictoryTable">
        <div id="Score">
            <h2>{{ VictoryMessage }}</h2>
            <p>{{ Winner }} à gagné</p>
            <p v-if="this.Point">total de : {{ Point }} {{ typePoint }}.</p>
            <ul class="liens">
                <router-link to="/"><li>Home</li></router-link>
                <router-link to="/lawale"><li>Rejouer</li></router-link>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "VictoryTable",
    props : {
        VictoryMessage: String,
        Winner : String,
        Point: Number,
        typePoint: String,
        Game: String,
    },
    data() {
        return {
        }
    },
    mounted() {
        let scorePannel = document.getElementById("Score")
        console.log(scorePannel)
        scorePannel.setAttribute('class', this.Game)
    }
}
</script>

<style lang="scss" scoped>

#VictoryTable {
    position: fixed;
    width: 100%;
    height: 100vh;
    backdrop-filter: blur(5px);
    display: flex;
    justify-content: center;
    align-items: center;
    #Score {
        width: 50%;
        min-width: 300px;
        text-align: center;
        height: 50%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.5);
        .liens {
            display: flex;
            list-style: none;
            justify-content: space-around;
            a {
               text-decoration: none; 
            }
        }
    }
}

.awale {
    background-image: url("../assets/img/awale/textureBois.jpg");
    border: 2px rgba(77,20,11,0.7) ridge;
    border-radius: 25px;
    h2 {
        font-family: "African";
        font-size: 3em;
    }
    li, p {
        font-family: "BaksoSapi";
        font-size: 2em;
        color: #C4A173;
    }
}

.pendu {
    background-image: url("../assets/img/pendu/backgroundPendu.jpg");
}
</style>