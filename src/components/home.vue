<template>
    <div>
        <h1>Welcome to World Cup 2018</h1>
        <h2>Have a good time and enjoy football</h2>
        <hr>
        <div v-for="article in news.articles" :key="article.id" class="article">
            <h2 v-text="article.title"></h2>
            <div class="imageHeader">
                <!-- <img :src="article.urlToImage" alt=""> -->
                <p v-text="article.description"></p>
            <h5 v-text="article.author"></h5>
            <hr>
            </div>
            
            <!-- <hr> -->
        </div>
    </div>
</template>

<script>
export default {
    name: 'singleTeam',
    props: {
     news: {
        type: Object,
        required: true
     }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.article{
    width: 55%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    .imageHeader{
        position: relative;
        height: 50px;
        // width: 250px;
        z-index: -1;
        overflow: hidden;
        img{
        display: inline-block;
        width: 50%;
        }
        hr{
            border-color: red;
            padding: 5px;
            height: 5px;
        }
    }
}
    
</style>