<template>
  <div>
    <h1>Upcoming matches</h1>
    <div v-for="match in matches" :key="match.id" class="match">
      <div class="matchDetails">
        <h3 v-text="match.date"></h3>
        <h3 v-text="match.time"></h3>
      </div>
      <div  v-for="team in teams" :key="team.id" v-if="team.id == match.team1Id" class="team1">
        <router-link :to="'/singleTeam/' + team.id" v-text="team.name"></router-link>
        <img :src="team.flag" alt="">
      </div>
      <div class="results">
        <p>{{match.team1GoalsFulltime}} : {{match.team2GoalsFulltime}}</p>
        <p class="half">HT {{match.team1GoalsHalf}} : {{match.team2GoalsHalf}}</p>
      </div>
      <div v-for="team in teams" :key="team.id" v-if="team.id == match.team2Id" class="team2">
        <img :src="team.flag" alt="">
        <router-link :to="'/singleTeam/' + team.id" v-text="team.name"></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'matches',
  props: {
     teams: {
        type: Array,
        required: true
     },
     matches: {
      type: Array,
      required: true
     }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>

.match {
  display: grid;
  grid-template-columns: 1fr 8fr 3fr 8fr;
  justify-content: center;
  align-items: center;
  width: 40%;
  margin: 0 auto;
  background-color: rgba(142, 172, 238, 0.137);
  margin-top: 20px;
  .matchDetails {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
    height: 100%;
    border-right: 1px solid #38618C;
    h3 {
    padding: 0;
    padding-right: 5px;
    margin: 0;
    color: rgba(56, 97, 140, 0.89);
    font-size: 15px;
    }
  }
  div {
    display: grid;
      img {
        width: 40px;
        height: 40px;
        padding: 10px;
        display: block;
        justify-self: center;
        align-self: center;
      }
      a{
        width: 100%;
        padding: 10px;
        font-size: 25px;
        color: rgb(8, 51, 97) !important;
      }
  }
  .team1 {
    justify-content: start;
    grid-template-columns: 3fr 2fr;
    a {
      justify-self: end;
    }
  }
  .team2 {
    justify-content: end;
    grid-template-columns: 2fr 3fr;
    a {
        justify-self: start;
      } 
  }
  .results {
    display: flex;
    flex-direction: column;
    p {
      font-size: 24px;
      margin: 5px 0 5px 0;
      font-weight: bold;
    }
    .half {
      color: gray;
      font-size: 15px;
      padding: 0;
      margin: 0;
      font-weight: normal;
    }
  }
}
</style>
