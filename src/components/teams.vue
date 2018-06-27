<template>
  <div class="teamTable">
    <h1>Teams</h1>
    <div v-for="team in allTeams" :key="team.id">
      <img :src="team.flag" alt="">
      <router-link :to="'/singleTeam/' + team.id" v-text="team.name"></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'teams',
  props: {
   teams: {
    type: Array,
    required: true
  }
},
data(){
  return {
    allTeams: '',
    loaded: false
  }
},
mounted(){

  EventBus.$on('something', (data) => {
    this.allTeams = data;
    console.log(data)
  });
  // this.allTeams = this.teams;
  return this.allTeams.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
  });
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>
.teamTable {
  display:grid;
  width:80%;
  margin: 0 auto;
  grid-template-columns: repeat(4,1fr);
  a {
    display: block;
    font-size: 25px;
  }
  h1 {
    grid-column: 1/5;
  }
  div {
    align-items: center;
    display: flex;
    img {
      width: 40px;
      height: 40px;
    }
  }
}
  
</style>

