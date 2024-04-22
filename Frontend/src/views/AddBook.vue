<template>
  <div class="add">
    <Heading />
    <div class="container">
      <div class="titlee">
        <h1 style="font-family:Verdana, Geneva, Tahoma, sans-serif">THÊM SÁCH</h1>
      </div>

      <form action="" method="post">
        <div class="form-group">
          <label for="title">Tên sách</label>
          <input type="text" name="title" id="title" class="form-control" v-model="name">
        </div>
        <div class="form-group">
          <label for="author">Tác giả</label>
          <input type="text" name="author" id="author" class="form-control" v-model="author">
        </div>
        <div class="form-group">
          <label for="publisher">Loại sách</label>
          <input type="text" name="publisher" id="publisher" class="form-control" v-model="type">
        </div>
        <div class="form-group">
          <label for="year">Năm xuất bản</label>
          <input type="number" name="year" id="year" class="form-control" v-model="manufactureOfYear">
        </div>
        <div class="form-group">
          <label for="
          quantity">Số lượng</label>
          <input type="number" name="quantity" id="quantity" class="form-control" v-model="quantity">
        </div>
        <div class="form-group">
          <label for="
          quantity">Giá</label>
          <input type="number" name="price" id="price" class="form-control" v-model="price">
        </div>
        <div class="form-group">
          <label for="description">Mô tả</label>
          <textarea name="description" id="description" class="form-control" v-model="description"></textarea>
        </div>
        
        <div class="form-group">
          <label for="image">Hình ảnh</label>
          <input type="text" name="image" id="image" class="form-control" v-model="img">
        </div>

        <div class="buttonbook">
          <button type="button" class="btn btn-info" style="background-color:coral;"
            @click="this.$router.push({ name: 'admin' });">Thoát</button>
          <button type="button" class="btn btn-info" @click="addBook()">Thêm</button>

        </div>

      </form>
    </div>
  </div>
  <div>
    <Footer />
  </div>
</template>

<script>
import Heading from '../components/admin/heading.vue';
import Footer from '../components/admin/footer.vue';
import axios from 'axios';
import Swal from 'sweetalert2';
export default {
  components: {
    Heading,
    Footer,
  },
  data() {
    return {
      name: "",
      author: "",
      type: "",
      popular: "",
      manufactureOfYear: "",
      quantity: 0,
      price:0,
      description: "",
      img: "",
    }
  },
  methods: {
    async addBook() {
      try {
        const result = await axios.post('http://localhost:4000/api/book/addbook', {
          name: this.name,
          author: this.author,
          popularType: this.popularType,
          type: this.type,
          manufactureOfYear: this.manufactureOfYear,
          quantity: this.quantity,
          price: this.price,
          description: this.description,
          img: this.img,
        });
        await Swal.fire({
          icon: "success",
          title: "THÊM SÁCH",
          text: "Sách đã được thêm thành công!",
        });

      } catch (error) {
        console.log(error);
      }
    }
  }
}
</script>

<style scoped>
.titlee {
  margin-top: 100px;
  text-shadow: 0 2px 2px #ffffff, 0 4px 4px #fff, 0 6px 6px #56b4df;
  padding-top: 25px;
  padding-bottom: 15px;
}

body {
  font-family: sans-serif;
}

.container {
  width: 615px;
  margin: 0 auto;
  box-shadow: 0px 0px 10px 3px #d8d4d4;
}

h1 {
  text-align: center;
  padding-top: 20px;
}

form {
  padding: 20px;
  border: 1px solid #ccc;
}

.form-group {
  font-size: 1.1rem;
  margin-bottom: 10px;
}

label {
  font-weight: bold;
}

input,
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
}

textarea {
  height: 200px;
}

button {
  margin-top: 20px;
  background-color: rgba(79, 218, 111, 0.7);
  color: #000000;
  padding: 10px;
  border: none;
  cursor: pointer;
  margin-right: 20px;
  margin-left: 20px;
}

.buttonbook {
  text-align: center;
  padding: 8px 16px;
}

.btn {
  width: 200px;
}
</style>