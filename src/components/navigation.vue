<template>
    <nav>
        <img src="../assets/logo.png" alt="logo">
        <router-link to="/">MATCHES</router-link>
        <router-link to="/groups">GROUPS</router-link>
        <router-link to="/teams">TEAMS</router-link>
    </nav>
</template>

<script>
export default {
    name: 'navigation',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
    nav {
        background-color: #203440;
        padding: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 15px;
        a {
            display: block;
            margin: 0 20px;
            padding: 20px !important;
        }
        img {
            width: 45px;
        }
    }
</style>