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
        <div class="differenceNews">
            <div>
                <img src="https://www.aquariumindustries.com.au/wp-content/uploads/2016/04/linkedIn-joing.png" alt="">
            </div>
            <div>
                <img src="https://www.aquariumindustries.com.au/wp-content/uploads/2016/07/WholesaleAquariumFish-1.png" alt="">
            </div>
            <div>
                <div>
                    <img src="https://www.aquariumindustries.com.au/wp-content/uploads/2015/05/Marine_Clownfish_OW_F-150x150.png" alt="">
                    <img src="https://www.aquariumindustries.com.au/wp-content/uploads/2015/05/Betta_Male_Crown_F-150x150.png" alt="">
                    <img src="https://www.aquariumindustries.com.au/wp-content/uploads/2015/05/Betta_Male_OceanGreen-150x150.png" alt="">
                </div>
                <div>
                    <img src="https://www.aquariumindustries.com.au/wp-content/uploads/2015/05/Barb_Rosy_F-PC-150x150.png" alt="">
                    <img src="https://www.aquariumindustries.com.au/wp-content/uploads/2015/02/Loach_Clown_F-PC-150x150.png" alt="">
                    <img src="https://www.aquariumindustries.com.au/wp-content/uploads/2015/02/Guppy_Female_Asst_F-PC-150x150.png" alt="">   
                </div>
                <div>
                    <img src="https://www.aquariumindustries.com.au/wp-content/uploads/2015/02/Guppy_Male_Asst_F-150x150.png" alt="">
                    <img src="https://www.aquariumindustries.com.au/wp-content/uploads/2015/02/Catfish_Bristlenose_F-150x150.png" alt="">
                    <img src="https://www.aquariumindustries.com.au/wp-content/uploads/2015/06/Angel_Gold-150x150.png" alt="">
                </div>
            </div>
            <div>
                <img src="https://scontent.fsgn5-12.fna.fbcdn.net/v/t39.30808-6/315244227_8440028779402103_2115097560396360815_n.png?stp=dst-png_s552x414&_nc_cat=103&ccb=1-7&_nc_sid=8024bb&_nc_ohc=khUchXBJDHIAX-iHgEc&_nc_ht=scontent.fsgn5-12.fna&edm=AEDRbFQEAAAA&oh=00_AfA-lgQ5qG-J2_g7Gp4M-BQNV5_ltA-j9fI51g-pfvBGFg&oe=63770C84" alt="">
            </div>
            <!-- <div>
                <video src="blob:https://www.facebook.com/203c8b39-3b09-40ce-ad16-1a4a84322d36">ok</video>
            </div> -->
            <div>
                <h3>HÃY CẬP NHẬT THƯỜNG XUYÊN</h3>
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
        background-image: url('../assets/BG.png');
        display: flex;
    }
    .contentNews{
        color:black !important;
        margin-top:90px;
        height: 100%;
        width: 50%;
        padding-bottom: 30px;
        /* flex:3; */
    }
    .titleNews{
        color: #fff;
        font-size: 30px;
        text-align:start;
        padding: 10px 0 0 0px;
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