<template>
  <div>
    <h1>Matches</h1>
    <hr>
    <div v-for="match in matches" :key="match.id" class="match">
      <match-details :match="match"></match-details>
      <match-team  v-for="team in teams" :key="team.id" v-if="team.id == match.team1Id" class="team1" :team="team"></match-team>
      <match-result :match="match"></match-result>
      <match-team  v-for="team in teams" :key="team.id" v-if="team.id == match.team2Id" class="team1" :team="team"></match-team>
    </div>
  </div>
</template>

<script>
import matchDetails from "../components/template/matchDetails.vue"
import matchTeam from "../components/template/matchTeam.vue"
import matchResult from "../components/template/matchResult.vue"


export default {
  name: 'matches',
  components: {
    matchDetails,
    matchTeam,
    matchResult
  },
  data(){
    return {
      teams : '',
      matches: '',
    }
  },
  beforeMount(){
    this.axios
    .get('https://api.myjson.com/bins/bf70e')
    .then(response => {
    this.teams = response.data   
    });
    this.axios
    .get('https://api.myjson.com/bins/6kzem')
    .then(response => {
    this.matches = response.data   
    });
    //this.$root.$emit('eventing', this.Teams);
    // https://api.myjson.com/bins/6kzem
   
   },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
h1{
  width: 40%;
  margin: 50px auto;
}
hr {
  width: 65%;
}
.match {
  border-radius: 8px;
  display: grid;
  grid-template-columns: 1fr 8fr 3fr 8fr;
  justify-content: center;
  align-items: center;
  width: 55%;
  margin: 0 auto;
  background-color: #b4b4b415;
  margin-top: 20px;

  div {
    display: grid;
 
  }
}
@media (max-width: 868px) {
.match {
  width: 100%;
}
}
</style>
