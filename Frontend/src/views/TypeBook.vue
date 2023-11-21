<template>
  <div class="addtype">
    <Heading />
    <div class="container">
      <div class="titlee">
        <h1 style="font-family:Verdana, Geneva, Tahoma, sans-serif">THÊM LOẠI SÁCH</h1>
      </div>

      <form action="" method="post">
        <div class="form-group">
          <label for="publisher">Mã loại sách</label>
          <input type="text" name="publisher" id="publisher" class="form-control" v-model="type">
        </div>
        <div class="form-group">
          <label for="title">Tên loại sách</label>
          <input type="text" name="title" id="title" class="form-control" v-model="name">
        </div>
        <div class="form-group">
          <label for="description">Mô tả loại sách</label>
          <textarea name="description" id="description" class="form-control" v-model="description"></textarea>
        </div>
        <div class="form-group">
          <label for="author">Đối tượng sử dụng</label>
          <input type="text" name="author" id="author" class="form-control" v-model="author">
        </div>

        <div class="buttonbook">
          <button type="button" class="btn btn-info" style="background-color:coral;"
            @click="this.$router.push({ name: 'admin' });">Thoát</button>
          <button type="button" class="btn btn-info" @click="typeBook()">Thêm</button>

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
      type: "",
      name: "",
      description: "",
      author: "",
    }
  },
  methods: {
    async typeBook() {
      try {
        const result = await axios.post('http://localhost:4000/api/typebook/typebook', {
          type: this.type,
          name: this.name,
          description: this.description,
          author: this.author,
          
          
        });
        await Swal.fire({
          icon: "success",
          title: "THÊM MÃ LOẠI SÁCH",
          text: "Mã loại sách đã được thêm thành công!",
        });

        // console.log("Data:---",this.name,this.author,this.type,this.manufactureOfYear,this.quantity,this.description, this.img);
      } catch (error) {
        console.log(error);
      }
    }
  }
}
</script>

<style scoped>
.titlee {
  margin-top: 55px;
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
  background-color: #3a80f1;
  color: #fff;
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