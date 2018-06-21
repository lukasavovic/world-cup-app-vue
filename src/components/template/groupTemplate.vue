<template>
    <div class="group" >
        <router-link :to="'/singleGroup/'+ grupa.Gindex" class="groupName">Group {{grupa.Gindex}} </router-link>
        <div class="groupHeading">  
            <h1 class="teamNameGroup">Team</h1> <h1>W</h1> <h1>D</h1> <h1>L</h1> <h1>GD</h1> <h1>Pts</h1>
        </div>
        <hr>
        <div v-for="team in teams" :key="team.id" v-if="team.group == grupa.Gindex" class="groupTeams">
            <router-link :to="'/singleTeam/' + team.id" v-text="team.name" class="teamNameGroup"></router-link>
            <h1 v-if="points[team.id - 1].id === team.id" v-text="points[team.id -1].w"></h1>
            <h1 v-if="points[team.id - 1].id === team.id" v-text="points[team.id -1].d"></h1>
            <h1 v-if="points[team.id - 1].id === team.id" v-text="points[team.id -1].l"></h1>
            <h1 v-if="points[team.id - 1].id === team.id" v-text="points[team.id -1].gd"></h1>
            <h1 v-if="points[team.id - 1].id === team.id" v-text="team.pts"></h1>
        </div>
    </div>
</template>

<script>
export default {
    name: 'group',
    props: {
       teams: {
        type: Array,
        required: true
    },
    matches:{
        type: Array,
        required: true
    },
    points:{
        type: Array,
        required: true
    },
    grupa: {
        type: Object,
        required: true
    },
},
data(){
    return{
      msg: 'hello'  
  }
},
mounted(){
    return this.teams.sort((a, b) => {
    if (a.pts > b.pts) {
      return -1;
    }
    if (a.pts < b.pts) {
      return 1;
    }
  });
}
}
</script>

// Add "scoped" attribute to limit CSS to this component only
<style lang='scss'>

</style>