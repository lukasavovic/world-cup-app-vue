<template>
  
<div>
    <h1>Groups</h1>
    <router-link to="/singleGroup/A">Group A</router-link>
    <div v-for="team in teams" :key="team.id" v-if="team.group == 'A'">
         <router-link :to="'/singleTeam/' + team.id" v-text="team.name"></router-link>
    </div>
    <router-link to="/singleGroup/B">Group B</router-link>
    <div v-for="team in teams" :key="team.id" v-if="team.group == 'B'">
        <router-link :to="'/singleTeam/' + team.id" v-text="team.name"></router-link>
    </div>
     <router-link to="/singleGroup/B">Group C</router-link>
    <div v-for="team in teams" :key="team.id" v-if="team.group == 'C'">
        <router-link :to="'/singleTeam/' + team.id" v-text="team.name"></router-link>
    </div>
</div>

 
</template>

<script>
export default {
  name: 'groups',
  props: {
     teams: {
        type: Array,
        required: true
   }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 a{
    color: red;
    display: block;
    padding: 10px;
 }
</style>