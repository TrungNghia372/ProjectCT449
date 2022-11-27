<template >
    <ul class="header">
        <li class="searchBox">
            <div class="searchOnHeader">
                <input  type="text" 
                        id="search" 
                        name="search" 
                        placeholder="Nhập thông tin tìm kiếm"
                        v-model="searchText"
                        >
                <div class="searchIcon">
                    <label for="search">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    </label>
                </div>
            </div>
<!-- result search -->
        <div class="Search">

            <div class="resultSearch"
                 
                 >
                 <div class="bodySearch"
                      v-for="(product,i) in filteredList"
                      :key="i"
                      @click="checkProduct(product._id)"    
                    >
                    <div class="contentSearch">
                        <div class="nameProduct">
                            <p>{{product.name}}</p>
                        </div>    
                        <div class="bodyProduct">
                            <div class="typeProduct">
                                {{product.habitat}}
                            </div>
                            <div class="quantity">
                                <p>còn lại {{product.quantity}}</p>
                            </div>
                        </div>  
                        
                    </div>
                    <div class="imgSearch">
                        <img :src="product.img" alt="">
                    </div>
                 </div>
                    
            </div>
            
        </div>    
           
           

<!-- ----------------------------------------- -->
        </li>
        <li class="login" 
            @click="onshowFormLogin"
            v-if="this.$store.state.user==null"

            >
            <p>
                <i class="fa-regular fa-user"></i>
                Đăng nhập
            </p>
        </li>
        <li class="register" 
            @click="onshowFormRegister"
            v-if="this.$store.state.user==null"

            >
            <p>
                <i class="fa-regular fa-address-card"></i>
                Đăng ký
            </p>
        </li>
        <li class="cart"
            @click="gotoCart"
            >
            <p>
                <div class="quantityItem">
                    <p>{{this.$store.state.countItemInCart}}</p>
                </div>
                <i class="fa-solid fa-cart-shopping"></i>
                Giỏ Hàng
            </p>
        </li>
        <li class="logout"
            v-if="this.$store.state.user!=null"
            @click="onlogout"
            >
            <p>
                <i class="fa-solid fa-right-from-bracket"></i>
                Đăng xuất
            </p>
        </li>
        <li class="infoUser"
            v-if="this.$store.state.user!=null"
            >
                <div class="imgUser">
                    <img src="https://cdn-icons-png.flaticon.com/512/206/206853.png" alt="">
                    <div class="dotState"></div>
                </div>
                <div class="infoUser">
                    {{this.$store.state.user.username}} 
                </div>
         
        </li>
        <li class="iconContact">
            <i class="fa-brands fa-square-facebook"></i>
            <i class="fa-brands fa-youtube"></i>
        </li>
    </ul>
    <Login  v-if="isshowFormLogin"
            @cancelFormLogin="onshowFormLogin"
            @gotoRegister="gotoFormRegister"
            
            />
    <Register v-if="isshowFormRegister"
            @cancelFormRegister="onshowFormRegister"
            @gotoLogin="gotoFormLogin"
            :handleRegister="handleRegister"
            
            />
    
