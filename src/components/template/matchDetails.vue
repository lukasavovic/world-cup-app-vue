<template>
    <div class="matchDetails">
        <h3 v-text="match.date"></h3>
        <h3 v-text="match.time"></h3>
    </div>
</template>

<script>
export default {
    name: 'match-details',
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
  .matchDetails {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
    height: 100%;
    border-right: 1px solid #001242;
    h3 {
    padding: 0;
    padding-right: 5px;
    margin: 0;
    color: rgba(0, 18, 58, 0.89);
    font-size: 15px;
    font-weight: normal;
    }
  }
    @media (max-width: 768px) {
.matchDetails {
  h3 {
      font-size: 10px;
      padding: 0;
  }
}
}
</style>