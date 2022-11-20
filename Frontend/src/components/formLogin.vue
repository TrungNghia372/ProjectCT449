<template>
    <div class="modalForm" 
    @click.self="onCloseFormLogin"
        >

        <div class="formLogin"   >
            <div class="headerForm">
                <div class="logo">
                    <img src="../assets/logo2.png" alt="">
                </div>
                <div class="home">
                     <p
                     @click="gotoHome">Home</p>
                </div>
            </div>

            <div class="formMain">
                <div class="titleForm">
                    <h2>
                        ĐĂNG NHẬP
                    </h2>
                    <p>
                        Bạn có muốn tạo tài khoản? <span class="Register" @click.self="gotoRegister">  Register </span>
                       
                       
                    </p>
                </div>

                <div class="contentForm">
                    <form class="formContentLogin">
                        <div class="form__field">
                            <label for="username">Tài khoản</label>
                            <input type="text" name="username" placeholder="Nhập tài khoản mới">
                        </div>

                        <div class="form__field">
                            <label for="psw">Mật khẩu</label>
                            <input type="password" name="psw" placeholder="Nhập mật khẩu mới vào">
                        </div>

                        <div class="form__field ">
                            <button class="submit_btn" type="submit">Login</button>
                        </div>
                    </form>
                    
                </div>

                <div class="iconForm">
                    <!-- facebook -->
                    <a  class="btn text-white btn-floating m-1"
                        style="background-color: #3b5998;"
                        href="#!"
                        role="button">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                    <!-- Google -->
                    <a  class="btn text-white btn-floating m-1"
                        style="background-color: #dd4b39;"
                        href="#!"
                        role="button">
                        <i class="fab fa-google"></i>
                    </a>
                    <!-- Github -->
                    <a  class="btn text-white btn-floating m-1"
                        style="background-color: #333333;"
                        href="#!"
                        role="button">
                        <i class="fab fa-github"></i>
                    </a>
                </div>
            </div> 

        </div>
    </div>
</template>
<script>
   export default {
    methods: {
        onCloseFormLogin(){
            this.$emit("cancelFormLogin");
        },
        gotoHome(){
            this.$router.push({ name: 'home'});
        },
        gotoRegister(){
             this.$emit("gotoRegister");
        },  
    },
   }
</script>

<style scoped>
    p{
        margin:0px;
        padding:0px;
    }
    .modalForm{
        background-color: rgba(0, 0, 0, 0.475);
        position: fixed;
        top:0;
        left:0;
        right:0;
        bottom: 0;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 5;
        color: #B0E3C7;
    }
    .formLogin{
        background-image: url('../assets/BG.png') ;
        height:400px;
        width: 350px;
        border-radius: 0 35px 0 35px;
        /* z-index: 10; */
        box-shadow: 7px 7px 5px 0px rgba(255, 255, 255, 0.194);
    }
    .headerForm{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-top:10px;
    }
    .headerForm .home{
        font-weight: bold;
    }
    .logo > img{
        /* height:150px; */
        height:50px;
        width: 100%;
    }
    .home{
        margin-right:20px;
        cursor:pointer;
    }
    .formMain{
        padding: 30px;
    }
    .titleForm > h2{
        font-weight: bold;
    }
    .titleForm > p > a{
        text-decoration: none;
    }
    .contentForm{
        border-bottom:1px solid #B0E3C7;
    }
    .form__field{
        padding:5px 0;
    }
    .form__field > input {
        border-radius:0 10px;
        border:2px solid #B0E3C7;
        width:100%;
        padding: 2px 20px;
    }
    .submit_btn{
        /* width: 70px; */
        border:2px solid #B0E3C7;
        border-radius:0 10px;
        padding:5px 20px;
        /* padding:0 20px !important; */
    }
    .form__field > input:hover{
        box-shadow: 2px 2px 5px 0px rgba(255, 255, 255, 0.582);
        color:darkcyan;
        font-weight: bold;
        margin-left:10px;
    }
    
    .submit_btn:hover{
        box-shadow: 2px 2px 5px 0px rgba(255, 255, 255, 0.582);
        color:darkcyan;
        font-weight: bold;
        margin-left:10px;
    }
    .iconForm{
        display:flex;
        justify-content: space-evenly;
    }
    .Register{
        color:crimson;
        cursor: pointer;
    }
    .Register:hover{
        color:#fff;
        font-weight: bold;
    }
</style>