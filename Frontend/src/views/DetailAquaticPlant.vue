<template>
    <Header/>
    <Nav/>
    <div class="main">
        <div class="product">
            <div class="detailProduct">
                <div class="imgProduct">
                    <img :src="aquaticPlant.img" alt="">
                </div>
                <div class="infProduct">
                    <h4 class="nameProduct">
                        {{aquaticPlant.name}}
                    </h4>
                  
                    

                    <div class="priceAndquatity">
                        <h4 class="priceProduct"
                            style="color:red"
                            >
                            {{aquaticPlant.price}}
                            <small>vnd</small>
                        </h4>
                        <div class="quantityProduct">
                            <p>
                                số lượng :
                                {{aquaticPlant.quantity}}
                            </p>
                        </div>
                    </div>
                    <div class="buytoCart">
                        <div class="quantityBuyCard">
                            <a  class="btn-subtract" 
                                @click="changeCounter('-1')">
                                <i class="fa-solid fa-minus"></i>
                            </a>
                            <input type="text" class="quantity" id="" :value="count" minvalue="1" maxvalue="999">
                            <a  class="btn-add"
                                @click="changeCounter('1')">
                                <i class="fa-solid fa-plus"></i>
                            </a>
                        </div>
                        <button class="btn-Cart" 
                                @click="addToCart"
                                >
                                Thêm Vào Giỏ Hàng
                        </button>
                    </div>
                </div>
            </div>
            <div class="descriptionProduct">
                <p>
                    {{aquaticPlant.description}}
                </p>
            </div>
            <h1 class="titleSuggest" >
                Gợi ý sản phẩm
            </h1>
            <Suggest/>
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
           
            <div>
                <h3>HÃY CẬP NHẬT THƯỜNG XUYÊN</h3>
            </div>
        </div> 
    </div>
  
    <Footer/>
</template>       
<script>
    import Nav from '../components/nav.vue';
    import Footer from '../components/footer.vue';
    import Header from '../components/header.vue';
    import Suggest from '../components/suggest/suggestAquaticPlant.vue'

    import axios from 'axios';


   
    export default {
        components:{
            Nav,
            Footer,
            Header,
            Suggest,
        },
        data() {
            return {
                aquaticPlant: {},
                count: 1,
            }
        },
        created(){
            this.getAquaticPlantDetail()
        },
        methods: {
            async getAquaticPlantDetail() {
                const result = await axios.get('http://localhost:4000/api/aquaticPlant/detailAquaticPlant/detail',
                    {
                        params: {
                            id: this.$route.params.id,
                        }
                    }
                );
                    this.aquaticPlant = result.data
            },

            changeCounter(num){
                this.count+=+num;
                !isNaN(this.count) && this.count > 0 ? this.count : this.count = 1;
            },


            // Cart
            async addToCart(){
                if (this.$store.state.user==null) {
                    alert("Bạn phải đăng nhập để mua hàng");
                   this.isshowLogin=true;
                } 
                else {
                    try {
                        const result = await axios.post('http://localhost:4000/api/cart/add/product',{
                        idProduct: this.aquaticPlant._id,
                        quantity:  this.count,
                        idCart:    this.$store.state.idCart,
                        });

                        if (result.data == true) {
                            alert('San pham da duoc them');
                            location.reload();

                        }
                        
                    } catch (error) {
                        console.log(error);
                    }
                }
                
            
            }
        } ,
    }
    
</script>
<style scoped>
    .main{
        display: flex;
        background-image: url('../assets/BG.png');

    }
    .product{
        margin-top:70px;

        text-align: center;
        color:#fff;
        /* display: flex; */
        padding:60px;
    }
    .imgProduct{
        height:300px;
        width:50%;
        border:2px solid #fff;
    }
    .imgProduct>img{
        height:100%;
        width:100%;
    }
    .detailProduct{
        display: flex;
    }
    .infProduct{
        margin-left: 30px;
        text-align: start;
        border-top:1px solid #fff;
        border-bottom:1px solid #fff;
        padding:30px 0;
        width: 50%;
    }
    
    .priceAndquatity{
        display:flex;
    }
    .quantityProduct{
        padding:0px 30px;
    }
    .descriptionProduct{
        padding-top:30px;
        text-align: start;
    }


    .differenceNews{
        margin-top:140px;
        color:#fff !important;
        /* margin-top:90px; */
        height: 100%;
        width: 33%;
        /* padding:30px 0; */
    }
    .differenceNews div{
        padding:10px;
        width: 100%;
    }
    .differenceNews>div>img {
        padding:0px 10px;
        width:500px;


    }
    .differenceNews>div>div>img{
        padding:0px 10px;
        width:140px;
    }
    .titleSuggest{
        text-align: start;
        border-bottom: 1px solid #fff;
        padding: 0px 0px 10px 0px;
    }

    .quantityBuyCard{
        width:70px;
        border:1px solid #fff;
        border-radius: 6px;
        background-color: #ffffff;
        display:flex;
        justify-content: space-evenly;
        
    }
    .quantityBuyCard>a{
        color:black;
        
    }
    .quantity{
        width:20px;
        border:none;
        background-color: transparent;
        text-align: center;
        color:#C92127;

    }
    .btn-Cart{
        width:60%;
        /* margin:auto; */
        padding: 10px 0px;
        margin-top: 20px;
        border-radius: 10px;
        border:2px solid #0095a8;
    }
    .btn-Cart:hover{
        box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.582);
        background-color: #0095a8;
        color:#fff;
        font-weight: bold;
    }
</style>