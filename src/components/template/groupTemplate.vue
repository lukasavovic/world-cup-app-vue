<template>
    <div class="group">
        <router-link :to="'/singleGroup/'+ grupa.Gindex" class="groupName">Group {{grupa.Gindex}} </router-link>
        <div class="groupHeading">  
            <h1 class="teamNameGroup">Team</h1> <h1>W</h1> <h1>D</h1> <h1>L</h1> <h1>GD</h1> <h1>Pts</h1>
        </div>
        <hr>
        <div v-for="team in teams" :key="team.id" v-if="team.group == grupa.Gindex" class="groupTeams">
            <div>
                <img :src="team.flag" alt="">
                <router-link :to="'/singleTeam/' + team.id" v-text="team.name" class="teamNameGroup"></router-link>
            </div>
            <h1 v-text="points[team.id -1].w"></h1>
            <h1 v-text="points[team.id -1].d"></h1>
            <h1 v-text="points[team.id -1].l"></h1>
            <h1 v-text="team.gd"></h1>
            <h1 class="points" v-text="team.pts"></h1>
        </div>
    </div>
</template>

<script>
export default {
    name: 'group',
    props: {
    grupa: {
        type: Object,
        required: true
    },
},
data(){
    return{
      teams: [],
      matches: '',
      points: [],
  }
},
mounted() {
    this.teams = JSON.parse(localStorage.getItem('teams'));
    this.matches = JSON.parse(localStorage.getItem('matches'));
    this.populatePointsArray();
    this.calculatePoints();
    this.sortByPoints();
  },
  methods:{
    populatePointsArray(){
      for (var b=0; b<this.teams.length; b+=1){
        this.points.push({id:this.teams[b].id, w:0, d:0,l:0});
        this.teams[b].pts = 0;
        this.teams[b].gd = 0;
      }
    },
    calculatePoints(){
        for(var i=0;i<this.matches.length;i+=1){
            var team1Id = this.matches[i].team1Id -1;
            var team2Id = this.matches[i].team2Id -1;
            var t1G = this.matches[i].team1GoalsFulltime;
            var t2G = this.matches[i].team2GoalsFulltime;
            this.teams[team1Id].gd += t1G - t2G;
            this.teams[team2Id].gd += t2G - t1G;
            if( t1G > t2G ) {
                this.teams[team1Id].pts += 3;
                this.points[team1Id].w += 1;
                this.teams[team2Id].l -=1;
            } else if (t1G < t2G) {
                this.teams[team2Id].pts += 3;
                this.points[team2Id].w += 1;
                this.teams[team1Id].l -=1;
            } else if ( t1G == t2G) {
                this.teams[team1Id].pts += 1;
                this.teams[team2Id].pts += 1;
                this.points[team2Id].d += 1;
                this.teams[team1Id].d +=1;
            }
        }
    },
    sortByPoints(){
    return this.teams.sort((a, b) => {
    if (a.pts > b.pts) {
      return -1;
    }
    if (a.pts < b.pts) {
      return 1;
    }
    if (a.pts == b.pts){
        if(a.gd > b.gd) {
            return -1;
        }
        if(a.gd < b.gd) {
            return 1;
        }
    }
    });
    }
  },
}
</script>

// Add "scoped" attribute to limit CSS to this component only
<style lang='scss'>
    img {
        width: 40px;
        float: left;
        padding: 10px;
    }
    .points {
        color: #fcc650 !important;
    }
    hr {
        color: #fcc650 !important;        
        border-color: #fcc650 !important;
    }
    
</style>