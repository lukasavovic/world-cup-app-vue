<template>
 <div>
    <h1>Upcoming matches</h1>
    <div v-for="match in matches" :key="match.id" class="match">
      <img :src="teams[match.team1Id-1].flag" alt="">
      <router-link :to="'/singleTeam/' + team.id" v-for="team in teams" v-if="team.id == match.team1Id" :key="team.id" v-text="team.name"></router-link>
      <div class="results">
        <p>{{match.team1GoalsFulltime}} : {{match.team2GoalsFulltime}}</p>
        <p class="half">HT {{match.team1GoalsHalf}} : {{match.team2GoalsHalf}}</p>
      </div>
      <router-link :to="'/singleTeam/' + team.id" v-for="team in teams" v-if="team.id == match.team2Id" :key="team.id" v-text="team.name"></router-link>
      <img :src="teams[match.team2Id-1].flag" alt="">
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
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  margin: 0 auto;
  background-color: rgba(160, 159, 170, 0.26);
  margin-top: 20px;
  img {
  width: 40px;
  height: 20px;
  display: block;
  }
  a{
    width: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
  }
  .results {
    p {
      font-size: 30px;
      margin: 12px 0 10px 0;
    }
    .half {
      color: gray;
      font-size: 18px;
    }
  }
}
</style>
