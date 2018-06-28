<template>
  <div id="app">
    <navigation></navigation>
    <router-view ></router-view>
  </div>
</template>

<script>

import navigation from './components/navigation.vue';

export default {
  name: 'app',
  components: {
    navigation
  },
  mounted(){
    this.axios
    .get('https://api.myjson.com/bins/bf70e')
    .then(response => {
    localStorage.setItem('teams', JSON.stringify(response.data))
    });
    this.axios
    .get('https://api.myjson.com/bins/6kzem')
    .then(response => {
    localStorage.setItem('matches', JSON.stringify(response.data))
    });
  },
}

</script>

<style lang='scss'>
@import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css");
body{
      transition: 0.2s all ease-out;
  margin: 0;
  padding: 0;
  background-color: #ffffffe8;
  color: #0533e9;
  h1{
    color: rgb(31, 35, 39);
  }
  p {
    color: #2f3635;
  }
  a {
    color: rgb(46, 46, 46);
  }
}
#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  $main-color: #343538;
  $main-color-two: rgb(41, 41, 41); 
  $font-color: rgb(29, 29, 29);
  color: $font-color;
  a {
    padding:20px 0;
    text-decoration: none;
    color: $font-color;
    &:hover {
      color: #38618C;
    }
  }
}
</style>







