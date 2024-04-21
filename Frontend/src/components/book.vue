<template>
    <div class="cardMain container">
        <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col"
                v-for="(item, i) in listBook"
                :key="i"
            >
                <div class="card h-100"
                     @click="showBook(item._id)"
                >
                    <img :src="item.img" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-title">{{item.name}}</p>
                        <p class="card-text">{{item.description}}</p>
                        <p class="card-quantity">Còn lại :{{item.quantity}}</p>
                    </div>
                    <div class="card-footer">
                        <!-- <p class="card-price">
                            {{item.price}}
                            <span class="card-price-vnd">vnd</span>
                        </p> -->
                        
                    </div>
                    <button class="card-btn-order"
                            >
                            Xem chi tiết
                    </button>

                </div>

            </div>
        </div> 
    </div>
</template>
<script>
import axios from 'axios';
   export default {
    data(){
        return {
            listBook: [],
        }
    },
    created(){
        this.getListBook()
    },
    methods: {
        async getListBook(){
            try {
                var obj = {}
                if(this.$route.query.type){
                    obj = {
                        type: this.$route.query.type
                    }
                }
                const result = await axios.get('http://localhost:4000/api/book/product/list', {
                    params: obj
                })
                this.listBook = result.data
            }catch(err){
                consCole.log(err)
            }
        },
        
        showBook(id){
            this.$router.push({name : 'detailBook', params:{id} });
        },  
        
       
    },
    watch: {
        '$route': function(){
            if(this.$route.name == 'book'){
                this.getListBook()
            }
        }
    }
   }
</script>
<style scoped>
    p{
        padding:0px;
        margin:0px;
    }
    .cardMain{
        padding:0px 30px;
        margin-top:24px;
        margin-bottom: 24px;
        border-radius: 10px;
        background-color: rgba(79, 218, 111, 0.37);
        padding-bottom: 30px;
    }
    .card-title{
        font-weight: bold;
        /* max-height:4em; */
        height: 30px;
        overflow: hidden;
        /* padding-bottom: 10px; */
        border-bottom: 2px solid #000000;
    }
    .col{
        width:20%;
        /* height:50%; */
    }
    .card-img-top{
        height:160px;
        width:100%;
    }
    .card-body{
        border:none !important; 
    }
    .card-text{
        max-height: 3em;
        overflow: hidden;
    }
    .card-footer{
        display:flex;
        justify-content: space-between;

    }

    .card-price{
        background-color: #fff;
        color: red;
        font-size:18px;
    }
    .card-price-vnd{
        font-size: 10px;
    }
    .card-quantity{

    }
    .card-btn-order{
        width:60%;
        margin:auto;
        margin-bottom: 4px;
        border-radius: 10px;
        border:2px solid #000000;
    }
    .card-btn-order:hover{
        box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.582);
        background-color: rgba(79, 218, 111, 0.37);
        color:#000000;
        font-weight: bold;
    }
    
</style>
