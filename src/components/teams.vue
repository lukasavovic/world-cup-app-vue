<template>
<div>
  <h1>Teams</h1>
  <div v-for="team in allTeams" :key="team.id">
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
      allTeams: this.teams
    }
  },
  watch: {
      teams:function() {
        this.allTeams = this.teams;
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
  // beforeCreate() {
  //     
  // },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>

</style>