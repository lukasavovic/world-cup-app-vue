<template>
  <div id="app">
    <navigation></navigation>
    <router-view :teams="teams" :news="news" :matches="matches" :points="points"></router-view>
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
    news: {},
    teams:[
      {
        "id":1,
        "name":"Russia",
        "flag":"https://image.ibb.co/njH2Po/russiaF.png",
        "group":"A",
        "fifaRanking":70,
        "coach":"STANISLAV CHERCHESOV",
        "starPlayer":"IGOR AKINFEEV"
      },
      {
        "id":2,
        "name":"Uruguay",
        "flag":"https://image.ibb.co/iOyLAT/urugayF.png",
        "group":"A",
        "fifaRanking":14,
        "coach":"HÉCTOR CÚPER",
        "starPlayer":"LUIS SUAREZ"
      },
      {
        "id":3,
        "name":"Egypt",
        "flag":"https://image.ibb.co/mkiyx8/egyptF.png",
        "group":"A",
        "fifaRanking":45,
        "coach":"OSCAR WASHINGTON TABAREZ",
        "starPlayer":"MOHAMED SALAH"
      },
      {
        "id":4,
        "name":"Saudi Arabia",
        "flag":"https://image.ibb.co/ntmJx8/saudiarabia_F.png",
        "group":"A",
        "fifaRanking":67,
        "coach":"JUAN ANTONIO PIZZI",
        "starPlayer":"MOHAMMAD AL-SAHLAWI"
      },
      {
        "id":5,
        "name":"Portugal",
        "flag":"https://image.ibb.co/jukYVT/portugal_F.png",
        "group":"B",
        "fifaRanking":4,
        "coach":"FERNANDO SANTOS",
        "starPlayer":"CRISTIANO RONALDO"
      },
      {
        "id":6,
        "name":"Spain",
        "flag":"https://image.ibb.co/kGdbjo/spainF.png",
        "group":"B",
        "fifaRanking":10,
        "coach":"FERNANDO HIERRO",
        "starPlayer":"SERGIO RAMOS"
      },
      {
        "id":7,
        "name":"Morocco",
        "flag":"https://image.ibb.co/mP9hPo/moroccoF.png",
        "group":"B",
        "fifaRanking":41,
        "coach":"HERVÉ RENARD",
        "starPlayer":"MEDHI BENATIA"
      },
      {
        "id":8,
        "name":"IR Iran",
        "flag":"https://image.ibb.co/fe394o/iranF.png",
        "group":"B",
        "fifaRanking":37,
        "coach":"CARLOS QUEIROZ",
        "starPlayer":"SARDAR AZMOUN"
      },
      {
        "id":9,
        "name":"France",
        "flag":"https://image.ibb.co/hvrJx8/franceF.png",
        "group":"C",
        "fifaRanking":7,
        "coach":"DIDIER DESCHAMPS",
        "starPlayer":"ANTOINE GRIEZMANN"
      },
      {
        "id":10,
        "name":"Australia",
        "flag":"https://image.ibb.co/ehtbjo/australia_F.png",
        "group":"C",
        "fifaRanking":36,
        "coach":"BERT VAN MARWIJK",
        "starPlayer":"TIM CAHILL"
      },
      {
        "id":11,
        "name":"Peru",
        "flag":"https://image.ibb.co/k2fdx8/peruF.png",
        "group":"C",
        "fifaRanking":11,
        "coach":"RICARDO GARECA",
        "starPlayer":"JEFFERSON FARFAN"
      },
      {
        "id":12,
        "name":"Denmark",
        "flag":"https://image.ibb.co/czFBH8/denmarkF.png",
        "group":"C",
        "fifaRanking":12,
        "coach":"AGE HAREIDE",
        "starPlayer":"CHRISTIAN ERIKSEN"
      },
      {
        "id":13,
        "name":"Argentina",
        "flag":"https://image.ibb.co/eUxfAT/argentina_F.png",
        "group":"D",
        "fifaRanking":5,
        "coach":"JORGE SAMPAOLI",
        "starPlayer":"LIONEL MESSI"
      },
      {
        "id":14,
        "name":"Iceland",
        "flag":"https://image.ibb.co/h47rH8/icelandF.png",
        "group":"D",
        "fifaRanking":22,
        "coach":"HEIMIR HALLGRIMSSON",
        "starPlayer":"GYLFI SIGURÐSSON"
      },
      {
        "id":15,
        "name":"Croatia",
        "flag":"https://image.ibb.co/mzbJx8/croatiaF.png",
        "group":"D",
        "fifaRanking":20,
        "coach":"ZLATKO DALIC",
        "starPlayer":"LUKA MODRIC"
      },
      {
        "id":16,
        "name":"Nigeria",
        "flag":"https://image.ibb.co/d3S2Po/nigeriaF.png",
        "group":"D",
        "fifaRanking":48,
        "coach":"GERNOT ROHR",
        "starPlayer":"JOHN OBI MIKEL"
      },
      {
        "id":17,
        "name":"Brazil",
        "flag":"https://image.ibb.co/iiOLAT/brazilF.png",
        "group":"E",
        "fifaRanking":2,
        "coach":"TITE",
        "starPlayer":"NEYMAR"
      },
      {
        "id":18,
        "name":"Switzerland",
        "flag":"https://image.ibb.co/dTD94o/switzerland_F.png",
        "group":"E",
        "fifaRanking":6,
        "coach":"VLADIMIR PETKOVIC",
        "starPlayer":"GRANIT XHAKA"
      },
      {
        "id":19,
        "name":"Costa Rica",
        "flag":"https://image.ibb.co/dOaBH8/costarica_F.png",
        "group":"E",
        "fifaRanking":23,
        "coach":"OSCAR RAMIREZ",
        "starPlayer":"BRYAN RUIZ"
      },
      {
        "id":20,
        "name":"Serbia",
        "flag":"https://image.ibb.co/mdvYVT/serbiaF.png",
        "group":"E",
        "fifaRanking":34,
        "coach":"MLADEN KRSTAJIC",
        "starPlayer":"BRANISLAV IVANOVIC"
      },
      {
        "id":21,
        "name":"Germany",
        "flag":"https://image.ibb.co/dg0p4o/germanyF.png",
        "group":"F",
        "fifaRanking":1,
        "coach":"JOACHIM LOW",
        "starPlayer":"TONI KROOS"
      },
      {
        "id":22,
        "name":"Mexico",
        "flag":"https://image.ibb.co/hPAYVT/mexicoF.png",
        "group":"F",
        "fifaRanking":15,
        "coach":"JUAN CARLOS OSORIO",
        "starPlayer":"JAVIER HERNANDEZ"
      },
      {
        "id":23,
        "name":"Sweden",
        "flag":"https://image.ibb.co/gQv0AT/sweedenF.png",
        "group":"F",
        "fifaRanking":24,
        "coach":"JANNE ANDERSSON",
        "starPlayer":"MARCUS BERG"
      },
      {
        "id":24,
        "name":"Korea Republic",
        "flag":"https://image.ibb.co/nPLp4o/koreaF.png",
        "group":"F",
        "fifaRanking":57,
        "coach":"SHIN TAE-YONG",
        "starPlayer":"KI SUNG-YUENG"
      },
      {
        "id":25,
        "name":"Belgium",
        "flag":"https://image.ibb.co/moo94o/belgiumF.png",
        "group":"G",
        "fifaRanking":3,
        "coach":"ROBERTO MARTINEZ",
        "starPlayer":"EDEN HAZARD"
      },
      {
        "id":26,
        "name":"Panama",
        "flag":"https://image.ibb.co/cADbjo/panamaF.png",
        "group":"G",
        "fifaRanking":55,
        "coach":"HERNAN DARIO GOMEZ",
        "starPlayer":"BLAS PEREZ"
      },
      {
        "id":27,
        "name":"Tunisia",
        "flag":"https://image.ibb.co/cKYnqT/tunisiaF.png",
        "group":"G",
        "fifaRanking":21,
        "coach":"NABIL MAÂLOUL",
        "starPlayer":"WAHBI KHAZRI"
      },
      {
        "id":28,
        "name":"England",
        "flag":"https://image.ibb.co/ifJ94o/englandF.png",
        "group":"G",
        "fifaRanking":12,
        "coach":"GARETH SOUTHGATE",
        "starPlayer":"HARRY KANE"
      },
      {
        "id":29,
        "name":"Poland",
        "flag":"https://image.ibb.co/hpXrH8/polandF.png",
        "group":"H",
        "fifaRanking":8,
        "coach":"ADAM NAWALKA",
        "starPlayer":"ROBERT LEWANDOWSKI"
      },
      {
        "id":"30",
        "name":"Senegal",
        "flag":"https://image.ibb.co/hdxQc8/senegalF.png",
        "group":"H",
        "fifaRanking":27,
        "coach":"ALIOU CISSÉ",
        "starPlayer":"SADIO MANÉ"
      },
      {
        "id":31,
        "name":"Colombia",
        "flag":"https://image.ibb.co/nr4SqT/columbia_F.png",
        "group":"H",
        "fifaRanking":16,
        "coach":"JOSÉ PÉKERMAN",
        "starPlayer":"JAMES RODRIGUEZ"
      },
      {
        "id":32,
        "name":"Japan",
        "flag":"https://image.ibb.co/gL8yx8/japanF.png",
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
      },
      {
        id: 1006,
        team1Id: 13,
        team2Id: 14,
        team1GoalsHalf: 1,
        team2GoalsHalf: 1,
        team1GoalsFulltime: 1,
        team2GoalsFulltime: 1,
        date: '15.6.2018.',
        time: "14:00",
      },
      {
        id: 1007,
        team1Id: 15,
        team2Id: 16,
        team1GoalsHalf: 1,
        team2GoalsHalf: 0,
        team1GoalsFulltime: 2,
        team2GoalsFulltime: 0,
        date: '15.6.2018.',
        time: "14:00",
      },
      {
        id: 1008,
        team1Id: 17,
        team2Id: 18,
        team1GoalsHalf: 1,
        team2GoalsHalf: 0,
        team1GoalsFulltime: 1,
        team2GoalsFulltime: 1,
        date: '15.6.2018.',
        time: "14:00",
      },
      {
        id: 1009,
        team1Id: 19,
        team2Id: 20,
        team1GoalsHalf: 0,
        team2GoalsHalf: 0,
        team1GoalsFulltime: 0,
        team2GoalsFulltime: 1,
        date: '15.6.2018.',
        time: "14:00",
      },
      {
        id: 1010,
        team1Id: 21,
        team2Id: 22,
        team1GoalsHalf: 0,
        team2GoalsHalf: 1,
        team1GoalsFulltime: 0,
        team2GoalsFulltime: 1,
        date: '15.6.2018.',
        time: "14:00",
      },
      {
        id: 1011,
        team1Id: 23,
        team2Id: 24,
        team1GoalsHalf: 1,
        team2GoalsHalf: 0,
        team1GoalsFulltime: 1,
        team2GoalsFulltime: 0,
        date: '15.6.2018.',
        time: "14:00",
      },
      {
        id: 1012,
        team1Id: 25,
        team2Id: 26,
        team1GoalsHalf: 0,
        team2GoalsHalf: 0,
        team1GoalsFulltime: 3,
        team2GoalsFulltime: 0,
        date: '15.6.2018.',
        time: "14:00",
      },
      {
        id: 1013,
        team1Id: 27,
        team2Id: 28,
        team1GoalsHalf: 0,
        team2GoalsHalf: 1,
        team1GoalsFulltime: 1,
        team2GoalsFulltime: 2,
        date: '15.6.2018.',
        time: "14:00",
      },
      {
        id: 1014,
        team1Id: 29,
        team2Id: 30,
        team1GoalsHalf: 0,
        team2GoalsHalf: 1,
        team1GoalsFulltime: 1,
        team2GoalsFulltime: 2,
        date: '15.6.2018.',
        time: "14:00",
      },
      {
        id: 1015,
        team1Id: 1,
        team2Id: 3,
        team1GoalsHalf: 1,
        team2GoalsHalf: 0,
        team1GoalsFulltime: 3,
        team2GoalsFulltime: 1,
        date: '15.6.2018.',
        time: "14:00",
      },
      {
        id: 1016,
        team1Id: 2,
        team2Id: 4,
        team1GoalsHalf: 1,
        team2GoalsHalf: 0,
        team1GoalsFulltime: 1,
        team2GoalsFulltime: 0,
        date: '15.6.2018.',
        time: "14:00",
      },
      {
        id: 1017,
        team1Id: 5,
        team2Id: 7,
        team1GoalsHalf: 1,
        team2GoalsHalf: 0,
        team1GoalsFulltime: 1,
        team2GoalsFulltime: 0,
        date: '15.6.2018.',
        time: "14:00",
      },
      {
        id: 1018,
        team1Id: 6,
        team2Id: 8,
        team1GoalsHalf: 1,
        team2GoalsHalf: 1,
        team1GoalsFulltime: 2,
        team2GoalsFulltime: 1,
        date: '15.6.2018.',
        time: "14:00",
      },
      {
        id: 1019,
        team1Id: 9,
        team2Id: 11,
        team1GoalsHalf: 1,
        team2GoalsHalf: 0,
        team1GoalsFulltime: 1,
        team2GoalsFulltime: 0,
        date: '21.6.2018.',
        time: "14:00",
      },
      {
        id: 1020,
        team1Id: 10,
        team2Id: 12,
        team1GoalsHalf: 1,
        team2GoalsHalf: 1,
        team1GoalsFulltime: 1,
        team2GoalsFulltime: 1,
        date: '21.6.2018.',
        time: "17:00",
      },
      {
        id: 1021,
        team1Id: 13,
        team2Id: 15,
        team1GoalsHalf: 0,
        team2GoalsHalf: 0,
        team1GoalsFulltime: 0,
        team2GoalsFulltime: 3,
        date: '21.6.2018.',
        time: "20:00",
      }

      ]
    }
  },
  mounted(){
    this.axios
    .get('https://newsapi.org/v2/top-headlines?sources=bbc-sport&apiKey=bc3b629e1e774fc5917957962aad6a9f')
    .then(response => (this.news = response.data))
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
@import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css");
body{
      transition: 0.2s all ease-out;
  margin: 0;
  padding: 0;
  background-color: #ffffffe8;
  color: #0533e9;
  h1{
    color: rgb(31, 35, 39);
  }
  p {
    color: #2f3635;
  }
  a {
    color: rgb(46, 46, 46);
  }
}
#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  $main-color: #343538;
  $main-color-two: rgb(41, 41, 41); 
  $font-color: rgb(29, 29, 29);
  color: $font-color;
  a {
    padding:20px 0;
    text-decoration: none;
    color: $font-color;
    &:hover {
      color: #38618C;
    }
  }
}
</style>







