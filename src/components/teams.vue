<template>
<div>
  <h1>Teams</h1>
  <!-- <div v-for="team in teamsSortedAlfabetically" :key="team.id">
      <router-link :to="'/singleTeam/' + team.id" v-text="team.name"></router-link>
  </div> -->
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
  // computed: {
  //   teamsSortedAlfabetically(){
  //     return this.teams.sort((a, b) => {
  //       if (a.name < b.name) {
  //         return -1;
  //       }
  //       if (a.name > b.name) {
  //         return 1;
  //       }
  //     });
  //   }
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>

</style>