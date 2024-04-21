<template>
  <div class="add">
    <Heading />
    <div class="container">
      <div class="titlee">
        <h1 style="font-family:Verdana, Geneva, Tahoma, sans-serif">CẬP NHẬT THÔNG TIN SÁCH</h1>
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
          <label for="description">Mô tả</label>
          <textarea name="description" id="description" class="form-control" v-model="description"></textarea>
        </div>

        <div class="form-group">
          <label for="image">Hình ảnh</label>
          <input type="text" name="image" id="image" class="form-control" v-model="img">
        </div>

        <div class="buttonbook">
          <button type="button" class="btn btn-info" style="background-color:coral;"
            @click="this.$router.push({ name: 'detailbookadmin' });">Thoát</button>
          <button type="button" class="btn btn-info" @click="updateBook()">Cập nhật</button>

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
      bookItem: "",
      name: "",
      author: "" ,
      type: "" ,
      manufactureOfYear: "" ,
      quantity: 0 ,
      description: "" ,
      img: "" ,
    }
  },

  created(){
    this.getABook()
  },
  watch: {
    // name : this.bookItem.name,
    
  },
 
  methods: {
    async updateBook() {
      try {
        const result = await axios.put(`http://localhost:4000/api/book/${this.bookItem._id}`, {
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
          title: "CẬP NHẬT SÁCH",
          text: "Sách đã được cập nhật thành công!",
        });

      } catch (error) {
        console.log(error);
      }
    },

    async getABook() {
      try {
        const result = await axios.get(`http://localhost:4000/api/book/${this.$route.params.id}`)
        this.bookItem = result.data;
        this.name = result.data.name;
        this.author = result.data.author;
        this.type = result.data.type;
        this.manufactureOfYear = result.data.manufactureOfYear;
        this.quantity = result.data.quantity;
        this.description = result.data.description;
        this.img = result.data.img;
        
        return result;
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
  text-shadow: 0 2px 2px #ffffff, 0 4px 4px #fff, 0 6px 6px rgba(79, 218, 111, 0.37);;
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
  background-color: rgba(79, 218, 111, 0.603);
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