<template>        
    <!-- Nav -->
    <div class="navbarr">
        <div class="logo"
            @click="gotoHome"
            >
            <img src="../assets/Library.png" alt="">
        </div>
        <div class="product">
            SÁCH
            <ul class="listProduct">
                <li class="fish">

                    <p  @click.self="gettypeBook('')">
                        Thể loại
                    </p>
                    <ul class="listFish">
                        <li class="freshWater"
                            @click="gettypeBook('Tiểu thuyết')"
                            >
                            Tiểu thuyết
                        </li>
                        <li class="marineFish"
                            @click="gettypeBook('Thơ')"
                            >
                            Thơ
                        </li>
                        <li class="marineFish"
                            @click="gettypeBook('Văn học hiện thực')"
                            >
                            Văn học hiện thực
                        </li>
                    </ul>



                    <!-- <ul class="listFish">
                        <li class="freshWater"
                            @click="getFishHabitat('nuoc ngot')"
                            >
                            Thơ
                        </li>
                        <li class="marineFish"
                            @click="getFishHabitat('nuoc man')"
                            >
                            Văn học hiện thực
                        </li>
                    </ul> -->
                </li>
                    
                <!-- <li class="fishPedestal"
                    @click="gotoFishPedestalPage"
                    >
                    
                    Tài liệu tham khảo
                </li>
                <li class="aquaticPlant"
                    @click="gotoAquaticPlantPage"
                    >
                    <i class="fa-solid fa-lasso"></i>
                    Mượn phòng
                </li> -->
            </ul>
        </div>
        <!-- <div class="borrowbook"
             @click="gotoBorrowBook"
             >
            MƯỢN SÁCH
        </div> -->

        <li class="cart"
        @click="gotoCart"
        >
            GIỎ HÀNG

    </li>
        <div class="news"
             @click="gotoNewsPage"
             >
             TIN TỨC
        </div>
        <div class="contact"
            @click="gotoContact"
            >
            NỘI QUY
        </div>
    </div>
</template>
<script>
   export default {

    methods: {
        gotoHome(){
            this.$router.push({ name: 'home'});
        },
        
        gotoNewsPage(){
            this.$router.push({ name: 'news'});
        },
        gotoContact(){
            this.$router.push({ name: 'contact'});
        },
        gotoBorrowBook(){
            this.$router.push({ name: 'borrowbook'});
        },
        gotoCart() {
            if (this.$store.state.user) {
                this.$router.push({ name: 'order' });
            } else {
                alert('Vui lòng đăng nhập để xem giỏ hàng!');
                this.isshowFormLogin = true;
            }

        },

        gettypeBook(type){
            if (type.length > 0)
                this.$router.push({ name: 'book', query:{type:type}});
            else 
                this.$router.push({ name: 'book'});

        },    
      

    },
   }
</script>
<style scoped>
   
    
    .navbarr{
        display: flex;
        /* align-items: center; */
        list-style: none;
        justify-content: space-evenly;
        text-align: center;
        color:#fff;
        /* margin-bottom: 0; */
        /* margin-top:38px; */
        position: fixed;
        top:39px;
        padding-top:6px;
        right:0;
        left:0;
        z-index:9;
        font-size: 20px;
        font-weight: 200 ;  
        /* widows: 100%; */
        background-image: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);
        cursor: pointer;
        }
    
    .logo{
        /* flex:1; */
    }
    .logo > img{

        height:60px;
        width: 100%;
        padding-top: 3px;
        cursor: pointer;
    }


    .product,
    .productPopular,
    .productPopular,
    .borrowbook,
    .news,
    .cart,
    .contact{
        padding:15px 30px;
        /* box-shadow: ; */
        width:240px;
        /* border-right:1px solid darkcyan; */
    }

    .product:hover,
    .productPopular:hover,
    .borrowbook:hover,
    .news:hover,
    .cart:hover,
    .contact:hover{
        /* background-color: #fff; */
        color:black;
        font-weight: bold;
        box-shadow: 4px 4px 4px 0px rgba(255, 255, 255, 0.194);
        background-color: #fff;
        /* padding-left:10px; */
        /* font-size: 21px; */
        height: 60px;
        border-bottom: 5px solid darkcyan;
        
    }
    .product{
        position: relative;
        display: inline-block;
    }

    .product:hover .listProduct{
        display: block;
    }
    .listProduct{
        
        margin-top:6px;
        min-width: 200px;
        position: absolute;
        z-index: 10;
        text-align: start;
        padding: 2px;
        display: none;
        color :#fff;
        list-style: none;
        top: 54px;
        background-color: #09161d54;
        border: 1px solid  darkcyan;
        border-top: none;
        box-shadow: 4px 4px 4px 0px rgba(255, 255, 255, 0.194);
      
    }
    
    .listProduct > li{
        font-weight: 100; 
        
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
        padding-left:13px;
        color: black;
        background-color:white;
        box-shadow: 0px 8px 16px 0px rgb(0 0 0 / 20%);
        box-shadow: 7px 7px 5px 0px rgba(255, 255, 255, 0.194);
        border-left: 5px solid darkcyan;

    }
    .fish:hover .listFish{
        display:block;
        
    }
   .listFish{
    list-style: none;
   }

    

    .freshWater,
    .marineFish{
        font-weight: 100;
    }
    
    .listFish > li:hover{
        font-weight: 100;
        font-weight: bold;
        padding-left:13px;
        color: black;
        background-color:white;
        border-left: 5px solid darkcyan;
       
    }
  
</style>