</template>
<script>
   import Login from './formLogin.vue';
   import Register from './formRegister.vue';

   import axios from 'axios';

   export default {

    components: {
        Login,
        Register,
    },
    data() {
        return {
            isshowFormLogin: false,
            isshowFormRegister: false,
            
            searchText: "",
            listProduct: [],
            listfish : [],
            listfishPedestal : [],
            listaquaticPlant : [],
      
            isshowLogin: true,
            isshowRegister: true,
            isshowLogout: false,

            infousername: "ok",
            // countProduct: 0,
        }
    },
    created(){
        this.getListProduct()
        this.countItem()
    },
    
    computed:{
        filteredList() {
            if (this.searchText=="") return ""
            return this.listProduct.filter(product => {
                return product.name.toLowerCase().includes(this.searchText.toLowerCase())
            })
        },
      

    },
    methods: {
        async getListProduct(){
            try {
                const fish = await axios.get('http://localhost:4000/api/fish/product/list');
                const fishPedestal = await axios.get('http://localhost:4000/api/fishpedestal/home/list');
                const aquaticPlant = await axios.get('http://localhost:4000/api/aquaticPlant/home/list');
                this.listfish = fish.data;
                this.listfishPedestal = fishPedestal.data;
                this.listaquaticPlant = aquaticPlant.data;
                this.listProduct = this.listfish.concat(this.listfishPedestal,this.listaquaticPlant);
            }catch(err){
                console.log(err)
            }
        },
        // -------------------------------------------------
        async handleRegister(username,psw,email){
            const result = await axios.post('http://localhost:4000/api/auth/register',{
                   username: username,
                   psw: psw,
                   email: email,
             });
             if (result.data == true) {
                this.isshowFormLogin = true;
                this.isshowFormRegister = false;
             } else {
                alert("Tài khoản đã được đăng ký");
             }  
        },
        // getInfoUsername(username) {
        //     this.infousername = username;
        // },

        // -------------------------------------------
        onshowFormLogin() {
            this.isshowFormLogin = !this.isshowFormLogin;
        },
        onshowFormRegister() {
            this.isshowFormRegister = !this.isshowFormRegister;
        },
        gotoFormRegister(){
            this.isshowFormLogin = false;
            this.isshowFormRegister = true;
        },
        gotoFormLogin(){
            this.isshowFormLogin = true;
            this.isshowFormRegister = false;
        },
        gotoCart(){
            if (this.$store.state.user){
                this.$router.push({name:'order'});
            }else {
                alert('Vui lòng đăng nhập để xem giỏ hàng');
                this.isshowFormLogin = true;
            }
     
        },
        checkProduct(id){
            this.listfish.forEach(product => {
                if (product._id == id) 
                    this.$router.push({name : 'detailFish', params:{id} });
            });

            this.listfishPedestal.forEach(product => {
                if (product._id == id) 
                    this.$router.push({name:'detailFishpedestal',params:{id}});
            });

            this.listaquaticPlant.forEach(product => {
                if (product._id == id) 
                    this.$router.push({name:'detailAquaticPlant',params:{id}});
            });
        },
        showLogout(){
            this.isshowLogin= false;
            this.isshowRegister= false;
            this.isshowLogout= true;
        },
        onlogout(){
            localStorage.removeItem("token");
            location.reload('/');
            // this.$router.push({name:'home'});
        },


        async countItem(){
            try {
                const result = await axios.get('http://localhost:4000/api/cart/count/product',{
                    params: {
                        idCart : this.$store.state.idCart
                    }
                })
                // this.countProduct = result.data;

                this.$store.commit("setCountItemInCart",result.data);

            } catch (error) {
                console.log(error)
            }

        }
    },
}
</script>
<style scoped>
    h5,p {
        margin: 0px;
    }
    .header {
        color : #fff;
        height: 38px;
        width: 100%;
        background-color:#0095a8 ;
        display: flex;
        align-items: center;
        list-style: none;
        justify-content: space-evenly;
        text-align: center;
        font-size: 11px;
        position:fixed;
        top:0;
        z-index:10;
    }
    .searchOnHeader{
        display:flex;
        align-items: center;
        height: 100%;

    }
    .searchBox{
        /* display: flex; */
        /* position:relative; */
        height: 100%;
        align-items: center;
    }
    .searchBox input{
        width: 300px;
        height:25px;
        
        text-align: center;
    }
    .searchIcon i{
        padding :0 7px;
        /* color:darkcyan; */
        font-weight: bold;
    }
    /* .logout{
        display:none;
    } */

  
    .dotState{
        background-color: #15a85f;
        height:12px;
        width: 12px;
        border-radius:12px;
        box-shadow: 0px 0px 10px 4px rgba(255, 255, 255, 0.812);
    }

    .cart,
    .login,
    .register,
    .infoUser,
    .logout {
        align-items: center;

        display:flex;
        font-size: 13px;
        padding:10px 10px;
        height:100%;
        /* overflow: ; */
        /* display: flex;
        align-items: center; */
    }
    .cart:hover,
    .login:hover,
    .register:hover,
    .infoUser:hover,
    .logout:hover{
        /* color:chocolate; */
        border-radius: 14px  14px;
        background-color: #345da7;
        color:#e5efc1;
        /* font-size:15px; */
        font-weight: bold;
    }
    .cart>p{
        position: relative;
    }
    .quantityItem{
        z-index: 1;
        position: absolute;
        height: 20px;
        width: 20px;
        top: -9px;
        left: -15px;
        border-radius: 20px;
        display: flex;
        color: #fff;
        background-color: #ffc107;
        align-items: center;
        justify-content: center;
    }
    .iconContact{
        font-size: 25px;
    }
    .iconContact > i{
        padding:0 5px;
    }


    .Search{
        max-height: 500px;
        overflow-y: scroll;

    }
    .resultSearch{
      height:100%;
    }
    .bodySearch{
        /* top: 33px; */
        background-color: #fff;
        /* position: absolute; */
        /* left: 1px; */
        display:flex;
        color:black;
        width:92%;
        border:2px solid #345da7;
        border-radius: 10px;
        /* height:60px; */
        justify-content: space-between;
        width:500px;

    }
    .bodySearch:hover{
        box-shadow: 2px 2px 5px 0px rgba(255, 255, 255, 0.812);
        background-color: rgba(255, 255, 255, 0.747);

    }
    .bodyProduct{
        display:flex;
        margin-bottom: 10px;
        /* padding-bottom: 10px; */
    }
    .contentSearch{
        padding:2px 10px 10px 10px;
        text-align: start;
    }
    .nameProduct{
        /* height:100%; */
        font-size:18px;
    }
    
    .quantity{

    }
    /* .bodySearch{
        height:100px;
    } */
    .imgSearch{
        padding:3px 10px 3px 0;

        /* height:100%;
        width:100%; */
    }
    .imgSearch>img{
        height:100%;
        width: 70px;
        /* width: 100%; */
    }
    .imgUser{
        position:relative;
    }
    .dotState{
        position:absolute;
        bottom:-3px;
    }
    .imgUser>img{
        height:30px;
    }
</style>
