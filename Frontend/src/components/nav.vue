<template>        
    <!-- Nav -->
    <div class="navbarr">
        <div class="logo"
            @click="gotoHome"
            >
            <img src="../assets/logo.png" alt="">
        </div>
        <div class="product">
            Sản phẩm
            <ul class="listProduct">
                <li class="fish"
                   
                    >
                    <p  @click.self="getFishHabitat('')">
                        <i class="fa-solid fa-fish-fins"></i>
                        Cá
                    </p>
                    <ul class="listFish">
                        <li class="freshWater"
                            @click="getFishHabitat('nuoc ngot')"
                            >
                            Cá nước ngọt
                        </li>
                        <li class="marineFish"
                            @click="getFishHabitat('nuoc man')"
                            >
                            Cá đại dương
                        </li>
                    </ul>
                </li>
                    
                <li class="fishPedestal"
                    @click="gotoFishPedestalPage"
                    >
                    <i class="fa-solid fa-chalkboard"></i>
                    Bệ Cá
                </li>
                <li class="aquaticPlant"
                    @click="gotoAquaticPlantPage"
                    >
                    <i class="fa-solid fa-leaf"></i>
                    Cây thủy sinh
                </li>
            </ul>
        </div>
        <div class="productPopular"
             @click="gotoPopularFish"
             >
            Sản phẩm phổ biến
        </div>
        <div class="news"
             @click="gotoNewsPage"
             >
             Tin tức
        </div>
        <div class="contact"
            @click="gotoContact"
            >
            Liên hệ
        </div>
    </div>
</template>
<script>
   export default {
    methods: {
        gotoHome(){
            this.$router.push({ name: 'home'});
        },
        gotoFishPedestalPage(){
            this.$router.push({ name: 'fishPedestal'});
        },
        gotoAquaticPlantPage(){ 
            this.$router.push({ name: 'AquaticPlant'});
        },
        gotoNewsPage(){
            this.$router.push({ name: 'news'});
        },
        gotoFishMarine(){
            this.$router.push({ name: 'fishmarine'});
        },
        gotoContact(){
            this.$router.push({ name: 'contact'});
        },
        gotoPopularFish(){
            this.$router.push({ name: 'popularFish'});
        },


        getFishHabitat(habitat){
            if (habitat.length > 0)
                this.$router.push({ name: 'fish', query:{habitat:habitat}});
            else 
                this.$router.push({ name: 'fish'});

        },

      

    },
   }
</script>
<style scoped>
   
    
    .navbarr{
        height:55px;
        background-color:#0b486b ;
        display: flex;
        align-items: center;
        list-style: none;
        justify-content: space-evenly;
        text-align: center;
        color:#fff;
        margin-bottom: 0;
        /* margin-top:38px; */
        position: fixed;
        top:38px;
        right:0;
        left:0;
        z-index:9;
        font-weight: 200 ;
        /* widows: 100%; */
    }
    .logo > img{
        /* height :200px; */
        height:200px;
        /* height:50px; */
        width: 100%;
        padding-top: 3px;
        cursor: pointer;
    }
    .product,
    .productPopular,
    .news,
    .contact{
        padding:15px 30px;
    }
    .product:hover,
    .productPopular:hover,
    .news:hover,
    .contact:hover{
        border-radius: 15px  ;
        background-color: #fff;
        color:darkcyan;
        font-weight: bold;
        /* padding-left:10px; */
        
    }
    .product{
        position: relative;
        display: inline-block;
    }
    .product:hover .listProduct{
        display: block;
    }
    .listProduct{
        border-radius: 0 0 10px 10px;
        background-color:#fff;
        min-width: 160px;
        position: absolute;
        z-index: 10;
        text-align: start;
        padding: 2px;
        display: none;
        color :darkcyan;
        list-style: none;
        top: 54px;
        box-shadow: 0px 8px 16px 0px rgb(0 0 0 / 20%);
    }
    
    .listProduct > li{
        font-weight: 100; 
        padding:5px 0 0 0;
        
    }
    .fish > p{
        margin: 0px;
        padding:5px 0 0 0;
        font-weight: 100;
    }
    .fish > p:hover,
    .fishPedestal:hover,
    .aquaticPlant:hover{
        font-weight: bold;
        border-radius:10px 10px;
        padding-left:13px;
        color: #fff;
        background-color:darkcyan;
    }
    .fish:hover .listFish{
        display:block;
    }
    .listFish{
        list-style: none;
        display :none;
    }

    

    .freshWater,
    .marineFish{
        font-weight: 100;
    }
    
    .listFish > li:hover{
        font-weight: 100;
        font-weight: bold;
        border-radius:10px 10px;
        padding-left:13px;
        color: #fff;
        background-color:darkcyan;
    }
  
</style>