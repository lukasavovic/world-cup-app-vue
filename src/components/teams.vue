<template>
  <div class="teamTable">
    <h1>Teams</h1>
    <div v-for="team in teams" :key="team.id">
      <img :src="team.flag" alt="">
      <router-link :to="'/singleTeam/' + team.id" v-text="team.name"></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'teams',
data(){
  return {
    teams: '',
    loaded: false
  }
},
beforeCreate(){
  this.axios
  .get('https://api.myjson.com/bins/bf70e')
  .then(response => {
  this.teams = response.data
  });
},
watch:{
    loaded:function(){
        return this.teams.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
  });
    }
},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>
.teamTable {
  display:grid;
  width:80%;
  margin: 0 auto;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  a {
    display: block;
    font-size: 25px;
  }
  h1 {
    grid-column: 1/5
  }
  div {
    align-items: center;
    // display: flex;
    img {
      width: 40px;
      height: 40px;
    }
  }
}
@media (max-width: 968px) {
  .teamTable {
  width:80%;
  grid-template-columns: 1fr 1fr;
    h1 {
      grid-column: 1/3
    }
  }
}
@media (max-width: 668px) {
  .teamTable {
  width:100%;
  grid-template-columns: 1fr 1fr;
    h1 {
      grid-column: 1/3
    }
    div {
      border: 1px solid black;
    }
  }
}

  
</style>

