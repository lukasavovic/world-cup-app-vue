<template>
  
<div>
    <h1>Groups</h1>
    <div class="group">
        <router-link to="/singleGroup/A" class="groupName">Group A</router-link>
        <div class="groupHeading">
            <h1 class="teamNameGroup">Team</h1> <h1>W</h1> <h1>D</h1> <h1>L</h1> <h1>GD</h1> <h1>Pts</h1>
        </div>
        <hr>
        <div v-for="team in teams" :key="team.id" v-if="team.group == 'A'" class="groupTeams">
            <router-link :to="'/singleTeam/' + team.id" v-text="team.name" class="teamNameGroup"></router-link>
            <h1 v-if="team.totalPoints"> </h1>
        </div>
    </div>
    <div class="group">
        <router-link to="/singleGroup/B" class="groupName">Group B</router-link>
        <div class="groupHeading">
            <h1 class="teamNameGroup">Team</h1> <h1>W</h1> <h1>D</h1> <h1>L</h1> <h1>GD</h1> <h1>Pts</h1>
        </div>
        <hr>
        <div v-for="team in teams" :key="team.id" v-if="team.group == 'B'" class="groupTeams">
            <router-link :to="'/singleTeam/' + team.id" v-text="team.name" class="teamNameGroup"></router-link>
            <h1 v-text="team.totalPoints"></h1>
        </div>
    </div>
    <div class="group">
        <router-link to="/singleGroup/B" class="groupName">Group C</router-link>
        <div class="groupHeading">
            <h1 class="teamNameGroup">Team</h1> <h1>W</h1> <h1>D</h1> <h1>L</h1> <h1>GD</h1> <h1>Pts</h1>
        </div>
        <hr>
        <div v-for="team in teams" :key="team.id" v-if="team.group == 'C'" class="groupTeams">
            <router-link :to="'/singleTeam/' + team.id" v-text="team.name" class="teamNameGroup"></router-link>
            <p></p>
        </div>
    </div>
    <div class="group">
        <router-link to="/singleGroup/D" class="groupName">Group D</router-link>
        <div class="groupHeading">
            <h1 class="teamNameGroup">Team</h1> <h1>W</h1> <h1>D</h1> <h1>L</h1> <h1>GD</h1> <h1>Pts</h1>
        </div>
        <hr>
        <div v-for="team in teams" :key="team.id" v-if="team.group == 'D'" class="groupTeams">
            <router-link :to="'/singleTeam/' + team.id" v-text="team.name" class="teamNameGroup"></router-link>
        </div>
    </div>
    <div class="group">
        <router-link to="/singleGroup/E" class="groupName">Group E</router-link>
        <div class="groupHeading">
            <h1 class="teamNameGroup">Team</h1> <h1>W</h1> <h1>D</h1> <h1>L</h1> <h1>GD</h1> <h1>Pts</h1>
        </div>
        <hr>
        <div v-for="team in teams" :key="team.id" v-if="team.group == 'E'" class="groupTeams">
            <router-link :to="'/singleTeam/' + team.id" v-text="team.name" class="teamNameGroup"></router-link>
        </div>
    </div>
    <div class="group">
        <router-link to="/singleGroup/F" class="groupName">Group F</router-link>
        <div class="groupHeading">
            <h1 class="teamNameGroup">Team</h1> <h1>W</h1> <h1>D</h1> <h1>L</h1> <h1>GD</h1> <h1>Pts</h1>
        </div>
        <hr>
        <div v-for="team in teams" :key="team.id" v-if="team.group == 'F'" class="groupTeams">
            <router-link :to="'/singleTeam/' + team.id" v-text="team.name" class="teamNameGroup"></router-link>
        </div>
    </div>
    <div class="group">
        <router-link to="/singleGroup/G" class="groupName">Group G</router-link>
        <div class="groupHeading">
            <h1 class="teamNameGroup">Team</h1> <h1>W</h1> <h1>D</h1> <h1>L</h1> <h1>GD</h1> <h1>Pts</h1>
        </div>
        <hr>
        <div v-for="team in teams" :key="team.id" v-if="team.group == 'G'" class="groupTeams">
            <router-link :to="'/singleTeam/' + team.id" v-text="team.name" class="teamNameGroup"></router-link>
        </div>
    </div>
    <div class="group">
        <router-link to="/singleGroup/H" class="groupName">Group H</router-link>
        <div class="groupHeading">
            <h1 class="teamNameGroup">Team</h1> <h1>W</h1> <h1>D</h1> <h1>L</h1> <h1>GD</h1> <h1>Pts</h1>
        </div>
        <hr>
        <div v-for="team in teams" :key="team.id" v-if="team.group == 'H'" class="groupTeams" >
            <router-link :to="'/singleTeam/' + team.id" v-text="team.name" class="teamNameGroup"></router-link>
        </div>
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
    },
    matches:{
        type: Array,
        required: true
    } 
},
  data(){
      return {
          groups: ["A","B","C","D","E","F","G","H",],
      }
  },
  updated(){
    this.calculatePoint();
    // alert(this.teams.length)
  },
  methods: {
    calculatePoint(){
      for(var i=0;i<this.matches.length;i+=1){
          var t1G = this.matches[i].team1GoalsFulltime;
          var t2G = this.matches[i].team2GoalsFulltime;
            if( t1G > t2G ) {
                for(var v=0;v<this.teams.length;v+=1){
                    if(this.teams[v].id == this.matches[i].team1Id){
                        this.teams[v].totalPoints = 3;
                    }
                }
            } else if( t1G < t2G ){
                for(v=0;v<this.teams.length;v+=1){
                    if(this.teams[v].id == this.matches[i].team2Id){
                        this.teams[v].totalPoints = 3;
                    }
                }
            } if (t1G == t2G) {
                 for(v=0;v<this.teams.length;v+=1){
                    if(this.teams[v].id == this.matches[i].team1Id){
                        this.teams[v].totalPoints = 1;
                    }
                    if(this.teams[v].id == this.matches[i].team2Id){
                        this.teams[v].totalPoints = 1;
                    }
                }
            }
        } 
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
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
     grid-template-columns: 3fr repeat(5, 1fr);
     .teamNameGroup {
         font-size: 25px;
     }
    }
    .groupName {
        font-size: 25px;
    }
    .groupHeading {
        display: grid;
        grid-template-columns: 3fr repeat(5, 1fr);
        h1 {
            font-size: 20px;
        }
    }
}
.teamNameGroup {
    text-align: start;
}
 
</style>