<template>
    <Header />
    <div class="main">
        <Nav />
        <div class="carouselMain">

            <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="10000">
                        <img src="https://img.freepik.com/free-vector/gradient-world-book-day-horizontal-banner_23-2149300589.jpg?w=1380&t=st=1699761982~exp=1699762582~hmac=7b8b05c9acef68ecaff46831d191515961d727295556e40e367db00f8d0f9ade"
                            class="d-block w-100" alt="...">
                        <div class="carousel-caption d-none d-md-block">
                            <h4>Future Book Library</h4>
                            <p>Sách là ngọn đèn soi đường cho con người</p>
                        </div>
                    </div>

                    <div class="carousel-item" data-bs-interval="2000">
                        <img src="https://img.freepik.com/free-vector/gradient-world-book-day-background_23-2149320534.jpg?w=996&t=st=1699762099~exp=1699762699~hmac=733ee152c2b6a8c7710f98cc18f19561d667d502de862bc754d0b558f55d2e62"
                            class="d-block w-100" alt="...">
                        <div class="carousel-caption d-none d-md-block">
                            <h4>Future Book Library</h4>
                            <p>Sách mở ra trước mắt ta những chân trời mới</p>
                        </div>
                    </div>

                    <div class="carousel-item" data-bs-interval="2000">
                        <img src="https://img.freepik.com/free-vector/flat-world-book-day-background_23-2149335514.jpg?w=996&t=st=1699762323~exp=1699762923~hmac=02434cca6dfccaf375c65965fa0d752c459597391ae492af414958dd3ee77d71"
                            class="d-block w-100" alt="...">
                        <div class="carousel-caption d-none d-md-block">
                            <h4>Future Book Library</h4>
                            <p>Sách là người bạn tốt của tuổi trẻ</p>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <div class="ViewProduct">
                <div>
                    <img class="imgView" src="https://cdn0.fahasa.com/media/catalog/product/b/1/b1-1_1_5.jpg" alt="">
                    <img class="imgView" src="https://cdn0.fahasa.com/media/catalog/product/i/m/image_180905.jpg" alt="">
                    <img class="imgView" src="https://cdn0.fahasa.com/media/catalog/product/8/9/8935244888416.jpg" alt="">
                </div>
                <div>
                    <img class="imgView"
                        src="https://cdn0.fahasa.com/media/catalog/product/t/h/th_-tr_i-phi_n-mu_n-_tb9_---b_a-1.jpg"
                        alt="">
                    <img class="imgView" src="https://cdn0.fahasa.com/media/catalog/product/9/7/9781108825948.jpg" alt="">
                    <img class="imgView" src="https://cdn0.fahasa.com/media/catalog/product/i/m/image_195509_1_39154.jpg"
                        alt="">
                </div>
                <div>
                    <img class="imgView"
                        src="https://cdn0.fahasa.com/media/catalog/product/n/x/nxbtre_full_14022023_110229_1.jpg" alt="">
                    <img class="imgView" src="https://cdn0.fahasa.com/media/catalog/product/i/m/image_187162.jpg" alt="">
                    <img class="imgView" src="https://cdn0.fahasa.com/media/catalog/product/8/9/8935244888416.jpg" alt="">
                </div>
            </div>
        </div>

        <div class="product">
            <div class="titleProduct">
                <p> <b>BOOKS FROM THE FUTURE BOOK LIBRARY</b> </p>
            </div>
            <!-- PRODUCT -->
            <div class="cardMainProduct">
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    <div class="col" v-for="(item, i) in listProduct" :key="i">
                        <div class="card h-100" @click="showDetailBook(item._id)">
                            <img :src="item.img" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">{{ item.name }}</h5>
                                <p class="card-text"> Tác giả: {{ item.author }} </p>
                                <p class="card-text"> Thể loại: {{ item.type }}</p> 
                                <p class="card-text"> Năm sản xuất: {{ item.manufactureOfYear }}</p>

                            </div>
                            <div class="card-footer">
                                <p class="card-price">
                                    {{item.price}}
                                    <span class="card-price-vnd">vnd</span>
                                </p>
                                <p class="card-quantity">Còn lại :{{item.quantity}}</p>
                            </div>
                            <button class="card-btn-order"  >Xem chi tiết</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
