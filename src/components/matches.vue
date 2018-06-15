<template>
  <div>
    <h1>Upcoming matches</h1>
    <div v-for="match in matches" :key="match.id" class="match">
      <router-link :to="'/singleTeam/' + team.id" v-for="team in teams" v-if="team.id == match.team1Id" :key="team.id" v-text="team.name"></router-link>
      <div class="results">
        <p>FT {{match.team1GoalsFulltime}} : {{match.team2GoalsFulltime}}</p>
        <p class="half">HT {{match.team1GoalsHalf}} : {{match.team2GoalsHalf}}</p>
      </div>
      <router-link :to="'/singleTeam/' + team.id" v-for="team in teams" v-if="team.id == match.team2Id" :key="team.id" v-text="team.name"></router-link>
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
.half {
  color: gray;
  font-size: 12px;
}
.match {
  display: flex;
  justify-content: center;
}
</style>
