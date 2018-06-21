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
      teams:[
      {
        "id":1,
        "name":"Russia",
        "flag":"",
        "group":"A",
        "fifaRanking":70,
        "coach":"STANISLAV CHERCHESOV",
        "starPlayer":"IGOR AKINFEEV"
      },
      {
        "id":2,
        "name":"Uruguay",
        "flag":"",
        "group":"A",
        "fifaRanking":14,
        "coach":"HÉCTOR CÚPER",
        "starPlayer":"LUIS SUAREZ"
      },
      {
        "id":3,
        "name":"Egypt",
        "flag":"",
        "group":"A",
        "fifaRanking":45,
        "coach":"OSCAR WASHINGTON TABAREZ",
        "starPlayer":"MOHAMED SALAH"
      },
      {
        "id":4,
        "name":"Saudi Arabia",
        "flag":"",
        "group":"A",
        "fifaRanking":67,
        "coach":"JUAN ANTONIO PIZZI",
        "starPlayer":"MOHAMMAD AL-SAHLAWI"
      },
      {
        "id":5,
        "name":"Portugal",
        "flag":"",
        "group":"B",
        "fifaRanking":4,
        "coach":"FERNANDO SANTOS",
        "starPlayer":"CRISTIANO RONALDO"
      },
      {
        "id":6,
        "name":"Spain",
        "flag":"",
        "group":"B",
        "fifaRanking":10,
        "coach":"FERNANDO HIERRO",
        "starPlayer":"SERGIO RAMOS"
      },
      {
        "id":7,
        "name":"Morocco",
        "flag":"",
        "group":"B",
        "fifaRanking":41,
        "coach":"HERVÉ RENARD",
        "starPlayer":"MEDHI BENATIA"
      },
      {
        "id":8,
        "name":"IR Iran",
        "flag":"",
        "group":"B",
        "fifaRanking":37,
        "coach":"CARLOS QUEIROZ",
        "starPlayer":"SARDAR AZMOUN"
      },
      {
        "id":9,
        "name":"France",
        "flag":"",
        "group":"C",
        "fifaRanking":7,
        "coach":"DIDIER DESCHAMPS",
        "starPlayer":"ANTOINE GRIEZMANN"
      },
      {
        "id":10,
        "name":"Australia",
        "flag":"",
        "group":"C",
        "fifaRanking":36,
        "coach":"BERT VAN MARWIJK",
        "starPlayer":"TIM CAHILL"
      },
      {
        "id":11,
        "name":"Peru",
        "flag":"",
        "group":"C",
        "fifaRanking":11,
        "coach":"RICARDO GARECA",
        "starPlayer":"JEFFERSON FARFAN"
      },
      {
        "id":12,
        "name":"Denmark",
        "flag":"",
        "group":"C",
        "fifaRanking":12,
        "coach":"AGE HAREIDE",
        "starPlayer":"CHRISTIAN ERIKSEN"
      },
      {
        "id":13,
        "name":"Argentina",
        "flag":"",
        "group":"D",
        "fifaRanking":5,
        "coach":"JORGE SAMPAOLI",
        "starPlayer":"LIONEL MESSI"
      },
      {
        "id":14,
        "name":"Iceland",
        "flag":"",
        "group":"D",
        "fifaRanking":22,
        "coach":"HEIMIR HALLGRIMSSON",
        "starPlayer":"GYLFI SIGURÐSSON"
      },
      {
        "id":15,
        "name":"Croatia",
        "flag":"",
        "group":"D",
        "fifaRanking":20,
        "coach":"ZLATKO DALIC",
        "starPlayer":"LUKA MODRIC"
      },
      {
        "id":16,
        "name":"Nigeria",
        "flag":"",
        "group":"D",
        "fifaRanking":48,
        "coach":"GERNOT ROHR",
        "starPlayer":"JOHN OBI MIKEL"
      },
      {
        "id":17,
        "name":"Brazil",
        "flag":"",
        "group":"E",
        "fifaRanking":2,
        "coach":"TITE",
        "starPlayer":"NEYMAR"
      },
      {
        "id":18,
        "name":"Switzerland",
        "flag":"",
        "group":"E",
        "fifaRanking":6,
        "coach":"VLADIMIR PETKOVIC",
        "starPlayer":"GRANIT XHAKA"
      },
      {
        "id":19,
        "name":"Costa Rica",
        "flag":"",
        "group":"E",
        "fifaRanking":23,
        "coach":"OSCAR RAMIREZ",
        "starPlayer":"BRYAN RUIZ"
      },
      {
        "id":20,
        "name":"Serbia",
        "flag":"",
        "group":"E",
        "fifaRanking":34,
        "coach":"MLADEN KRSTAJIC",
        "starPlayer":"BRANISLAV IVANOVIC"
      },
      {
        "id":21,
        "name":"Germany",
        "flag":"",
        "group":"F",
        "fifaRanking":1,
        "coach":"JOACHIM LOW",
        "starPlayer":"TONI KROOS"
      },
      {
        "id":22,
        "name":"Mexico",
        "flag":"",
        "group":"F",
        "fifaRanking":15,
        "coach":"JUAN CARLOS OSORIO",
        "starPlayer":"JAVIER HERNANDEZ"
      },
      {
        "id":23,
        "name":"Sweden",
        "flag":"",
        "group":"F",
        "fifaRanking":24,
        "coach":"JANNE ANDERSSON",
        "starPlayer":"MARCUS BERG"
      },
      {
        "id":24,
        "name":"Korea Republic",
        "flag":"",
        "group":"F",
        "fifaRanking":57,
        "coach":"SHIN TAE-YONG",
        "starPlayer":"KI SUNG-YUENG"
      },
      {
        "id":25,
        "name":"Belgium",
        "flag":"",
        "group":"G",
        "fifaRanking":3,
        "coach":"ROBERTO MARTINEZ",
        "starPlayer":"EDEN HAZARD"
      },
      {
        "id":26,
        "name":"Panama",
        "flag":"",
        "group":"G",
        "fifaRanking":55,
        "coach":"HERNAN DARIO GOMEZ",
        "starPlayer":"BLAS PEREZ"
      },
      {
        "id":27,
        "name":"Tunisia",
        "flag":"",
        "group":"G",
        "fifaRanking":21,
        "coach":"NABIL MAÂLOUL",
        "starPlayer":"WAHBI KHAZRI"
      },
      {
        "id":28,
        "name":"England",
        "flag":"",
        "group":"G",
        "fifaRanking":12,
        "coach":"GARETH SOUTHGATE",
        "starPlayer":"HARRY KANE"
      },
      {
        "id":29,
        "name":"Poland",
        "flag":"",
        "group":"H",
        "fifaRanking":8,
        "coach":"ADAM NAWALKA",
        "starPlayer":"ROBERT LEWANDOWSKI"
      },
      {
        "id":"30",
        "name":"Senegal",
        "flag":"",
        "group":"H",
        "fifaRanking":27,
        "coach":"ALIOU CISSÉ",
        "starPlayer":"SADIO MANÉ"
      },
      {
        "id":31,
        "name":"Colombia",
        "flag":"",
        "group":"H",
        "fifaRanking":16,
        "coach":"JOSÉ PÉKERMAN",
        "starPlayer":"JAMES RODRIGUEZ"
      },
      {
        "id":32,
        "name":"Japan",
        "flag":"",
        "group":"H",
        "fifaRanking":61,
        "coach":"AKIRA NISHINO",
        "starPlayer":"MAYA YOSHIDA"
      }
      ],
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
  beforeMount () {
    this.populatePointsArray();
    this.calculatePoints();
    this.calculateWDL();
    this.calculateGD();
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
        var t1G = this.matches[i].team1GoalsFulltime;
        var t2G = this.matches[i].team2GoalsFulltime;

        for(var v=0;v<this.teams.length;v+=1){
          for (var c=0;c<this.points.length;c+=1){
            if( t1G > t2G ) {
              if(this.teams[v].id == this.matches[i].team1Id && this.teams[v].id == this.points[c].id) {
                this.teams[c].pts += 3;
              }
            } else if (t1G < t2G) {
              if(this.teams[v].id == this.matches[i].team2Id && this.teams[v].id == this.points[c].id) {
                this.teams[c].pts += 3;
              }
            } else if ( t1G == t2G) {
              if(this.teams[v].id == this.matches[i].team1Id && this.teams[v].id == this.points[c].id) {
                this.teams[c].pts += 1;
              }
              if (this.teams[v].id == this.matches[i].team2Id && this.teams[v].id == this.points[c].id) {
                this.teams[c].pts += 1;
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





