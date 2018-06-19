<template>
  <div id="app">
    <navigation></navigation>
    <router-view :teams="teams" :matches="matches" :points="points"></router-view>
  </div>
</template>

<script>
import navigation from './components/navigation.vue';

export default {
  name: 'app',
  components: {
    navigation
  },
  data() {
    return{
      teams:[],
      points:[],
      matches: [
      {
        id: 1000,
        team1Id: 1,
        team2Id: 4,
        team1GoalsHalf: 2,
        team2GoalsHalf: 0,
        team1GoalsFulltime: 5,
        team2GoalsFulltime: 0,
        date: '14.6.2018.',
        time: "18:00",
      },
      {
        id: 1001,
        team1Id: 3,
        team2Id: 2,
        team1GoalsHalf: 0,
        team2GoalsHalf: 0,
        team1GoalsFulltime: 0,
        team2GoalsFulltime: 1,
        date: '15.6.2018.',
        time: "14:00",
      },
      {
        id: 1002,
        team1Id: 5,
        team2Id: 6,
        team1GoalsHalf: 2,
        team2GoalsHalf: 1,
        team1GoalsFulltime: 3,
        team2GoalsFulltime: 3,
        date: '15.6.2018.',
        time: "14:00",
      },
      {
        id: 1003,
        team1Id: 7,
        team2Id: 8,
        team1GoalsHalf: 0,
        team2GoalsHalf: 0,
        team1GoalsFulltime: 0,
        team2GoalsFulltime: 1,
        date: '15.6.2018.',
        time: "14:00",
      },
      {
        id: 1004,
        team1Id: 9,
        team2Id: 10,
        team1GoalsHalf: 1,
        team2GoalsHalf: 0,
        team1GoalsFulltime: 2,
        team2GoalsFulltime: 1,
        date: '15.6.2018.',
        time: "14:00",
      },
      {
        id: 1005,
        team1Id: 11,
        team2Id: 12,
        team1GoalsHalf: 0,
        team2GoalsHalf: 0,
        team1GoalsFulltime: 0,
        team2GoalsFulltime: 1,
        date: '15.6.2018.',
        time: "14:00",
      }
      ]
    }
  },
  mounted () {
    this.axios
    .get('https://api.myjson.com/bins/15uwue')
    .then(response => (this.teams = response.data))
      // https://api.myjson.com/bins/15uwue
      // https://api.myjson.com/bins/1fna12
    },
    watch: {
      teams:function() {
        this.populatePointsArray();
        this.calculatePoints();
        this.calculateWDL();
        this.calculateGD();
      }
    },
    methods:{
      populatePointsArray(){
        for (var b=0; b<this.teams.length; b+=1){
          this.points.push({id:this.teams[b].id, w:0, d:0,l:0,gd:0,pts:0})
        }
      },
      calculatePoints(){
        for(var i=0;i<this.matches.length;i+=1){
          var t1G = this.matches[i].team1GoalsFulltime;
          var t2G = this.matches[i].team2GoalsFulltime;
          
          for(var v=0;v<this.teams.length;v+=1){
            for (var c=0;c<this.points.length;c+=1){
              if( t1G > t2G ) {
                if(this.teams[v].id == this.matches[i].team1Id && this.teams[v].id == this.points[c].id) {
                  this.points[c].pts += 3;
                }
              } else if (t1G < t2G) {
                if(this.teams[v].id == this.matches[i].team2Id && this.teams[v].id == this.points[c].id) {
                  this.points[c].pts += 3;
                }
              } else if ( t1G == t2G) {
                if(this.teams[v].id == this.matches[i].team1Id && this.teams[v].id == this.points[c].id) {
                  this.points[c].pts += 1;
                }
                if (this.teams[v].id == this.matches[i].team2Id && this.teams[v].id == this.points[c].id) {
                  this.points[c].pts += 1;
                }
              }
            }
          }
        }
      },
      calculateWDL(){
        for(var i=0;i<this.matches.length;i+=1){
          var t1G = this.matches[i].team1GoalsFulltime;
          var t2G = this.matches[i].team2GoalsFulltime;
          
          for(var v=0;v<this.teams.length;v+=1){
            for (var c=0;c<this.points.length;c+=1){
              if( t1G > t2G ) {
                if(this.teams[v].id == this.matches[i].team1Id && this.teams[v].id == this.points[c].id) {
                  this.points[c].w += 1;
                }
                if(this.teams[v].id == this.matches[i].team2Id && this.teams[v].id == this.points[c].id) {
                  this.points[c].l += 1;
                }
              } else if (t1G < t2G) {
                if(this.teams[v].id == this.matches[i].team2Id && this.teams[v].id == this.points[c].id) {
                  this.points[c].w += 1;
                }
                if(this.teams[v].id == this.matches[i].team1Id && this.teams[v].id == this.points[c].id) {
                  this.points[c].l += 1;
                }
              } else if ( t1G == t2G) {
                if(this.teams[v].id == this.matches[i].team1Id && this.teams[v].id == this.points[c].id) {
                  this.points[c].d += 1;
                }
                if (this.teams[v].id == this.matches[i].team2Id && this.teams[v].id == this.points[c].id) {
                  this.points[c].d += 1;
                }
              }
            }
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
      }
    }

  }

  </script>

  <style lang='scss'>
  body{
    margin: 0;
    padding: 0;
    background-color: #162b38;
    color: #333951;
    h1{
      color: #3BA182;
    }
    p {
      color: #D3D5D9;
    }
    a {
      color: #fff;
    }
  }
  #app {
    // font-family: 'Avenir', Helvetica, Arial, sans-serif;

    font-family: 'Source Sans Pro', sans-serif;  
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    $main-color: #333951;
    $main-color-two: #2B2D39; 
    $font-color: rgb(212, 213, 214);
    color: $font-color;
    a {
      padding:20px 0;
      text-decoration: none;
      color: $font-color;
      &:hover {
        color: #CEC8B8;
      }
    }
  }
  </style>





