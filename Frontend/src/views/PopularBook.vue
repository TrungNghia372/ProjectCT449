<template>
    <Header/>
    <Nav/>
    <div class="product">
          <div class="titleProduct">
                <p>SÁCH PHỔ BIẾN</p>
          </div>
          <PopularBook/>
          
    </div>
    <Footer/>
</template>       
<script>
    import Nav from '../components/nav.vue';
    import Footer from '../components/footer.vue';
    import Header from '../components/header.vue'
    import PopularBook from '../components/popularBook.vue';

    export default {
        components:{
            Nav,
            Footer,
            Header,
            PopularBook,
        },
        data() {
            return {
                
            }
        },
        methods: {
           
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
        margin-top:39px;
        /* background-image: url('https://img.freepik.com/free-vector/abstract-smooth-liquid-banner-presentation-backdrop_1017-42992.jpg?w=1380&t=st=1683732500~exp=1683733100~hmac=177932f17dbb2bcbee22339f3e7d91ae76ba5ac8e893ccd067b84b3114f09260'); */
        text-align: center;
        /* border-top:1px solid #0b486b; */
        padding-bottom: 30px;
        background-repeat: no-repeat;
        background-size: 100% 100%;
    }
    p{
        text-align: center;
    }
    .titleProduct{
        /* margin-top:40px; */
        color: rgb(40, 177, 240, 1);
        font-size: 30px;
        text-align:start;
        padding: 78px 0 0 0px;
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