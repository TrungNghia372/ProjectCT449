<template>
    <Header/>
    <Nav/>
    <div class="product">
          <div class="titleProduct">
                <p>Sản phẩm</p>
          </div>
          <Fish/>
          <SeeMoreProduct v-if="isshowSeeMoreProduct"/>
          <button class="seeMoreProduct"
                  @click="onShowSeeMoreProduct"
                  >
                    {{seemore}}
          </button>
    </div>
    <Footer/>
</template>       
<script>
    import Nav from '../components/nav.vue';
    import Footer from '../components/footer.vue';
    import Header from '../components/header.vue'
    import Fish from '../components/fish.vue';
    import SeeMoreProduct from '../components/home/homeSeeMore.vue'

    export default {
        components:{
            Nav,
            Footer,
            Header,
            Fish,
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
        margin-top:90px;
        background-image: url('../assets/BG.png');
        text-align: center;
        /* border-top:1px solid #0b486b; */
    }
    .titleProduct{
        color: #fff;
        font-size: 30px;
        text-align:start;
        padding: 10px 0 0 0px;
        border-bottom: 2px solid #fff;
        margin: 0px 50px;
    }
    .seeMoreProduct{
        padding: 8px 300px;
        margin:20px 0px;
        border:4px solid darkcyan;
        border-radius: 20px;
    }
    
    .seeMoreProduct:hover{ 
        box-shadow: 2px 2px 5px 0px rgba(255, 255, 255, 0.504);
        font-weight: bold;
        background-color : #0b486b;
        color:#fff;
    }
    
</style>