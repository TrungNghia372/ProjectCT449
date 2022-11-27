<template>
    <div class="cardMain">
        <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col"
                v-for="(item, i) in listFish.slice(0,5)"
                :key="i"
            >
                <div class="card h-100"
                     @click="showDetailFish(item._id)"
                     
                     >
                    <img :src="item.img" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">{{item.name}}</h5>
                        <p class="card-text">{{item.description}}</p>

                    </div>
                    <div class="card-footer">
                        <p class="card-price">
                            {{item.price}}
                            <span class="card-price-vnd">vnd</span>
                        </p>
                        <p class="card-quantity">Còn lại :{{item.quantity}}</p>
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
            listFish: [],
        }
    },
    created(){
        this.getListFish()
    },
    methods: {
        async getListFish(){
            try {
                const result = await axios.get('http://localhost:4000/api/fish/home/list',
                // {
                //     params: {
                //        id:this.$route.params.id},
                // }
                );
                this.listFish = result.data
            }catch(err){
                console.log(err)
            }
        }, 
        showDetailFish(id){
            this.$router.push({name: 'detailFish', params:{id}});
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
        padding:0px 90px;
        margin-top:24px;
    }
    .card-title{
        font-weight: bold;
        /* max-height:4em; */
        height: 50px;
        overflow: hidden;
        /* padding-bottom: 10px; */
        border-bottom: 2px solid #0095a8;
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
        border:2px solid #0095a8;
    }
    .card-btn-order:hover{
        box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.582);
        background-color: #0095a8;
        color:#fff;
        font-weight: bold;
    }
    
</style>
