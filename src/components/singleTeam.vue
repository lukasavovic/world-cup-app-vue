<template>
    <div>
        <div v-for="team in teams" :key="team.id" v-if="team.id == $route.params.id">
             <h2 v-text="team.name"></h2>
             <img :src="team.flag" alt="">
             <router-link :to="'/singleGroup/' + team.group">Group: {{team.group}}</router-link>
             <h2> Fifa ranking: {{team.fifaRanking}}</h2>
             <h2> Coach: {{team.coach}}</h2>
             <h2>Star player: {{team.starPlayer}}</h2>
        </div>
    </div>
</template>

<script>
export default {
    name: 'singleTeam',
    data(){
        return{
            teams: [],
        }
    },
   beforeMount(){
  this.axios
  .get('https://api.myjson.com/bins/bf70e')
  .then(response => {
  this.teams = response.data
  });
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
    img{
        display: block;
        margin: 0 auto;
    }
</style>