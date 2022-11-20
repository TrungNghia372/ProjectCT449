<template>
    <Header/>
    <Nav/>
        <div class="address">
            <div class="deliveryAdress">
                <div class="titleAddress">
                    <h4>ĐỊA CHỈ GIAO HÀNG</h4>
                </div>
                <div class="formAddress">
                    <div class="nameForm">
                        <label for="name">Họ và tên người nhận</label>
                        <input type="text" name="name" id="">
                    </div>

                    <div class="emailForm">
                        <label for="email">email</label>
                        <input type="email" name="email" id="">
                    </div>

                    <div class="numberphoneForm">
                        <label for="numberphone">Số điện thoại</label>
                        <input type="text" name="numberphone" id="">
                    </div>

                    <div class="addressDetailForm">
                        <label for="address">Địa chỉ nhận hàng</label>
                        <input type="text" name="address" id="">
                    </div>
                </div>
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
   }
</script>
<style scoped>
    .colorRed{
        color:#C92127;
    }
    .colorBlack{
        color:black;
    }
    .address{
        margin-top:90px;    
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