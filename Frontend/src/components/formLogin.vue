<template>
    <div class="modalForm" @click.self="onCloseFormRegister">
        <div class="formRegister">
            <div class="headerForm">
                <div class="logo">
                    <img src="../assets/Library.png" alt="">
                </div>
                
            </div>
            <div class="formMain">
                <div class="titleForm">
                    <h2>
                        ĐĂNG NHẬP
                    </h2>
                </div>
                <div class="contentForm">
                    <form class="formContentLogin" @submit.prevent="login">
                        <div class="form__field">
                            <label for="username">Tài khoản</label>
                            <input type="text" name="username" placeholder="Nhập tài khoản..." v-model="username">
                        </div>

                        <div class="form__field">
                            <label for="psw">Mật khẩu</label>
                            <input type="password" name="psw" placeholder="Nhập mật khẩu..." v-model="psw">
                        </div>

                        <div class="form__field " style="text-align: center;">
                            <button class="submit_btn" type="submit">Đăng nhập</button>
                        </div>
                    </form>

                    <div class="formMain">
                        <p>
                            Bạn chưa có tài khoản?
                            <span class="Login" @click.self="gotoRegister"> Đăng ký </span>
                        </p>
                    </div>

                </div>

                <div class="iconForm">

                    <a class="btn text-white btn-floating m-1" style="background-color: #3b5998;" href="#!" role="button">
                        <i class="fa-brands fa-facebook"></i>
                    </a>

                    <a class="btn text-white btn-floating m-1" style="background-color: #dd6839;" href="#!" role="button">
                        <i class="fa-brands fa-square-instagram"></i>
                    </a>

                    <a class="btn text-white btn-floating m-1" style="background-color: #39a6dd;" href="#!" role="button">
                        <i class="fa-brands fa-twitter"></i>
                    </a>

                </div>
            </div>

        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    // props:[
    //     "getInfoUsername"
    // ],
    data() {
        return {
            username: "",
            psw: "",
        }
    },

    methods: {
        onCloseFormLogin() {
            this.$emit("cancelFormLogin");
        },
        gotoHome() {
            this.$router.push({ name: 'home' });
        },
        gotoRegister() {
            this.$emit("gotoRegister");
        },
        // gotoAdmin() {
        //     this.$router.push({ name: 'admin' });
        // },


        async login() {

            var result = await axios.post('http://localhost:4000/api/auth/login', {
                username: this.username,
                psw: this.psw,
            });

            if (result.data != false) {
                localStorage.setItem("token",result.data);
                this.onCloseFormLogin();
                // if ()
                // console.log("oookok",result.data)
                // this.gotoAdmin();
                // let user = this.$store.state.user;
                // if (user.isAdmin)
                    // this.$router.push({ name: 'admin' });

                location.reload();
                // console.log(this.username, this.password);
            }
            else {
                alert("Tài khoản hoặc mật khẩu không đúng!");
            }
        },

    },
}

</script>

<style scoped>
.modalForm {
    background-color: rgba(151, 104, 104, 0.475);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 3;
    color: #B0E3C7;
}

p {
    margin: 0px;
    padding: 0px;
}


.formRegister {
    background-color: rgb(92, 180, 204);
    height: 460px;
    width: 350px;
    border-radius: 10px;

    box-shadow: 7px 7px 5px 0px rgba(255, 255, 255, 0.194);
}

.headerForm {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-top: 10px;
}

.headerForm .home {
    font-weight: bold;
}

.logo>img {
    height: 50px;
    width: 100%;

}

.home {
    margin-right: 20px;
    cursor: pointer;
    height: 30px;
}

.formMain {
    padding: 10px;

}

.titleForm>h2 {
    font-weight: bold;
    text-align: center;
}

.titleForm>p>a {
    text-decoration: none;
}

.contentForm {
    border-bottom: 1px solid #B0E3C7;
}

.form__field {
    padding: 5px 0;
}

.form__field>input {
    /*     border-radius:10px;*/

    border: 2px solid #B0E3C7;
    width: 100%;
    padding: 2px 20px;
}

.submit_btn {
    border: 2px solid #B0E3C7;
    /* border-radius:10px;*/

    padding: 5px 20px;
}

.form__field>input:hover {
    box-shadow: 2px 2px 5px 0px rgba(255, 255, 255, 0.582);
    color: darkcyan;
    font-weight: bold;
    margin-left: 10px;
}

.submit_btn:hover {
    box-shadow: 2px 2px 5px 0px rgba(255, 255, 255, 0.582);
    color: darkcyan;
    font-weight: bold;
    margin-left: 10px;
}

.iconForm {
    display: flex;
    justify-content: space-evenly;
    margin-top: 15px;
}

.Login {
    color: crimson;
    cursor: pointer;
}

.Login:hover {
    color: #fff;
    font-weight: bold;
}
</style>