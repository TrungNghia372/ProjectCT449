<template>
    <div class="modalForm"
        @click.self="onCloseFormRegister"
        >
        <div class="formRegister"
        
        >
            <div class="headerForm">
                <div class="logo">
                    <img src="../assets/logo2.png" alt="">
                </div>
                <div class="home">
                    <p @click="gotoHome"><i class="fa-solid fa-house"></i></p>
                </div>
            </div>

            <div class="formMain">
                <div class="titleForm">
                    <h2>
                        ĐĂNG KÝ
                    </h2>
                    <p>
                        Bạn có muốn đăng nhập?
                        <span class="Login" @click.self="gotoLogin">  Login </span>
                    </p>
                </div>

                <div class="contentForm">
                    <form class="formContentLogin"
                          @submit.prevent="register"
                        >
                        <div class="form__field">
                            <label for="username">Tài khoản mới</label>
                            <input type="text" name="username" placeholder="Nhập tài khoản mới" v-model="username">
                        </div>

                        <div class="form__field">
                            <label for="psw">Mật khẩu mới</label>
                            <input type="password" name="psw" placeholder="Nhập mật khẩu mới vào" v-model="psw">
                        </div>

                        <div class="form__field">
                            <label for="email">Email</label>
                            <input type="email" name="email" placeholder="nhập email vào" v-model="email">
                        </div>

                        <div class="form__field ">
                            <button class="submit_btn" type="submit">Register</button>
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
    props: [
        "handleRegister"
    ],
    data() {
        return {
            username: "",
            psw: "",
            email: "",
        }
    },
    methods: {
        onCloseFormRegister(){
            this.$emit("cancelFormRegister");
        },
        gotoHome(){
            this.$router.push({ name: 'home'});
        },
        gotoLogin(){
            this.$emit("gotoLogin");
        },

        register(){
            this.handleRegister(this.username,this.psw,this.email);
        }
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
        z-index: 3;
        color: #B0E3C7;
    }
    .formRegister{
        background-image: url('../assets/BG.png') ;
        height:460px;
        width: 350px;
        border-radius: 0 35px 0 35px;
        /* z-index: 9; */
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
        height:30px;
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
    .Login{
        color:crimson;
        cursor: pointer;
    }
    .Login:hover{
        color:#fff;
        font-weight: bold;
    }
</style>