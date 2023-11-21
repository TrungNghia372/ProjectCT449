<template>
  <div class="wrapper">
    <Heading />
    <div class="inner">
      <div class="left">
        <div class="title">
          <h3>THÔNG TIN CÁ NHÂN</h3>
        </div>
        <div class="userInfo">
          <div class="groupUserInfo">
            <h5 class="titleUser">Mã số</h5>
            <h5>B2005672</h5>
          </div>

          <div class="groupUserInfo">
            <h5 class="titleUser">Họ tên</h5>
            <h5>Nguyễn Trung Hiếu</h5>
          </div>

          <div class="groupUserInfo">
            <h5 class="titleUser">Email</h5>
            <h5>hieub2005672@student.ctu.edu.vn</h5>
          </div>

          <div class="groupUserInfo">
            <h5 class="titleUser">Địa chỉ</h5>
            <h5>Vĩnh Long</h5>
          </div>


          <div class="groupUserInfo">
            <h5 class="titleUser">Số điện thoại</h5>
            <h5>0353514931</h5>
          </div>
          <div class="groupUserInfo">
            <h5 class="titleUser">Đơn vị công tác</h5>
            <h5>Future Book Library</h5>
          </div>

        </div>
      </div>

      <div class="right">

        <div class="right1">

          <div class="formGroup" @click="goToDetailBookAdmin">
            <div class="imgfeature">
              <img src="../assets/logobook2.png" alt="">
            </div>
            <h5>Xem thông tin sách</h5>
          </div>
          <div class="formGroup" @click="goToAddBook">

            <div class="imgfeature">
              <img src="../assets/logoadd.png" alt="">
            </div>
            <h5>Thêm sách</h5>
          </div>
          <div class="formGroup" @click="goToRule">
            <div class="imgfeature">
              <img
                src="https://png.pngtree.com/png-clipart/20230811/original/pngtree-halftone-circle-dots-vector-square-logo-shape-vector-picture-image_10378990.png"
                alt="">
            </div>
            <h5>Quy định, chính sách</h5>
          </div>
          <div class="formGroup" @click="goToDetailAdmin">

            <div class="imgfeature">
              <img src="../assets/logouser.png" alt="">
            </div>
            <h5>Thông tin quản trị</h5>
          </div>
        </div>
        <div class="right2">
          <div class="formGroup" @click="goToDetailtypeBook">
            <div class="imgfeature">
              <img src="../assets/logoschedule.png" alt="">
            </div>
            <h5>Xem thông tin loại sách</h5>
          </div>
          <div class="formGroup" @click="goToTypeBook">
            <div class="imgfeature">
              <img src="../assets/type.png" alt="">
            </div>
            <h5>Thêm loại sách</h5>
          </div>



          <div class="formGroup">
            <div class="imgfeature">
              <img src="../assets/logobieudo.png" alt="">
            </div>
            <h5>Sơ đồ thống kê mượn sách</h5>
          </div>
          <div class="formGroup" @click="goToNews">
            <div class="imgfeature">
              <img src="../assets/logonews.png" alt="">
            </div>
            <h5>Tin tức</h5>
          </div>
        </div>
      </div>
    </div>


    <Footer />
  </div>
</template>  
<script>
import Heading from '../components/admin/heading.vue';
import Footer from '../components/admin/footer.vue';

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
    goToAddBook() {
      this.$router.push({ name: 'addbook' });

    },
    goToDetailBookAdmin() {
      this.$router.push({ name: 'detailbookadmin' });

    },
    goToDetailAdmin() {
      this.$router.push({ name: 'detailadmin' });
    },

    goToRule() {
      this.$router.push({ name: 'rule' });
    },
    goToNews() {
      this.$router.push({ name: 'news' });
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

.title {
  text-shadow: 0 2px 2px #ffffff, 0 4px 4px #fff, 0 6px 6px #56b4df;
  text-align: center;
}


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

.formGroup {
  width: 160px;
  height: 100px;
  padding: 1rem;
  cursor: pointer;
  text-align: center;
}

.imgfeature {
  width: 100%;
  height: 100%;
}

.imgfeature>img {
  width: 90px;
  height: 90px;
}
</style>