<template>
  
<div>
    <h1>Groups</h1>
    <group :teams="teams" :groups="groups" :matches="matches" :points="points"  :index="index" v-for="(grupa,index) in groups" :key="grupa.id" v-bind:grupa="grupa"></group>
</div>

 
</template>



<script>
import group from "../components/template/groupTemplate.vue"

export default {
  name: 'groups',
  components: {
    group
  },
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
    }
  },
  data(){
      return {
        groups: [{id: 1, Gindex:'A'},{id: 2, Gindex:'B'},{id: 3, Gindex:'C'},{id: 4, Gindex:'D'},{id: 5, Gindex:'E'},{id: 6, Gindex:'F'},{id: 7, Gindex:'G'},{Gindex:'H'}],
        grupa:""
      }
  }, 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
 a{
    color: red;
    display: block;
    padding: 10px;
 }
 .group{
     margin-top: 50px;
     width: 55%;
     margin: 0 auto;
    .groupTeams{
     display: grid;
     grid-template-columns: 2fr repeat(5, 1fr);
     .teamNameGroup {
         font-size: 25px;
     }
    }
    .groupName {
        font-size: 25px;
    }
    .groupHeading {
        display: grid;
        grid-template-columns: 2fr repeat(5, 1fr);
        h1 {
            font-size: 20px;
        }
    }
}
.teamNameGroup {
    text-align: start;
}
 
</style>