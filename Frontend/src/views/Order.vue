<template>
    <Header :countItem="countItem" />
    <Nav />
    <div class="order">
        <div class="product">

            <div class="emptyItem" v-if="isshowEmptyItem">
                <img src="http:" alt="">
            </div>

            <div class="titleOrder">
                <h1><hr>Thư Viện<hr></h1>
            </div>

            <div class="listCard">

                <div class="card" v-for="(item, i) in listOrders" :key="i">

                    <div class="imgCard">
                        <img :src="item.img" alt="">
                    </div>
                    <div class="bodyCard">
                        <h4 class="nameCard">
                            Tên sách: {{ item.name }}
                        </h4>

                        <!-- <h5 class="costCard colorBlack">
                            Giá: {{ item.price }} <small>đồng</small>
                        </h5> -->
                    </div>
                    <div class="quantityBuyCard">
                        <h5 class="">Số lượng: 0{{ item.quantity }}</h5>
                    </div>

                    <!-- <div class="priceCard">
                        <h5 class="sumPrice colorRed">
                            Thành tiền: {{ item.price * item.quantity }} <small>đồng</small>
                        </h5>
                    </div> -->
                    <div class="deleteCard">
                        <p class="delete" @click="deleteItem(item._id)">
                            <i class="fa-regular fa-trash-can"></i>
                        </p>
                    </div>
                </div>
                <div class="payOrder">
                    <hr>
                    <h3>Thông Tin Mượn Sách</h3>
                    <hr>
                    <div class="row">
                        <div class="col-3"></div>
                        <h4 class="col-3">Ngày mượn: </h4>
                        <p class="col-3">{{  getCurrentDate(borrowedDate) }}</p>
                        <div class="col-3"></div>
                    </div>
                    
                    <div class="row">
                        <div class="col-3"></div>
                        <h4 class="col-3">Ngày trả: </h4>
                        <input class="col-3" type="date" v-model="payDate">
                        <div class="col-3"></div>
                    </div>
                    
                    
                    <!-- <small style="color:#C92127">* Phí vận chuyển sẽ được tính ở trang thanh toán</small>
                    <br>
                    <small style="color:#C92127">* Bạn cũng có thể nhập mã giảm giá ở trang thanh toán</small>
                    <hr> -->
                    <!-- <h3>
                        Tổng Số tiền (gồm VAT):
                        <span class="colorRed">{{ sumTotalProduct() }} <small>đồng</small></span>
                    </h3> -->
                    <hr>
                    <button class="btn-pay" @click="handlePay">
                        Mượn Sách
                    </button>

                </div>

            </div>


        </div>



        <div class="successfullyPay" v-if="isshowsuccessfullyPay">
            <div class="titlesuccessfullPay">
                
                <h5 class="colorgreen">Mượn sách thành công</h5> 
                <!-- <img src="https://hieumobile.com/wp-content/uploads/tich-xanh.png" width="100px" alt=""> -->
                <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Flennguyenmedia.com%2Fhuong-dan-dang-ky-tich-xanh-facebook-mien-phi%2F&psig=AOvVaw1gu58ls1plkNY2UqYcBFTc&ust=1700623490515000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKjHiKuS1IIDFQAAAAAdAAAAABAI" alt="">
                <!-- <p class="colorGrey">Hóa đơn của bạn đã được xử lý!</p>
                <p class="colorGrey" style="border-bottom:1px solid #aeaeb0; padding-bottom:10px">Vui lòng xem chi tiết bên
                    dưới</p> -->
            </div>
            <!-- <p style="padding:10px 0px 15px 0px">Mã số giao dịch :<span class="colorBlue">{{this.$store.state.idCart}}</span></p>  -->
            
            <button class="confirmPay" @click="onCloseConFirmPay">
                Xác nhận   
            </button>
        </div>
    </div>

    <Footer />
</template>
<script>
import Nav from '../components/nav.vue';
import Footer from '../components/footer.vue';
import Header from '../components/header.vue';
import axios from 'axios'