<Pagination 
                v-model:pageNumber="filterObject.pageNumber"
                v-model:pageSize="filterObject.pageSize"
                :totalRecord="filterObject.totalRecord"
            />
    </div>
    <div class="titleNews">
    </div>
    <div class="imgSale">

        <img src="https://cdn0.fahasa.com/media/catalog/product/8/9/8935235239326.jpg" class="d-block w-100" alt="...">
        <img src="https://cdn0.fahasa.com/media/catalog/product/t/h/th_-tr_i-phi_n-mu_n-_tb9_---b_a-1.jpg"
            class="d-block w-100" alt="...">
        <img src="https://cdn0.fahasa.com/media/catalog/product/9/7/9781108825948.jpg" class="d-block w-100" alt="...">
    </div>





    <Footer />
</template>       
<script>
import Nav from '../components/nav.vue';
import Footer from '../components/footer.vue';
import Header from '../components/header.vue'
import Pagination from '../components/pagination.vue';
import axios from 'axios';
export default {
    components: {
        Nav,
        Footer,
        Header,
        Pagination,
    },
    data() {
        return {
            listBook: [],
            listProduct: [],
            filterObject: {
                pageNumber: 1,
                pageSize: 10,
                totalRecord: 0,
            },

            listNews: [],
        }
    },
    watch: {
        filterObject: {
            handler: function () {
                this.getListProduct();
            },
            deep: true,
        }
    },
    created() {
        this.getListBook()
        this.getListProduct()
        this.getListNews()
        if (this.$store.state.user && localStorage.getItem("token")) {
            if (this.$store.state.user.isAdmin) {
                this.$router.push({ name: 'admin' });
            } else {
                this.$router.push({ name: 'home' });
            }

        }
        
    },
    methods: {
        async getListBook(){
            try {
                const result = await axios.get('http://localhost:4000/api/book/getallbooks',
                );
                this.listBook = result.data
            }catch(err){
                console.log(err)
            }
        }, 
        // gotoAdmin(){
        //     if (this.$store.state.user.isAdmin) {
        //         this.$router.push({ name: 'admin' });
        //     }
        // },
        showDetailBook(id){
            this.$router.push({name: 'detailBook', params:{id}});
        }, 


        async getListProduct() {
            try {
                const productPage = await axios.get('http://localhost:4000/api/book/getallbooks');
                this.listProduct = productPage.data;

            } catch (err) {
                console.log(err)
            }
        },
    
        async getListNews() {
            try {
                const result = await axios.get('http://localhost:4000/api/news')
                this.listNews = result.data
            } catch (err) {
                console.log(err)
            }
        },

    },
}
</script>
<style scoped>
* {
    margin: 0px;
    padding: 0px;
}

.main {}

.footer_product {
    padding: 25px 0px 0px 0px;
    display: flex;
    justify-content: space-around;
}

.footer_product>img {
    width: 760px;
    height: 250px;
}

.ViewProduct {
    display: flex;
    flex: 1;
    margin-top: 70px;
    padding-right: 50px;
    min-height: 500px;
}

.carouselMain {
    flex: 1;
    display: flex;
    margin-top: 39px;
    padding: 10px;
    height: 500px;
}

.carousel {
    margin-top: 70px;
    padding-right: 10px;
    flex: 4;
    padding-left: 40px;
}

.imgView {
    max-height: 150px;
    min-width: 130px;
}

.carousel-indicators {
    margin-bottom: 40px;
}

.carousel-item img {
    height: 450px;
    /* width: 600px; */
}

.carousel-caption>h5 {
    font-weight: bold;
}

.carousel-caption {
    color: rgb(255, 255, 255) !important;
}

.img3 {
    height: 623px;
}

.product {
    margin-top: 40px;
    text-align: center;
    /* border-top:1px solid #0b486b; */
}

.titleProduct {
    color: rgb(40, 177, 240, 1);
    font-size: 30px;
    text-align: start;
    /* padding: 10px 0 0 0px; */
    /*  border-bottom: 2px solid rgb(240, 110, 40);*/
    margin: 0px 50px;
    text-align: center;
}

.seeMoreProducts {
    padding: 8px 300px;
    margin: 20px 0px;
    border: 4px solid darkcyan;
    border-radius: 20px;
}

