<template>
    <Header />
    <Nav />
    <div class="main">
        <div class="product">
            <div class="detailProduct">
                <div class="imgProduct">
                    <img :src="book.img" alt="">
                </div>
                <div class="infProduct">
                    <h2 class="nameProduct"> Tên sách:
                        {{ book.name }}
                    </h2>
                    <h6 class="nameProduct"> Tác giả:
                        {{ book.author }}
                    </h6>
                    <h6 class="nameProduct"> Thể loại:
                        {{ book.type }}
                    </h6>

                    <div class="priceAndquatity">
                        <h4 class="priceProduct" style="color:red">
                            Giá: {{ book.price }}
                            <small>đồng</small>
                        </h4>
                    </div>
                    <!-- <div class="quantityProduct">
                        <p>
                            Số lượng:
                            {{book.quantity}}
                        </p>
                    </div> -->
                    <div class="buytoCart">
                        Số lượng:
                        <div class="quantityBuyCard">
                            <a class="btn-subtract" @click="changeCounter('-1')">
                                <i class="fa-solid fa-minus"></i>
                            </a>
                            <input type="text" class="quantity" id="" :value="count" minvalue="1" maxvalue="999">
                            <a class="btn-add" @click="changeCounter('1')">
                                <i class="fa-solid fa-plus"></i>
                            </a>
                        </div>
                        <div class="descriptionProduct">
                            <p>
                                Mô tả sách: {{ book.description }}
                            </p>
                        </div>

                        

                    </div>

                    <div class="cart">
                        <button class="btn-Cart" @click="addToCart">
                            <i class="fa-solid fa-cart-shopping"></i>
                            Thêm Vào Giỏ Hàng
                        </button>
                        <button class="btn-Cart" @click="addToCart">
                            Mua ngay
                        </button>
                    </div>
                </div>
            </div>

            <h1 class="titleSuggest">
                Các thể loại sách liên quan
            </h1>
            <Suggest />
        </div>

    </div>
    <Login v-if="isshowLogin" />
    <Footer />
</template>       
<script>
import Nav from '../components/nav.vue';
import Footer from '../components/footer.vue';
import Header from '../components/header.vue';
import Suggest from '../components/suggest/suggestBook.vue';
import axios from 'axios';
import Login from '../components/formLogin.vue';


export default {
    components: {
        Nav,
        Footer,
        Header,
        Suggest,
        Login,
    },
    data() {
        return {
            book: {},
            count: 1,
            isshowLogin: false,
        }
    },
    created() {
        this.getBookDetail()
    },
    methods: {
        async getBookDetail() {
            // console.log(this.$route.params.id);
            const result = await axios.get('http://localhost:4000/api/book/detailBook/detail',
                {
                    params: {
                        id: this.$route.params.id,
                    }
                }
            );
            this.book = result.data
        },

        changeCounter(num) {
            this.count += +num;
            !isNaN(this.count) && this.count > 0 ? this.count : this.count = 1;
        },


        // Cart
        async addToCart() {
            if (this.$store.state.user == null) {
                alert("Bạn phải đăng nhập để mua hàng");
                this.isshowLogin = true;
            }
            else {
                try {
                    const result = await axios.post('http://localhost:4000/api/cart/add/product', {
                        idProduct: this.book._id,
                        quantity: this.count,
                        idCart: this.$store.state.idCart,
                    });

                    if (result.data == true) {
                        alert('Sản phẩm đã được thêm vào giỏ hàng');
                        location.reload();
                    }

                } catch (error) {
                    console.log(error);
                }
            }
        },

    },
}

</script>
<style scoped>
.main {
    display: flex;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-image: url('https://img.freepik.com/free-vector/abstract-smooth-liquid-banner-presentation-backdrop_1017-42992.jpg?w=1380&t=st=1683732500~exp=1683733100~hmac=177932f17dbb2bcbee22339f3e7d91ae76ba5ac8e893ccd067b84b3114f09260');

}

.product {
    margin-top: 70px;
    text-align: center;
    color: black;
    /* display: flex; */
    padding: 60px;
}

.imgProduct {
    height: 300px;
    width: 50%;
    border: 2px solid #fff;
}

.imgProduct>img {
    height: 160%;
    width: 100%;
}

.detailProduct {
    display: flex;
}

.infProduct {
    margin-left: 30px;
    text-align: start;
    border-top: 1px solid #fff;
    border-bottom: 1px solid #fff;
    padding: 30px 0;
    width: 50%;
}

.priceAndquatity {
    display: flex;
}

.quantityProduct {
    padding: -1px 30px;
}

.descriptionProduct {
    padding-top: 30px;
    text-align: start;
}


.differenceNews {
    margin-top: 140px;
    color: #fff !important;
    /* margin-top:90px; */
    height: 100%;
    width: 33%;
    /* padding:30px 0; */
}

.differenceNews div {
    padding: 10px;
    width: 100%;
}

.differenceNews>div>img {
    padding: 0px 10px;
    width: 500px;


}

.differenceNews>div>div>img {
    padding: 0px 10px;
    width: 140px;
}

.titleSuggest {
    text-align: start;
    border-bottom: 1px solid #fff;
    padding: 0px 0px 10px 0px;
    margin-top: 46px;
}

.quantityBuyCard {
    width: 70px;
    border: 1px solid #fff;
    border-radius: 6px;
    background-color: #ffffff;
    display: flex;
    justify-content: space-evenly;

}

.quantityBuyCard>a {
    color: black;

}

.quantity {
    width: 20px;
    border: none;
    background-color: transparent;
    text-align: center;
    color: #C92127;

}

.btn-Cart {
    width: 60%;
    /* margin:auto; */
    padding: 10px 0px;
    margin-top: 20px;
    border-radius: 10px;
    border: 2px solid #0095a8;
}

.btn-Cart:hover {
    box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.582);
    background-color: #0095a8;
    color: #fff;
    font-weight: bold;
}
.cart{
    display: flex;
    flex-direction: row;
}
button{
    margin: 10px 10px;
}


</style>