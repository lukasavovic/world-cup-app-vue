<template>
 <div>
    <group :teams="teams" :groupIndexReturn="groupIndexReturn" :matches="matches" :points="points"  :index="index" v-for="(grupa,index) in groupIndexReturn" :key="grupa.id" v-bind:grupa="grupa"></group>
 </div>
</template>

<script>

import group from "../components/template/groupTemplate.vue"

export default {
  name: 'singleGroup',
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
        
      }
  },
  computed:{
    groupIndexReturn(){
      var groups = [{id: 1, Gindex:this.$route.params.group}];
      return groups;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>

</style>