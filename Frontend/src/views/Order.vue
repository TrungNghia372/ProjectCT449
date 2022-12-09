<template>
    <Header :countItem="countItem"/>
    <Nav/>
        <div class="order">
            <div class="product">

                <div    class="emptyItem"
                        v-if="isshowEmptyItem"
                        >
                        <img src="http://bizweb.dktcdn.net/100/319/764/themes/668785/assets/empty-cart.png?1529997226343" alt="">
                </div>

                <div class="titleOrder">
                    <h4>GIỎ HÀNG <small>({{countItemInCart()}} sản phẩm)</small></h4>
                </div>

                <div class="listCard">

                    <div class="card"
                         v-for="(item,i) in listOrders"
                         :key="i"
                         >
                      
                        <div class="imgCard">
                            <img :src="item.img" alt="">
                        </div>
                        <div class="bodyCard">
                            <h5 class="nameCard">
                                {{item.name}}
                            </h5>
                        
                            <h4 class="costCard colorBlack">
                                {{item.price}} <small>VND</small>
                            </h4>       
                        </div>
                        <div class="quantityBuyCard">
                          
                            <p class="colorRed">Số lượng : {{item.quantity}}</p>
                        </div>
                        <div class="priceCard">
                            <h4 class="sumPrice colorRed">
                               {{item.price * item.quantity}}
                                <small>VND</small>
                            </h4>
                        </div>
                        <div class="deleteCard">
                            <p class="delete"
                                @click="deleteItem(item._id)"
                                >
                                <i class="fa-solid fa-trash"></i>
                            </p>
                        </div>
                    </div>
                
                    
                </div>
            </div>
            <div class="payOrder">
                <h4>
                    Thanh toán
                    <span class="colorRed">{{sumTotalProduct()}}  <small>VND</small></span>
                </h4>
                <h3>
                    Tổng số tiền (gồm VAT)
                    <span class="colorRed">{{sumTotalProduct()}}  <small>VND</small></span>
                </h3>
                <button class="btn-pay"
                        @click="handlePay"
                        >
                        THANH TOÁN
                </button>
                <small style="color:#C92127">*Giảm giá trên trang web chỉ áp dụng cho bán lẻ</small>
            </div>

            <div class="successfullyPay"
                v-if="isshowsuccessfullyPay"
                >
                <div class="titlesuccessfullPay">
                    <img src="https://funtura.in/lko/wp-content/themes/funtura/assets/images/success.svg" alt="">
                    <h5 class="colorgreen">Hóa đơn đã được thanh toán</h5>
                    <p class="colorGrey">Hóa đơn của bạn đã được xử lý!</p>
                    <p class="colorGrey" style="border-bottom:1px solid #aeaeb0; padding-bottom:10px">Vui lòng xem chi tiết bên dưới</p>
                </div>
                <p style="padding:10px 0px 15px 0px">Mã số giao dịch :<span class="colorBlue">{{this.$store.state.idCart}}</span></p>
                <div class="bodysuccessfullPay ">
                    <h5 >Tổng số lượng sản phẩm <span class="colorRed" style="text-align: end;">{{this.$store.state.countItemInCart}}</span></h5>
                    <h5 >Tổng số tiền hóa đơn <span class="colorRed" style="text-align: end;">{{sumTotalProduct()}}  <small>VND</small></span></h5>
                    <h5>Thanh toán bởi <span class="colorRed" style="text-align:end">{{this.$store.state.user.username}}</span></h5>
                </div>
                <button class="confirmPay"
                        @click="onCloseConFirmPay"
                        >
                        Xác Nhận
                </button>
            </div>              
        </div>
    <Footer/>
</template>
<script>
    import Nav from '../components/nav.vue';
    import Footer from '../components/footer.vue';
    import Header from '../components/header.vue';
    import axios from 'axios'

   export default {
    components:{
            Nav,
            Footer,
            Header,
            
        },
    data() {
        return {
            countItem:0,
            listOrders: [],
            isshowEmptyItem: true,
            count: 0,
            isshowsuccessfullyPay: false,
        }
    },
    created() {
        this.getOrders();
    },
    methods: {
        changeCounter(num){
            this.count+=+num;
            !isNaN(this.count) && this.count > 0 ? this.count : this.count = 0;
        },
        async getOrders(){
            try {
                const result = await axios.get('http://localhost:4000/api/cart/get/product',{
                    params: {
                        idCart : this.$store.state.idCart
                    }
                });
                // console.log(result.data);
                this.listOrders = result.data;
                // console.log(this.listOrders);
            } catch (error) {
                console.log(error);
            }
        },
        sumTotalProduct(){
            var sum = 0;
            this.listOrders.forEach(item => {
                sum+=(item.quantity*item.price);
            })
            // console.log(sum);
            return sum;
        },


        async deleteItem(id){
            try {
                const resultDelete = await axios.delete('http://localhost:4000/api/cart/delete/product',{
                    params: {
                        idProduct: id,
                    }
                });
                if (resultDelete){
                    location.reload();
                }
            } catch (error) {
                console.log(error);
            }
        },

        countItemInCart(){
            var count=0;
            this.listOrders.forEach(item => {
                count++;
            })
            if (count==0) {this.isshowEmptyItem = true;} else {this.isshowEmptyItem = false;}
            this.countItem = count;
            return count;
        },

        async handlePay(){
            try {
                if (this.$store.state.countItemInCart==0) {
                    alert("Chọn sản phẩm để thanh toán");
                } else {
                    const result = await axios.delete('http://localhost:4000/api/cart/pay/product',{
                    params:{
                        idCart : this.$store.state.idCart,
                    }
                    });
                    this.isshowsuccessfullyPay = true;
                }
                
            } catch (error) {
                console.log(error);
            }
        },
        onCloseConFirmPay(){
            this.isshowsuccessfullyPay = false;
            location.reload();
            this.$router.push({name:'Home'});
        }

    },
   }
</script>
<style scoped>
    p{
        margin:0px;
    }
    .colorRed{
        color:#C92127;
    }
    .colorgreen{
        color:#20be79;
    }
    .colorBlack{
        color:black;
    }
    .colorBlue{
        color:#1564e8;
    }
    .colorGrey{
        color:#aeaeb0;
    }
    .order{
        /* margin-top:50px; */
        display:flex;
        /* align-items: center; */
        background-image: url('../assets/BG.png');
        color:rgb(245, 245, 245);
        padding-bottom: 40px;
        min-height:500px;
        position: relative;
        /* margin-top:100px; */
    }
    .product{
        /* flex:2; */
        width: 60%;
        margin-left:40px;
        margin-top:110px;
        /* background-color: #02b6ce; */
        color:#fff;
        position: relative  ;
    }
    .emptyItem{
        position: absolute;
        left: 435px;
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
        flex:1;
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
        background-color:limegreen;
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
        flex:2;
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
        flex:1;
        /* border:1px solid #fff; */
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
    .successfullyPay{
        background-color: #fff;
        color:black;
        position:absolute;
        top:150px;
        left:650px;
        padding:20px;
        text-align: center;
        border-radius: 10px;
    }
    .bodysuccessfullPay{
        text-align: start;
    }
    .confirmPay{
        padding:10px;
        border: 1px solid #20be79;
    }
    .confirmPay:hover{
        font-weight: bold;
        background-color: #20be79;
        color:#fff;
    }
</style>