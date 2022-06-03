<template>
    <div id="home">
        <h1>Hall de jeux</h1>
          <nav id="nav">
    <li><router-link to="/lependu">Pendu</router-link></li>
    <li><router-link to="/lawale">Awale</router-link></li>
  </nav>
    </div>
</template>

<script>
export default {
    name: "GameHome",
    data() {
        return {
            
        }
    },
}
</script>

<style lang="scss" scoped>
#home {
    background-color: grey;
    width: 100%;
    height: 100vh;
    li{
        list-style: none;
    }
}
</style>