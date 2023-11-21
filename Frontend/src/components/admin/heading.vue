<template>

    <div class="navbarr" data-v-b2f07944="" data-v-2dc54a20=""> 
            <div class="logo" data-v-b2f07944="" @click="this.$router.push({ name: 'admin'});">  <img src="/src/assets/sachh.png" alt="" data-v-b2f07944="">
            

        <h2 class="titleNav" @click="this.$router.push({ name: 'admin'});">Future Book Library</h2>
        </div>
        <div class="infoLeft">

            <li class="infoUser" data-v-7131493d="">
                <div class="imgUser" data-v-7131493d="" ><img src="https://cdn-icons-png.flaticon.com/128/4727/4727424.png" alt=""
                        data-v-7131493d="">
                    <!-- <div class="dotState" data-v-7131493d="">Library Future</div> -->
                </div>
                <div class="infoUsers" data-v-7131493d="" style="font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif">TrungHieu</div>
            </li>
            <li class="logout" data-v-7131493d="" @click="onlogout">
              <div class="imgout"><p data-v-7131493d="" style="font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif"><img src="https://cdn-icons-png.flaticon.com/128/10152/10152161.png" alt="" width="30px" > Thoát</p></div>  
            </li>
        </div>
    </div>
</template>
<script>

export default {
    methods: {
        gotoHome() {
            this.$router.push({ name: 'home' });
        },
        onlogout() {
            localStorage.removeItem("token");
            this.gotoHome()
        }
    }
}      
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Homemade+Apple&display=swap');
.navbarr {
    background-image: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);
}
.titleNav{
    font-family: 'Homemade Apple', cursive;
}
.header {
    display: flex;
    justify-content: flex-end;
}

.navbarr {
    margin-top: -39px;
    display: flex;
    justify-content: space-around;
    padding-bottom: 10px;
}
.infoUser{
    background: white;
    border: solid 2px rgb(47, 83, 224);
    border-radius: 12px;
    color: #000;
    height: 70%;
    margin-top: 10px;
    margin-right: 2px;
}

.infoUser:hover{
    background: #68dfe5;
}

.logout{
    background: white;
    border: solid 2px rgb(47, 83, 224);
    border-radius: 12px;
    color: #000;
    height: 70%;
    margin-top: 10px;
}

.logout:hover{
    background: #68dfe5;
}

.infoLeft{
    display: flex;
    justify-content: flex-end;
    margin-right: 90px; 
}

.logo{
    display: flex;
    align-items: center;
}

h2{
    margin-block: auto;
    width: 190%;
    margin-top: 20px;
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    text-shadow: 0 1px 0px #000;
}

</style>