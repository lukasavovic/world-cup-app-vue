<template>
    <div class="results">
        <p>{{match.team1GoalsFulltime}} : {{match.team2GoalsFulltime}}</p>
        <p class="half">HT {{match.team1GoalsHalf}} : {{match.team2GoalsHalf}}</p>
    </div>
</template>

<script>
export default {
    name: 'match-results',
    props: {
        match: {
            type: Object,
            required: true
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>
    .results {
    display: flex;
    flex-direction: column;
    p {
      font-size: 22px;
      margin: 5px 0 5px 0;
      font-weight: bold;
    }
    .half {
      color: gray;
      font-size: 15px;
      padding: 0;
      margin: 0;
      font-weight: normal;
    }
  }
</style>