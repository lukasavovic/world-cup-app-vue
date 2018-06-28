<template>
    <div>
        <h1>Welcome to World Cup 2018</h1>
        <h2>Have a good time and enjoy football</h2>
        <hr>
        <div v-for="article in news.articles" :key="article.id" class="article">
            <h2 v-text="article.title"></h2>
            <div class="imageHeader">
                <img :src="article.urlToImage" alt="">
                <p v-text="article.description"></p>
            <h5 v-text="article.author"></h5>
                        <hr>

            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: 'news',
    data(){
        return{      
        news: "",
        }
    },
    mounted(){
    this.axios
    .get('https://newsapi.org/v2/top-headlines?sources=bbc-sport&apiKey=bc3b629e1e774fc5917957962aad6a9f')
    .then(response => (this.news = response.data))
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
h1{
    font-size: 50px;
}
.article{
    width: 55%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    .imageHeader{
        position: relative;
        z-index: -1;
        overflow: hidden;
        img{
        display: inline-block;
        width: 20%;
        }
    }
    h2 {
        color: #fcc650;
        text-align: center;
    }
}
@media (max-width: 768px) {
  .article{
      width: 100%;
  }
}
    
</style>