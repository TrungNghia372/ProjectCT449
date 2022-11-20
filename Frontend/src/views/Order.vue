<template>
    <Header/>
    <Nav/>
        <div class="order">
            <div class="product">
                <div class="titleOrder">
                    <h4>GIỎ HÀNG <small>(3 sản phẩm)</small></h4>
                </div>
                <div class="clickAllProduct">
                    <h5>
                        <input type="checkbox" name="" id="" class="checkAllProduct">
                        Chọn tất cả (3 sản phẩm)
                    </h5>
                </div>
                <div class="listCard">

                    <div class="card">
                        <div class="checkbox">
                            <input type="checkbox" name="" id="" class="checkAllProduct">
                        </div>
                        <div class="imgCard">
                            <img src="https://media.masterfisch.com/13228-large_default/channa-andrao-bleheri-blue.jpg" alt="">
                        </div>
                        <div class="bodyCard">
                            <h5 class="nameCard">
                                Card1
                            </h5>
                            <p class="inStock colorRed">
                                Trong cửa hàng còn lại : 
                                <span> 3 </span>
                            </p>
                            <h4 class="costCard colorBlack">
                                30000 <small>VND</small>
                            </h4>       
                        </div>
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
                        <div class="priceCard">
                            <h4 class="sumPrice colorRed">
                                400000 
                                <small>VND</small>
                            </h4>
                        </div>
                        <div class="deleteCard">
                            <a href="" class="delete">
                                <i class="fa-solid fa-trash"></i>
                            </a>
                        </div>
                    </div>
                    <!-- Card 2 -->

                   
                    <!-- Card 3 -->

                  
                    <!-- Card 4 -->

                    
                </div>
            </div>
            <div class="payOrder">
                <h4>
                    Thanh toán
                    <span>463234 <small>VND</small></span>
                </h4>
                <h3>
                    Tổng số tiền (gồm VAT)
                    <span>463234 <small>VND</small></span>
                </h3>
                <button class="btn-pay">
                    THANH TOÁN
                </button>
                <small style="color:#C92127">*Giảm giá trên trang web chỉ áp dụng cho bán lẻ</small>
            </div>
        </div>
    <Footer/>
</template>
<script>
    import Nav from '../components/nav.vue';
    import Footer from '../components/footer.vue';
    import Header from '../components/header.vue';

   export default {
    components:{
            Nav,
            Footer,
            Header,
        },
    data() {
        return {
            count:1,
        }
    },
    methods: {
        changeCounter(num){
            this.count+=+num;
            !isNaN(this.count) && this.count > 0 ? this.count : this.count = 0;
        },
    },
   }
</script>
<style scoped>
    .colorRed{
        color:#C92127;
    }
    .colorBlack{
        color:black;
    }
    .order{
        /* margin-top:50px; */
        display:flex;
        align-items: center;
        background-image: url('../assets/BG.png');
        color:rgb(245, 245, 245);
        padding-bottom: 40px;
    }
    .product{
        /* flex:2; */
        width: 60%;
        margin-left:40px;
        margin-top:110px;
        /* background-color: #02b6ce; */
        color:#fff;
    }

    .clickAllProduct{
        background-color: #02b6ce;
        margin-bottom: 20px;
        padding:10px;
        border-radius:10px;
    }
    
    .listCard{

    }
    .card{
        display: flex;
        background-color: #02b6ce !important;
        flex-direction: row;
        align-items: center;
        padding:10px;
        justify-content: space-between;
        margin-bottom: 10px;
    }
    .payOrder{
        position: fixed;
        top:27px;
        right:0px;
        background-color: #02b6ce;
        margin:120px 40px 0 40px;
        flex:1;
        /* margin:20px 70px 20px 20px; */
        padding:20px;
        border-radius: 20px;
    }
    .imgCard{
        height:110px;
    }
    .imgCard>img{
        max-width:100%;
        height:100%;
    }
    .payOrder>h4,
    .payOrder>h3{
        padding-bottom: 10px;
        border-bottom: 1px solid #fff;
    }
    
    .btn-pay{
        background-color: #C92127;
        color:#fff;
        border:2px solid #fff;
        border-radius: 10px;
        width:100%;
        padding:15px 0;
        /* font-weight: bold; */
    }
    .btn-pay:hover{
        font-weight: bold;
        box-shadow: 2px 2px 5px 0px rgba(255, 255, 255, 0.582);
    }
    .checkAllProduct{
        height: 20px;
        width: 20px;

    }
    .checkbox,
    .imgCard,
    .bodyCard,
    .quantityBuyCard,
    .deleteCard{
        padding:0px 10px;
    }
    .checkbox{

    }
    .imgCard{

    }
    .bodyCard{

    }
    .quantityBuyCard{

    }
    .delete>i{
        font-size:30px;
        color:#fff;
    }
    .delete>i:hover{
        color:#C92127;
        font-weight: bold;
        
    }
    .quantityBuyCard{
        
        border:1px solid #fff;
        border-radius: 6px;
        background-color: #02b6ce;
    }
    .quantityBuyCard>a{
        color:#fff;
        
    }
    .quantity{
        width:20px;
        border:none;
        background-color: transparent;
        text-align: center;
        color:#C92127;

    }
</style>