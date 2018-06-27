<template>
     <div>
        <router-link :to="'/singleTeam/' + team.id" v-text="team.name"></router-link>
        <img :src="team.flag" alt="">
      </div>
</template>

<script>
export default {
    name: 'match-team',
    props: {
        team: {
            type: Object,
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
 .team1 {
    justify-content: start;
    grid-template-columns: 3fr 2fr;
    a {
      justify-self: end;
    }
  }
  .team2 {
    justify-content: end;
    grid-template-columns: 2fr 3fr;
    a {
        justify-self: start;
      } 
  }
       img {
        width: 40px;
        height: 40px;
        padding: 10px;
        display: block;
        justify-self: center;
        align-self: center;
      }
      a{
        width: 100%;
        font-weight: bolder;
        padding: 10px;
        font-size: 20px;
        color: rgb(8, 51, 97);
        &:hover {
          color: #fcc650 !important;
        }
      }

</style>