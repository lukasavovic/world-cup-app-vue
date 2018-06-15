<template>
    <div>
        <div v-for="team in teams" :key="team.id" v-if="team.id == $route.params.id">
            <h2 v-text="team.name"></h2>
             <router-link :to="'/singleGroup/' + team.group">Group: {{team.group}}</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'singleTeam',
    props: {
     teams: {
        type: Array,
        required: true
     }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>

</style>