export default {
    components: {
        Nav,
        Footer,
        Header,

    },
    data() {
        return {
            countItem: 0,
            listOrders: [],
            isshowEmptyItem: true,
            count: 0,
            isshowsuccessfullyPay: false,
            borrowedDate: new Date(),
            payDate: new Date(),
        }
    },
    created() {
        this.getOrders();
    },
    methods: {
        changeCounter(num) {
            this.count += +num;
            !isNaN(this.count) && this.count > 0 ? this.count : this.count = 0;
        },
        async getOrders() {
            // console.log(this.listOrders)
            try {
                const result = await axios.get('http://localhost:4000/api/cart/get/product', {
                    params: {
                        idCart: this.$store.state.idCart
                    }
                });
                // console.log(result.data);
                this.listOrders = result.data;
                // console.log(this.listOrders.map(product=>product._id));
            } catch (error) {
                console.log(error);
            }
        },
        sumTotalProduct() {
            var sum = 0;
            this.listOrders.forEach(item => {
                sum += (item.quantity * item.price);
            })
            // console.log(sum);
            return sum;
        },
        getCurrentDate(d) {
            let day = d.getDate();
            let month =  d.getMonth() + 1;
            let year = d.getFullYear();

            return `${month}/${day}/${year}`;
        },


        async deleteItem(id) {
            try {
                const resultDelete = await axios.delete('http://localhost:4000/api/cart/delete/product', {
                    params: {
                        idProduct: id,
                    }
                });
                if (resultDelete) {
                    location.reload();
                }
            } catch (error) {
                console.log(error);
            }
        },

        countItemInCart() {
            var count = 0;
            this.listOrders.forEach(item => {
                count++;
            })
            if (count == 0) { this.isshowEmptyItem = true; } else { this.isshowEmptyItem = false; }
            this.countItem = count;
            return count;
        },

        async handlePay() {
            try {
                if (this.$store.state.countItemInCart == 0) {
                    alert("Vui lòng chọn sách để mượn");
                } else {
                    const result = await axios.delete('http://localhost:4000/api/cart/pay/product', {
                        params: {
                            idCart: this.$store.state.idCart,
                            emailUser: this.$store.state.user.email,
                            idProducts: this.listOrders.map(product=>product._id),
                            borrowedDate: this.borrowedDate,
                            payDate: this.payDate,
                        }
                    });
                    this.isshowsuccessfullyPay = true;
                }

            } catch (error) {
                console.log(error);
            }
        },
        onCloseConFirmPay() {
            this.isshowsuccessfullyPay = false;
            location.reload();
            this.$router.push({ name: 'Home' });
        }

    },
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Homemade+Apple&display=swap');

p {
    margin: 0px;
}

.colorRed {
    color: #C92127;
}

.colorgreen {
    color: #20be79;
}

.colorBlack {
    color: black;
}

.colorBlue {
    color: #1564e8;
}

.colorGrey {
    color: #aeaeb0;
}

.order {
    /* margin-top:50px; */
    display: flex;
    /* align-items: center; */
    background-repeat: no-repeat;
    background-size: 100% 100%;
    /* background-image: url('https://img.freepik.com/free-vector/abstract-smooth-liquid-banner-presentation-backdrop_1017-42992.jpg?w=1380&t=st=1683732500~exp=1683733100~hmac=177932f17dbb2bcbee22339f3e7d91ae76ba5ac8e893ccd067b84b3114f09260'); */
    color: rgb(0, 0, 0);
    padding-bottom: 40px;
    min-height: 500px;
    position: relative;
    /* margin-top:100px; */
}

.titleOrder {
    text-align: center;
}

.product {
    flex: 2;
    width: 60%;
    margin-left: 40px;
    margin-right: 40px;
    margin-top: 110px;
    /* background-color: #02b6ce; */
    color: black;
    position: relative;
}

.emptyItem {
    position: absolute;
    left: 435px;
}

.clickAllProduct {
    background-color: #36d8ed;
    margin-bottom: 20px;
    padding: 10px;
    border-radius: 10px;
}

.listCard {
    margin-left: 150px;
    margin-right: 150px;
}

.card {
    display: flex;
    background-color: #ffffff !important;
    flex-direction: row;
    align-items: center;
    padding: 10px;
    justify-content: space-between;
    margin-bottom: 10px;
}

.payOrder {
    text-align: center;
    top: 27px;
    right: 0px;
    background-color: #ffffff;
    margin: 120px 40px 0 40px;
    flex: 1;
    padding: 20px;
    border-radius: 20px;
    margin-left: 140px;
    margin-right: 140px;
}

.imgCard {
    height: 110px;
    flex: 1;
}

.imgCard>img {
    max-width: 100%;
    height: 100%;
}

.imgView {
    max-height: 150px;
    min-width: 130px;
}

.payOrder>h4,
.payOrder>h3 {
    /* padding-bottom: 10px; */
    /* border-bottom: 1px solid #fff; */
}

.btn-pay {
    background-color: rgba(79, 218, 111, 0.548);
    color: #0a0000;
    border: 2px solid #fff;
    border-radius: 10px;
    width: 25%;
    padding: 15px 0;
    margin-top: 20px;
    /* font-weight: bold; */
}

.btn-pay:hover {
    font-weight: bold;
    /* background-color:limegreen;*/
    box-shadow: 2px 2px 5px 0px rgba(255, 255, 255, 0.582);
}

.checkAllProduct {
    height: 20px;
    width: 20px;

}

.checkbox,
.imgCard,
.bodyCard,
.quantityBuyCard,
.deleteCard {
    padding: 0px 10px;
}

.checkbox {}

.imgCard {}

.bodyCard {
    flex: 2;

}

.delete>i {
    font-size: 30px;
    color: #000000;
}

.delete>i:hover {
    color: #C92127;
    font-weight: bold;

}

.quantityBuyCard {
    flex: 1;
    border-radius: 6px;
    background-color: #ffffff;
}

.quantityBuyCard>a {
    color: #000000;

}

.quantity {
    width: 20px;
    border: none;
    background-color: transparent;
    text-align: center;
    color: #6ecae9;

}

.successfullyPay {
    background-color: #ffffff;
    color: black;
    position: absolute;
    top: 150px;
    left: 590px;
    padding: 20px;
    text-align: center;
    border-radius: 10px;
    border: 1px solid black;
}

.bodysuccessfullPay {
    text-align: start;
}

.confirmPay {
    padding: 10px;
    /* background-color: #33ced9; */
    border: 1px solid;
    border-radius: 10px;
}

.confirmPay:hover {
    font-weight: bold;
    background-color: rgba(79, 218, 111, 0.37);
    color: #000000;
}

.footer_product {
    margin-top: -100px;
    display: flex;
    justify-content: space-around;
}

.footer_product>img {
    width: 760px;
    height: 320px;
}

h4 {
    color: rgb(24, 161, 47);
}
h1{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    margin-top: 10px;
    margin-bottom: 10px;
}

</style>