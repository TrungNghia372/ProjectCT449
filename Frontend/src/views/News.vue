<template>
    <div class="news">
        <Header/>
        <Nav/>
    <div class="generality">
        <div class="contentNews">
            <div class="titleNews">
                <h3>Tất cả bài đăng</h3>
            </div>

            <div class="listNews"
                v-for="(item,i) in listNews"
                :key="i"
                >
                <div class="cardNews">

                    <div class="cardTitle">
                        <h4>{{item.name}}</h4>
                        <p class="cardDate">Bài được đăng vào <small> {{item.date}}</small></p> 
                    </div>
                    <div class="cardMain">
                        <div class="cardImg">
                            <img :src="item.imgNews">
                        </div>
                        <div class="cardBody">
                            <p class="cardContent">{{item.content}}</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
        <Footer/>
    </div>
</template>
<script>
    import Nav from '../components/nav.vue';
    import Footer from '../components/footer.vue';
    import Header from '../components/header.vue';
    import axios from 'axios';
    export default {
    components:{
            Nav,
            Footer,
            Header,
        },
    data() {
        return {
            listNews: [],
        }
    },
    created(){
        this.getListNews()
    },
    methods: {
        async getListNews() {
            try {
                const result = await axios.get('http://localhost:4000/api/news')
                this.listNews = result.data
            }catch(err){
                console.log(err)
            }
        },
    },
   }
</script>
<style scoped>
    p{
        margin: 0px;
    }
    .news{ 
        color:#fff;

    }
    .generality{
     
        display: flex;
    }
    .contentNews{
        color:black !important;
        margin-top:39px;
        height: 100%;
        width: 50%;
        padding-bottom: 30px;
    
    }
    .titleNews{
        color: #fff;
        font-size: 30px;
        text-align:start;
        padding: 80px 0 0 0px;
        border-bottom: 2px solid #fff;
        margin: 0px 50px;
    }
    .listNews{
        width:100%;
        color:#fff;
    }
    .cardTitle{
        font-weight: bold;
        cursor: pointer;
    }
    .cardTitle>h4:hover{
        color:#0095a8;
        
    }
    .cardNews{
        margin: 20px 50px;
        height:100%;
        border-bottom: 2px solid #fff;
    }
    .cardMain{
        padding:10px;
        display: flex;
    }
    .cardDate{
        /* padding:70px 0 0 0; */
    }
    .cardDate > small{
        color:#0095a8;
    }
    .cardBody{
        padding:0px 10px;
    }

    .differenceNews{
        color:#fff !important;
        margin-top:90px;
        height: 100%;
        width: 50%;
        padding:30px 0;
    
    }
    .differenceNews div{
        padding:20px;
        width: 100%;
    }
    .differenceNews>div>img {
        padding:0px 20px;
        width:500px;
    }
    .differenceNews>div>div>img{
        padding:0px 10px;
    }
</style>


