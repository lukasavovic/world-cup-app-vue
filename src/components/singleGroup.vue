<template>
 <div>
   <h1>Group {{$route.params.group}}</h1>
   <div v-for="team in teams" :key="team.id" v-if="team.group == $route.params.group">
     <router-link :to="'/singleTeam/' + team.id" v-text="team.name"></router-link>
   </div>
 </div>
</template>

<script>
export default {
  name: 'singleGroup',
  props: {
     teams: {
        type: Array,
        required: true
   }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>

</style>