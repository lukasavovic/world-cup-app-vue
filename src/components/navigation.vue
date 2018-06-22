<template>
    <nav>
        <div class="navWrapper">
            <img src="../assets/logo.png" alt="logo">
            <router-link to="/">Home</router-link>
            <router-link to="/matches">Matches</router-link>
            <router-link to="/groups">Groups</router-link>
            <router-link to="/teams">Teams</router-link>
        </div>
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
        background-color: rgb(44, 44, 44);
        background-image: url('../assets/wc.png');
        background-position: center;
        background-size: cover;
        padding: 10px;
        align-items: center;
        font-size: 15px;
        position: sticky;
        top: 0;
        .navWrapper{
            display: flex;
            justify-content: flex-start;
            width: 60%;
            margin: 0 auto;
            h4{
             color: hsl(40, 77%, 86%) !important;                
            }
            a {
                display: block;
                margin: 0 70px;
                align-self: center;
                color: #fff !important;
                padding: 20px !important;
                font-weight: bold;
                &:hover {
                 color: #fcc650 !important;
                }
            }
            img {
                width: 45px;
                height: 45px;;
            }
        }
    }
</style>