.seeMoreProducts:hover {
    box-shadow: 2px 2px 5px 0px rgba(255, 255, 255, 0.504);
    font-weight: bold;
    background-color: #0b486b;
    color: #fff;
}


/* SAN PHAM */
p {
    padding: 0px;
    margin: 0px;
}

.cardMainProduct {
    padding: 0px 200px;
    margin-top: 24px;
}

.card-title {
    font-weight: bold;
    /* max-height:4em; */
    height: 50px;
    overflow: hidden;
    /* padding-bottom: 10px; */
    border-bottom: 2px solid #0095a8;
}

.col {
    width: 20%;
    /* height:50%; */
}

.card-img-top {
    height: 160px;
    width: 100%;
}

.card-body {
    border: none !important;
}

.card-text {
    max-height: 3em;
    overflow: hidden;
}

.card-footer {
    display: flex;
    justify-content: space-between;

}

.card-price {
    background-color: #fff;
    color: orangered;
    font-size: 18px;
}

.card-price-vnd {
    font-size: 10px;
}

.card-quantity {}

.card-btn-order {
    width: 60%;
    margin: auto;
    margin-bottom: 4px;
    border-radius: 10px;
    border: 2px solid #0095a8;
}

.card-btn-order:hover {
    box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.582);
    background-color: #0095a8;
    color: #fff;
    font-weight: bold;
}

/* ------Contact--------- */
.news {
    color: black;

}

.generality {
    margin-top: -120px;
    display: flex;
}

.contentContacts {
    color: black !important;
    margin-top: 39px;
    height: 100%;
    width: 50%;
    padding-bottom: 30px;
    padding-left: 30px;
    color: black;
}

.titleContact {
    margin-top: 100px;
    padding: 40px 0;
    font-weight: bold;
    color: black;
    font-size: 50px;
    background-color: #0065bd;
    text-align: center;
}

.titlesubContact {
    color: #1986e6;
}

.iconContact {
    padding: 30px 0;
}

.bodyContact {
    color: black;
}

.contentsubContact {
    display: flex;
}

.imgcontentsubContact {
    padding: 10px;
}


.differenceNews {
    color: black !important;
    margin-top: 90px;
    height: 100%;
    width: 50%;
    padding: 30px 0;
}

.differenceNews div {
    padding: 20px;
    width: 100%;
}

.differenceNews>div>img {
    padding: 0px 20px;
    width: 500px;
}

.differenceNews>div>div>img {
    padding: 0px 10px;
}

.ViewProduct {
    display: flex;
    flex: 1;
    padding-right: 50px;
    min-height: 500px;

}

.imgView {
    max-height: 170px;
    min-width: 170px;
    padding: 5px 0px !important;
}

/* News */

.contentNews {
    color: black !important;
    margin-top: 39px;
    height: 100%;
    width: 50%;
    padding-bottom: 30px;

}

.titleNews {
    color: rgb(40, 177, 240, 1);
    font-size: 30px;
    text-align: start;
    padding: 10px 0 0 0px;
    /* border-bottom: 2px solid rgb(240, 110, 40);*/
    margin: 0px 50px;
    text-align: center;

}

.listNews {
    width: 100%;
    color: #0c0000;
}

.cardTitle {
    font-weight: bold;
    cursor: pointer;
}

.cardTitle>h4:hover {
    color: #0095a8;

}

.cardNews {
    margin: 20px 50px;
    height: 100%;
    border-bottom: 2px solid #fff;
}

.cardMain {
    padding: 10px;
    display: flex;
}

.cardDate {
    /* padding:70px 0 0 0; */
}

.cardDate>small {
    color: #0095a8;
}

.cardBody {
    padding: 0px 10px;
}

.differenceNews {
    color: #080000 !important;
    margin-top: 90px;
    height: 100%;
    width: 50%;
    padding: 30px 0;

}

.differenceNews div {
    padding: 20px;
    width: 100%;
}

.differenceNews>div>img {
    padding: 0px;
    width: 500px;
}

.differenceNews>div>div>img {
    padding: 0px;
}

.imgView {
    max-height: 150px;
    min-width: 130px;
}

.imgSale {
    display: flex;
    margin-top: 30px;
    padding-bottom: 0px;
}

.imgSale>img {
    min-width: 100px;
}</style>