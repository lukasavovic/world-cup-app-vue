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
            <h1 v-text="points[team.id -1].gd"></h1>
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
      loaded: false,
  }
},
 created () {
    this.axios
    .get('https://api.myjson.com/bins/bf70e')
    .then(response => {
    this.teams = response.data   
    });
    this.axios
    .get('https://api.myjson.com/bins/6kzem')
    .then(response => {
    this.matches = response.data;
    });


  },
  computed:{
      loading(){
          if(this.teams.length == 32) {
              return  true;
          }
      }
  },
  methods:{
    populatePointsArray(){
      for (var b=0; b<this.teams.length; b+=1){
        this.points.push({id:this.teams[b].id, w:0, d:0,l:0,gd:0});
        this.teams[b].pts = 0;
      }
    },
    calculatePoints(){
        for(var i=0;i<this.matches.length;i+=1){
            var team1Id = this.matches[i].team1Id -1;
            var team2Id = this.matches[i].team2Id -1;
            var t1G = this.matches[i].team1GoalsFulltime;
            var t2G = this.matches[i].team2GoalsFulltime;
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
    calculateGD(){
      for(var i=0;i<this.matches.length;i+=1){
        var t1G = this.matches[i].team1GoalsFulltime;
        var t2G = this.matches[i].team2GoalsFulltime;    
        for(var v=0;v<this.teams.length;v+=1){
          for (var c=0;c<this.points.length;c+=1){
            if (this.teams[v].id == this.matches[i].team1Id && this.teams[v].id == this.points[c].id) {
              this.points[c].gd += t1G - t2G;
            }
            if (this.teams[v].id == this.matches[i].team2Id && this.teams[v].id == this.points[c].id) {
              this.points[c].gd += t2G - t1G;
            }
          }
        }
      }
        return true;
    },
    sortByPoints(){
    return this.teams.sort((a, b) => {
    if (a.pts > b.pts) {
      return -1;
    }
    if (a.pts < b.pts) {
      return 1;
    }
    });
    }
  },
  watch:{
    loading:function(){
    this.populatePointsArray();
    this.calculatePoints();
    this.calculateGD();
    this.sortByPoints();
    }
  }
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