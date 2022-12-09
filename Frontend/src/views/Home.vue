<template>
    <Header/>
    <div class="main">
        <Nav/>
        <div class="carouselMain">
    
            <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button> 
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="10000">
                            <img src="../assets/header1.jpg" class="d-block w-100" alt="...">
                            <div class="carousel-caption d-none d-md-block">
                                <h4>Ocean Business</h4>
                                <p>Shop có đủ loại sản phẩm dành cho những người yêu thích cá cảnh</p>
                            </div>
                        </div>
                    
                        <div class="carousel-item" data-bs-interval="2000">
                            <img src="../assets/header3.jpg" class="d-block w-100" alt="...">
                            <div class="carousel-caption d-none d-md-block">
                                <h4>Ocean Business</h4>
                                <p>Shop có đủ loại sản phẩm dành cho những người yêu thích cá cảnh</p>
                            </div>
                        </div>

                        <div class="carousel-item" data-bs-interval="2000">
                            <img src="https://media.allpondsolutions.co.uk/resized/960x606/ves/blog/guide-marine-fish-tank.jpg" 
                                class="d-block w-100" alt="...">
                            <div class="carousel-caption d-none d-md-block">
                                <h4>Ocean Business</h4>
                                <p>Shop có đủ loại sản phẩm dành cho những người yêu thích cá cảnh</p>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
            </div>   
            <div class="ViewProduct">
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
        </div>

        <div class="product">
            <div class="titleProduct">
                    <p>Sản phẩm</p>
            </div>
            <!-- <SeeMoreProduct/> -->

            <Fish/>
            <FishPedestal/>
            <AquaticPlant/>
            <SeeMoreProduct v-if="isshowSeeMoreProduct"/>
            <button class="seeMoreProducts"
                    @click="onShowSeeMoreProduct"
                    >
                        {{seemore}}
            </button>
            
        </div>

    </div>
  
    <Footer/>
</template>       
<script>
    import Nav from '../components/nav.vue';
    import Footer from '../components/footer.vue';
    import Header from '../components/header.vue'
    import Fish from '../components/home/homeFish.vue';
    import FishPedestal from '../components/home/homeFishPedestal.vue';
    import AquaticPlant from '../components/home/homeAquaticPlant.vue';
    import SeeMoreProduct from '../components/home/homeSeeMore.vue'

    export default {
        components:{
            Nav,
            Footer,
            Header,
            Fish,
            FishPedestal,
            AquaticPlant,
            SeeMoreProduct,
        },
        data() {
            return {
                isshowSeeMoreProduct: false,
                seemore: 'Xem Thêm',
            }
        },
        methods: {
            onShowSeeMoreProduct(){
                this.isshowSeeMoreProduct = !this.isshowSeeMoreProduct;
                if(this.isshowSeeMoreProduct == true) this.seemore = 'Ẩn Bớt'
                else this.seemore='Xem Thêm';
            }
        },
    }
</script>
<style scoped>
    *{
        margin:0px;
        padding:0px;
    }
    .main{
        /* margin-bottom: 50px; */
    }
    .ViewProduct{
        display:flex;
        flex:1;
        margin-top:70px;
        padding-right: 40px;
    }
    .carouselMain{
        display:flex;
        margin-top:39px;
        padding:10px;
        height: 500px;
    }
    .carousel{
        margin-top:70px;
        padding-right: 10px;
        flex:3;
        padding-left: 40px;
    }
    .carousel-indicators{
        margin-bottom: 40px;
    }
    .carousel-item img{
        height:450px;
        /* width: 600px; */
    }
    .carousel-caption > h5{
        font-weight: bold;
    }
    .carousel-caption{
        color:aliceblue !important;
    }
    .img3{
        height:623px;
    }
    .product{
        margin-top:40px;
        text-align: center;
        /* border-top:1px solid #0b486b; */
    }
    .titleProduct{
        color: #fff;
        font-size: 30px;
        text-align:start;
        /* padding: 10px 0 0 0px; */
        border-bottom: 2px solid #fff;
        margin: 0px 50px;
    }
    .seeMoreProducts{
        padding: 8px 300px;
        margin:20px 0px;
        border:4px solid darkcyan;
        border-radius: 20px;
    }
    
    .seeMoreProducts:hover{ 
        box-shadow: 2px 2px 5px 0px rgba(255, 255, 255, 0.504);
        font-weight: bold;
        background-color : #0b486b;
        color:#fff;
    }
    
</style>