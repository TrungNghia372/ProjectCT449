<template>
    <div class="wrapper">
      <Header />
      <div class="inner">
        <div class="left">
          <div class="title">
            <h3>THÔNG TIN SINH VIÊN</h3>
          </div>
          <div class="userInfo">
            <div class="groupUserInfo">
              <h5 class="titleUser">Mã số sinh viên</h5>
              <h5>B2005725</h5>
            </div>
  
            <div class="groupUserInfo">
              <h5 class="titleUser">Họ tên</h5>
              <h5>Quách Trung Nghĩa</h5>
            </div>
  
            <div class="groupUserInfo">
              <h5 class="titleUser">Email</h5>
              <h5>nghiab2005725@student.ctu.edu.vn</h5>
            </div>
  
            <div class="groupUserInfo">
              <h5 class="titleUser">Địa chỉ</h5>
              <h5>An Giang</h5>
            </div>
  
            <div class="groupUserInfo">
              <h5 class="titleUser">Số điện thoại</h5>
              <h5>0326117003</h5>
            </div>
  
            <div class="groupUserInfo">
              <h5 class="titleUser">Ngành - Khóa</h5>
              <h5>Công nghệ thông tin - K46</h5>
            </div>
       

          </div>
        </div>
  
        <div class="right">
  
          <div class="right1">
             
              <div class="formGroup" @click="goToDetailBookUser" >
              <div class="imgfeature">
                <img
                  src="../assets/logobook2.png"
                  alt="">
              </div>
              <h5>Xem thông tin sách</h5>
            </div>
            <div class="formGroup"
              @click="goToAddBook"
              >
              
              <div class="imgfeature">
                <img
                  src="../assets/star.png"
                  alt="">
              </div>
              <h5>Mượn sách</h5>
            </div>
            <div class="formGroup">
              <div class="imgfeature">
              <img
                  src="https://png.pngtree.com/png-clipart/20230811/original/pngtree-halftone-circle-dots-vector-square-logo-shape-vector-picture-image_10378990.png"
                  alt="">
              </div>
              <h5>Quy định, chính sách</h5>
            </div>
            <div class="formGroup"  @click="goToDetailAdmin">
             
              <div class="imgfeature">
                <img
                    src="../assets/logouser.png"
                    alt="">
                </div>
              <h5>Thông tin sinh viên</h5>
            </div>
          </div>
          <div class="right2">
  
            <div class="formGroup" @click="goToRoomBook">
              <div class="imgfeature">
                <img
                    src="../assets/logophong.png"
                    alt="">
                </div>
              <h5>Đặt phòng học</h5>
            </div>
  
            <div class="formGroup">
              <div class="imgfeature">
                <img
                    src="../assets/logoschedule.png"
                    alt="">
                </div>
              <h5>Xem thông tin phòng học</h5>
            </div>
  
            <div class="formGroup">
              <div class="imgfeature">
                <img
                    src="../assets/logobieudo.png"
                    alt="">
                </div>
              <h5>Sơ đồ thống kê mượn sách</h5>
            </div>
            <div class="formGroup">
              <div class="imgfeature">
                <img
                    src="../assets/logonews.png"
                    alt="">
                </div>
              <h5>Tin tức</h5>
  </div>
          </div>
        </div>
      </div>
  
  
      <Footer/>
    </div>
  </template>  
  <script>
  import Heading from '../components/header.vue';
  import Footer from '../components/footer.vue';
  
  export default {
    components: {
      Heading,
      Footer,
    },
    data() {
      return {
      }
    },
    methods: {
      goToDetailBookUser(){
        this.$router.push({name:'detailbookuser'});
      },
    }
  }
  </script>
  <style scoped>
  .inner {
    padding: 25px 20px;
    border-radius: 5px;
    width: 1000px;
    height: 500px;
    background-color: azure;
    display: flex;
    margin: 0 auto;
    justify-content: center;
  }
  
  .title{
    text-shadow: 0 2px 2px #ffffff, 0 4px 4px #fff, 0 6px 6px #56b4df;
    text-align: center;
  }
  .left {
    width: 50%;
    border: 1px solid #dedcdc;
    border-radius: 5px;
    margin-right: 1rem;
    padding: 16px 20px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
  
  .right {
    display: flex;
    justify-content: space-between;
    width: 50%;
    border-radius: 5px;
    border: 1px solid #dedcdc;
    padding: 0px 43px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
  
  .name {
    text-align: center;
    padding: 16px 16px;
    color: cornflowerblue;
  }
  
  .carousel-inner {}
  
  .carousel-item {
    width: 100%;
  
  }
  
  .carousel {
    width: 100%;
  }
  
  .btn {
    margin-top: 16px;
  }
  
  .wrapper {
    margin-top: 76px;
  }
  
  .carousel-inner {
    width: 100%;
  }
  
  .userInfo {
    padding: 1rem 1.4rem;
  }
  
  .groupUserInfo {
    display: flex;
    padding: .7rem;
    justify-content: space-between;
    border-bottom: 1px solid #dad9d9;
  }
  
  .titleUser {
    font-weight: bold;
  }
  .formGroup{
    width: 160px;
    height: 100px;
    padding: 1rem;
    cursor: pointer;
    text-align: center;
  }
  .imgfeature{
    width:  100%;
    height: 100%;
  }
  .imgfeature >img{
    width: 90px;
    height: 90px;
  }
  </style>