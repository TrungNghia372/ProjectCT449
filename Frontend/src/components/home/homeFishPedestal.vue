<template>
    <div class="cardMain">
        <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col"
                v-for="(item, i) in listFishPedestal"
                :key="i"
            >
                <div class="card h-100"
                    @click="showDetail(item._id)"
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
                    <button class="card-btn-order">Thêm vào giỏ hàng</button>
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
            listFishPedestal: []
        }
    },
    created(){
        this.getListFishPedestal()
    },
    methods: {
        async getListFishPedestal(){
            try {
                const result = await axios.get('http://localhost:4000/api/fishpedestal/home/list')
                this.listFishPedestal = result.data
            }catch(err){
                console.log(err)
            }
        },
        showDetail(id){
            this.$router.push({name:'detailFishpedestal',params:{id}});
        }
    }
   }
</script>
<style scoped>
    p {
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
