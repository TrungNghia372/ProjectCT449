<template>
    <div class="cardMain container">
        <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col"
                v-for="(item, i) in listSuggetBook"
                :key="i"
            >
                <div class="card h-100"
                     @click="showBook(item._id)"
                >
                    <img :src="item.img" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">{{item.name}}</h5>
                        <p class="card-text">{{item.description}}</p>
                        <p class="card-quantity">Còn lại: {{item.quantity}}</p>

                    </div>
                    <div class="card-footer">
                        <p class="card-price">
                            {{item.price}}
                            <!-- <span class="card-price-vnd">vnd</span> -->
                        </p>
                    </div>
                    <button class="card-btn-order">Xem chi tiết</button>

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
            listSuggetBook: [],
        }
    },
    created(){
        this.getListSuggest()
    },
    methods: {
        async getListSuggest(){
            const result = await axios.get('http://localhost:4000/api/book/suggest/suggestBook', {
                params: {
                    id:this.$route.params.id
                }
            },);
            this.listSuggetBook = result.data
         
        },
        showBook(id){
            // console.log(id);
            this.$router.push({name : 'detailBook', params:{id} });
            setTimeout(()=>{
                location.reload()
            },500)
        },  

    },
   }
</script>
<style scoped>
    p{
        padding:0px;
        margin:0px;
    }
    .cardMain{
        padding:0px 90px;
        margin-top:24px;
    }
    .card-title{
        font-weight: bold;
        height: 50px;
        overflow: hidden;

        border-bottom: 2px solid #000000;
    }
    .col{
        width:33.333%;
        /* height:50%; */
        color:black;
    }
    .card-img-top{
        margin-top: 10px;
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
