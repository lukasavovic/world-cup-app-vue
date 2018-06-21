<template>
  <div class="teamTable">
    <h1>Teams</h1>
    <div v-for="team in teams" :key="team.id">
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
  return this.teams.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
  });
},
  // beforeCreate() {
  //     
  // },
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
}
  
</style>

