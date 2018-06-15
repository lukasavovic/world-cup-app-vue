<template>
  <div id="app">
    <navigation></navigation>
    <router-view :teams="teams" :matches="matches"></router-view>
  </div>
</template>

<script>
import navigation from './components/navigation.vue';

export default {
  name: 'app',
  components: {
    navigation
  },
  data() {
    return{
      teams:[],
      matches: [
        {
          id: 1000,
          team1Id: 1,
          team2Id: 4,
          team1GoalsHalf: 2,
          team2GoalsHalf: 0,
          team1GoalsFulltime: 5,
          team2GoalsFulltime: 0,
          date: '14.6.2018.',
          time: "18:00",
        },
        {
          id: 1001,
          team1Id: 3,
          team2Id: 2,
          team1GoalsHalf: 0,
          team2GoalsHalf: 0,
          team1GoalsFulltime: 0,
          team2GoalsFulltime: 1,
          date: '15.6.2018.',
          time: "14:00",
        },
        {
          id: 1002,
          team1Id: 5,
          team2Id: 6,
          team1GoalsHalf: 2,
          team2GoalsHalf: 1,
          team1GoalsFulltime: 3,
          team2GoalsFulltime: 3,
          date: '15.6.2018.',
          time: "14:00",
        }
      ]
    }
  },
  mounted () {
    this.axios
      .get('http://api.myjson.com/bins/15uwue')
      .then(response => (this.teams = response.data))
      // https://api.myjson.com/bins/15uwue
  }
}
</script>

<style lang='scss'>
body{
  margin: 0;
  padding: 0;
  background-color: #162b38;
  color: #333951;
  h1{
    color: #3BA182;
  }
  p {
    color: #D3D5D9;
  }
  a {
    color: #fff;
  }
}
#app {
  // font-family: 'Avenir', Helvetica, Arial, sans-serif;

  font-family: 'Source Sans Pro', sans-serif;  
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  $main-color: #333951;
  $main-color-two: #2B2D39; 
  $font-color: rgb(212, 213, 214);
  color: $font-color;
  a {
    padding:20px 0;
     text-decoration: none;
    color: $font-color;
    &:hover {
      color: #CEC8B8;
    }
  }
}
</style>





